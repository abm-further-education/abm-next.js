import { NextRequest, NextResponse } from 'next/server';
import { sendNotifyMeEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, course } = body;

    // 입력 검증
    if (!email || !course) {
      return NextResponse.json(
        { error: 'Email and course are required' },
        { status: 400 }
      );
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // 코스 이름 매핑
    const courseNames: { [key: string]: string } = {
      barista: 'Barista Course',
      cake: 'Classic French Cake Course',
      wine: 'Wine Course',
      focaccia: 'Sourdough and Focaccia Course',
      dessert: 'Fine Dining Dessert Plating Course',
      pastries: 'Classic French Pastries Course',
      mixology: 'Cocktail-Making and Mixology Course',
      petit: 'French petit four Course (Macaroon)',
      vegan: 'Vegan and Vegetarian Course',
      chocolate: 'Chocolate Class – Xmas',
      fss: 'NSW Food Safety Supervisor Certificate (FSS)',
    };

    const courseName = courseNames[course] || course;
    const timestamp = new Date().toISOString();

    // 이메일 전송
    try {
      await sendNotifyMeEmail({
        customerEmail: email,
        course,
        courseName,
        timestamp,
      });

      return NextResponse.json(
        {
          message: 'Successfully registered for notifications',
          email,
          course: courseName,
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Failed to send notification emails:', emailError);

      return NextResponse.json(
        {
          message:
            'Request received, but there was an issue with email notifications. We will contact you manually.',
          email,
          course: courseName,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Error processing notify me request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
