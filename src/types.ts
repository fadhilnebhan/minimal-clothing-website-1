export interface Product {
  id: string;
  name: string;
  frenchName?: string;
  subtitle: string;
  category: 'tailoring' | 'silk-evening' | 'cashmere-knit' | 'leather-accessories' | 'jewelry';
  price: number;
  originalPrice?: number;
  currency: string;
  rating: number;
  reviewsCount: number;
  isNew?: boolean;
  isLimited?: boolean;
  isRunway?: boolean;
  description: string;
  fabricDetails: {
    composition: string;
    millOrigin: string;
    weight: string;
    finish: string;
  };
  sustainability: string;
  careInstructions: string[];
  colors: {
    name: string;
    hex: string;
    image: string;
  }[];
  sizes: {
    code: string;
    label: string;
    stock: number;
  }[];
  images: string[];
  runwayLookNumber?: number;
  stylingNotes: string;
  modelSpecs: string;
  pairedProductIds?: string[];
}

export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  selectedColor: {
    name: string;
    hex: string;
    image: string;
  };
  selectedSize: string;
  quantity: number;
  monogram?: string;
  giftWrap?: boolean;
  giftNote?: string;
}

export interface LookbookScene {
  id: string;
  title: string;
  season: string;
  location: string;
  image: string;
  description: string;
  hotspots: {
    id: string;
    top: number; // percentage
    left: number; // percentage
    productId: string;
    label: string;
    price: number;
  }[];
}

export type BrandThemeMode = 'editorial-aesthetic' | 'noir-obsidian' | 'champagne-ivory' | 'emerald-couture';
export type ViewportMode = 'web' | 'mobile-app';

export interface ClientInquiry {
  clientName: string;
  brandName: string;
  email: string;
  phone?: string;
  projectType: 'E-commerce Flagship' | 'Mobile App (iOS/Android)' | 'Full Brand Identity & Web' | 'Bespoke Atelier System';
  timeline: string;
  budgetRange: string;
  notes: string;
}
