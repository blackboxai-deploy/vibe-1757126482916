import { Product, Category } from '@/types';

// Sample product data for Click & Chic
export const products: Product[] = [
  {
    id: '1',
    name: 'Elegant Midi Dress',
    price: 89.99,
    originalPrice: 119.99,
    description: 'A sophisticated midi dress perfect for both office and evening occasions. Made from premium stretch fabric with a flattering silhouette.',
    category: 'clothing',
    subcategory: 'dresses',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/61ef14aa-f0ac-466a-8933-8db46f5c3f53.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4636156f-8eda-464f-8234-ceede8df631c.png',
    ],
    colors: ['Black', 'Navy', 'Burgundy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    isNew: true,
    isFeatured: true,
    inStock: true,
    rating: 4.8,
    reviews: 24,
  },
  {
    id: '2',
    name: 'Classic Blazer',
    price: 129.99,
    description: 'Timeless tailored blazer that adds sophistication to any outfit. Perfect for professional and casual styling.',
    category: 'clothing',
    subcategory: 'blazers',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/04000d12-1a8a-4902-97d0-559de928df26.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/eaf35096-6bef-40c0-ad26-617c3d0077db.png',
    ],
    colors: ['Navy', 'Black', 'Grey'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    isFeatured: true,
    inStock: true,
    rating: 4.9,
    reviews: 31,
  },
  {
    id: '3',
    name: 'Silk Blouse',
    price: 69.99,
    description: 'Luxurious silk blouse with a relaxed fit. Perfect for layering or wearing alone for an effortlessly chic look.',
    category: 'clothing',
    subcategory: 'tops',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/45fa940b-d252-4af3-b98b-5db0f5febce0.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/da9cde71-b684-4589-8b08-c800da596292.png',
    ],
    colors: ['White', 'Blush', 'Sage'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    rating: 4.7,
    reviews: 18,
  },
  {
    id: '4',
    name: 'High-Waist Trousers',
    price: 79.99,
    description: 'Modern high-waist trousers with a wide-leg silhouette. Comfortable and stylish for all-day wear.',
    category: 'clothing',
    subcategory: 'pants',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f5cc4326-8bfc-41b2-a4d8-8fb935b1cec4.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ceb267af-3115-4630-ac5a-37f42f9e80ad.png',
    ],
    colors: ['Black', 'Camel', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    isNew: true,
    inStock: true,
    rating: 4.6,
    reviews: 15,
  },
  {
    id: '5',
    name: 'Leather Handbag',
    price: 149.99,
    originalPrice: 189.99,
    description: 'Genuine leather handbag with timeless design. Features multiple compartments and adjustable strap.',
    category: 'accessories',
    subcategory: 'bags',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2e917b43-1beb-49a8-a2ac-7ee91e5d00f4.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/52b23bc4-9324-40b8-b5b5-856b1d1f7c8f.png',
    ],
    colors: ['Brown', 'Black', 'Tan'],
    sizes: ['One Size'],
    isFeatured: true,
    inStock: true,
    rating: 4.9,
    reviews: 42,
  },
  {
    id: '6',
    name: 'Statement Earrings',
    price: 39.99,
    description: 'Bold statement earrings that add glamour to any outfit. Gold-plated with elegant design details.',
    category: 'accessories',
    subcategory: 'jewelry',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4e24cded-5572-4572-a6b2-eb56cc9042ac.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/854807e3-7d18-4e01-9935-2a24e3c355b3.png',
    ],
    colors: ['Gold', 'Silver', 'Rose Gold'],
    sizes: ['One Size'],
    isNew: true,
    inStock: true,
    rating: 4.5,
    reviews: 28,
  },
  {
    id: '7',
    name: 'Ankle Boots',
    price: 119.99,
    description: 'Versatile ankle boots with a comfortable heel. Perfect for both casual and dressy occasions.',
    category: 'accessories',
    subcategory: 'shoes',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/58a60cc4-b0e5-44cc-be4f-2f383de15cfb.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0db099a9-cb50-40dd-80c4-0de44dcaa188.png',
    ],
    colors: ['Black', 'Brown', 'Burgundy'],
    sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10'],
    isFeatured: true,
    inStock: true,
    rating: 4.8,
    reviews: 35,
  },
  {
    id: '8',
    name: 'Cashmere Scarf',
    price: 89.99,
    description: 'Luxuriously soft cashmere scarf in classic design. Perfect accessory for adding warmth and elegance.',
    category: 'accessories',
    subcategory: 'scarves',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b1d2819e-8d92-4712-a65c-a41bb4b14542.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/92439510-3586-46c5-9c9d-639d3e8be9c0.png',
    ],
    colors: ['Beige', 'Grey', 'Black', 'Navy'],
    sizes: ['One Size'],
    inStock: true,
    rating: 4.9,
    reviews: 22,
  },
];

// Category data
export const categories: Category[] = [
  {
    id: 'clothing',
    name: 'Clothing',
    description: 'Discover our curated collection of sophisticated clothing pieces',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9d049709-88e4-45a6-8757-cc1aedc87514.png',
    productCount: products.filter(p => p.category === 'clothing').length,
    slug: 'clothing',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Complete your look with our premium accessories',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2f758f25-4662-45c0-819e-692e3558da6a.png',
    productCount: products.filter(p => p.category === 'accessories').length,
    slug: 'accessories',
  },
];

// Utility functions
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};