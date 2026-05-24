'use client';

import CountrySelectField from '@/components/forms/CountrySelectField';
import SignaturePadField from '@/components/forms/SignaturePadField';
import type { PostPaymentComplianceFormState } from '@/lib/post-payment-form-types';

interface PostPaymentComplianceFormFieldsProps {
  form: PostPaymentComplianceFormState;
  onChange: (
    updater: (
      prev: PostPaymentComplianceFormState,
    ) => PostPaymentComplianceFormState,
  ) => void;
}

export default function PostPaymentComplianceFormFields({
  form,
  onChange,
}: PostPaymentComplianceFormFieldsProps) {
  const toggleDisabilityType = (type: string) => {
    onChange((prev) => ({
      ...prev,
      disabilityTypes: prev.disabilityTypes.includes(type)
        ? prev.disabilityTypes.filter((item) => item !== type)
        : [...prev.disabilityTypes, type],
    }));
  };

  return (
    <>
      <div>
        <p className="font-semibold mb-6">Gender</p>
        <div className="flex flex-wrap gap-10">
          {(['Male', 'Female', 'Other', 'Prefer not to say'] as const).map(
            (option) => (
              <label
                key={option}
                className="flex items-center gap-6 text-sm"
              >
                <input
                  type="radio"
                  name="gender"
                  checked={form.gender === option}
                  onChange={() =>
                    onChange((prev) => ({ ...prev, gender: option }))
                  }
                />
                {option}
              </label>
            ),
          )}
        </div>
      </div>

      <div>
        <p className="font-semibold mb-6">
          Have you completed SITXFSA005 and SITXFSA006?
        </p>
        <div className="flex gap-10">
          {(['Yes', 'No'] as const).map((option) => (
            <label key={option} className="flex items-center gap-6 text-sm">
              <input
                type="radio"
                checked={form.completedFoodSafetyUnits === option}
                onChange={() =>
                  onChange((prev) => ({
                    ...prev,
                    completedFoodSafetyUnits: option,
                  }))
                }
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-4">USI</label>
        <input
          type="text"
          value={form.usi}
          onChange={(e) =>
            onChange((prev) => ({ ...prev, usi: e.target.value }))
          }
          className="w-full border border-gray-300 px-10 py-8 text-sm"
        />
      </div>

      <div>
        <p className="font-semibold mb-6">Ethnicity & Language</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="mb-4 text-sm">Are you an Australian citizen?</p>
            <div className="flex gap-10 mb-8">
              {(['Yes', 'No'] as const).map((option) => (
                <label key={option} className="flex items-center gap-6 text-sm">
                  <input
                    type="radio"
                    checked={form.australianCitizen === option}
                    onChange={() =>
                      onChange((prev) => ({
                        ...prev,
                        australianCitizen: option,
                      }))
                    }
                  />
                  {option}
                </label>
              ))}
            </div>
            <CountrySelectField
              label="Country of Birth"
              value={form.countryOfBirth}
              onChange={(value) =>
                onChange((prev) => ({ ...prev, countryOfBirth: value }))
              }
            />
          </div>
          <div>
            <p className="mb-4 text-sm">
              Are you of Aboriginal or Torres Strait Islander origin?
            </p>
            <div className="flex gap-10 mb-8">
              {(['Yes', 'No'] as const).map((option) => (
                <label key={option} className="flex items-center gap-6 text-sm">
                  <input
                    type="radio"
                    checked={form.aboriginalOrTorresStraitIslander === option}
                    onChange={() =>
                      onChange((prev) => ({
                        ...prev,
                        aboriginalOrTorresStraitIslander: option,
                      }))
                    }
                  />
                  {option}
                </label>
              ))}
            </div>
            <p className="mb-4 text-sm">English Proficiency</p>
            <div className="grid grid-cols-2 gap-6">
              {(['Very well', 'Well', 'Not well', 'Not at all'] as const).map(
                (option) => (
                  <label
                    key={option}
                    className="flex items-center gap-6 text-sm"
                  >
                    <input
                      type="radio"
                      checked={form.englishProficiency === option}
                      onChange={() =>
                        onChange((prev) => ({
                          ...prev,
                          englishProficiency: option,
                        }))
                      }
                    />
                    {option}
                  </label>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="font-semibold mb-6">Additional Information</p>
        <p className="mb-4 text-sm">
          Do you consider yourself to have a disability, impairment, or
          long-term condition?
        </p>
        <div className="flex gap-10 mb-8">
          {(['Yes', 'No'] as const).map((option) => (
            <label key={option} className="flex items-center gap-6 text-sm">
              <input
                type="radio"
                checked={form.hasDisability === option}
                onChange={() =>
                  onChange((prev) => ({
                    ...prev,
                    hasDisability: option,
                    disabilityTypes:
                      option === 'No' ? [] : prev.disabilityTypes,
                    disabilityOther:
                      option === 'No' ? '' : prev.disabilityOther,
                  }))
                }
              />
              {option}
            </label>
          ))}
        </div>
        {form.hasDisability === 'Yes' && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {[
                'Hearing',
                'Vision',
                'Physical',
                'Intellectual',
                'Learning',
                'Medical',
                'Mental illness',
                'Acquired brain impairment',
                'Other',
              ].map((type) => (
                <label key={type} className="flex items-center gap-6 text-sm">
                  <input
                    type="checkbox"
                    checked={form.disabilityTypes.includes(type)}
                    onChange={() => toggleDisabilityType(type)}
                  />
                  {type}
                </label>
              ))}
            </div>
            {form.disabilityTypes.includes('Other') && (
              <input
                type="text"
                placeholder="Other disability details"
                value={form.disabilityOther}
                onChange={(e) =>
                  onChange((prev) => ({
                    ...prev,
                    disabilityOther: e.target.value,
                  }))
                }
                className="w-full border border-gray-300 px-10 py-8 text-sm"
              />
            )}
          </>
        )}
      </div>

      <div>
        <p className="font-semibold mb-6">Education & Employment</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <input
            type="text"
            placeholder="Highest completed school level"
            value={form.highestCompletedSchoolLevel}
            onChange={(e) =>
              onChange((prev) => ({
                ...prev,
                highestCompletedSchoolLevel: e.target.value,
              }))
            }
            className="w-full border border-gray-300 px-10 py-8 text-sm"
          />
          <div>
            <p className="mb-4 text-sm">Are you still attending school?</p>
            <div className="flex gap-10">
              {(['Yes', 'No'] as const).map((option) => (
                <label key={option} className="flex items-center gap-6 text-sm">
                  <input
                    type="radio"
                    checked={form.stillAttendingSchool === option}
                    onChange={() =>
                      onChange((prev) => ({
                        ...prev,
                        stillAttendingSchool: option,
                      }))
                    }
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
          <input
            type="text"
            placeholder="Highest qualification completed"
            value={form.highestQualificationCompleted}
            onChange={(e) =>
              onChange((prev) => ({
                ...prev,
                highestQualificationCompleted: e.target.value,
              }))
            }
            className="w-full border border-gray-300 px-10 py-8 text-sm"
          />
          <input
            type="text"
            placeholder="Current employment status"
            value={form.currentEmploymentStatus}
            onChange={(e) =>
              onChange((prev) => ({
                ...prev,
                currentEmploymentStatus: e.target.value,
              }))
            }
            className="w-full border border-gray-300 px-10 py-8 text-sm"
          />
          <input
            type="text"
            placeholder="Main reason for undertaking this course"
            value={form.mainReasonForCourse}
            onChange={(e) =>
              onChange((prev) => ({
                ...prev,
                mainReasonForCourse: e.target.value,
              }))
            }
            className="w-full border border-gray-300 px-10 py-8 text-sm md:col-span-2"
          />
        </div>
      </div>

      <div>
        <p className="font-semibold mb-6">ABM Student Status</p>
        <div className="flex gap-10 mb-8">
          {(['Yes', 'No'] as const).map((option) => (
            <label key={option} className="flex items-center gap-6 text-sm">
              <input
                type="radio"
                checked={form.currentOrFormerAbmStudent === option}
                onChange={() =>
                  onChange((prev) => ({
                    ...prev,
                    currentOrFormerAbmStudent: option,
                    abmStudentId: option === 'No' ? '' : prev.abmStudentId,
                  }))
                }
              />
              {option}
            </label>
          ))}
        </div>
        {form.currentOrFormerAbmStudent === 'Yes' && (
          <input
            type="text"
            placeholder="ABM Student ID"
            value={form.abmStudentId}
            onChange={(e) =>
              onChange((prev) => ({ ...prev, abmStudentId: e.target.value }))
            }
            className="w-full border border-gray-300 px-10 py-8 text-sm"
          />
        )}
      </div>

      <div>
        <p className="font-semibold mb-6">Privacy Notice & Declaration</p>
        <label className="flex items-start gap-8 text-sm">
          <input
            type="checkbox"
            checked={form.acceptedPrivacyNoticeAndDeclaration}
            onChange={(e) =>
              onChange((prev) => ({
                ...prev,
                acceptedPrivacyNoticeAndDeclaration: e.target.checked,
              }))
            }
          />
          <span>
            I have read and agree to the privacy notice and student declaration.
            I understand ABM collects this information for compliance and
            enrolment purposes.
          </span>
        </label>
      </div>

      <div>
        <p className="font-semibold mb-6">Student Confirmation</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <SignaturePadField
            label="Signature"
            value={form.signature}
            onChange={(value) =>
              onChange((prev) => ({ ...prev, signature: value }))
            }
          />
          <div>
            <label className="block font-semibold mb-6">Date</label>
            <input
              type="date"
              value={form.signatureDate}
              onChange={(e) =>
                onChange((prev) => ({
                  ...prev,
                  signatureDate: e.target.value,
                }))
              }
              className="w-full border h-40 border-gray-300 px-10 py-8 text-sm"
            />
          </div>
        </div>
      </div>
    </>
  );
}
