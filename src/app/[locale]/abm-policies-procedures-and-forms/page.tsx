'use client';

import React from 'react';
import { Download } from 'lucide-react';
import FadeIn from '@/components/common/FadeIn';
import Link from 'next/link';

interface PolicyDocument {
  title: string;
  filename: string;
  description?: string;
}

const policyDocuments: PolicyDocument[] = [
  {
    title: 'International Student Handbook',
    filename: 'International_Student_Handbook.pdf',
    description: 'Comprehensive guide for international students',
  },
  {
    title: 'Course Credit Policy',
    filename: 'Course_Credit_Policy.pdf',
    description: 'Policy for course credit recognition and transfer',
  },
  {
    title: 'International Student Refund Policy',
    filename: 'International_Student_Refund_Policy.pdf',
    description: 'Refund procedures for international students',
  },
  {
    title: 'Student Support Services Policy',
    filename: 'Student_Support_Services_Policy.pdf',
    description: 'Available support services for students',
  },
  {
    title: 'Critical Incident Policy',
    filename: 'Critical_Incident_Policy.pdf',
    description: 'Procedures for handling critical incidents',
  },
  {
    title: 'Deferring, Suspending or Cancelling the Student Enrolment Policy',
    filename: 'Deferring_Suspending_Cancelling_Enrolment_Policy.pdf',
    description: 'Policy for enrollment changes and cancellations',
  },
  {
    title: 'Fees and Refund Policy',
    filename: 'Fees_and_Refund_Policy.pdf',
    description: 'General fees and refund procedures',
  },
  {
    title: 'Complaints and Appeals – International-Domestic-Staff',
    filename: 'Complaints_and_Appeals_Policy.pdf',
    description: 'Complaints and appeals procedures for all stakeholders',
  },
  {
    title: 'Attendance Policy',
    filename: 'Attendance_Policy.pdf',
    description: 'Student attendance requirements and monitoring',
  },
  {
    title: 'Privacy Policy',
    filename: 'Privacy_Policy.pdf',
    description: 'How we collect, use, and protect your personal information',
  },
];

export default function PoliciesPage() {
  const handleDownload = (filename: string, title: string) => {
    // 실제 PDF 파일이 있다면 해당 경로로 수정
    const filePath = `/files/policies/${filename}`;

    // 파일 다운로드 링크 생성
    const link = document.createElement('a');
    link.href = filePath;
    link.download = filename;
    link.target = '_blank';

    // 파일이 존재하는지 확인 (실제 구현에서는 서버에서 확인)
    fetch(filePath, { method: 'HEAD' })
      .then((response) => {
        if (response.ok) {
          link.click();
        } else {
          // 파일이 없는 경우 알림
          alert(
            `PDF file for "${title}" is not available yet. Please contact us for more information.`
          );
        }
      })
      .catch(() => {
        alert(
          `PDF file for "${title}" is not available yet. Please contact us for more information.`
        );
      });
  };

  return (
    <div className="max-w-[1200px] mx-auto px-16 md:px-0 pb-40">
      <FadeIn>
        <div className="pt-140">
          <h1 className="text-3xl md:text-4xl font-bold py-20 mb-30">
            ABM Policies and Procedures
          </h1>

          <div className="mb-50">
            <p className="text-lg text-gray-700 leading-relaxed">
              ABM Further Education is committed to maintaining high standards
              of education and student support. Our policies and procedures
              ensure transparency, fairness, and quality in all aspects of our
              operations.
            </p>
          </div>

          <div className="bg-white  shadow-sm border border-gray-200 p-30 md:p-40">
            <h2 className="text-2xl font-semibold text-gray-800 mb-30">
              Policies and Procedures
            </h2>

            <div className="grid gap-20">
              {policyDocuments.map((document, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center justify-between p-20 border border-gray-100  hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1 mb-15 md:mb-0">
                    <h3 className="text-lg font-medium text-gray-800 mb-5">
                      {document.title}
                    </h3>
                    {document.description && (
                      <p className="text-sm text-gray-600">
                        {document.description}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() =>
                      handleDownload(document.filename, document.title)
                    }
                    className="flex items-center gap-10 px-20 py-12 bg-primary text-white  hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    <Download size={16} />
                    Download PDF
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-50 p-30 bg-orange-50  border border-orange-200">
            <h3 className="text-lg font-semibold text-orange-800 mb-15">
              Need Help?
            </h3>
            <p className="text-orange-700 mb-20">
              If you have any questions about our policies or need assistance
              understanding any procedures, please don&apos;t hesitate to
              contact our student support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-15">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-20 py-12 bg-primary-bk text-white transition-colors text-sm font-medium"
              >
                Contact Us
              </Link>
              <Link
                href="/current-students"
                className="inline-flex items-center justify-center px-20 py-12 bg-white text-black border border-primary-bk  hover:bg-orange-50 transition-colors text-sm font-medium"
              >
                Student Portal
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
