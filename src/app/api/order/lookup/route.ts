import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(request: NextRequest) {
  try {
    const { orderNumber } = await request.json();

    if (!orderNumber || typeof orderNumber !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Order number is required' },
        { status: 400 }
      );
    }

    // 다중 코스 주문 테이블에서 검색
    const { data: multiCourseOrder, error: multiCourseError } =
      await supabaseAdmin
        .from('multiCourseOrders')
        .select('*')
        .eq('order_number', orderNumber.trim())
        .single();

    if (multiCourseOrder && !multiCourseError) {
      // 다중 코스 주문을 찾은 경우
      return NextResponse.json({
        success: true,
        order: {
          ...multiCourseOrder,
          items:
            typeof multiCourseOrder.items === 'string'
              ? JSON.parse(multiCourseOrder.items)
              : multiCourseOrder.items,
        },
        orderType: 'multi-course',
      });
    }

    // 단일 코스 주문 테이블에서도 검색 (기존 주문과의 호환성을 위해)
    const { data: singleCourseOrder, error: singleCourseError } =
      await supabaseAdmin
        .from('shortCourse')
        .select('*')
        .eq('stripe_session_id', orderNumber.trim())
        .single();

    if (singleCourseOrder && !singleCourseError) {
      // 단일 코스 주문을 찾은 경우
      return NextResponse.json({
        success: true,
        order: {
          order_number: singleCourseOrder.stripe_session_id,
          first_name: singleCourseOrder.first_name,
          last_name: singleCourseOrder.last_name,
          email: singleCourseOrder.email,
          phone: singleCourseOrder.phone,
          total_amount: singleCourseOrder.payment_amount,
          discount_amount: 0,
          final_amount: singleCourseOrder.payment_amount,
          applied_promo: singleCourseOrder.applied_promo || '',
          payment_status: singleCourseOrder.payment_status,
          items: [
            {
              title: singleCourseOrder.course_name,
              price: singleCourseOrder.payment_amount,
              selectedDate: singleCourseOrder.selected_date,
              selectedType: singleCourseOrder.selected_type,
              courseData: {
                location: singleCourseOrder.course_location,
              },
            },
          ],
          created_at: singleCourseOrder.created_at,
          preferred_date: singleCourseOrder.preferred_date,
          other_inquiries: singleCourseOrder.other_inquiries,
          how_did_you_hear: singleCourseOrder.how_did_you_hear,
          referrer_name: singleCourseOrder.referrer_name,
        },
        orderType: 'single-course',
      });
    }

    // 주문을 찾지 못한 경우
    return NextResponse.json(
      {
        success: false,
        error: 'Order not found. Please check your order number and try again.',
      },
      { status: 404 }
    );
  } catch (error) {
    console.error('Order lookup error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to lookup order' },
      { status: 500 }
    );
  }
}
