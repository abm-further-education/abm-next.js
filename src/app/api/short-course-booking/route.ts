import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
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
    } = await req.json();

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

    // 관리자에게 보내는 메일 (예약자 정보)
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: 'hannah.yoon@abm.edu.au',
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
              <img src="${
                process.env.NEXTAUTH_URL || 'https://abm.edu.au'
              }/abm_logo.png" alt="ABM Logo" style="max-height: 60px; width: auto;">
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
              <p style="margin: 5px 0 0 0; color: #666666; font-size: 14px;">Level 2, 420 George Street, Sydney NSW 2000</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // 예약자에게 자동 답장 (코스 정보 및 감사 메시지)
    if (email && typeof email === 'string' && email.trim() !== '') {
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
                <img src="${
                  process.env.NEXTAUTH_URL || 'https://abm.edu.au'
                }/abm_logo.png" alt="ABM Logo" style="max-height: 60px; width: auto;">
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
                      'Level 2, 420 George Street, Sydney NSW 2000'
                    }</p>
                  </div>
                </div>
                
                <!-- Contact Information -->
                <div style="background-color: #ffffff; border: 2px solid #000000; padding: 25px; border-radius: 8px; text-align: center;">
                  <h3 style="color: #000000; margin-top: 0; margin-bottom: 15px;">Need Help?</h3>
                  <p style="color: #333333; margin-bottom: 15px;">If you have any questions or need further assistance, please don't hesitate to contact us:</p>
                  <p style="margin: 8px 0; color: #000000; font-size: 16px;"><strong>Email:</strong> info@abm.edu.au</p>
                  <p style="margin: 8px 0; color: #000000; font-size: 16px;"><strong>Phone:</strong> +61 2 9283 0888</p>
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
                <p style="margin: 5px 0 0 0; color: #666666; font-size: 14px;">Level 2, 420 George Street, Sydney NSW 2000</p>
              </div>
            </div>
          </body>
          </html>
        `,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { ok: false, error: 'Failed to send booking email.' },
      { status: 500 }
    );
  }
}
