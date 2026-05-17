import React from 'react';
import { CheckCircle, FileText, AlertCircle } from 'lucide-react';

function IndustryPlacementHSA() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-8">
        Industry Placement Requirements (80 Hours)
      </h2>
      <p className="text-sm text-gray-700 mb-20">
        To complete the mandatory 80 hours of industry placement, students must
        prepare the following documents:
      </p>

      <div className="space-y-12 mb-30">
        <div className="flex items-start gap-12">
          <FileText className="w-20 h-20 text-primary mt-1 shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900">
              Full immunisation record
            </p>
            <p className="text-sm text-gray-600">
              (with a certified English translation)
            </p>
            <div className="mt-8 space-y-6 text-sm text-gray-700">
              <p>
                <span className="font-semibold text-gray-900">
                  dTpa (Diphtheria, Tetanus, Pertussis / Whooping Cough)
                </span>{' '}
                - 1 adult dose within the last 10 years
              </p>
              <p>
                <span className="font-semibold text-gray-900">Hepatitis B</span>{' '}
                - Full vaccination course (Plus blood test showing Anti-HBs ≥
                10mIU/mL, or other accepted evidence)
              </p>
              <p>
                <span className="font-semibold text-gray-900">
                  MMR (Measles, Mumps, Rubella)
                </span>{' '}
                - 2 doses at least 1 month apart Or positive serology/born
                before 1966
              </p>
              <p>
                <span className="font-semibold text-gray-900">
                  Varicella (Chickenpox)
                </span>{' '}
                - 2 doses of vaccine Or positive immunity evidence/AIR
                statement
              </p>
              <p>
                <span className="font-semibold text-gray-900">
                  Tuberculosis (TB) Screening (if required)
                </span>{' '}
                IGRA or TST test depending on background/travel history
              </p>
              <p>
                <span className="font-semibold text-gray-900">
                  Influenza Vaccine
                </span>{' '}
                Current seasonal flu vaccine each year
              </p>
              <p>
                <span className="font-semibold text-gray-900">
                  COVID-19 Vaccine
                </span>{' '}
                Strongly recommended to stay up to date
              </p>
            </div>
            <p className="mt-12 text-sm text-gray-600">
              *Please note that immunisation and screening requirements may vary
              depending on individual hospital or placement provider
              requirements at the time of placement. Additional vaccinations,
              tests, or updated evidence may be requested by the hospital
              before clinical placement commencement.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-12">
          <CheckCircle className="w-20 h-20 text-primary mt-1 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-gray-900">
              National Police Check
            </p>
            <p className="text-sm text-gray-600">
              (apply after arriving in Australia)
            </p>
          </div>
        </div>

        <div className="flex items-start gap-12">
          <CheckCircle className="w-20 h-20 text-primary mt-1 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-gray-900">
              Working With Children Check
            </p>
            <p className="text-sm text-gray-600">
              (apply after arriving in Australia)
            </p>
          </div>
        </div>

        <div className="flex items-start gap-12">
          <CheckCircle className="w-20 h-20 text-primary mt-1 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-gray-900">
              NDIS Worker Check
            </p>
            <p className="text-sm text-gray-600">
              (apply after arriving in Australia)
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-20">
        <div className="flex items-start gap-12">
          <AlertCircle className="w-20 h-20 text-primary mt-1 shrink-0" />
          <p className="text-sm text-gray-700">
            ABM will provide guidance on how to apply for these checks once you
            are in Australia.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IndustryPlacementHSA;
