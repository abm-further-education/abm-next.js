import { supabase, supabaseAdmin } from './supabase';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

export const SUPPORTED_LOCALES = ['en', 'kr', 'sp', 'pt', 'jp', 'tl', 'zh', 'id'] as const;

// ─── Base types ────────────────────────────────────────────────────────

export interface FeeSchedulePage {
  id: string;
  year: number;
  is_active: boolean;
  banner_image: string;
  contact_email: string;
  instalment_link: string;
  // Legacy fields (kept for backward compat)
  banner_title: string;
  banner_subtitle: string;
  promotion_title: string;
  promotion_description: string;
  download_button_text: string;
  payment_title: string;
  payment_description: string;
  contact_text: string;
  instalment_link_text: string;
  other_fees_title: string;
  non_refundable_note: string;
  page_title: string;
  created_at: string;
  updated_at: string;
}

export interface FeeSchedulePageTranslation {
  id: string;
  page_id: string;
  locale: string;
  page_title: string;
  banner_title: string;
  banner_subtitle: string;
  promotion_title: string;
  promotion_description: string;
  download_button_text: string;
  payment_title: string;
  payment_description: string;
  contact_text: string;
  instalment_link_text: string;
  other_fees_title: string;
  non_refundable_note: string;
  created_at: string;
  updated_at: string;
}

export interface FeeScheduleFee {
  id: string;
  page_id: string;
  fee_name: string;
  fee_amount: string;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface FeeScheduleFeeTranslation {
  id: string;
  fee_id: string;
  locale: string;
  fee_name: string;
  fee_amount: string;
  created_at: string;
  updated_at: string;
}

// ─── Composite types ───────────────────────────────────────────────────

export interface FeeSchedulePageWithAllTranslations extends FeeSchedulePage {
  fee_schedule_page_translations: FeeSchedulePageTranslation[];
  fee_schedule_fees: (FeeScheduleFee & {
    fee_schedule_fee_translations: FeeScheduleFeeTranslation[];
  })[];
}

export interface FeeSchedulePageFull extends FeeSchedulePage {
  translation: FeeSchedulePageTranslation | null;
  fees: (FeeScheduleFee & { fee_name: string; fee_amount: string })[];
}

// For backward compat
export interface FeeSchedulePageWithFees extends FeeSchedulePage {
  fee_schedule_fees: FeeScheduleFee[];
}

// ─── Auth helper ───────────────────────────────────────────────────────

async function getAuthenticatedSupabase() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('sb-access-token')?.value;
  const refreshToken = cookieStore.get('sb-refresh-token')?.value;

  if (!accessToken) {
    return supabase;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return supabase;
  }

  const authenticatedClient = createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });

  if (accessToken && refreshToken) {
    try {
      await authenticatedClient.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });
    } catch (error) {
      console.error('Failed to set session:', error);
    }
  }

  return authenticatedClient;
}

// ─── Public: get active page for a locale ──────────────────────────────

export async function getActiveFeeSchedulePage(
  locale: string = 'en'
): Promise<FeeSchedulePageFull | null> {
  const client = supabaseAdmin || supabase;

  const { data, error } = await client
    .from('fee_schedule_pages')
    .select(`
      *,
      fee_schedule_page_translations!inner(*),
      fee_schedule_fees(*, fee_schedule_fee_translations(*))
    `)
    .eq('is_active', true)
    .eq('fee_schedule_page_translations.locale', locale)
    .order('year', { ascending: false })
    .limit(1)
    .single();

  if (error) {
    if (locale !== 'en') {
      return getActiveFeeSchedulePage('en');
    }
    // Fallback: try without translations
    return getActiveFeeSchedulePageLegacy();
  }

  const translation = data.fee_schedule_page_translations?.[0] || null;

  const fees = (data.fee_schedule_fees || [])
    .sort((a: FeeScheduleFee, b: FeeScheduleFee) => a.display_order - b.display_order)
    .map((f: FeeScheduleFee & { fee_schedule_fee_translations: FeeScheduleFeeTranslation[] }) => {
      const ft = f.fee_schedule_fee_translations?.find((t) => t.locale === locale)
        || f.fee_schedule_fee_translations?.find((t) => t.locale === 'en');
      return {
        ...f,
        fee_name: ft?.fee_name || f.fee_name,
        fee_amount: ft?.fee_amount || f.fee_amount,
      };
    });

  return {
    ...data,
    translation,
    fees,
  };
}

/** Fallback for pages without translation tables */
async function getActiveFeeSchedulePageLegacy(): Promise<FeeSchedulePageFull | null> {
  const client = supabaseAdmin || supabase;

  const { data, error } = await client
    .from('fee_schedule_pages')
    .select('*, fee_schedule_fees(*)')
    .eq('is_active', true)
    .order('year', { ascending: false })
    .limit(1)
    .single();

  if (error) {
    console.error('Error fetching active fee schedule page:', error);
    return null;
  }

  if (data && data.fee_schedule_fees) {
    data.fee_schedule_fees.sort(
      (a: FeeScheduleFee, b: FeeScheduleFee) => a.display_order - b.display_order
    );
  }

  return {
    ...data,
    translation: null,
    fees: data.fee_schedule_fees || [],
  };
}

// ─── Admin: list pages ─────────────────────────────────────────────────

export async function getAllFeeSchedulePages(): Promise<(FeeSchedulePage & { fee_schedule_page_translations: FeeSchedulePageTranslation[] })[]> {
  const client = await getAuthenticatedSupabase();

  let user = null;
  try {
    const { data: { user: authUser } } = await client.auth.getUser();
    user = authUser;
  } catch {
    console.error('No authenticated user');
  }

  const queryClient =
    user?.user_metadata?.isAdmin === true && supabaseAdmin
      ? supabaseAdmin
      : client;

  const { data, error } = await queryClient
    .from('fee_schedule_pages')
    .select('*, fee_schedule_page_translations(*)')
    .order('year', { ascending: false });

  if (error) {
    console.error('Error fetching fee schedule pages:', error);
    throw new Error(`Failed to fetch fee schedule pages: ${error.message}`);
  }

  return data || [];
}

// ─── Admin: get page by ID with ALL translations ──────────────────────

export async function getFeeSchedulePageById(
  id: string
): Promise<FeeSchedulePageWithAllTranslations | null> {
  const client = await getAuthenticatedSupabase();

  let user = null;
  try {
    const { data: { user: authUser } } = await client.auth.getUser();
    user = authUser;
  } catch {
    console.error('No authenticated user');
  }

  const queryClient =
    user?.user_metadata?.isAdmin === true && supabaseAdmin
      ? supabaseAdmin
      : client;

  const { data, error } = await queryClient
    .from('fee_schedule_pages')
    .select(`
      *,
      fee_schedule_page_translations(*),
      fee_schedule_fees(*, fee_schedule_fee_translations(*))
    `)
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching fee schedule page:', error);
    return null;
  }

  if (data?.fee_schedule_fees) {
    data.fee_schedule_fees.sort(
      (a: FeeScheduleFee, b: FeeScheduleFee) => a.display_order - b.display_order
    );
  }

  return data;
}

// ─── Admin: create page with translations ──────────────────────────────

export async function createFeeSchedulePage(
  page: { year: number; is_active: boolean; banner_image: string; contact_email: string; instalment_link: string },
  pageTranslations: Record<string, Omit<FeeSchedulePageTranslation, 'id' | 'page_id' | 'locale' | 'created_at' | 'updated_at'>>,
  fees: { display_order: number; translations: Record<string, { fee_name: string; fee_amount: string }> }[]
): Promise<FeeSchedulePageWithAllTranslations> {
  const client = await getAuthenticatedSupabase();
  const { data: { user }, error: userError } = await client.auth.getUser();

  if (userError || !user) throw new Error('No authenticated user found.');
  if (user.user_metadata?.isAdmin !== true) throw new Error('Administrator privileges are required.');

  const insertClient = supabaseAdmin || client;

  // Insert base page
  const enTrans = pageTranslations['en'] || Object.values(pageTranslations)[0];
  const { data: pageData, error: pageError } = await insertClient
    .from('fee_schedule_pages')
    .insert([{
      ...page,
      page_title: enTrans?.page_title || '',
      banner_title: enTrans?.banner_title || '',
      banner_subtitle: enTrans?.banner_subtitle || '',
      promotion_title: enTrans?.promotion_title || '',
      promotion_description: enTrans?.promotion_description || '',
      download_button_text: enTrans?.download_button_text || '',
      payment_title: enTrans?.payment_title || '',
      payment_description: enTrans?.payment_description || '',
      contact_text: enTrans?.contact_text || '',
      instalment_link_text: enTrans?.instalment_link_text || '',
      other_fees_title: enTrans?.other_fees_title || '',
      non_refundable_note: enTrans?.non_refundable_note || '',
    }])
    .select()
    .single();
  if (pageError) throw new Error(`Failed to create fee schedule page: ${pageError.message}`);

  // Insert page translations
  const pageTransRows = Object.entries(pageTranslations).map(([locale, t]) => ({
    page_id: pageData.id,
    locale,
    ...t,
  }));
  if (pageTransRows.length > 0) {
    const { error } = await insertClient.from('fee_schedule_page_translations').insert(pageTransRows);
    if (error) throw new Error(`Failed to create page translations: ${error.message}`);
  }

  // Insert fees with translations
  for (const fee of fees) {
    const enFeeTrans = fee.translations['en'] || Object.values(fee.translations)[0] || { fee_name: '', fee_amount: '' };
    const { data: feeData, error: feeError } = await insertClient
      .from('fee_schedule_fees')
      .insert([{
        page_id: pageData.id,
        fee_name: enFeeTrans.fee_name,
        fee_amount: enFeeTrans.fee_amount,
        display_order: fee.display_order,
      }])
      .select()
      .single();
    if (feeError) throw new Error(`Failed to create fee: ${feeError.message}`);

    const feeTransRows = Object.entries(fee.translations).map(([locale, t]) => ({
      fee_id: feeData.id,
      locale,
      ...t,
    }));
    if (feeTransRows.length > 0) {
      const { error } = await insertClient.from('fee_schedule_fee_translations').insert(feeTransRows);
      if (error) throw new Error(`Failed to create fee translations: ${error.message}`);
    }
  }

  const result = await getFeeSchedulePageById(pageData.id);
  if (!result) throw new Error('Failed to retrieve created page');
  return result;
}

// ─── Admin: update page with translations ──────────────────────────────

export async function updateFeeSchedulePage(
  id: string,
  page: { year: number; is_active: boolean; banner_image: string; contact_email: string; instalment_link: string },
  pageTranslations: Record<string, Omit<FeeSchedulePageTranslation, 'id' | 'page_id' | 'locale' | 'created_at' | 'updated_at'>>,
  fees: { display_order: number; translations: Record<string, { fee_name: string; fee_amount: string }> }[]
): Promise<FeeSchedulePageWithAllTranslations> {
  const client = await getAuthenticatedSupabase();
  const { data: { user }, error: userError } = await client.auth.getUser();

  if (userError || !user) throw new Error('No authenticated user found.');
  if (user.user_metadata?.isAdmin !== true) throw new Error('Administrator privileges are required.');

  const updateClient = supabaseAdmin || client;

  // Update base page (also update legacy columns from English)
  const enTrans = pageTranslations['en'] || Object.values(pageTranslations)[0];
  const { error: pageError } = await updateClient
    .from('fee_schedule_pages')
    .update({
      ...page,
      page_title: enTrans?.page_title || '',
      banner_title: enTrans?.banner_title || '',
      banner_subtitle: enTrans?.banner_subtitle || '',
      promotion_title: enTrans?.promotion_title || '',
      promotion_description: enTrans?.promotion_description || '',
      download_button_text: enTrans?.download_button_text || '',
      payment_title: enTrans?.payment_title || '',
      payment_description: enTrans?.payment_description || '',
      contact_text: enTrans?.contact_text || '',
      instalment_link_text: enTrans?.instalment_link_text || '',
      other_fees_title: enTrans?.other_fees_title || '',
      non_refundable_note: enTrans?.non_refundable_note || '',
    })
    .eq('id', id);
  if (pageError) throw new Error(`Failed to update fee schedule page: ${pageError.message}`);

  // Upsert page translations
  for (const [locale, t] of Object.entries(pageTranslations)) {
    const { error } = await updateClient
      .from('fee_schedule_page_translations')
      .upsert({ page_id: id, locale, ...t }, { onConflict: 'page_id,locale' });
    if (error) throw new Error(`Failed to update page translation (${locale}): ${error.message}`);
  }

  // Recreate fees with translations
  await updateClient.from('fee_schedule_fees').delete().eq('page_id', id);

  for (const fee of fees) {
    const enFeeTrans = fee.translations['en'] || Object.values(fee.translations)[0] || { fee_name: '', fee_amount: '' };
    const { data: feeData, error: feeError } = await updateClient
      .from('fee_schedule_fees')
      .insert([{
        page_id: id,
        fee_name: enFeeTrans.fee_name,
        fee_amount: enFeeTrans.fee_amount,
        display_order: fee.display_order,
      }])
      .select()
      .single();
    if (feeError) throw new Error(`Failed to create fee: ${feeError.message}`);

    const feeTransRows = Object.entries(fee.translations).map(([locale, t]) => ({
      fee_id: feeData.id,
      locale,
      ...t,
    }));
    if (feeTransRows.length > 0) {
      const { error } = await updateClient.from('fee_schedule_fee_translations').insert(feeTransRows);
      if (error) throw new Error(`Failed to create fee translations: ${error.message}`);
    }
  }

  const result = await getFeeSchedulePageById(id);
  if (!result) throw new Error('Failed to retrieve updated page');
  return result;
}

// ─── Admin: delete page ────────────────────────────────────────────────

export async function deleteFeeSchedulePage(id: string): Promise<void> {
  const client = await getAuthenticatedSupabase();
  const { data: { user }, error: userError } = await client.auth.getUser();

  if (userError || !user) throw new Error('No authenticated user found.');
  if (user.user_metadata?.isAdmin !== true) throw new Error('Administrator privileges are required.');

  const deleteClient = supabaseAdmin || client;
  const { error } = await deleteClient.from('fee_schedule_pages').delete().eq('id', id);
  if (error) throw new Error(`Failed to delete fee schedule page: ${error.message}`);
}

