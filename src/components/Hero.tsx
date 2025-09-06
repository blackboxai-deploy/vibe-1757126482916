'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-gray-50 to-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Discover Your
              <span className="block text-rose-600">Perfect Style</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Curated collections of sophisticated clothing and premium accessories. 
              From timeless classics to contemporary trends, find pieces that reflect 
              your unique style and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700 text-white">
                <Link href="/products">
                  Shop Collection
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                <Link href="/categories/clothing">
                  Browse Clothing
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-gray-100">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cebbe7d4-a469-4869-9c73-a4a01941132e.png"
                alt="Elegant fashion model wearing sophisticated black dress in minimalist studio setting"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.backgroundColor = '#f3f4f6';
                  target.style.display = 'flex';
                  target.style.alignItems = 'center';
                  target.style.justifyContent = 'center';
                  target.innerHTML = '<span class="text-gray-400">Fashion Hero Image</span>';
                }}
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 hidden lg:block">
              <div className="text-sm font-semibold text-gray-900">New Collection</div>
              <div className="text-xs text-gray-600">Spring/Summer 2024</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-rose-600 text-white rounded-lg shadow-lg p-4 hidden lg:block">
              <div className="text-sm font-semibold">Free Shipping</div>
              <div className="text-xs opacity-90">On orders over $75</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <div className="w-96 h-96 rounded-full bg-rose-600 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-5">
        <div className="w-72 h-72 rounded-full bg-gray-900 blur-3xl"></div>
      </div>
    </section>
  );
}