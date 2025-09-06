// Core types for Click & Chic website

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  subcategory?: string;
  images: string[];
  colors: string[];
  sizes: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  inStock: boolean;
  rating?: number;
  reviews?: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
  slug: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}

export type FilterType = 'all' | 'clothing' | 'accessories' | 'new' | 'featured';
export type SortType = 'name' | 'price-low' | 'price-high' | 'newest';