import nodemailer from 'nodemailer';
import {
  buildPostPaymentFormPdf,
  type PostPaymentFormData,
  type PostPaymentFormPaymentDetails,
} from '@/lib/post-payment-form-pdf';

export const POST_PAYMENT_FORM_RECIPIENTS = [
  'studentservice@abm.edu.au',
  'admissions@abm.edu.au',
  'sales@abm.edu.au',
] as const;

function buildPdfFilename(courseName?: string) {
  return `post-payment-form-${
    String(courseName || 'short-course')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'short-course'
  }.pdf`;
}

function buildSubmissionEmailHtml({
  sessionId,
  paymentDetails,
  formData,
}: {
  sessionId: string;
  paymentDetails: PostPaymentFormPaymentDetails;
  formData: PostPaymentFormData;
}) {
  const subjectCourse = paymentDetails.courseName || 'Short course';
  const subjectEmail = paymentDetails.customerEmail || 'No email provided';
  const subjectName = paymentDetails.customerName || 'Not provided';

  return `
    <h2>Post-Payment Booking Form Submission</h2>
    ${sessionId ? `<p><strong>Session ID:</strong> ${sessionId}</p>` : ''}
    <hr/>
    <h3>Booking Details</h3>
    <p><strong>Student Name:</strong> ${subjectName}</p>
    <p><strong>Course:</strong> ${subjectCourse}</p>
    <p><strong>Date:</strong> ${paymentDetails.selectedDate || 'Not provided'}</p>
    <p><strong>Email:</strong> ${subjectEmail}</p>
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

export async function sendPostPaymentFormEmail({
  sessionId,
  paymentDetails,
  formData,
}: {
  sessionId: string;
  paymentDetails: PostPaymentFormPaymentDetails;
  formData: PostPaymentFormData;
}) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const subjectCourse = paymentDetails.courseName || 'Short course';
  const subjectEmail = paymentDetails.customerEmail || 'No email provided';
  const pdfBytes = await buildPostPaymentFormPdf({
    sessionId,
    paymentDetails,
    formData,
  });

  await transporter.sendMail({
    from: process.env.FROM_EMAIL,
    to: [...POST_PAYMENT_FORM_RECIPIENTS],
    subject: `[Post-Payment Form] ${subjectCourse} - ${subjectEmail}`,
    html: buildSubmissionEmailHtml({ sessionId, paymentDetails, formData }),
    attachments: [
      {
        filename: buildPdfFilename(subjectCourse),
        content: Buffer.from(pdfBytes),
        contentType: 'application/pdf',
      },
    ],
  });
}
