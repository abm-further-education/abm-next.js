import { NextRequest } from 'next/server';
import { getServerStripe } from '@/lib/stripe';

import nodemailer from 'nodemailer';
import { supabaseServer } from '@/lib/supabase-server';
import Stripe from 'stripe';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function requireEnv(keys: string[]) {
  const missing = keys.filter((k) => !process.env[k]);
  if (missing.length) throw new Error('Missing env: ' + missing.join(', '));
}

export async function POST(req: NextRequest) {
  try {
    // 1) 최소 필수만 먼저 검사
    requireEnv(['STRIPE_WEBHOOK_SECRET', 'STRIPE_SECRET_KEY']);

    // 2) 서명 검증
    const sig = req.headers.get('stripe-signature');
    if (!sig) return new Response('No signature', { status: 400 });
    const body = await req.text();
    const stripe = getServerStripe();

    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(
        body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET!
      );
    } catch {
      return new Response('Invalid signature', { status: 400 });
    }

    // 3) 이벤트 처리
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      const metadata = (session.metadata ?? {}) as Record<string, string>;

      // 조건부로 필요한 env만 검사
      try {
        requireEnv(['SUPABASE_SERVICE_ROLE_KEY']); // DB 저장할 때만
        await saveBookingToDatabase(metadata, {
          id: session.id!,
          amount_total: session.amount_total,
          payment_status: session.payment_status!,
        });
      } catch (e) {
        console.error('[DB] save failed', e);
        // 계속 200을 반환해야 Stripe 재시도를 막을 수 있음
      }

      try {
        requireEnv([
          'SMTP_HOST',
          'SMTP_PORT',
          'SMTP_USER',
          'SMTP_PASS',
          'FROM_EMAIL',
        ]); // 메일 보낼 때만
        await sendBookingEmails(metadata);
      } catch (e) {
        console.error('[MAIL] send failed', e);
      }
    }

    // 4) 항상 2xx 응답 (검증 실패 제외)
    return new Response('ok', { status: 200 });
  } catch (e) {
    console.error('Webhook handler fatal', e);
    // 검증 이전의 진짜 설정 오류만 500
    return new Response('Server configuration error', { status: 500 });
  }
}

async function saveBookingToDatabase(
  metadata: Record<string, string>,
  session: {
    id: string;
    amount_total: number | null;
    payment_status: string;
  }
) {
  try {
    if (!supabaseServer) {
      throw new Error('Supabase server client not available');
    }

    const {
      firstName,
      lastName,
      email,
      phone,
      preferredDate,
      otherInquiries,
      howDidYouHear,
      referrerName,
      promotionCode,
      courseName,
      selectedDate,
      selectedType,
      courseLocation,
      courseSlug,
      appliedPromo,
      surcharge,
    } = metadata;

    // 결제 정보
    const paymentAmount = session.amount_total ? session.amount_total / 100 : 0; // Stripe는 센트 단위
    const paymentStatus = session.payment_status;
    const stripeSessionId = session.id;

    const { data, error } = await supabaseServer.from('shortCourse').insert({
      first_name: firstName || '',
      last_name: lastName || '',
      email: email || '',
      phone: phone || '',
      preferred_date: preferredDate || '',
      other_inquiries: otherInquiries || '',
      how_did_you_hear: howDidYouHear || '',
      referrer_name: referrerName || '',
      promotion_code: promotionCode || '',
      course_name: courseName || '',
      course_slug: courseSlug || '',
      selected_date: selectedDate || '',
      selected_type: selectedType || '',
      course_location: courseLocation || '',
      applied_promo: appliedPromo || '',
      surcharge: surcharge ? parseFloat(surcharge) : 0,
      payment_amount: paymentAmount,
      payment_status: paymentStatus,
      stripe_session_id: stripeSessionId,
      created_at: new Date().toISOString(),
    });

    if (error) {
      console.error('Database insert error:', error);
      throw error;
    }

    console.log('Booking saved to database:', data);
    return data;
  } catch (error) {
    console.error('Error saving booking to database:', error);
    throw error;
  }
}

async function sendBookingEmails(metadata: Record<string, string>) {
  try {
    console.log('📧 sendBookingEmails function started');
    console.log('📧 Metadata received in email function:', metadata);

    const {
      firstName,
      lastName,
      email,
      phone,
      preferredDate,
      otherInquiries,
      howDidYouHear,
      referrerName,
      promotionCode,
      courseName,
      selectedDate,
      selectedType,
      courseLocation,
    } = metadata;

    console.log('📧 Email validation:', {
      firstName: firstName ? 'Valid' : 'Missing',
      lastName: lastName ? 'Valid' : 'Missing',
      email: email ? 'Valid' : 'Missing',
      courseName: courseName ? 'Valid' : 'Missing',
    });

    // SMTP 환경변수 체크
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      throw new Error('SMTP configuration is incomplete');
    }

    // SMTP 환경변수
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    console.log('📧 SMTP transporter created');

    // 관리자에게 보내는 메일 (예약자 정보)
    console.log('📧 Sending admin email to: info@abm.edu.au');
    console.log(
      '📧 Admin email subject:',
      `[Short Course Booking] ${courseName} - ${firstName} ${lastName}`
    );

    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: 'info@abm.edu.au',
      subject: `[Short Course Booking] ${courseName} - ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Short Course Booking</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            <!-- Header with Logo -->
            <div style="background-color: #000000; padding: 30px; text-align: center;">
              <img src="https://abm.edu.au/abm_logo.png" alt="ABM Logo" style="max-height: 60px; width: auto;">
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px;">
              <h2 style="color: #333333; margin-bottom: 20px; text-align: center;">New Short Course Booking</h2>
              
              <!-- Course Information -->
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                <h3 style="color: #000000; margin-top: 0; margin-bottom: 15px;">Course Details</h3>
                <p style="margin: 8px 0; color: #333333;"><strong>Course:</strong> ${courseName}</p>
                <p style="margin: 8px 0; color: #333333;"><strong>Selected Date:</strong> ${selectedDate}</p>
                ${
                  selectedType
                    ? `<p style="margin: 8px 0; color: #333333;"><strong>Course Type:</strong> ${selectedType}</p>`
                    : ''
                }
              </div>

              <!-- Customer Information -->
              <div style="background-color: #ffffff; border: 1px solid #e9ecef; padding: 20px; border-radius: 8px;">
                <h3 style="color: #000000; margin-top: 0; margin-bottom: 15px;">Customer Information</h3>
                <p style="margin: 8px 0; color: #333333;"><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p style="margin: 8px 0; color: #333333;"><strong>Email:</strong> ${email}</p>
                <p style="margin: 8px 0; color: #333333;"><strong>Phone:</strong> ${
                  phone || 'Not provided'
                }</p>
                <p style="margin: 8px 0; color: #333333;"><strong>Preferred Date (for group):</strong> ${
                  preferredDate || 'Not specified'
                }</p>
                <p style="margin: 8px 0; color: #333333;"><strong>How did you hear about this course:</strong> ${
                  howDidYouHear || 'Not specified'
                }</p>
                <p style="margin: 8px 0; color: #333333;"><strong>Referrer Name:</strong> ${
                  referrerName || 'Not provided'
                }</p>
                <p style="margin: 8px 0; color: #333333;"><strong>Promotion Code:</strong> ${
                  promotionCode || 'Not used'
                }</p>
                ${
                  otherInquiries
                    ? `<p style="margin: 8px 0; color: #333333;"><strong>Other Inquiries:</strong><br/>${otherInquiries}</p>`
                    : ''
                }
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
              <p style="margin: 0; color: #666666; font-size: 14px;">ABM Further Education</p>
              <p style="margin: 5px 0 0 0; color: #666666; font-size: 14px;">242 Castlereagh Street Sydney NSW 2000 Australia</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // 예약자에게 자동 답장 (코스 정보 및 감사 메시지)
    if (email && typeof email === 'string' && email.trim() !== '') {
      console.log('📧 Sending customer email to:', email);
      console.log(
        '📧 Customer email subject:',
        `Thank you for booking ${courseName}`
      );

      await transporter.sendMail({
        from: process.env.FROM_EMAIL,
        to: email,
        subject: `Thank you for booking ${courseName}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thank you for your booking</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
              <!-- Header with Logo -->
              <div style="background-color: #000000; padding: 30px; text-align: center;">
                <img src="https://abm.edu.au/abm_logo.png" alt="ABM Logo" style="max-height: 60px; width: auto;">
              </div>
              
              <!-- Content -->
              <div style="padding: 40px 30px;">
                <h2 style="color: #333333; margin-bottom: 20px; text-align: center;">Thank you for your booking!</h2>
                
                <p style="color: #333333; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">Dear ${firstName},</p>
                <p style="color: #333333; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                  Thank you for booking <strong>${courseName}</strong>. We're excited to have you join us!
                </p>
                
                <!-- Course Details -->
                <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; margin-bottom: 30px;">
                  <h3 style="color: #000000; margin-top: 0; margin-bottom: 20px; text-align: center;">Course Details</h3>
                  <div style="text-align: center;">
                    <p style="margin: 10px 0; color: #333333; font-size: 16px;"><strong>Course:</strong> ${courseName}</p>
                    <p style="margin: 10px 0; color: #333333; font-size: 16px;"><strong>Date:</strong> ${selectedDate}</p>
                    ${
                      selectedType
                        ? `<p style="margin: 10px 0; color: #333333; font-size: 16px;"><strong>Type:</strong> ${selectedType}</p>`
                        : ''
                    }
                    <p style="margin: 10px 0; color: #333333; font-size: 16px;"><strong>Location:</strong> ${
                      courseLocation ||
                      '242 Castlereagh Street Sydney NSW 2000 Australia'
                    }</p>
                  </div>
                </div>
                
                <!-- Contact Information -->
                <div style="background-color: #ffffff; border: 2px solid #000000; padding: 25px; border-radius: 8px; text-align: center;">
                  <h3 style="color: #000000; margin-top: 0; margin-bottom: 15px;">Need Help?</h3>
                  <p style="color: #333333; margin-bottom: 15px;">If you have any questions or need further assistance, please don't hesitate to contact us:</p>
                  <p style="margin: 8px 0; color: #000000; font-size: 16px;"><strong>Email:</strong> info@abm.edu.au</p>
                  <p style="margin: 8px 0; color: #000000; font-size: 16px;"><strong>Phone:</strong> +61 (02) 9160 4507</p>
                </div>
                
                <p style="color: #333333; font-size: 16px; line-height: 1.6; margin-top: 30px; text-align: center;">
                  We look forward to seeing you!
                </p>
              </div>
              
              <!-- Footer -->
              <div style="background-color: #000000; padding: 30px; text-align: center;">
                <p style="margin: 0; color: #ffffff; font-size: 16px; font-weight: bold;">Best regards,</p>
                <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 16px;">ABM Team</p>
              </div>
              
              <!-- Bottom Footer -->
              <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
                <p style="margin: 0; color: #666666; font-size: 14px;">ABM Further Education</p>
                <p style="margin: 5px 0 0 0; color: #666666; font-size: 14px;">242 Castlereagh Street Sydney NSW 2000 Australia</p>
              </div>
            </div>
          </body>
          </html>
        `,
      });
    }

    console.log('✅ Booking emails sent successfully');
  } catch (error) {
    console.error('❌ Error sending booking emails:', error);
    console.error('❌ Email error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    });
    throw error; // 에러를 다시 던져서 상위에서 처리할 수 있도록 함
  }
}
