'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const categories = [
  { name: "Men", items: "120+ Items", image: "https://images.pexels.com/photos/11197178/pexels-photo-11197178.jpeg" },
  { name: "Women", items: "150+ Items", image: "https://images.pexels.com/photos/36834063/pexels-photo-36834063.jpeg" },
  { name: "Unisex", items: "80+ Items", image: "https://images.pexels.com/photos/19378926/pexels-photo-19378926.jpeg" },
  { name: "Attar", items: "50+ Items", image: "https://images.pexels.com/photos/7400855/pexels-photo-7400855.jpeg" },
];

export default function Categories() {
  return (
    <section id="categories" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-royal-gold text-sm tracking-[0.4em] uppercase mb-4 block">Categories</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
              Explore Our <span className="italic">Departments</span>
            </h2>
          </div>
          <button className="flex items-center space-x-2 text-royal-gold hover:text-white transition-colors uppercase tracking-widest text-xs font-bold border-b border-royal-gold pb-2">
            <span>View All Categories</span>
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[400px] overflow-hidden cursor-pointer"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-40"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-serif font-bold text-white mb-2 group-hover:text-royal-gold transition-colors">
                  {cat.name}
                </h3>
                <p className="text-royal-gold text-xs tracking-widest uppercase mb-4">{cat.items}</p>
                <div className="h-0.5 w-0 group-hover:w-full bg-royal-gold transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
