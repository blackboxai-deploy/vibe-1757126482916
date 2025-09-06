'use client';

import Link from 'next/link';
import { Product } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Product Image */}
      <Link href={`/products/${product.id}`}>
        <div className="aspect-[3/4] relative overflow-hidden bg-gray-100">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.backgroundColor = '#f3f4f6';
              target.style.display = 'flex';
              target.style.alignItems = 'center';
              target.style.justifyContent = 'center';
              target.innerHTML = '<span class="text-gray-400 text-sm">Product Image</span>';
            }}
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isNew && (
              <Badge className="bg-rose-600 hover:bg-rose-700 text-white">
                New
              </Badge>
            )}
            {product.originalPrice && (
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Sale
              </Badge>
            )}
          </div>

          {/* Quick Actions - Appears on Hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300">
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button 
                className="w-full bg-white text-gray-900 hover:bg-gray-100"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Quick add to cart:', product.id);
                }}
              >
                Quick Add
              </Button>
            </div>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <Link 
            href={`/products/${product.id}`}
            className="text-sm font-medium text-gray-900 hover:text-rose-600 transition-colors line-clamp-2"
          >
            {product.name}
          </Link>
        </div>
        
        {/* Category */}
        <div className="mb-2">
          <span className="text-xs text-gray-500 capitalize">
            {product.category} {product.subcategory && `• ${product.subcategory}`}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-semibold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Rating & Colors */}
        <div className="flex items-center justify-between">
          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(product.rating!) 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300'
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-gray-500">
                ({product.reviews})
              </span>
            </div>
          )}

          {/* Color Options */}
          <div className="flex gap-1">
            {product.colors.slice(0, 3).map((color) => (
              <div
                key={color}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{
                  backgroundColor: 
                    color.toLowerCase() === 'black' ? '#000000' :
                    color.toLowerCase() === 'white' ? '#ffffff' :
                    color.toLowerCase() === 'navy' ? '#001f3f' :
                    color.toLowerCase() === 'grey' || color.toLowerCase() === 'gray' ? '#808080' :
                    color.toLowerCase() === 'brown' ? '#8b4513' :
                    color.toLowerCase() === 'burgundy' ? '#800020' :
                    color.toLowerCase() === 'beige' ? '#f5f5dc' :
                    color.toLowerCase() === 'blush' ? '#de5d83' :
                    color.toLowerCase() === 'sage' ? '#9caf88' :
                    color.toLowerCase() === 'camel' ? '#c19a6b' :
                    color.toLowerCase() === 'tan' ? '#d2b48c' :
                    color.toLowerCase() === 'gold' ? '#ffd700' :
                    color.toLowerCase() === 'silver' ? '#c0c0c0' :
                    color.toLowerCase() === 'rose gold' ? '#e8b4a0' :
                    '#e5e7eb'
                }}
                title={color}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}