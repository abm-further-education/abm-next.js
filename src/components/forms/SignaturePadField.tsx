'use client';

import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';

interface SignaturePadFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export default function SignaturePadField({
  label,
  value,
  onChange,
}: SignaturePadFieldProps) {
  const signatureRef = useRef<SignatureCanvas | null>(null);

  const handleEnd = () => {
    const signaturePad = signatureRef.current;
    if (!signaturePad || signaturePad.isEmpty()) {
      onChange('');
      return;
    }

    onChange(signaturePad.getTrimmedCanvas().toDataURL('image/png'));
  };

  const handleClear = () => {
    signatureRef.current?.clear();
    onChange('');
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-8 mb-6">
        <label className="block font-semibold">{label}</label>
        <button
          type="button"
          onClick={handleClear}
          className="text-sm text-primary underline"
        >
          Clear signature
        </button>
      </div>
      <div className="border border-gray-300 bg-white">
        <SignatureCanvas
          ref={signatureRef}
          onEnd={handleEnd}
          canvasProps={{
            className: 'w-full h-180',
          }}
        />
      </div>
      <p className="mt-4 text-xs text-gray-500">
        Please sign in the box above.
      </p>
      {value ? (
        <p className="mt-4 text-xs text-green-700">Signature captured.</p>
      ) : null}
    </div>
  );
}
