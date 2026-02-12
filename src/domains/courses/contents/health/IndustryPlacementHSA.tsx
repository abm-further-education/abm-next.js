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
          <div>
            <p className="text-sm font-semibold text-gray-900">
              Full immunisation record
            </p>
            <p className="text-sm text-gray-600">
              (with a certified English translation)
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
