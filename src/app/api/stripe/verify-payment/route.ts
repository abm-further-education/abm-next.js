import { NextRequest, NextResponse } from 'next/server';
import { getServerStripe } from '@/lib/stripe';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    // Stripe에서 세션 정보 가져오기
    const stripe = getServerStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['customer', 'payment_intent'],
    });

    if (session.payment_status !== 'paid') {
      return NextResponse.json(
        { error: 'Payment not completed' },
        { status: 400 }
      );
    }

    // 결제 정보 반환
    const paymentDetails = {
      courseSlug: session.metadata?.courseSlug,
      courseName: session.metadata?.courseName,
      selectedDate: session.metadata?.selectedDate,
      selectedType: session.metadata?.selectedType,
      customerEmail: session.customer_details?.email,
      amountPaid: session.amount_total ? session.amount_total / 100 : 0, // 센트를 달러로 변환
    };

    return NextResponse.json(paymentDetails);
  } catch (error) {
    console.error('Error verifying payment:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
