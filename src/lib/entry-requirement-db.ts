import { supabase, supabaseAdmin } from './supabase';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

export const SUPPORTED_LOCALES = ['en', 'kr', 'sp', 'pt', 'jp', 'tl', 'zh', 'id'] as const;

export interface EntryRequirementPage {
  id: string;
  is_active: boolean;
  banner_image: string;
  contact_button_link: string;
  created_at: string;
  updated_at: string;
}

export interface EntryRequirementPageTranslation {
  id: string;
  page_id: string;
  locale: string;
  meta_title: string;
  meta_description: string;
  banner_title: string;
  banner_subtitle: string;
  intro_title: string;
  intro_description: string;
  general_requirements_title: string;
  general_cards: Array<{ icon: string; title: string; description: string }>;
  course_table_title: string;
  course_table_description: string;
  english_entry_title: string;
  english_entry_description: string;
  english_evidence_items: string[];
  pte_title: string;
  pte_description: string;
  pte_table_note: string;
  pte_scores: Array<{ skill: string; minimum_score: string }>;
  competency_title: string;
  competency_description: string;
  competency_items: string[];
  english_note: string;
  elicos_title: string;
  application_process_title: string;
  application_steps: Array<{ step: string; title: string; description: string }>;
  contact_title: string;
  contact_description: string;
  contact_button_text: string;
  created_at: string;
  updated_at: string;
}

export interface EntryRequirementCourse {
  id: string;
  page_id: string;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface EntryRequirementCourseTranslation {
  id: string;
  course_id: string;
  locale: string;
  course_code: string;
  requirement: string;
  created_at: string;
  updated_at: string;
}

export interface EntryRequirementElicosPartner {
  id: string;
  page_id: string;
  partner_url: string;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface EntryRequirementElicosPartnerTranslation {
  id: string;
  partner_id: string;
  locale: string;
  partner_name: string;
  courses: string;
  created_at: string;
  updated_at: string;
}

export interface EntryRequirementCourseWithTranslation extends EntryRequirementCourse {
  course_code: string;
  requirement: string;
}

export interface EntryRequirementElicosPartnerWithTranslation extends EntryRequirementElicosPartner {
  partner_name: string;
  courses: string;
}

export interface EntryRequirementPageFull extends EntryRequirementPage {
  translation: EntryRequirementPageTranslation | null;
  courses: EntryRequirementCourseWithTranslation[];
  elicos_partners: EntryRequirementElicosPartnerWithTranslation[];
}

export interface EntryRequirementPageWithAllTranslations extends EntryRequirementPage {
  entry_requirement_page_translations: EntryRequirementPageTranslation[];
  entry_requirement_courses: (EntryRequirementCourse & {
    entry_requirement_course_translations: EntryRequirementCourseTranslation[];
  })[];
  entry_requirement_elicos_partners: (EntryRequirementElicosPartner & {
    entry_requirement_elicos_partner_translations: EntryRequirementElicosPartnerTranslation[];
  })[];
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
 * Get the active entry requirement page for a given locale (public)
 */
export async function getActiveEntryRequirementPage(
  locale: string = 'en'
): Promise<EntryRequirementPageFull | null> {
  const client = supabaseAdmin || supabase;

  const { data, error } = await client
    .from('entry_requirement_pages')
    .select(`
      *,
      entry_requirement_page_translations!inner(*),
      entry_requirement_courses(*, entry_requirement_course_translations(*)),
      entry_requirement_elicos_partners(*, entry_requirement_elicos_partner_translations(*))
    `)
    .eq('is_active', true)
    .eq('entry_requirement_page_translations.locale', locale)
    .limit(1)
    .single();

  if (error) {
    if (locale !== 'en') {
      return getActiveEntryRequirementPage('en');
    }
    console.error('Error fetching active entry requirement page:', error);
    return null;
  }

  const translation = data.entry_requirement_page_translations?.[0] || null;

  const courses = (data.entry_requirement_courses || [])
    .sort((a: EntryRequirementCourse, b: EntryRequirementCourse) => a.display_order - b.display_order)
    .map((c: EntryRequirementCourse & { entry_requirement_course_translations: EntryRequirementCourseTranslation[] }) => {
      const ct = c.entry_requirement_course_translations?.find((t) => t.locale === locale)
        || c.entry_requirement_course_translations?.find((t) => t.locale === 'en');
      return { ...c, course_code: ct?.course_code || '', requirement: ct?.requirement || '' };
    });

  const elicos_partners = (data.entry_requirement_elicos_partners || [])
    .sort((a: EntryRequirementElicosPartner, b: EntryRequirementElicosPartner) => a.display_order - b.display_order)
    .map((p: EntryRequirementElicosPartner & { entry_requirement_elicos_partner_translations: EntryRequirementElicosPartnerTranslation[] }) => {
      const pt = p.entry_requirement_elicos_partner_translations?.find((t) => t.locale === locale)
        || p.entry_requirement_elicos_partner_translations?.find((t) => t.locale === 'en');
      return { ...p, partner_name: pt?.partner_name || '', courses: pt?.courses || '' };
    });

  return {
    id: data.id,
    is_active: data.is_active,
    banner_image: data.banner_image,
    contact_button_link: data.contact_button_link,
    created_at: data.created_at,
    updated_at: data.updated_at,
    translation,
    courses,
    elicos_partners,
  };
}

/**
 * Get all entry requirement pages (admin list)
 */
export async function getAllEntryRequirementPages(): Promise<(EntryRequirementPage & { entry_requirement_page_translations: EntryRequirementPageTranslation[] })[]> {
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
    .from('entry_requirement_pages')
    .select('*, entry_requirement_page_translations(*)')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching entry requirement pages:', error);
    throw new Error(`Failed to fetch entry requirement pages: ${error.message}`);
  }

  return data || [];
}

/**
 * Get an entry requirement page by ID with ALL translations (admin edit)
 */
export async function getEntryRequirementPageById(
  id: string
): Promise<EntryRequirementPageWithAllTranslations | null> {
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
    .from('entry_requirement_pages')
    .select(`
      *,
      entry_requirement_page_translations(*),
      entry_requirement_courses(*, entry_requirement_course_translations(*)),
      entry_requirement_elicos_partners(*, entry_requirement_elicos_partner_translations(*))
    `)
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching entry requirement page:', error);
    return null;
  }

  if (data?.entry_requirement_courses) {
    data.entry_requirement_courses.sort(
      (a: EntryRequirementCourse, b: EntryRequirementCourse) => a.display_order - b.display_order
    );
  }
  if (data?.entry_requirement_elicos_partners) {
    data.entry_requirement_elicos_partners.sort(
      (a: EntryRequirementElicosPartner, b: EntryRequirementElicosPartner) => a.display_order - b.display_order
    );
  }

  return data;
}

/**
 * Create an entry requirement page with translations
 */
export async function createEntryRequirementPage(
  page: { is_active: boolean; banner_image: string; contact_button_link: string },
  pageTranslations: Record<string, Omit<EntryRequirementPageTranslation, 'id' | 'page_id' | 'locale' | 'created_at' | 'updated_at'>>,
  courses: { display_order: number; translations: Record<string, { course_code: string; requirement: string }> }[],
  partners: { partner_url: string; display_order: number; translations: Record<string, { partner_name: string; courses: string }> }[]
): Promise<EntryRequirementPageWithAllTranslations> {
  const client = await getAuthenticatedSupabase();
  const { data: { user }, error: userError } = await client.auth.getUser();

  if (userError || !user) throw new Error('No authenticated user found.');
  if (user.user_metadata?.isAdmin !== true) throw new Error('Administrator privileges are required.');

  const insertClient = supabaseAdmin || client;

  const { data: pageData, error: pageError } = await insertClient
    .from('entry_requirement_pages')
    .insert([page])
    .select()
    .single();
  if (pageError) throw new Error(`Failed to create page: ${pageError.message}`);

  const pageTransRows = Object.entries(pageTranslations).map(([locale, t]) => ({
    page_id: pageData.id,
    locale,
    ...t,
  }));
  if (pageTransRows.length > 0) {
    const { error } = await insertClient.from('entry_requirement_page_translations').insert(pageTransRows);
    if (error) throw new Error(`Failed to create page translations: ${error.message}`);
  }

  for (const course of courses) {
    const { data: courseData, error: courseError } = await insertClient
      .from('entry_requirement_courses')
      .insert([{ page_id: pageData.id, display_order: course.display_order }])
      .select()
      .single();
    if (courseError) throw new Error(`Failed to create course: ${courseError.message}`);

    const courseTransRows = Object.entries(course.translations).map(([locale, t]) => ({
      course_id: courseData.id,
      locale,
      ...t,
    }));
    if (courseTransRows.length > 0) {
      const { error } = await insertClient.from('entry_requirement_course_translations').insert(courseTransRows);
      if (error) throw new Error(`Failed to create course translations: ${error.message}`);
    }
  }

  for (const partner of partners) {
    const { data: partnerData, error: partnerError } = await insertClient
      .from('entry_requirement_elicos_partners')
      .insert([{ page_id: pageData.id, partner_url: partner.partner_url, display_order: partner.display_order }])
      .select()
      .single();
    if (partnerError) throw new Error(`Failed to create partner: ${partnerError.message}`);

    const partnerTransRows = Object.entries(partner.translations).map(([locale, t]) => ({
      partner_id: partnerData.id,
      locale,
      ...t,
    }));
    if (partnerTransRows.length > 0) {
      const { error } = await insertClient.from('entry_requirement_elicos_partner_translations').insert(partnerTransRows);
      if (error) throw new Error(`Failed to create partner translations: ${error.message}`);
    }
  }

  const result = await getEntryRequirementPageById(pageData.id);
  if (!result) throw new Error('Failed to retrieve created page');
  return result;
}

/**
 * Update an entry requirement page with translations
 */
export async function updateEntryRequirementPage(
  id: string,
  page: { is_active: boolean; banner_image: string; contact_button_link: string },
  pageTranslations: Record<string, Omit<EntryRequirementPageTranslation, 'id' | 'page_id' | 'locale' | 'created_at' | 'updated_at'>>,
  courses: { display_order: number; translations: Record<string, { course_code: string; requirement: string }> }[],
  partners: { partner_url: string; display_order: number; translations: Record<string, { partner_name: string; courses: string }> }[]
): Promise<EntryRequirementPageWithAllTranslations> {
  const client = await getAuthenticatedSupabase();
  const { data: { user }, error: userError } = await client.auth.getUser();

  if (userError || !user) throw new Error('No authenticated user found.');
  if (user.user_metadata?.isAdmin !== true) throw new Error('Administrator privileges are required.');

  const updateClient = supabaseAdmin || client;

  const { error: pageError } = await updateClient
    .from('entry_requirement_pages')
    .update(page)
    .eq('id', id);
  if (pageError) throw new Error(`Failed to update page: ${pageError.message}`);

  for (const [locale, t] of Object.entries(pageTranslations)) {
    const { error } = await updateClient
      .from('entry_requirement_page_translations')
      .upsert({ page_id: id, locale, ...t }, { onConflict: 'page_id,locale' });
    if (error) throw new Error(`Failed to update page translation (${locale}): ${error.message}`);
  }

  await updateClient.from('entry_requirement_courses').delete().eq('page_id', id);
  for (const course of courses) {
    const { data: courseData, error: courseError } = await updateClient
      .from('entry_requirement_courses')
      .insert([{ page_id: id, display_order: course.display_order }])
      .select()
      .single();
    if (courseError) throw new Error(`Failed to create course: ${courseError.message}`);

    const courseTransRows = Object.entries(course.translations).map(([locale, t]) => ({
      course_id: courseData.id,
      locale,
      ...t,
    }));
    if (courseTransRows.length > 0) {
      const { error } = await updateClient.from('entry_requirement_course_translations').insert(courseTransRows);
      if (error) throw new Error(`Failed to create course translations: ${error.message}`);
    }
  }

  await updateClient.from('entry_requirement_elicos_partners').delete().eq('page_id', id);
  for (const partner of partners) {
    const { data: partnerData, error: partnerError } = await updateClient
      .from('entry_requirement_elicos_partners')
      .insert([{ page_id: id, partner_url: partner.partner_url, display_order: partner.display_order }])
      .select()
      .single();
    if (partnerError) throw new Error(`Failed to create partner: ${partnerError.message}`);

    const partnerTransRows = Object.entries(partner.translations).map(([locale, t]) => ({
      partner_id: partnerData.id,
      locale,
      ...t,
    }));
    if (partnerTransRows.length > 0) {
      const { error } = await updateClient.from('entry_requirement_elicos_partner_translations').insert(partnerTransRows);
      if (error) throw new Error(`Failed to create partner translations: ${error.message}`);
    }
  }

  const result = await getEntryRequirementPageById(id);
  if (!result) throw new Error('Failed to retrieve updated page');
  return result;
}

/**
 * Delete an entry requirement page (everything cascades)
 */
export async function deleteEntryRequirementPage(id: string): Promise<void> {
  const client = await getAuthenticatedSupabase();
  const { data: { user }, error: userError } = await client.auth.getUser();

  if (userError || !user) throw new Error('No authenticated user found.');
  if (user.user_metadata?.isAdmin !== true) throw new Error('Administrator privileges are required.');

  const deleteClient = supabaseAdmin || client;
  const { error } = await deleteClient.from('entry_requirement_pages').delete().eq('id', id);
  if (error) throw new Error(`Failed to delete entry requirement page: ${error.message}`);
}
