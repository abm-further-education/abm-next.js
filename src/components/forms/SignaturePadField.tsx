'use client';

import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';
import SignatureCanvas from 'react-signature-canvas';

export type SignaturePadHandle = {
  capture: () => string;
};

interface SignaturePadFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

function readSignatureDataUrl(pad: SignatureCanvas): string {
  if (pad.isEmpty()) {
    return '';
  }

  // Avoid getTrimmedCanvas(): trim-canvas breaks under Next.js ESM bundling.
  return pad.getCanvas().toDataURL('image/png');
}

const SignaturePadField = forwardRef<SignaturePadHandle, SignaturePadFieldProps>(
  function SignaturePadField({ label, value, onChange }, ref) {
    const signatureRef = useRef<SignatureCanvas | null>(null);

    const capture = useCallback((): string => {
      const signaturePad = signatureRef.current;
      if (!signaturePad) {
        return '';
      }
      return readSignatureDataUrl(signaturePad);
    }, []);

    useImperativeHandle(ref, () => ({ capture }), [capture]);

    const syncSignature = useCallback(() => {
      onChange(capture());
    }, [capture, onChange]);

    const handleEnd = () => {
      syncSignature();
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
            clearOnResize={false}
            canvasProps={{
              className: 'w-full h-180',
            }}
          />
        </div>
        <p className="mt-4 text-xs text-gray-500">
          Please sign in the box above, then lift your finger or mouse before
          submitting.
        </p>
        {value ? (
          <p className="mt-4 text-xs text-green-700">Signature captured.</p>
        ) : null}
      </div>
    );
  },
);

export default SignaturePadField;
