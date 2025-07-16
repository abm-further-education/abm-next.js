import { NextRequest, NextResponse } from 'next/server';
import { getServerStripe } from '@/lib/stripe';
import { shortCourseData } from '@/lib/shortCourseData';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      courseSlug,
      name,
      email,
      promotionCode,
      courseName,
      firstName,
      lastName,
      phone,
      preferredDate,
      otherInquiries,
      howDidYouHear,
      referrerName,
      selectedDate,
      selectedType,
      courseLocation,
    } = body;

    // 코스 데이터 가져오기
    const courseData = shortCourseData[courseSlug];

    if (!courseData) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }

    // Stripe Checkout Session 생성
    const stripe = getServerStripe();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'aud',
            product_data: {
              name: courseName || courseData.title,
              description: courseData.description || '',
            },
            unit_amount: courseData.price * 100, // Stripe는 센트 단위
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${
        process.env.NEXTAUTH_URL || 'http://localhost:3000'
      }/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${
        process.env.NEXTAUTH_URL || 'http://localhost:3000'
      }/short-courses/${courseSlug}`,
      metadata: {
        courseSlug,
        firstName: firstName || name || '',
        lastName: lastName || '',
        email: email || '',
        phone: phone || '',
        preferredDate: preferredDate || '',
        otherInquiries: otherInquiries || '',
        howDidYouHear: howDidYouHear || '',
        referrerName: referrerName || '',
        promotionCode: promotionCode || '',
        courseName: courseName || courseData.title,
        selectedDate: selectedDate || '',
        selectedType: selectedType || '',
        courseLocation: courseLocation || courseData.location || '',
      },
      customer_creation: 'always',
      billing_address_collection: 'required',
      ...(email && { customer_email: email }),
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
