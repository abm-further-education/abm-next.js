import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';

// fs/path 사용을 위해 Node 런타임 보장 (Vercel/Next.js)
export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const { date, name, email, phone, howDidYouFindUs, goal } =
      await req.json();

    // SMTP 트랜스포터
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true', // 465면 true, 587/25면 false
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // public/abm_logo.png 경로
    const logoPath = path.join(process.cwd(), 'public', 'abm_logo.png');
    const logoCid = 'abm-logo'; // HTML의 src="cid:abm-logo" 와 일치해야 함

    // 관리자용 HTML (CID 참조)
    const adminHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Fitness Trial Form Submission</title>
      </head>
      <body style="margin:0;padding:0;font-family:Arial,sans-serif;background-color:#f5f5f5;">
        <div style="max-width:600px;margin:0 auto;background-color:#ffffff;">
          <!-- Header with Logo -->
          <div style="background-color:#000000;padding:30px;text-align:center;">
            <img src="cid:${logoCid}" alt="ABM Logo" style="max-height:60px;width:auto;">
          </div>

          <!-- Content -->
          <div style="padding:40px 30px;">
            <h2 style="color:#333333;margin-bottom:20px;text-align:center;">New Fitness Trial Form Submission</h2>

            <!-- Trial Information -->
            <div style="background-color:#f8f9fa;padding:20px;border-radius:8px;margin-bottom:30px;text-align:center;">
              <h3 style="color:#000000;margin:0 0 15px 0;">1-Day Free Trial Request</h3>
              <p style="margin:0;color:#333333;font-size:18px;font-weight:bold;">
                Fitness Course Trial
              </p>
            </div>

            <!-- Customer Information -->
            <div style="background-color:#ffffff;border:1px solid #e9ecef;padding:20px;border-radius:8px;margin-bottom:20px;">
              <h3 style="color:#000000;margin:0 0 15px 0;">Trial Information</h3>
              <p style="margin:8px 0;color:#333333;"><strong>Preferred Date:</strong> ${date}</p>
              <p style="margin:8px 0;color:#333333;"><strong>Name:</strong> ${name}</p>
              <p style="margin:8px 0;color:#333333;"><strong>Email:</strong> ${email}</p>
              <p style="margin:8px 0;color:#333333;"><strong>Phone:</strong> ${phone}</p>
              ${
                howDidYouFindUs
                  ? `<p style="margin:8px 0;color:#333333;"><strong>How did you find us:</strong> ${howDidYouFindUs}</p>`
                  : ''
              }
              ${
                goal
                  ? `<p style="margin:8px 0;color:#333333;"><strong>Fitness Goal:</strong> ${goal}</p>`
                  : ''
              }
            </div>

            <!-- Action Required -->
            <div style="background-color:#fff3cd;border:1px solid #ffeaa7;padding:20px;border-radius:8px;margin-bottom:20px;">
              <h4 style="color:#856404;margin:0 0 15px 0;">Action Required</h4>
              <p style="margin:0;color:#856404;">
                Please contact the customer to confirm the trial session and provide further details about the fitness course.
              </p>
            </div>

            <!-- Contact Information -->
            <div style="background-color:#ffffff;border:2px solid #000000;padding:25px;border-radius:8px;text-align:center;">
              <h3 style="color:#000000;margin:0 0 15px 0;">Contact Information</h3>
              <p style="margin:8px 0;color:#000000;font-size:16px;"><strong>Email:</strong> info@abm.edu.au</p>
              <p style="margin:8px 0;color:#000000;font-size:16px;"><strong>Phone:</strong> +61 (02) 9160 4507</p>
              <p style="margin:8px 0;color:#000000;font-size:16px;"><strong>WhatsApp:</strong> +61 482 796 010</p>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color:#000000;padding:30px;text-align:center;">
            <p style="margin:0;color:#ffffff;font-size:16px;font-weight:bold;">ABM Further Education</p>
            <p style="margin:10px 0 0 0;color:#ffffff;font-size:16px;">Fitness Course Team</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // 관리자에게 메일 전송
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.ADMIN_EMAIL || 'info@abm.edu.au',
      subject: `[Fitness Trial] New Trial Request from ${name}`,
      html: adminHtml,
      attachments: [
        {
          filename: 'abm_logo.png',
          path: logoPath,
          cid: logoCid,
          contentType: 'image/png',
        },
      ],
    });

    // 사용자에게 확인 메일 전송
    if (email) {
      const userHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank you for your trial request</title>
        </head>
        <body style="margin:0;padding:0;font-family:Arial,sans-serif;background-color:#f5f5f5;">
          <div style="max-width:600px;margin:0 auto;background-color:#ffffff;">
            <!-- Header with Logo -->
            <div style="background-color:#000000;padding:30px;text-align:center;">
              <img src="cid:${logoCid}" alt="ABM Logo" style="max-height:60px;width:auto;">
            </div>

            <!-- Content -->
            <div style="padding:40px 30px;">
              <h2 style="color:#333333;margin-bottom:20px;text-align:center;">Thank you for your trial request!</h2>
              
              <div style="background-color:#f8f9fa;padding:20px;border-radius:8px;margin-bottom:30px;text-align:center;">
                <h3 style="color:#000000;margin:0 0 15px 0;">Your Trial Details</h3>
                <p style="margin:8px 0;color:#333333;"><strong>Preferred Date:</strong> ${date}</p>
                <p style="margin:8px 0;color:#333333;"><strong>Name:</strong> ${name}</p>
              </div>

              <p style="color:#333333;font-size:16px;line-height:1.6;margin-bottom:30px;">
                We've received your request for a 1-day free trial of our fitness course. Our team will review your application and contact you within 24 hours to confirm the details and schedule your trial session.
              </p>

              <!-- What to Expect -->
              <div style="background-color:#ffffff;border:1px solid #e9ecef;padding:20px;border-radius:8px;margin-bottom:20px;">
                <h4 style="color:#000000;margin:0 0 15px 0;">What to Expect</h4>
                <ul style="margin:0;padding-left:20px;color:#333333;">
                  <li style="margin-bottom:8px;">Introduction to our fitness equipment and safety protocols</li>
                  <li style="margin-bottom:8px;">Personalized fitness assessment and goal setting</li>
                  <li style="margin-bottom:8px;">Sample workout session tailored to your fitness level</li>
                  <li style="margin-bottom:8px;">Overview of our course structure and learning outcomes</li>
                </ul>
              </div>

              <!-- Contact Information -->
              <div style="background-color:#ffffff;border:2px solid #000000;padding:25px;border-radius:8px;text-align:center;margin-bottom:20px;">
                <h3 style="color:#000000;margin:0 0 15px 0;">Need Immediate Assistance?</h3>
                <p style="color:#333333;margin-bottom:15px;">Feel free to contact us directly:</p>
                <p style="margin:8px 0;color:#000000;font-size:16px;"><strong>Email:</strong> info@abm.edu.au</p>
                <p style="margin:8px 0;color:#000000;font-size:16px;"><strong>Phone:</strong> +61 (02) 9160 4507</p>
                <p style="margin:8px 0;color:#000000;font-size:16px;"><strong>WhatsApp:</strong> +61 482 796 010</p>
                <p style="margin:15px 0 8px 0;color:#000000;font-size:16px;"><strong>Address:</strong></p>
                <p style="margin:0;color:#333333;font-size:14px;">242 Castlereagh Street<br/>Sydney NSW 2000 Australia</p>
              </div>

              <div style="background-color:#f8f9fa;padding:20px;border-radius:8px;border-left:4px solid #000000;">
                <h4 style="color:#000000;margin:0 0 10px 0;">💪 Ready to Transform Your Fitness Journey?</h4>
                <p style="color:#333333;font-size:14px;line-height:1.6;margin:0;">
                  Our expert trainers are here to help you achieve your fitness goals. Get ready for an exciting and challenging experience!
                </p>
              </div>

              <p style="color:#333333;font-size:16px;line-height:1.6;margin-top:30px;text-align:center;">
                We look forward to meeting you and helping you discover your potential!
              </p>
            </div>

            <!-- Footer -->
            <div style="background-color:#000000;padding:30px;text-align:center;">
              <p style="margin:0;color:#ffffff;font-size:16px;font-weight:bold;">Best regards,</p>
              <p style="margin:10px 0 0 0;color:#ffffff;font-size:16px;">ABM Further Education Team</p>
            </div>

            <!-- Bottom Footer -->
            <div style="background-color:#f8f9fa;padding:20px;text-align:center;border-top:1px solid #e9ecef;">
              <p style="margin:0;color:#666666;font-size:14px;">ABM Further Education</p>
              <p style="margin:5px 0 0 0;color:#666666;font-size:14px;">242 Castlereagh Street Sydney NSW 2000 Australia</p>
            </div>
          </div>
        </body>
        </html>
      `;

      await transporter.sendMail({
        from: process.env.FROM_EMAIL,
        to: email,
        subject:
          'Thank you for your fitness trial request - ABM Further Education',
        html: userHtml,
        attachments: [
          {
            filename: 'abm_logo.png',
            path: logoPath,
            cid: logoCid,
            contentType: 'image/png',
          },
        ],
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
