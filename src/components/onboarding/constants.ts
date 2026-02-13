// Shared product categories
export const PRODUCT_CATEGORIES = [
  "T-Shirts",
  "Hoodies",
  "Caps & Hats",
  "Mugs",
  "Phone Cases",
  "Bags",
  "Stickers",
  "Posters",
  "Other",
] as const;

// Buyer-specific interest categories
export const BUYER_INTERESTS = [
  "Streetwear",
  "Minimalist",
  "Pop Culture",
  "Sports",
  "Gaming",
  "Music",
  "Art & Design",
  "Nature",
  "Tech",
  "Anime",
  "Vintage",
  "Custom Gifts",
] as const;

// Seller business types
export const BUSINESS_TYPES = [
  "Individual Creator",
  "Small Business",
  "E-commerce Store",
  "Brand / Agency",
  "Non-profit",
  "Other",
] as const;

// Seller order volume options
export const ORDER_VOLUMES = [
  "Just getting started (1-50/month)",
  "Growing (50-200/month)",
  "Established (200-500/month)",
  "High volume (500+/month)",
] as const;

// Buyer budget ranges
export const BUDGET_RANGES = [
  "Under $25",
  "$25 - $50",
  "$50 - $100",
  "$100+",
] as const;

// Step definitions per role
export const BUYER_STEPS = [
  { number: 1, title: "Your Profile" },
  { number: 2, title: "Your Interests" },
] as const;

export const SELLER_STEPS = [
  { number: 1, title: "Your Profile" },
  { number: 2, title: "Business Info" },
  { number: 3, title: "Preferences" },
] as const;

// Animation variants for framer-motion
export const FADE_IN_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
} as const;

export const FADE_IN = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
} as const;

export const SCALE_IN = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
} as const;

export const STAGGER_CONTAINER = {
  animate: {
    transition: {
      staggerChildren: 0.06,
    },
  },
} as const;

export const STAGGER_ITEM = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
} as const;

export const SLIDE_VARIANTS = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 80 : -80,
    opacity: 0,
  }),
} as const;
