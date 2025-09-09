import { NextRequest, NextResponse } from 'next/server';
import { getServerStripe } from '@/lib/stripe';
import { CartItem } from '@/types/cart';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      items,
      totalAmount,
      discountAmount,
      finalAmount,
      appliedPromo,
      customerInfo,
      additionalInfo,
    } = body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'No items in cart' }, { status: 400 });
    }

    // 주문번호 생성 (YYYYMMDD-HHMMSS-XXXX 형식)
    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10).replace(/-/g, '');
    const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, '');
    const randomStr = Math.random().toString(36).substring(2, 6).toUpperCase();
    const orderNumber = `${dateStr}-${timeStr}-${randomStr}`;

    // Stripe Checkout Session 생성
    const stripe = getServerStripe();

    // 라인 아이템 생성 (각 코스별로)
    const lineItems = items.map((item: CartItem) => ({
      price_data: {
        currency: 'aud',
        product_data: {
          name: item.title,
          description: `Course: ${item.title}${
            item.selectedDate ? ` - Date: ${item.selectedDate}` : ''
          }${item.selectedType ? ` - Type: ${item.selectedType}` : ''}`,
        },
        unit_amount: item.price * 100, // Stripe는 센트 단위
      },
      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${
        process.env.NEXTAUTH_URL || 'https://abm.edu.au'
      }/payment/success?session_id={CHECKOUT_SESSION_ID}&order_number=${orderNumber}`,
      cancel_url: `${process.env.NEXTAUTH_URL || 'https://abm.edu.au'}/cart`,
      metadata: {
        orderNumber,
        items: JSON.stringify(items),
        totalAmount: totalAmount.toString(),
        discountAmount: discountAmount.toString(),
        finalAmount: finalAmount.toString(),
        appliedPromo: appliedPromo || '',
        customerInfo: JSON.stringify(customerInfo),
        additionalInfo: JSON.stringify(additionalInfo),
        isMultiCourse: 'true',
      },
      customer_creation: 'always',
      billing_address_collection: 'required',
      ...(customerInfo?.email && { customer_email: customerInfo.email }),
    });

    return NextResponse.json({ sessionId: session.id, orderNumber });
  } catch (error) {
    console.error('Cart checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
