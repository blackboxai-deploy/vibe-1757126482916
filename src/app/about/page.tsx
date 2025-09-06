'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              About Click & <span className="text-rose-600">Chic</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We believe that style is a personal expression of confidence, creativity, and individuality. 
              Our mission is to curate sophisticated fashion pieces and premium accessories that 
              empower you to express your unique style story.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded with a passion for timeless elegance and contemporary design, 
                  Click & Chic emerged from the vision of creating a curated fashion 
                  destination where quality meets style.
                </p>
                <p>
                  We understand that every piece in your wardrobe should not only look 
                  beautiful but also make you feel confident and empowered. That's why 
                  we carefully select each item in our collection, focusing on exceptional 
                  craftsmanship, premium materials, and versatile designs.
                </p>
                <p>
                  From sophisticated workwear to elegant evening pieces, from statement 
                  accessories to timeless classics, our collection is designed for the 
                  modern individual who appreciates both style and substance.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/99d3a4b7-fc3b-4369-a97a-579ab819b9d8.png"
                  alt="Elegant fashion atelier with designer clothing and sophisticated styling workspace"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.backgroundColor = '#f3f4f6';
                    target.style.display = 'flex';
                    target.style.alignItems = 'center';
                    target.style.justifyContent = 'center';
                    target.innerHTML = '<span class="text-gray-400">Our Story Image</span>';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every decision we make is guided by our core values, ensuring that 
              Click & Chic remains a brand you can trust and love.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quality */}
            <div className="text-center">
              <div className="bg-rose-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality First</h3>
              <p className="text-gray-600">
                We source only the finest materials and work with skilled artisans to 
                ensure every piece meets our exacting standards of quality and durability.
              </p>
            </div>

            {/* Style */}
            <div className="text-center">
              <div className="bg-rose-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Timeless Style</h3>
              <p className="text-gray-600">
                Our designs blend classic elegance with contemporary trends, creating 
                pieces that are both fashionable today and timeless for years to come.
              </p>
            </div>

            {/* Sustainability */}
            <div className="text-center">
              <div className="bg-rose-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to ethical practices and sustainable fashion, partnering 
                with suppliers who share our values of environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Behind Click & Chic is a passionate team of fashion enthusiasts, 
              designers, and style experts dedicated to bringing you the best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="aspect-square bg-gray-100 rounded-full overflow-hidden mx-auto mb-6 max-w-48">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/eac75fa5-01bc-4482-acd8-d6c6757e3790.png"
                  alt="Professional portrait of fashion creative director with elegant styling"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.backgroundColor = '#f3f4f6';
                    target.style.display = 'flex';
                    target.style.alignItems = 'center';
                    target.style.justifyContent = 'center';
                    target.innerHTML = '<span class="text-gray-400 text-sm">Team Member</span>';
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Chen</h3>
              <p className="text-rose-600 font-medium mb-3">Creative Director</p>
              <p className="text-gray-600 text-sm">
                With over 10 years in fashion design, Sarah leads our creative vision 
                and ensures every collection reflects our commitment to elegance.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="aspect-square bg-gray-100 rounded-full overflow-hidden mx-auto mb-6 max-w-48">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/84ce5093-b70c-47e6-8fcd-a0658961bdc5.png"
                  alt="Professional portrait of fashion buyer specialist with modern styling"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.backgroundColor = '#f3f4f6';
                    target.style.display = 'flex';
                    target.style.alignItems = 'center';
                    target.style.justifyContent = 'center';
                    target.innerHTML = '<span class="text-gray-400 text-sm">Team Member</span>';
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Michael Rodriguez</h3>
              <p className="text-rose-600 font-medium mb-3">Head of Buying</p>
              <p className="text-gray-600 text-sm">
                Michael's keen eye for emerging trends and quality ensures our 
                collections feature the best pieces from around the world.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="aspect-square bg-gray-100 rounded-full overflow-hidden mx-auto mb-6 max-w-48">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/61554d0d-fbd8-4b8a-85a8-09cceac68e71.png"
                  alt="Professional portrait of customer experience manager with friendly styling"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.backgroundColor = '#f3f4f6';
                    target.style.display = 'flex';
                    target.style.alignItems = 'center';
                    target.style.justifyContent = 'center';
                    target.innerHTML = '<span class="text-gray-400 text-sm">Team Member</span>';
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Emma Thompson</h3>
              <p className="text-rose-600 font-medium mb-3">Customer Experience</p>
              <p className="text-gray-600 text-sm">
                Emma leads our customer service team, ensuring every interaction 
                with Click & Chic exceeds your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rose-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Discover Your Style?
          </h2>
          <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
            Explore our curated collections and find pieces that speak to your 
            unique sense of style and confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
              <Link href="/products">Shop Collection</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-rose-600">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}