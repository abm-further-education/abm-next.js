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

interface CachedReviewData {
  rating?: number;
  user_ratings_total?: number;
  reviews?: GoogleReview[];
  placeUrl?: string;
}

const GOOGLE_PLACES_ENDPOINT =
  'https://maps.googleapis.com/maps/api/place/details/json';

let cached: CachedReviewData | null = null;
let lastFetched = 0;

export async function GET() {
  const now = Date.now();
  const ONE_DAY = 1000 * 60 * 60 * 24;

  if (cached && now - lastFetched < ONE_DAY) {
    return NextResponse.json(cached);
  }

  const url = new URL(GOOGLE_PLACES_ENDPOINT);
  url.searchParams.set('place_id', process.env.GOOGLE_PLACE_ID!);
  url.searchParams.set('fields', 'reviews,rating,user_ratings_total,name,url');
  url.searchParams.set('key', process.env.GOOGLE_PLACES_API_KEY!);

  const res = await fetch(url.toString());
  const data: GooglePlacesResponse = await res.json();

  cached = {
    rating: data.result?.rating,
    user_ratings_total: data.result?.user_ratings_total,
    reviews: data.result?.reviews?.slice(0, 5),
    placeUrl: data.result?.url,
  };
  lastFetched = now;

  return NextResponse.json(cached);
}
