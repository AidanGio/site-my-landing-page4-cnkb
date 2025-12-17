export const siteName =
  process.env.NEXT_PUBLIC_SITE_NAME || "Paramount Insulation";

export const title =
  process.env.NEXT_PUBLIC_TITLE ||
  "Paramount Insulation - Premier Insulation Contractors in Lake Grove, NY";

export const description =
  process.env.NEXT_PUBLIC_DESCRIPTION ||
  "Lake Grove's premier insulation contractor specializing in attic, wall, basement, and spray foam insulation. Energy-efficient solutions for Long Island homes and businesses.";

// Last baseURL
const defaultBaseURL = "https://paramount-insulation.vercel.app";

// Vercel baseURL, make sure it's a valid URL
const VERCEL_URL =
  process.env.NEXT_PUBLIC_VERCEL_URL &&
  `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

// meta base url
export const baseURL =
  process.env.NEXT_PUBLIC_URL ||
  VERCEL_URL ||
  (globalThis.location && globalThis.location.origin) ||
  defaultBaseURL;
