import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const {
      first_name,
      last_name,
      email,
      phone,
      enquiry_type,
      nationality,
      message,
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

    // 관리자에게 보내는 메일
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: 'info@abm.edu.au',
      subject: `[Inquiry From Website] ${
        enquiry_type || ''
      } - ${first_name} ${last_name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            <!-- Header with Logo -->
            <div style="background-color: #000000; padding: 30px; text-align: center;">
              <img src="https://abm-next-js.vercel.app/abm_logo.png" alt="ABM Logo" style="max-height: 60px; width: auto;">
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px;">
              <h2 style="color: #333333; margin-bottom: 20px; text-align: center;">New Contact Form Submission</h2>
              
              <!-- Enquiry Type -->
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 30px; text-align: center;">
                <h3 style="color: #000000; margin-top: 0; margin-bottom: 15px;">Enquiry Type</h3>
                <p style="margin: 0; color: #333333; font-size: 18px; font-weight: bold;">${
                  enquiry_type || 'General Inquiry'
                }</p>
              </div>

              <!-- Customer Information -->
              <div style="background-color: #ffffff; border: 1px solid #e9ecef; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h3 style="color: #000000; margin-top: 0; margin-bottom: 15px;">Contact Information</h3>
                <p style="margin: 8px 0; color: #333333;"><strong>Name:</strong> ${first_name} ${last_name}</p>
                <p style="margin: 8px 0; color: #333333;"><strong>Email:</strong> ${email}</p>
                <p style="margin: 8px 0; color: #333333;"><strong>Phone:</strong> ${
                  phone || 'Not provided'
                }</p>
                <p style="margin: 8px 0; color: #333333;"><strong>Nationality:</strong> ${
                  nationality || 'Not specified'
                }</p>
              </div>

              <!-- Message -->
              ${
                message
                  ? `<div style="background-color: #f8f9fa; border-left: 4px solid #000000; padding: 20px; border-radius: 8px;">
                      <h3 style="color: #000000; margin-top: 0; margin-bottom: 15px;">Message</h3>
                      <p style="margin: 0; color: #333333; line-height: 1.6;">${message}</p>
                    </div>`
                  : ''
              }
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

    console.log(
      process.env.SMTP_HOST,
      process.env.SMTP_USER,
      process.env.FROM_EMAIL
    );

    // 문의자에게 자동 답장 (email이 유효할 때만)
    if (email && typeof email === 'string' && email.trim() !== '') {
      await transporter.sendMail({
        from: process.env.FROM_EMAIL,
        to: email,
        subject: 'Thank you for contacting ABM Further Education',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thank you for contacting ABM</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
              <!-- Header with Logo -->
              <div style="background-color: #000000; padding: 30px; text-align: center;">
                <img src="https://abm-next-js.vercel.app/abm_logo.png" alt="ABM Logo" style="max-height: 60px; width: auto;">
              </div>
              
              <!-- Content -->
              <div style="padding: 40px 30px;">
                <h2 style="color: #333333; margin-bottom: 20px; text-align: center;">Thank You for Contacting Us!</h2>
                
                <p style="color: #333333; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">Dear ${first_name},</p>
                <p style="color: #333333; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                  Thank you for your enquiry! We have received your message and will get back to you within 24 hours.
                </p>
                
                <!-- Your Enquiry Summary -->
                <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; margin-bottom: 30px;">
                  <h3 style="color: #000000; margin-top: 0; margin-bottom: 20px; text-align: center;">Your Enquiry Summary</h3>
                  <div style="text-align: center;">
                    <p style="margin: 10px 0; color: #333333; font-size: 16px;"><strong>Enquiry Type:</strong> ${
                      enquiry_type || 'General Inquiry'
                    }</p>
                    <p style="margin: 10px 0; color: #333333; font-size: 16px;"><strong>Name:</strong> ${first_name} ${last_name}</p>
                    <p style="margin: 10px 0; color: #333333; font-size: 16px;"><strong>Email:</strong> ${email}</p>
                  </div>
                </div>
                
                <!-- Contact Information -->
                <div style="background-color: #ffffff; border: 2px solid #000000; padding: 25px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
                  <h3 style="color: #000000; margin-top: 0; margin-bottom: 15px;">Need Immediate Assistance?</h3>
                  <p style="color: #333333; margin-bottom: 15px;">Feel free to contact us directly:</p>
                  <p style="margin: 8px 0; color: #000000; font-size: 16px;"><strong>📧 Email:</strong> info@abm.edu.au</p>
                  <p style="margin: 8px 0; color: #000000; font-size: 16px;"><strong>📞 Phone:</strong> +61 (02) 9160 4507</p>
                  <p style="margin: 8px 0; color: #000000; font-size: 16px;"><strong>💬 WhatsApp:</strong> +61 482 796 010</p>
                  <p style="margin: 15px 0 8px 0; color: #000000; font-size: 16px;"><strong>📍 Address:</strong></p>
                  <p style="margin: 0; color: #333333; font-size: 14px;">242 Castlereagh Street<br/>Sydney NSW 2000 Australia</p>
                </div>

                <!-- Additional Information -->
                <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #000000;">
                  <h4 style="color: #000000; margin-top: 0; margin-bottom: 10px;">🎓 Explore Our Courses</h4>
                  <p style="color: #333333; font-size: 14px; line-height: 1.6; margin: 0;">
                    Visit our website to learn more about our courses in Cookery, Hospitality, Business, Fitness, HR, Project Management, and Short Courses.
                  </p>
                </div>
                
                <p style="color: #333333; font-size: 16px; line-height: 1.6; margin-top: 30px; text-align: center;">
                  We look forward to helping you achieve your educational goals!
                </p>
              </div>
              
              <!-- Footer -->
              <div style="background-color: #000000; padding: 30px; text-align: center;">
                <p style="margin: 0; color: #ffffff; font-size: 16px; font-weight: bold;">Best regards,</p>
                <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 16px;">ABM Further Education Team</p>
              </div>
              
              <!-- Bottom Footer -->
              <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
                <p style="margin: 0; color: #666666; font-size: 14px;">ABM Further Education</p>
                <p style="margin: 5px 0 0 0; color: #666666; font-size: 14px;">242 Castlereagh Street Sydney NSW 2000 Australia</p>
                <p style="margin: 5px 0 0 0; color: #666666; font-size: 12px;">This is an automated response. Please do not reply to this email.</p>
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
      { ok: false, error: 'Failed to send email.' },
      { status: 500 }
    );
  }
}
