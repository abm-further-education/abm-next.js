import { supabase, supabaseAdmin } from './supabase';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

export interface FeeSchedulePage {
  id: string;
  year: number;
  is_active: boolean;
  banner_image: string;
  banner_title: string;
  banner_subtitle: string;
  promotion_title: string;
  promotion_description: string;
  download_button_text: string;
  payment_title: string;
  payment_description: string;
  contact_text: string;
  contact_email: string;
  instalment_link: string;
  instalment_link_text: string;
  other_fees_title: string;
  non_refundable_note: string;
  page_title: string;
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

export interface FeeSchedulePageWithFees extends FeeSchedulePage {
  fee_schedule_fees: FeeScheduleFee[];
}

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

/**
 * Get the active fee schedule page with fees (public)
 */
export async function getActiveFeeSchedulePage(): Promise<FeeSchedulePageWithFees | null> {
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

  return data;
}

/**
 * Get all fee schedule pages (admin)
 */
export async function getAllFeeSchedulePages(): Promise<FeeSchedulePage[]> {
  const client = await getAuthenticatedSupabase();

  let user = null;
  try {
    const {
      data: { user: authUser },
    } = await client.auth.getUser();
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
    .select('*')
    .order('year', { ascending: false });

  if (error) {
    console.error('Error fetching fee schedule pages:', error);
    throw new Error(`Failed to fetch fee schedule pages: ${error.message}`);
  }

  return data || [];
}

/**
 * Get a fee schedule page by ID with its fees (admin)
 */
export async function getFeeSchedulePageById(
  id: string
): Promise<FeeSchedulePageWithFees | null> {
  const client = await getAuthenticatedSupabase();

  let user = null;
  try {
    const {
      data: { user: authUser },
    } = await client.auth.getUser();
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
    .select('*, fee_schedule_fees(*)')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching fee schedule page:', error);
    return null;
  }

  if (data && data.fee_schedule_fees) {
    data.fee_schedule_fees.sort(
      (a: FeeScheduleFee, b: FeeScheduleFee) => a.display_order - b.display_order
    );
  }

  return data;
}

/**
 * Create a fee schedule page
 */
export async function createFeeSchedulePage(
  page: Omit<FeeSchedulePage, 'id' | 'created_at' | 'updated_at'>,
  fees: Omit<FeeScheduleFee, 'id' | 'page_id' | 'created_at' | 'updated_at'>[]
): Promise<FeeSchedulePageWithFees> {
  const client = await getAuthenticatedSupabase();

  const {
    data: { user },
    error: userError,
  } = await client.auth.getUser();

  if (userError || !user) {
    throw new Error('No authenticated user found.');
  }

  if (user.user_metadata?.isAdmin !== true) {
    throw new Error('Administrator privileges are required.');
  }

  const insertClient = supabaseAdmin || client;

  const { data: pageData, error: pageError } = await insertClient
    .from('fee_schedule_pages')
    .insert([page])
    .select()
    .single();

  if (pageError) {
    console.error('Error creating fee schedule page:', pageError);
    throw new Error(`Failed to create fee schedule page: ${pageError.message}`);
  }

  if (fees.length > 0) {
    const feesWithPageId = fees.map((fee) => ({
      ...fee,
      page_id: pageData.id,
    }));

    const { error: feesError } = await insertClient
      .from('fee_schedule_fees')
      .insert(feesWithPageId);

    if (feesError) {
      console.error('Error creating fee schedule fees:', feesError);
      throw new Error(`Failed to create fee schedule fees: ${feesError.message}`);
    }
  }

  const result = await getFeeSchedulePageById(pageData.id);
  if (!result) throw new Error('Failed to retrieve created page');
  return result;
}

/**
 * Update a fee schedule page and its fees
 */
export async function updateFeeSchedulePage(
  id: string,
  page: Partial<Omit<FeeSchedulePage, 'id' | 'created_at' | 'updated_at'>>,
  fees?: Omit<FeeScheduleFee, 'id' | 'page_id' | 'created_at' | 'updated_at'>[]
): Promise<FeeSchedulePageWithFees> {
  const client = await getAuthenticatedSupabase();

  const {
    data: { user },
    error: userError,
  } = await client.auth.getUser();

  if (userError || !user) {
    throw new Error('No authenticated user found.');
  }

  if (user.user_metadata?.isAdmin !== true) {
    throw new Error('Administrator privileges are required.');
  }

  const updateClient = supabaseAdmin || client;

  const { error: pageError } = await updateClient
    .from('fee_schedule_pages')
    .update(page)
    .eq('id', id);

  if (pageError) {
    console.error('Error updating fee schedule page:', pageError);
    throw new Error(`Failed to update fee schedule page: ${pageError.message}`);
  }

  if (fees !== undefined) {
    const { error: deleteError } = await updateClient
      .from('fee_schedule_fees')
      .delete()
      .eq('page_id', id);

    if (deleteError) {
      console.error('Error deleting old fees:', deleteError);
      throw new Error(`Failed to update fees: ${deleteError.message}`);
    }

    if (fees.length > 0) {
      const feesWithPageId = fees.map((fee) => ({
        ...fee,
        page_id: id,
      }));

      const { error: feesError } = await updateClient
        .from('fee_schedule_fees')
        .insert(feesWithPageId);

      if (feesError) {
        console.error('Error inserting updated fees:', feesError);
        throw new Error(`Failed to update fees: ${feesError.message}`);
      }
    }
  }

  const result = await getFeeSchedulePageById(id);
  if (!result) throw new Error('Failed to retrieve updated page');
  return result;
}

/**
 * Delete a fee schedule page (fees cascade automatically)
 */
export async function deleteFeeSchedulePage(id: string): Promise<void> {
  const client = await getAuthenticatedSupabase();

  const {
    data: { user },
    error: userError,
  } = await client.auth.getUser();

  if (userError || !user) {
    throw new Error('No authenticated user found.');
  }

  if (user.user_metadata?.isAdmin !== true) {
    throw new Error('Administrator privileges are required.');
  }

  const deleteClient = supabaseAdmin || client;

  const { error } = await deleteClient
    .from('fee_schedule_pages')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting fee schedule page:', error);
    throw new Error(`Failed to delete fee schedule page: ${error.message}`);
  }
}
