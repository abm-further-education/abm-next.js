import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { courseTitle, courseSlug, name, email, phone } = body;

    // Validate required fields
    if (!courseTitle || !courseSlug || !name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if interest already exists for this email and course
    const { data: existingInterest } = await supabase
      .from('course_interests')
      .select('id')
      .eq('email', email)
      .eq('course_slug', courseSlug)
      .single();

    if (existingInterest) {
      return NextResponse.json(
        { error: 'You have already registered interest for this course' },
        { status: 409 }
      );
    }

    // Insert new interest
    const { data, error } = await supabase
      .from('course_interests')
      .insert([
        {
          course_title: courseTitle,
          course_slug: courseSlug,
          name,
          email,
          phone,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('Error inserting course interest:', error);
      return NextResponse.json(
        { error: 'Failed to save interest' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: 'Interest registered successfully',
        data: data[0],
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error in course interest API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}


