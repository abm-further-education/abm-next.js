import { NextResponse } from 'next/server';

interface GoogleReview {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  author_url: string;
  time: number;
}

interface GooglePlaceResult {
  reviews?: GoogleReview[];
  name?: string;
  url?: string;
  rating?: number;
  user_ratings_total?: number;
}

interface GooglePlacesResponse {
  status: string;
  result?: GooglePlaceResult;
  error_message?: string;
}

const GOOGLE_PLACES_ENDPOINT =
  'https://maps.googleapis.com/maps/api/place/details/json';

export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
      return NextResponse.json(
        { error: 'Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID' },
        { status: 500 }
      );
    }

    const url = new URL(GOOGLE_PLACES_ENDPOINT);
    url.searchParams.set('place_id', placeId);
    // include rating & user_ratings_total so we can render the badge layout
    url.searchParams.set(
      'fields',
      'reviews,rating,user_ratings_total,name,url'
    );
    url.searchParams.set('key', apiKey);

    const res = await fetch(url.toString(), { cache: 'no-store' });
    const data: GooglePlacesResponse = await res.json();

    if (data.status !== 'OK') {
      const msg = data.error_message || data.status || 'Unknown error';
      return NextResponse.json(
        { error: `Google API status: ${msg}` },
        { status: 500 }
      );
    }

    const placeName: string | undefined = data.result?.name;
    const placeUrl: string | undefined = data.result?.url;
    const rating: number | undefined = data.result?.rating;
    const user_ratings_total: number | undefined =
      data.result?.user_ratings_total;

    const reviews = (data.result?.reviews || [])
      .slice(0, 5)
      .map((r: GoogleReview) => ({
        author_name: r.author_name,
        profile_photo_url: r.profile_photo_url,
        rating: r.rating,
        relative_time_description: r.relative_time_description,
        text: r.text,
        author_url: r.author_url,
        time: r.time,
      }));

    return NextResponse.json({
      placeName,
      placeUrl,
      rating,
      user_ratings_total,
      reviews,
    });
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : 'Unexpected error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
