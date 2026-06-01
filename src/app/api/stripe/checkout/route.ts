import { NextRequest, NextResponse } from 'next/server';
import { getServerStripe } from '@/lib/stripe';
import getShortCourseData from '@/lib/shortCourseData';
import { getShortCourseCapacityStatus } from '@/lib/short-course-capacity';
import {
  buildCheckoutCourseDisplayName,
  CHECKOUT_COURSE_PRICE_MAP,
} from '@/lib/checkout-course-selection';
import { evaluateCheckoutPromotion } from '@/lib/checkout-promo-codes';

function buildStripeProductDescription(
  courseData: {
    title: string;
    description?: string;
    courseOverview?: string;
  },
  courseName?: string,
): string {
  const fromCourse =
    courseData.description?.trim() || courseData.courseOverview?.trim();
  if (fromCourse) {
    return fromCourse;
  }

  const name = (courseName || courseData.title).trim();
  return name
    ? `Short course enrolment at ABM Further Education: ${name}`
    : 'Short course enrolment at ABM Further Education';
}

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
      selectedCourses,
      locale,
      courseLocation,
      finalPrice,
      totalPriceWithSurcharge,
    } = body;

    const normalizedLocale =
      typeof locale === 'string' && locale.trim().length > 0
        ? locale
        : 'en';

    // 코스 데이터 가져오기
    const courseData = getShortCourseData('en')[courseSlug];

    if (!courseData) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }

    const normalizedSelectedCourses = Array.isArray(selectedCourses)
      ? selectedCourses.filter((item: unknown): item is string =>
          typeof item === 'string'
        )
      : [];
    const hasMultiCourseSelection = normalizedSelectedCourses.length > 0;
    const hasInvalidCourseSelection = normalizedSelectedCourses.some(
      (item) => !(item in CHECKOUT_COURSE_PRICE_MAP)
    );

    if (hasInvalidCourseSelection) {
      return NextResponse.json(
        { error: 'Invalid course selection.' },
        { status: 400 }
      );
    }

    const basePrice = hasMultiCourseSelection
      ? normalizedSelectedCourses.reduce(
          (sum, item) => sum + CHECKOUT_COURSE_PRICE_MAP[item],
          0
        )
      : courseData.price;
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

    const cancelPath =
      courseSlug === 'rsa' || courseSlug === 'fss'
        ? `/${normalizedLocale}/cookery-and-hospitality-courses/${courseSlug}`
        : `/${normalizedLocale}/custom-programs/${courseSlug}`;
    const successPath = `/${normalizedLocale}/payment/success?session_id={CHECKOUT_SESSION_ID}`;

    const productName = buildCheckoutCourseDisplayName(
      normalizedSelectedCourses,
      courseName || courseData.title,
    );

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'aud',
            product_data: {
              name: productName,
              description: buildStripeProductDescription(
                courseData,
                productName,
              ),
            },
            unit_amount: Math.round(expectedTotalNum * 100), // Stripe는 센트 단위
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${
        process.env.NEXTAUTH_URL || 'https://abm.edu.au'
      }${successPath}`,
      cancel_url: `${
        process.env.NEXTAUTH_URL || 'https://abm.edu.au'
      }${cancelPath}`,
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
        courseName: productName,
        selectedDate: selectedDate || '',
        selectedType: selectedType || '',
        selectedCourses: normalizedSelectedCourses.join(', '),
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
