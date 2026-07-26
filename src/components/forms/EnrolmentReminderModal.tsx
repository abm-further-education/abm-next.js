'use client';

import { AlertTriangle, X } from 'lucide-react';

interface EnrolmentReminderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnrolmentReminderModal({
  isOpen,
  onClose,
}: EnrolmentReminderModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] px-16">
      <div className="bg-white max-w-lg w-full p-24 relative shadow-2xl border-t-8 border-red-600">
        <button
          onClick={onClose}
          className="absolute top-12 right-12 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-14">
          <AlertTriangle size={28} className="text-red-600 shrink-0" />
          <h2 className="text-xl font-bold text-red-700">
            IMPORTANT! Complete Enrolment
          </h2>
        </div>

        <div className="bg-red-50 border border-red-200 text-red-800 p-14 text-sm font-semibold leading-relaxed">
          WAIT! DO NOT CLOSE THIS PAGE. Your enrolment is NOT complete until
          you fill out the required details below (including your USI).
        </div>

        <button
          onClick={onClose}
          className="mt-18 w-full bg-primary-bk text-white px-20 py-10 font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Got it, continue
        </button>
      </div>
    </div>
  );
}
