'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getProductById, products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = getProductById(productId);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h1>
          <p className="text-gray-600 mb-4">The product you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/products">Browse All Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    console.log('Add to cart:', {
      product: product.id,
      color: selectedColor || product.colors[0],
      size: selectedSize || product.sizes[0],
      quantity
    });
    // Add to cart logic would go here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm text-gray-600">
          <Link href="/" className="hover:text-rose-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-rose-600">Products</Link>
          <span className="mx-2">/</span>
          <Link href={`/categories/${product.category}`} className="hover:text-rose-600 capitalize">
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.backgroundColor = '#f3f4f6';
                  target.style.display = 'flex';
                  target.style.alignItems = 'center';
                  target.style.justifyContent = 'center';
                  target.innerHTML = '<span class="text-gray-400">Product Image</span>';
                }}
              />
            </div>
            
            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square w-20 bg-gray-100 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-rose-600' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.backgroundColor = '#f3f4f6';
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Product Title & Category */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                {product.isNew && (
                  <Badge className="bg-rose-600 hover:bg-rose-700">New</Badge>
                )}
                {product.originalPrice && (
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Sale</Badge>
                )}
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 capitalize">
                {product.category} {product.subcategory && `• ${product.subcategory}`}
              </p>
            </div>

            {/* Price & Rating */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              
              {product.rating && (
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
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
                  <span className="text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Color: {selectedColor || 'Select a color'}
              </h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 ${
                      selectedColor === color ? 'border-rose-600 ring-2 ring-rose-200' : 'border-gray-300'
                    }`}
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
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a size" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="w-12 text-center text-lg font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={handleAddToCart}
                  size="lg"
                  className="flex-1 bg-rose-600 hover:bg-rose-700 text-white"
                  disabled={!product.inStock}
                >
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
                <Button variant="outline" size="lg" className="sm:w-auto">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Wishlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
            You might also like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}