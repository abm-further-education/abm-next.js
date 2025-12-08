import React from 'react';
import Image from 'next/image';

function CertIIIHSA() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-40">
        {/* Dimmed overlay */}

        {/* Content */}
        <div className="relative z-10 bg-white">
          <div
            className="relative bg-cover bg-[20%_20%] bg-no-repeat h-120 p-20"
            style={{
              backgroundImage: 'url(/courses/health/health_2.png)',
            }}
          >
            {/* Dimmed overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            <h2 className="text-lg md:text-xl font-bold text-primary absolute bottom-20">
              Nursing Support Pathway Flow
            </h2>
          </div>
          <div className="p-20">
            {/* Course Progression Structure */}
            <Image
              src="/courses/health/hsa-flow.png"
              alt="HSA Flow"
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
            {/* <CourseProgress
              courses={[
                {
                  title: 'English for Healthcare Communication',
                  duration: '12 weeks',
                },
                {
                  code: 'HLT33115',
                  title: 'Certificate III in Health Services Assistance',
                  duration: '16 weeks',
                },
                {
                  title: 'Placement',
                  duration: '80 hours',
                },
              ]}
              activeIndex={1}
            /> */}
            <span className="text-sm text-primary">
              * If the student has IELTS 4.5 or equivalent through ABM EPT,
              enrol with Plus Nursing English .
            </span>

            {/* Course Description */}
            <div className="text-gray-600 mb-8">
              <h3 className="text-base font-bold mb-8">Course Duration</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                <li>
                  <span className="font-semibold">Qualification duration:</span>{' '}
                  16 weeks
                </li>
                <li>
                  <span className="font-semibold">Work Placement:</span> 80
                  hours in real healthcare settings
                </li>
                <li>No Holiday breaks</li>
              </ul>
            </div>
            <div className="text-gray-600 mb-8">
              <h3 className="text-base font-bold mb-8">Entry Requirements</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                <li>Age: 18 years+ , English: IELTS 5.5 or equivalent</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative z-10 bg-white">
          <div
            className="relative bg-cover bg-[10%_10%] bg-no-repeat h-120 p-20"
            style={{
              backgroundImage: 'url(/courses/health/health_1.png)',
            }}
          >
            {/* Dimmed overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            <h2 className="text-lg md:text-xl absolute bottom-20 font-bold text-primary">
              Key Benefits & Work Placement info
            </h2>
          </div>
          <div className="p-20">
            {/*  Work Placement Information */}
            <div className="text-gray-600 mb-8">
              <h3 className="text-base font-bold mb-8">
                Work Placement Information
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                <li>
                  80 hours of supervised work placement in hospitals and aged
                  care facilities
                </li>
                <li>
                  Opportunity to apply classroom learning in real healthcare
                  environments
                </li>
                <li>
                  Build confidence and gain hands-on experience working
                  alongside professionals
                </li>
                <li>Placement assistance provided by ABM staff</li>
              </ul>
            </div>
            <div className="text-gray-600 mb-8">
              <h3 className="text-base font-bold mb-8">
                Key Industry partners
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                <li>Private Hospitals, Medical Centres , Aged Care Centres</li>
              </ul>
            </div>
            {/*  Why Choose This Programme? */}
            <div className="text-gray-600 mb-8">
              <h3 className="text-base font-bold mb-8">
                Why Choose This Programme?
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                <li>
                  Learn in a supportive, face-to-face classroom environment
                </li>
                <li>Build specialised English for healthcare communication</li>
                <li>Gain a nationally recognised qualification</li>
                <li>
                  Complete 80 hours of work placement in real healthcare
                  settings
                </li>
                <li>
                  Suitable for those with or without prior healthcare experience
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertIIIHSA;
