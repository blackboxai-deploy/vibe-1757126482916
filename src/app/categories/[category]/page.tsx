'use client';

import { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { getProductsByCategory, getCategoryBySlug } from '@/lib/products';
import { SortType } from '@/types';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params.category as string;
  const category = getCategoryBySlug(categorySlug);
  const [sort, setSort] = useState<SortType>('name');
  const [searchTerm, setSearchTerm] = useState('');

  const categoryProducts = getProductsByCategory(categorySlug === 'all' ? 'all' : categorySlug);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = categoryProducts;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (p.subcategory && p.subcategory.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      switch (sort) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return sorted;
  }, [categoryProducts, sort, searchTerm]);

  if (!category && categorySlug !== 'all') {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Category Not Found</h1>
          <p className="text-gray-600 mb-4">The category you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/products">Browse All Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  const pageTitle = category ? category.name : 'All Products';
  const pageDescription = category ? category.description : 'Browse our complete collection';

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm text-gray-600">
          <Link href="/" className="hover:text-rose-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-rose-600">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{pageTitle}</span>
        </nav>
      </div>

      {/* Category Header */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {pageTitle}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {pageDescription}
            </p>
            {category && (
              <div className="text-lg text-gray-700">
                {filteredAndSortedProducts.length} {filteredAndSortedProducts.length === 1 ? 'item' : 'items'} available
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="sticky top-16 z-40 bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="w-full lg:w-auto lg:flex-1 max-w-md">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder={`Search ${pageTitle.toLowerCase()}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                />
              </div>
            </div>

            {/* Quick Filter Buttons for Clothing */}
            {categorySlug === 'clothing' && (
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" onClick={() => setSearchTerm('dress')}>
                  Dresses
                </Button>
                <Button variant="outline" size="sm" onClick={() => setSearchTerm('blazer')}>
                  Blazers
                </Button>
                <Button variant="outline" size="sm" onClick={() => setSearchTerm('top')}>
                  Tops
                </Button>
                <Button variant="outline" size="sm" onClick={() => setSearchTerm('trouser')}>
                  Trousers
                </Button>
              </div>
            )}

            {/* Quick Filter Buttons for Accessories */}
            {categorySlug === 'accessories' && (
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" onClick={() => setSearchTerm('bag')}>
                  Bags
                </Button>
                <Button variant="outline" size="sm" onClick={() => setSearchTerm('jewelry')}>
                  Jewelry
                </Button>
                <Button variant="outline" size="sm" onClick={() => setSearchTerm('shoe')}>
                  Shoes
                </Button>
                <Button variant="outline" size="sm" onClick={() => setSearchTerm('scarf')}>
                  Scarves
                </Button>
              </div>
            )}

            {/* Sort Dropdown */}
            <div className="w-full lg:w-auto">
              <Select value={sort} onValueChange={(value: SortType) => setSort(value)}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Info */}
        <div className="mb-8 flex justify-between items-center">
          <p className="text-gray-600">
            Showing {filteredAndSortedProducts.length} {filteredAndSortedProducts.length === 1 ? 'product' : 'products'}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
          
          {searchTerm && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setSearchTerm('')}
            >
              Clear Search
            </Button>
          )}
        </div>

        {/* Products */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">
              {categorySlug === 'clothing' ? '👗' : categorySlug === 'accessories' ? '👜' : '🔍'}
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">
              {searchTerm 
                ? `No products match "${searchTerm}" in this category.`
                : `No products found in ${pageTitle.toLowerCase()}.`
              }
            </p>
            <div className="space-y-3">
              {searchTerm && (
                <Button onClick={() => setSearchTerm('')}>
                  Clear Search
                </Button>
              )}
              <Button asChild variant="outline">
                <Link href="/products">Browse All Products</Link>
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Category CTA */}
      {category && filteredAndSortedProducts.length > 0 && (
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Love what you see?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover more styles and complete your wardrobe with our curated collections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700">
                <Link href="/products">Shop All Products</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={categorySlug === 'clothing' ? '/categories/accessories' : '/categories/clothing'}>
                  {categorySlug === 'clothing' ? 'Browse Accessories' : 'Browse Clothing'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}