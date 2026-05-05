'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Star } from 'lucide-react';
import Image from 'next/image';

const perfumes = [
  { id: 1, name: "Dior Sauvage", price: 12500, category: "Men", image: "https://images.pexels.com/photos/14402573/pexels-photo-14402573.jpeg" },
  { id: 2, name: "Chanel No. 5", price: 15800, category: "Women", image: "https://images.pexels.com/photos/21008923/pexels-photo-21008923.jpeg" },
  { id: 3, name: "Gucci Bloom", price: 11200, category: "Women", image: "https://images.pexels.com/photos/19170038/pexels-photo-19170038.jpeg" },
  { id: 4, name: "Versace Eros", price: 9500, category: "Men", image: "https://images.pexels.com/photos/28460123/pexels-photo-28460123.jpeg" },
  { id: 5, name: "Tom Ford Black Orchid", price: 18500, category: "Unisex", image: "https://images.pexels.com/photos/34143832/pexels-photo-34143832.jpeg" },
  { id: 6, name: "Armani Code", price: 10800, category: "Men", image: "https://images.pexels.com/photos/31132401/pexels-photo-31132401.jpeg" },
  { id: 7, name: "YSL Libre", price: 13200, category: "Women", image: "https://images.pexels.com/photos/8981521/pexels-photo-8981521.jpeg" },
  { id: 8, name: "Creed Aventus", price: 32000, category: "Men", image: "https://images.pexels.com/photos/8516167/pexels-photo-8516167.jpeg" },
];

export default function Products() {
  return (
    <section id="collection" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-royal-gold text-sm tracking-[0.4em] uppercase mb-4 block"
          >
            Curated Selection
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Featured <span className="italic">Collection</span>
          </h2>
          <div className="h-1 w-24 bg-royal-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {perfumes.map((perfume, index) => (
            <motion.div
              key={perfume.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#111] border border-white/5 p-4 flex flex-col items-center hover:border-royal-gold/30 transition-all duration-500"
            >
              {/* Product Image */}
              <div className="relative w-full aspect-[4/5] bg-black/40 overflow-hidden mb-6">
                <Image
                  src={perfume.image}
                  alt={perfume.name}
                  fill
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 bg-white text-black px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-royal-gold">
                  Quick View
                </button>
              </div>

              {/* Product Details */}
              <div className="text-center w-full">
                <p className="text-royal-gold text-[10px] uppercase tracking-widest mb-1">{perfume.category}</p>
                <h3 className="text-white font-serif text-lg mb-2 group-hover:text-royal-gold transition-colors">
                  {perfume.name}
                </h3>
                <div className="flex items-center justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-royal-gold text-royal-gold" />
                  ))}
                </div>
                <p className="text-xl font-bold font-sans text-white mb-6 animate-pulse-slow">
                  ₹{perfume.price.toLocaleString()}
                </p>
                
                <button className="w-full py-3 border border-white/10 text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-royal-gold hover:text-black hover:border-royal-gold transition-all duration-300 flex items-center justify-center space-x-2">
                  <ShoppingBag size={14} />
                  <span>Add to Bag</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-12 py-4 border-b-2 border-royal-gold text-royal-gold font-bold uppercase tracking-[0.3em] text-xs hover:text-white transition-colors duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
