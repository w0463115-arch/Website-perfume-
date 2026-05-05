'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/36834156/pexels-photo-36834156.jpeg"
          alt="Luxury Perfume"
          fill
          className="w-full h-full object-cover opacity-70 scale-100"
          referrerPolicy="no-referrer"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-royal-gold font-medium tracking-[0.3em] uppercase text-sm mb-6 block">
            Essence of Elegance
          </span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight">
            Discover Your <br />
            <span className="gold-text-gradient italic">Signature Scent</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light tracking-wide">
            Experience the finest collection of premium fragrances curated from the world&apos;s most prestigious perfume houses.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-royal-gold text-black font-bold uppercase tracking-widest text-sm hover:bg-yellow-500 transition-colors"
            >
              Explore Collection
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border border-royal-gold/40 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition-colors"
            >
              Our Story
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-royal-gold opacity-50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
