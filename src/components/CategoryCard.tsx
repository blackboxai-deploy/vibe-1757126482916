'use client';

import Link from 'next/link';
import { Category } from '@/types';
import { Button } from '@/components/ui/button';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/categories/${category.slug}`} className="group block">
      <div className="relative rounded-lg overflow-hidden bg-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* Category Image */}
        <div className="aspect-[4/5] relative overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.backgroundColor = '#f3f4f6';
              target.style.display = 'flex';
              target.style.alignItems = 'center';
              target.style.justifyContent = 'center';
              target.innerHTML = '<span class="text-gray-400">Category Image</span>';
            }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
            <p className="text-sm mb-4 opacity-90 line-clamp-2">
              {category.description}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-sm opacity-75">
                {category.productCount} {category.productCount === 1 ? 'item' : 'items'}
              </span>
              
              <Button 
                variant="secondary" 
                size="sm"
                className="bg-white/90 text-gray-900 hover:bg-white group-hover:translate-x-1 transition-transform duration-300"
              >
                Shop Now
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Hover Effect Indicator */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 rounded-full p-2">
            <svg className="h-5 w-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}