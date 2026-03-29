import { NextRequest, NextResponse } from 'next/server';
import { getServerStripe } from '@/lib/stripe';
import getShortCourseData from '@/lib/shortCourseData';
import { getShortCourseCapacityStatus } from '@/lib/short-course-capacity';
import { evaluateCheckoutPromotion } from '@/lib/checkout-promo-codes';

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
      finalPrice,
      totalPriceWithSurcharge,
    } = body;

    // 코스 데이터 가져오기
    const courseData = getShortCourseData('en')[courseSlug];

    if (!courseData) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }

    const basePrice = courseData.price;
    const promoEval = evaluateCheckoutPromotion(
      typeof promotionCode === 'string' ? promotionCode : '',
      courseSlug,
      basePrice
    );

    if (promoEval.kind === 'invalid') {
      return NextResponse.json(
        { error: 'Invalid promotion code.' },
        { status: 400 }
      );
    }
    if (promoEval.kind === 'wrong_course') {
      return NextResponse.json({ error: promoEval.message }, { status: 400 });
    }

    const serverDiscountedPrice =
      promoEval.kind === 'applied' ? promoEval.discountedPrice : basePrice;
    const expectedTotalWithSurcharge = (serverDiscountedPrice * 1.0193).toFixed(
      2
    );
    const expectedTotalNum = parseFloat(expectedTotalWithSurcharge);

    const clientTotalNum =
      totalPriceWithSurcharge !== undefined
        ? parseFloat(String(totalPriceWithSurcharge))
        : (finalPrice !== undefined ? Number(finalPrice) : basePrice) * 1.0193;

    if (
      Number.isNaN(clientTotalNum) ||
      Math.abs(clientTotalNum - expectedTotalNum) > 0.05
    ) {
      return NextResponse.json(
        { error: 'Invalid price. Please refresh the page and try again.' },
        { status: 400 }
      );
    }

    if (courseSlug && selectedDate) {
      try {
        const capacity = await getShortCourseCapacityStatus(courseSlug, selectedDate);

        if (capacity.capacityCheckAvailable && capacity.isFull) {
          return NextResponse.json(
            { error: 'This class is already full. Please choose another date.' },
            { status: 409 }
          );
        }
      } catch {}
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
            unit_amount: Math.round(expectedTotalNum * 100), // Stripe는 센트 단위
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${
        process.env.NEXTAUTH_URL || 'https://abm.edu.au'
      }/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${
        process.env.NEXTAUTH_URL || 'https://abm.edu.au'
      }/custom-programs/${courseSlug}`,
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
        surcharge: (expectedTotalNum - serverDiscountedPrice).toFixed(2),
        ...(promoEval.kind === 'applied' && { appliedPromo: promoEval.code }),
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
