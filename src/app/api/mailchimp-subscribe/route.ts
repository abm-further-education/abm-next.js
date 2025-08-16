import { NextRequest, NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';

// Mailchimp 설정
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX, // 예: "us1"
});

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // 환경변수 확인
    if (!process.env.MAILCHIMP_API_KEY || !process.env.MAILCHIMP_AUDIENCE_ID) {
      console.error('Mailchimp configuration missing');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Mailchimp에 구독자 추가
    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID,
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          EMAIL: email,
        },
      }
    );

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully subscribed to newsletter',
        id: (response as { id: string }).id,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Mailchimp subscription error:', error);

    // Type guard for error object
    const mailchimpError = error as { status?: number; detail?: string };

    // 이미 구독된 경우
    if (
      mailchimpError.status === 400 &&
      mailchimpError.detail?.includes('already a list member')
    ) {
      return NextResponse.json(
        { error: 'This email is already subscribed' },
        { status: 400 }
      );
    }

    // 잘못된 이메일 형식
    if (mailchimpError.status === 400) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
}
