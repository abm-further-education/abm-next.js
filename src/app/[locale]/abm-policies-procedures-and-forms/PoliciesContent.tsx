'use client';

import React from 'react';
import { Download } from 'lucide-react';
import FadeIn from '@/components/common/FadeIn';
import Link from 'next/link';

interface PolicyDocument {
  id: string;
  title: string;
  description: string | null;
  filename: string;
  file_url: string;
}

interface PoliciesContentProps {
  documents: PolicyDocument[];
}

export default function PoliciesContent({ documents }: PoliciesContentProps) {
  const handleViewPdf = (fileUrl: string, title: string) => {
    if (fileUrl) {
      window.open(fileUrl, '_blank');
    } else {
      alert(
        `PDF file for "${title}" is not available yet. Please contact us for more information.`
      );
    }
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

          <div className="bg-white shadow-sm border border-gray-200 p-30 md:p-40">
            <h2 className="text-2xl font-semibold text-gray-800 mb-30">
              Policies and Procedures
            </h2>

            {documents.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <p>
                  Policy documents are currently being updated. Please check
                  back later or contact us for more information.
                </p>
              </div>
            ) : (
              <div className="grid gap-20">
                {documents.map((document) => (
                  <div
                    key={document.id}
                    className="flex flex-col md:flex-row md:items-center justify-between p-20 border border-gray-100 hover:bg-gray-50 transition-colors"
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
                        handleViewPdf(document.file_url, document.title)
                      }
                      className="flex items-center gap-10 px-20 py-12 bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                      <Download size={16} />
                      View PDF
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-50 p-30 bg-orange-50 border border-orange-200">
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
                className="inline-flex items-center justify-center px-20 py-12 bg-white text-black border border-primary-bk hover:bg-orange-50 transition-colors text-sm font-medium"
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
