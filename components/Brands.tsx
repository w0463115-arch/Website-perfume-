'use client';

import React from 'react';
import { motion } from 'motion/react';

const brands = [
  "DIOR", "CHANEL", "GUCCI", "VERSACE", "ARMANI", "BURBERRY", "ROLEX", "CARTIER"
];

export default function Brands() {
  return (
    <section id="brands" className="py-20 bg-[#0a0a0a] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {/* Double the brands array to create a seamless loop */}
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <div 
              key={index} 
              className="px-12 md:px-24 text-2xl md:text-4xl font-serif font-black text-white/10 hover:text-royal-gold transition-colors cursor-default tracking-[0.2em]"
            >
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
