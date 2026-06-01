import nodemailer from 'nodemailer';
import path from 'path';
import {
  buildPostPaymentFormPdf,
  formatAudPaymentAmount,
  type PostPaymentFormData,
  type PostPaymentFormPaymentDetails,
} from '@/lib/post-payment-form-pdf';

export const POST_PAYMENT_FORM_RECIPIENTS = [
  'studentservice@abm.edu.au',
  'admissions@abm.edu.au',
  'sales@abm.edu.au',
  'hannah.yoon@abm.edu.au',
] as const;

const LOGO_CID = 'abm-logo';

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function getLogoAttachment() {
  return {
    filename: 'abm_logo.png',
    path: path.join(process.cwd(), 'public', 'abm_logo.png'),
    cid: LOGO_CID,
    contentType: 'image/png' as const,
  };
}

function buildPdfFilename(courseName?: string) {
  return `post-payment-form-${
    String(courseName || 'short-course')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'short-course'
  }.pdf`;
}

function buildStudentFirstName(customerName?: string): string {
  const trimmed = String(customerName || '').trim();
  if (!trimmed) return 'Student';
  return trimmed.split(/\s+/)[0] || trimmed;
}

function isValidCustomerEmail(email?: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const trimmed = email.trim();
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(trimmed);
}

function buildSubmissionEmailHtml({
  paymentDetails,
  formData,
}: {
  paymentDetails: PostPaymentFormPaymentDetails;
  formData: PostPaymentFormData;
}) {
  const subjectCourse = paymentDetails.courseName || 'Short course';
  const subjectEmail = paymentDetails.customerEmail || 'No email provided';
  const subjectName = paymentDetails.customerName || 'Not provided';
  const amountPaidLabel =
    formatAudPaymentAmount(paymentDetails.amountPaid) ?? 'Not provided';

  return `
    <h2>Post-Payment Booking Form Submission</h2>
    <hr/>
    <h3>Booking Details</h3>
    <p><strong>Student Name:</strong> ${subjectName}</p>
    <p><strong>Course:</strong> ${subjectCourse}</p>
    <p><strong>Date:</strong> ${paymentDetails.selectedDate || 'Not provided'}</p>
    <p><strong>Email:</strong> ${subjectEmail}</p>
    <p><strong>Amount Paid:</strong> ${amountPaidLabel}</p>
    <hr/>
    <h3>Third Form Data</h3>
    <p><strong>Gender:</strong> ${formData.gender || 'Not provided'}</p>
    <p><strong>USI:</strong> ${formData.usi || 'Not provided'}</p>
    <p><strong>Country of Birth:</strong> ${formData.countryOfBirth || 'Not provided'}</p>
    <p><strong>Current Employment Status:</strong> ${formData.currentEmploymentStatus || 'Not provided'}</p>
    <p><strong>Main Reason for Course:</strong> ${formData.mainReasonForCourse || 'Not provided'}</p>
    <p><strong>Signature Date:</strong> ${formData.signatureDate || 'Not provided'}</p>
    <p>The full completed form is attached as a PDF.</p>
  `;
}

function buildStudentConfirmationEmailHtml(
  paymentDetails: PostPaymentFormPaymentDetails,
) {
  const courseName = paymentDetails.courseName || 'your course';
  const firstName = buildStudentFirstName(paymentDetails.customerName);
  const selectedDate = paymentDetails.selectedDate || 'Not provided';
  const amountPaidLabel = formatAudPaymentAmount(paymentDetails.amountPaid);
  const amountPaidHtml = amountPaidLabel
    ? `<p style="margin:10px 0;color:#333333;font-size:16px;"><strong>Amount Paid:</strong> ${amountPaidLabel}</p>`
    : '';

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Booking form submitted</title>
    </head>
    <body style="margin:0;padding:0;font-family:Arial,sans-serif;background-color:#f5f5f5;">
      <div style="max-width:600px;margin:0 auto;background-color:#ffffff;">
        <div style="background-color:#000000;padding:30px;text-align:center;">
          <img src="cid:${LOGO_CID}" alt="ABM Logo" style="max-height:60px;width:auto;">
        </div>

        <div style="padding:40px 30px;">
          <h2 style="color:#333333;margin-bottom:20px;text-align:center;">Your booking form has been submitted</h2>

          <p style="color:#333333;font-size:16px;line-height:1.6;margin-bottom:25px;">Dear ${firstName},</p>
          <p style="color:#333333;font-size:16px;line-height:1.6;margin-bottom:30px;">
            Thank you for completing your booking form for <strong>${courseName}</strong>.
            We have received your submission successfully.
          </p>

          <div style="background-color:#f8f9fa;padding:25px;border-radius:8px;margin-bottom:30px;">
            <h3 style="color:#000000;margin:0 0 20px 0;text-align:center;">Booking Summary</h3>
            <div style="text-align:center;">
              <p style="margin:10px 0;color:#333333;font-size:16px;"><strong>Course:</strong> ${courseName}</p>
              <p style="margin:10px 0;color:#333333;font-size:16px;"><strong>Date:</strong> ${selectedDate}</p>
              <p style="margin:10px 0;color:#333333;font-size:16px;"><strong>Email:</strong> ${paymentDetails.customerEmail}</p>
              ${amountPaidHtml}
            </div>
          </div>

          <div style="background-color:#ffffff;border:1px solid #e9ecef;padding:20px;border-radius:8px;margin-bottom:20px;">
            <h4 style="color:#000000;margin:0 0 15px 0;">What happens next?</h4>
            <ul style="margin:0;padding-left:20px;color:#333333;">
              <li style="margin-bottom:8px;">Our team will review your submitted form</li>
              <li style="margin-bottom:8px;">Additional instructions will be provided before your course starts</li>
              <li style="margin-bottom:8px;">If we need any further information, we will contact you by email</li>
            </ul>
          </div>

          <div style="background-color:#ffffff;border:2px solid #000000;padding:25px;border-radius:8px;text-align:center;">
            <h3 style="color:#000000;margin:0 0 15px 0;">Need Help?</h3>
            <p style="color:#333333;margin-bottom:15px;">If you have any questions, please contact us:</p>
            <p style="margin:8px 0;color:#000000;font-size:16px;"><strong>Email:</strong> info@abm.edu.au</p>
            <p style="margin:8px 0;color:#000000;font-size:16px;"><strong>Phone:</strong> +61 (02) 9160 4507</p>
            <p style="margin:8px 0;color:#000000;font-size:16px;"><strong>WhatsApp:</strong> +61 482 796 010</p>
          </div>

          <p style="color:#333333;font-size:16px;line-height:1.6;margin-top:30px;text-align:center;">
            We look forward to seeing you!
          </p>
        </div>

        <div style="background-color:#000000;padding:30px;text-align:center;">
          <p style="margin:0;color:#ffffff;font-size:16px;font-weight:bold;">Best regards,</p>
          <p style="margin:10px 0 0 0;color:#ffffff;font-size:16px;">ABM Further Education Team</p>
        </div>

        <div style="background-color:#f8f9fa;padding:20px;text-align:center;border-top:1px solid #e9ecef;">
          <p style="margin:0;color:#666666;font-size:14px;">ABM Further Education</p>
          <p style="margin:5px 0 0 0;color:#666666;font-size:14px;">242 Castlereagh Street Sydney NSW 2000 Australia</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function sendPostPaymentFormEmail({
  sessionId,
  paymentDetails,
  formData,
}: {
  sessionId: string;
  paymentDetails: PostPaymentFormPaymentDetails;
  formData: PostPaymentFormData;
}) {
  const transporter = createTransporter();
  const fromEmail = process.env.FROM_EMAIL || 'info@abm.edu.au';
  const logoAttachment = getLogoAttachment();

  const subjectCourse = paymentDetails.courseName || 'Short course';
  const subjectEmail = paymentDetails.customerEmail || 'No email provided';
  const pdfBytes = await buildPostPaymentFormPdf({
    sessionId,
    paymentDetails,
    formData,
  });

  await transporter.sendMail({
    from: fromEmail,
    to: [...POST_PAYMENT_FORM_RECIPIENTS],
    subject: `[Post-Payment Form] ${subjectCourse} - ${subjectEmail}`,
    html: buildSubmissionEmailHtml({ paymentDetails, formData }),
    attachments: [
      {
        filename: buildPdfFilename(subjectCourse),
        content: Buffer.from(pdfBytes),
        contentType: 'application/pdf',
      },
    ],
  });

  const customerEmail = paymentDetails.customerEmail?.trim();
  if (customerEmail && isValidCustomerEmail(customerEmail)) {
    await transporter.sendMail({
      from: fromEmail,
      to: customerEmail,
      subject: `Booking form received – ${subjectCourse}`,
      html: buildStudentConfirmationEmailHtml(paymentDetails),
      attachments: [logoAttachment],
    });
  }
}
