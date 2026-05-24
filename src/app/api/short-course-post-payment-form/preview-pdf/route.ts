import { NextRequest, NextResponse } from 'next/server';
import { parsePostPaymentFormPayload } from '@/lib/post-payment-form-types';
import { buildPostPaymentFormPdf } from '@/lib/post-payment-form-pdf';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    const { sessionId, paymentDetails, formData } =
      parsePostPaymentFormPayload(payload);

    const pdfBytes = await buildPostPaymentFormPdf({
      sessionId: sessionId || 'preview-session',
      paymentDetails,
      formData,
    });

    return new NextResponse(Buffer.from(pdfBytes), {
      status: 200,
      headers: {
        'content-type': 'application/pdf',
        'content-disposition': 'inline; filename="post-payment-form-preview.pdf"',
      },
    });
  } catch (error) {
    console.error('Failed to preview post-payment PDF:', error);
    return NextResponse.json(
      { ok: false, error: 'Failed to generate preview PDF.' },
      { status: 500 },
    );
  }
}
