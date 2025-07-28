import { supabase } from '@/lib/supabase';

export async function subscribe(email: string): Promise<{ error?: string }> {
  // Check if email already exists
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
  // Insert if not exists
  const { error } = await supabase.from('subscription').insert([{ email }]);
  if (error) {
    return { error: error.message };
  }
  return {};
}
