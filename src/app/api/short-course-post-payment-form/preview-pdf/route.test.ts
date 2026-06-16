import { describe, expect, it } from 'vitest';
import { NextRequest } from 'next/server';
import { POST } from './route';

const SAMPLE_SIGNATURE_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9WnR9W4AAAAASUVORK5CYII=';

describe('POST /api/short-course-post-payment-form/preview-pdf', () => {
  it('returns a pdf response for previewing the submitted form', async () => {
    const request = new NextRequest(
      'http://localhost/api/short-course-post-payment-form/preview-pdf',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          sessionId: 'cs_test_123',
          paymentDetails: {
            courseSlug: 'rsa',
            courseName: 'Responsible Service of Alcohol (RSA)',
            selectedDate: '27th May 2026',
            customerEmail: 'student@example.com',
            customerPhone: '0412 345 678',
            amountPaid: 189,
          },
          gender: 'Female',
          completedFoodSafetyUnits: 'No',
          usi: 'ABCD123456',
          streetAddress: '1 Example Street',
          suburb: 'Sydney',
          state: 'NSW',
          postcode: '2000',
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
        }),
      },
    );

    const response = await POST(request);

    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toBe('application/pdf');
    const bytes = await response.arrayBuffer();
    expect(bytes.byteLength).toBeGreaterThan(0);
  });
});
