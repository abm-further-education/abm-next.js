import { describe, expect, it } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import {
  buildPostPaymentPdfTitle,
  buildPostPaymentFormPdf,
  buildPostPaymentPdfSummaryRows,
  formatAudPaymentAmount,
} from './post-payment-form-pdf';

const SAMPLE_SIGNATURE_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9WnR9W4AAAAASUVORK5CYII=';

describe('formatAudPaymentAmount', () => {
  it('formats positive amounts in AUD', () => {
    expect(formatAudPaymentAmount(192.65)).toBe('$192.65 AUD');
  });

  it('returns null for missing or zero amounts', () => {
    expect(formatAudPaymentAmount(0)).toBeNull();
    expect(formatAudPaymentAmount(undefined)).toBeNull();
  });
});

describe('buildPostPaymentFormPdf', () => {
  it('builds a course-specific PDF title', () => {
    expect(
      buildPostPaymentPdfTitle('NSW Food Safety Supervisor Certificate (FSS) 🍽️✨'),
    ).toBe('NSW Food Safety Supervisor Certificate (FSS) booking form');
  });

  it('omits Session ID from the PDF summary rows', () => {
    const summaryRows = buildPostPaymentPdfSummaryRows('cs_test_123');

    expect(summaryRows.map((row) => row.label)).toContain('Generated');
    expect(summaryRows.map((row) => row.label)).not.toContain('Session ID');
  });

  it('creates a parseable PDF document for the post-payment form', async () => {
    const pdfBytes = await buildPostPaymentFormPdf({
      sessionId: 'cs_test_123',
      paymentDetails: {
        courseSlug: 'rsa',
        courseName: 'Responsible Service of Alcohol (RSA)',
        selectedDate: '27th May 2026',
        customerEmail: 'student@example.com',
        amountPaid: 189,
      },
      formData: {
        gender: 'Female',
        completedFoodSafetyUnits: 'No',
        usi: 'ABCD123456',
        australianCitizen: 'Yes',
        countryOfBirth: 'Australia',
        aboriginalOrTorresStraitIslander: 'No',
        englishProficiency: 'Very well',
        hasDisability: 'No',
        disabilityTypes: [],
        disabilityOther: '',
        highestCompletedSchoolLevel: 'Year 12',
        stillAttendingSchool: 'No',
        highestQualificationCompleted: 'Certificate IV',
        currentEmploymentStatus: 'Part-time',
        mainReasonForCourse: 'To get a job',
        currentOrFormerAbmStudent: 'No',
        abmStudentId: '',
        acceptedPrivacyNoticeAndDeclaration: true,
        signature: SAMPLE_SIGNATURE_DATA_URL,
        signatureDate: '2026-05-13',
      },
    });

    expect(pdfBytes.length).toBeGreaterThan(0);

    const pdf = await PDFDocument.load(pdfBytes);
    expect(pdf.getPageCount()).toBeGreaterThan(0);
  });

  it('creates a parseable PDF document even when fields contain emoji', async () => {
    const pdfBytes = await buildPostPaymentFormPdf({
      sessionId: 'cs_test_emoji',
      paymentDetails: {
        courseSlug: 'fss',
        courseName: 'NSW Food Safety Supervisor Certificate (FSS) 🍽️✨',
        selectedDate: '17th April 2026',
        customerEmail: 'student@example.com',
        amountPaid: 180,
      },
      formData: {
        gender: 'Female',
        completedFoodSafetyUnits: 'No',
        usi: 'ABCD123456',
        australianCitizen: 'Yes',
        countryOfBirth: 'Australia',
        aboriginalOrTorresStraitIslander: 'No',
        englishProficiency: 'Very well',
        hasDisability: 'No',
        disabilityTypes: [],
        disabilityOther: '',
        highestCompletedSchoolLevel: 'Year 12',
        stillAttendingSchool: 'No',
        highestQualificationCompleted: 'Certificate IV',
        currentEmploymentStatus: 'Part-time',
        mainReasonForCourse: 'To get a job',
        currentOrFormerAbmStudent: 'No',
        abmStudentId: '',
        acceptedPrivacyNoticeAndDeclaration: true,
        signature: SAMPLE_SIGNATURE_DATA_URL,
        signatureDate: '2026-05-13',
      },
    });

    expect(pdfBytes.length).toBeGreaterThan(0);

    const pdf = await PDFDocument.load(pdfBytes);
    expect(pdf.getPageCount()).toBeGreaterThan(0);
  });
});
