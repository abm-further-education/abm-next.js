import { NextRequest, NextResponse } from 'next/server';
import { supabase, supabaseAdmin } from '@/lib/supabase';
import { getR2ImageUrl } from '@/lib/r2';

export const revalidate = 60;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get('key');
    const category = searchParams.get('category');

    const client = supabaseAdmin || supabase;

    let query = client.from('site_settings').select('key, value, value_type');

    if (key) {
      query = query.eq('key', key);
    }
    if (category) {
      query = query.eq('category', category);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching site settings:', error);
      return NextResponse.json(
        { error: 'Failed to fetch site settings' },
        { status: 500 }
      );
    }

    const resolved = await Promise.all(
      (data || []).map(async (setting) => {
        if (setting.value_type === 'file' && setting.value) {
          const resolvedUrl = await getR2ImageUrl(setting.value);
          return { key: setting.key, value: resolvedUrl };
        }
        return { key: setting.key, value: setting.value };
      })
    );

    const settingsMap: Record<string, string> = {};
    for (const s of resolved) {
      settingsMap[s.key] = s.value;
    }

    return NextResponse.json(settingsMap, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
      },
    });
  } catch (error) {
    console.error('Site settings API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
