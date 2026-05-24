import { NextRequest, NextResponse } from 'next/server';
import { parsePostPaymentFormPayload } from '@/lib/post-payment-form-types';
import { sendPostPaymentFormEmail } from '@/lib/post-payment-form-email';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    const { sessionId, paymentDetails, formData } =
      parsePostPaymentFormPayload(payload);

    await sendPostPaymentFormEmail({
      sessionId,
      paymentDetails,
      formData,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Failed to send post-payment form:', error);
    return NextResponse.json(
      { ok: false, error: 'Failed to submit post-payment form.' },
      { status: 500 },
    );
  }
}
