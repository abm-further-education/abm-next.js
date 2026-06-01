import type {
  PostPaymentFormData,
  PostPaymentFormPaymentDetails,
} from '@/lib/post-payment-form-pdf';

export type YesNoAnswer = 'Yes' | 'No' | '';
export type GenderAnswer = 'Male' | 'Female' | 'Other' | 'Prefer not to say' | '';
export type EnglishProficiency = 'Very well' | 'Well' | 'Not well' | 'Not at all' | '';

export interface PostPaymentComplianceFormState {
  gender: GenderAnswer;
  completedFoodSafetyUnits: YesNoAnswer;
  usi: string;
  australianCitizen: YesNoAnswer;
  countryOfBirth: string;
  aboriginalOrTorresStraitIslander: YesNoAnswer;
  englishProficiency: EnglishProficiency;
  hasDisability: YesNoAnswer;
  disabilityTypes: string[];
  disabilityOther: string;
  highestCompletedSchoolLevel: string;
  stillAttendingSchool: YesNoAnswer;
  highestQualificationCompleted: string;
  currentEmploymentStatus: string;
  mainReasonForCourse: string;
  currentOrFormerAbmStudent: YesNoAnswer;
  abmStudentId: string;
  acceptedPrivacyNoticeAndDeclaration: boolean;
  signature: string;
  signatureDate: string;
}

export function isFoodSafetyCourse(courseName: string): boolean {
  return /food safety/i.test(courseName);
}

export function getTodayIsoDate(): string {
  return new Date().toISOString().split('T')[0];
}

export function createInitialPostPaymentComplianceForm(): PostPaymentComplianceFormState {
  return {
    ...INITIAL_POST_PAYMENT_COMPLIANCE_FORM,
    signatureDate: getTodayIsoDate(),
  };
}

export const INITIAL_POST_PAYMENT_COMPLIANCE_FORM: PostPaymentComplianceFormState =
  {
    gender: '',
    completedFoodSafetyUnits: '',
    usi: '',
    australianCitizen: '',
    countryOfBirth: '',
    aboriginalOrTorresStraitIslander: '',
    englishProficiency: '',
    hasDisability: '',
    disabilityTypes: [],
    disabilityOther: '',
    highestCompletedSchoolLevel: '',
    stillAttendingSchool: '',
    highestQualificationCompleted: '',
    currentEmploymentStatus: '',
    mainReasonForCourse: '',
    currentOrFormerAbmStudent: '',
    abmStudentId: '',
    acceptedPrivacyNoticeAndDeclaration: false,
    signature: '',
    signatureDate: '',
  };

export function parsePostPaymentFormPayload(payload: Record<string, unknown>): {
  sessionId: string;
  paymentDetails: PostPaymentFormPaymentDetails;
  formData: PostPaymentFormData;
} {
  const paymentDetails = (payload.paymentDetails || {}) as PostPaymentFormPaymentDetails;

  return {
    sessionId: typeof payload.sessionId === 'string' ? payload.sessionId : '',
    paymentDetails,
    formData: {
      gender: String(payload.gender || ''),
      completedFoodSafetyUnits: String(payload.completedFoodSafetyUnits || ''),
      usi: String(payload.usi || ''),
      australianCitizen: String(payload.australianCitizen || ''),
      countryOfBirth: String(payload.countryOfBirth || ''),
      aboriginalOrTorresStraitIslander: String(
        payload.aboriginalOrTorresStraitIslander || '',
      ),
      englishProficiency: String(payload.englishProficiency || ''),
      hasDisability: String(payload.hasDisability || ''),
      disabilityTypes: Array.isArray(payload.disabilityTypes)
        ? payload.disabilityTypes.map(String)
        : [],
      disabilityOther: String(payload.disabilityOther || ''),
      highestCompletedSchoolLevel: String(
        payload.highestCompletedSchoolLevel || '',
      ),
      stillAttendingSchool: String(payload.stillAttendingSchool || ''),
      highestQualificationCompleted: String(
        payload.highestQualificationCompleted || '',
      ),
      currentEmploymentStatus: String(payload.currentEmploymentStatus || ''),
      mainReasonForCourse: String(payload.mainReasonForCourse || ''),
      currentOrFormerAbmStudent: String(
        payload.currentOrFormerAbmStudent || '',
      ),
      abmStudentId: String(payload.abmStudentId || ''),
      acceptedPrivacyNoticeAndDeclaration:
        payload.acceptedPrivacyNoticeAndDeclaration === true,
      signature: String(payload.signature || ''),
      signatureDate: String(payload.signatureDate || ''),
    },
  };
}

export function validatePostPaymentComplianceForm(
  form: PostPaymentComplianceFormState,
  options?: { requireFoodSafetyUnits?: boolean },
): string | null {
  if (
    options?.requireFoodSafetyUnits &&
    !form.completedFoodSafetyUnits
  ) {
    return 'Please indicate whether you have completed SITXFSA005 and SITXFSA006.';
  }
  if (!form.acceptedPrivacyNoticeAndDeclaration) {
    return 'Please agree to the privacy notice and student declaration before submitting.';
  }
  if (!form.signature.trim() && !form.signatureDate.trim()) {
    return 'Please complete signature and date.';
  }
  if (!form.signature.trim()) {
    return 'Please sign in the signature box before submitting.';
  }
  if (!form.signatureDate.trim()) {
    return 'Please select the signature date.';
  }
  return null;
}

export function applyCapturedSignature(
  form: PostPaymentComplianceFormState,
  capturedSignature: string,
): PostPaymentComplianceFormState {
  const signature = capturedSignature.trim() || form.signature.trim();
  if (signature === form.signature) {
    return form;
  }
  return { ...form, signature };
}
