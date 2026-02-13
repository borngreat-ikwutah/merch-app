export type UserRole = "buyer" | "seller";

export type OnboardingStep = number;

export interface UserProfile {
  displayName: string;
  phone: string;
}

export interface BusinessInfo {
  businessName: string;
  businessType: string;
  website: string;
}

export interface SellerPreferences {
  productCategories: string[];
  orderVolume: string;
}

export interface BuyerInterests {
  categories: string[];
  budget: string;
}

export interface StepConfig {
  number: number;
  title: string;
  description: string;
  iconName: "UserCircle" | "Storefront" | "Package" | "ShoppingBag" | "SlidersHorizontal" | "Heart";
}

export interface OnboardingData {
  role: UserRole | null;
  userProfile: UserProfile;
  businessInfo: BusinessInfo;
  sellerPreferences: SellerPreferences;
  buyerInterests: BuyerInterests;
}
