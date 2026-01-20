import { supabase } from '@/lib/supabase';

export async function subscribe(email: string): Promise<{ error?: string }> {
  try {
    // Check if email already exists in Supabase
    const { data, error: selectError } = await supabase
      .from('subscription')
      .select('id')
      .eq('email', email)
      .maybeSingle();

    if (selectError) {
      return { error: selectError.message };
    }

    if (data) {
      return { error: 'duplicate' };
    }

    // Mailchimp에 구독자 추가
    try {
      const mailchimpResponse = await fetch('/api/mailchimp-subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const mailchimpResult = await mailchimpResponse.json();

      if (!mailchimpResponse.ok) {
        console.error('Mailchimp subscription failed:', mailchimpResult.error);
        // Mailchimp 실패해도 Supabase에는 저장 진행
      }
    } catch (mailchimpError) {
      console.error('Mailchimp API call failed:', mailchimpError);
      // Mailchimp 실패해도 Supabase에는 저장 진행
    }

    // Supabase에 저장 (Mailchimp 성공/실패와 관계없이)
    const { error } = await supabase.from('subscription').insert([{ email }]);
    if (error) {
      return { error: error.message };
    }

    return {};
  } catch (error) {
    console.error('Subscription error:', error);
    return { error: 'An unexpected error occurred' };
  }
}
