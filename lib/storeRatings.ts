export interface StoreRating {
  rating: number;
  count: number;
}

export interface StoreRatings {
  appStore: StoreRating | null;
  googlePlay: StoreRating | null;
}

function parseAppStoreId(url?: string): string | null {
  const fromEnv = process.env.NEXT_PUBLIC_APPSTORE_ID;
  if (fromEnv) return fromEnv;
  const m = url?.match(/id(\d+)/);
  return m ? m[1] : null;
}

function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

/**
 * Live App Store rating from Apple's official iTunes Lookup endpoint (no
 * key). Fetched at build/deploy and cached 24h, so the number shown is
 * real and self-refreshing — never a hardcoded value that drifts away
 * from the actual store. See premortem failure mode #4.
 */
async function fetchAppStoreRating(): Promise<StoreRating | null> {
  const id = parseAppStoreId(process.env.NEXT_PUBLIC_APPSTORE_URL);
  if (!id) return null;
  try {
    const res = await fetch(`https://itunes.apple.com/lookup?id=${id}`, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    const r = data?.results?.[0];
    if (!r || typeof r.averageUserRating !== "number") return null;
    return {
      rating: round1(r.averageUserRating),
      count: typeof r.userRatingCount === "number" ? r.userRatingCount : 0,
    };
  } catch {
    return null;
  }
}

/**
 * Google Play has no official ratings API, so this comes from env vars the
 * team keeps in sync with the Play Console.
 */
function getPlayRatingFromEnv(): StoreRating | null {
  const rating = parseFloat(process.env.NEXT_PUBLIC_PLAY_RATING ?? "");
  if (!Number.isFinite(rating) || rating <= 0) return null;
  const count = parseInt(process.env.NEXT_PUBLIC_PLAY_RATING_COUNT ?? "", 10);
  return {
    rating: round1(rating),
    count: Number.isFinite(count) ? count : 0,
  };
}

export async function getStoreRatings(): Promise<StoreRatings> {
  return {
    appStore: await fetchAppStoreRating(),
    googlePlay: getPlayRatingFromEnv(),
  };
}
