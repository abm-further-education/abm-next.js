import nodemailer from 'nodemailer';
import path from 'path';

// 이메일 전송을 위한 설정 (trial-form과 동일한 SMTP 설정 사용)
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

export interface NotifyMeEmailData {
  customerEmail: string;
  course: string;
  courseName: string;
  timestamp: string;
}

export const sendNotifyMeEmail = async (data: NotifyMeEmailData) => {
  try {
    // SMTP 설정 확인
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      return { success: true };
    }

    const transporter = createTransporter();

    // ABM 로고 경로 설정
    const logoPath = path.join(process.cwd(), 'public', 'abm_logo.png');
    const logoCid = 'abm-logo';

    // 관리자용 HTML (trial-form 스타일 적용)
    const adminHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Course Notification Request</title>
      </head>
      <body style="margin:0;padding:0;font-family:Arial,sans-serif;background-color:#f5f5f5;">
        <div style="max-width:600px;margin:0 auto;background-color:#ffffff;">
          <!-- Header with Logo -->
          <div style="background-color:#000000;padding:30px;text-align:center;">
            <img src="cid:${logoCid}" alt="ABM Logo" style="max-height:60px;width:auto;">
          </div>

          <!-- Content -->
          <div style="padding:40px 30px;">
            <h2 style="color:#333333;margin-bottom:20px;text-align:center;">New Course Notification Request</h2>

            <!-- Course Information -->
            <div style="background-color:#f8f9fa;padding:20px;border-radius:8px;margin-bottom:30px;text-align:center;">
              <h3 style="color:#000000;margin:0 0 15px 0;">Course Notification Request</h3>
              <p style="margin:0;color:#333333;font-size:18px;font-weight:bold;">
                ${data.courseName}
              </p>
            </div>

            <!-- Customer Information -->
            <div style="background-color:#ffffff;border:1px solid #e9ecef;padding:20px;border-radius:8px;margin-bottom:20px;">
              <h3 style="color:#000000;margin:0 0 15px 0;">Customer Details</h3>
              <p style="margin:8px 0;color:#333333;"><strong>Email:</strong> ${
                data.customerEmail
              }</p>
              <p style="margin:8px 0;color:#333333;"><strong>Requested Course:</strong> ${
                data.courseName
              }</p>
              <p style="margin:8px 0;color:#333333;"><strong>Course Code:</strong> ${
                data.course
              }</p>
              <p style="margin:8px 0;color:#333333;"><strong>Request Time:</strong> ${new Date(
                data.timestamp
              ).toLocaleString('en-AU', {
                timeZone: 'Australia/Sydney',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}</p>
            </div>

            <!-- Action Required -->
            <div style="background-color:#fff3cd;border:1px solid #ffeaa7;padding:20px;border-radius:8px;margin-bottom:20px;">
              <h4 style="color:#856404;margin:0 0 15px 0;">Action Required</h4>
              <p style="margin:0;color:#856404;">
                Please contact the customer when new dates become available for this course.
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
            <p style="margin:10px 0 0 0;color:#ffffff;font-size:16px;">Course Notification Team</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // 고객용 HTML (trial-form 스타일 적용)
    const customerHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Course Notification Request Confirmed</title>
      </head>
      <body style="margin:0;padding:0;font-family:Arial,sans-serif;background-color:#f5f5f5;">
        <div style="max-width:600px;margin:0 auto;background-color:#ffffff;">
          <!-- Header with Logo -->
          <div style="background-color:#000000;padding:30px;text-align:center;">
            <img src="cid:${logoCid}" alt="ABM Logo" style="max-height:60px;width:auto;">
          </div>

          <!-- Content -->
          <div style="padding:40px 30px;">
            <h2 style="color:#333333;margin-bottom:20px;text-align:center;">Thank you for your notification request!</h2>
            
            <div style="background-color:#f8f9fa;padding:20px;border-radius:8px;margin-bottom:30px;text-align:center;">
              <h3 style="color:#000000;margin:0 0 15px 0;">Course Notification Request</h3>
              <p style="margin:8px 0;color:#333333;"><strong>Course:</strong> ${data.courseName}</p>
              <p style="margin:8px 0;color:#333333;"><strong>Email:</strong> ${data.customerEmail}</p>
            </div>

            <p style="color:#333333;font-size:16px;line-height:1.6;margin-bottom:30px;">
              We've received your request to be notified when new dates become available for <strong>${data.courseName}</strong>. Our team will contact you as soon as new sessions are scheduled.
            </p>

            <!-- What to Expect -->
            <div style="background-color:#ffffff;border:1px solid #e9ecef;padding:20px;border-radius:8px;margin-bottom:20px;">
              <h4 style="color:#000000;margin:0 0 15px 0;">What happens next?</h4>
              <ul style="margin:0;padding-left:20px;color:#333333;">
                <li style="margin-bottom:8px;">Our team will review your request</li>
                <li style="margin-bottom:8px;">We'll contact you as soon as new dates are scheduled</li>
                <li style="margin-bottom:8px;">You'll be among the first to know about availability</li>
                <li style="margin-bottom:8px;">We'll provide all course details and enrollment information</li>
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
              <h4 style="color:#000000;margin:0 0 10px 0;">🔔 Stay Updated!</h4>
              <p style="color:#333333;font-size:14px;line-height:1.6;margin:0;">
                We'll notify you as soon as new course dates are available. Thank you for choosing ABM Further Education!
              </p>
            </div>

            <p style="color:#333333;font-size:16px;line-height:1.6;margin-top:30px;text-align:center;">
              We look forward to welcoming you to our course!
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

    // 관리자에게 메일 전송
    await transporter.sendMail({
      from: process.env.FROM_EMAIL || 'info@abm.edu.au',
      to: process.env.ADMIN_EMAIL || 'sales@abm.edu.au',
      subject: `[Course Notification] New Request for ${data.courseName}`,
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

    // 고객에게 확인 메일 전송
    await transporter.sendMail({
      from: process.env.FROM_EMAIL || 'info@abm.edu.au',
      to: data.customerEmail,
      subject: `Course notification request confirmed - ${data.courseName}`,
      html: customerHtml,
      attachments: [
        {
          filename: 'abm_logo.png',
          path: logoPath,
          cid: logoCid,
          contentType: 'image/png',
        },
      ],
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending notification emails:', error);
    throw new Error('Failed to send notification emails');
  }
};
