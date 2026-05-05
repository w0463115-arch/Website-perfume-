'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageSquare, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Owner() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden bg-white/5 border-2 border-royal-gold/20 p-4">
              <Image
                src="https://images.pexels.com/photos/14042835/pexels-photo-14042835.jpeg"
                alt="Rohit Sharma"
                fill
                className="w-full h-full object-cover filter brightness-90 hover:brightness-100 transition-all duration-700 p-4"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-0 right-0 p-8">
                <div className="h-32 w-0.5 bg-royal-gold"></div>
              </div>
            </div>
            {/* Experience Badge */}
            <div className="absolute bottom-10 -right-8 md:-right-12 bg-royal-gold p-8 text-black shadow-2xl">
              <p className="text-4xl font-serif font-bold">5+</p>
              <p className="text-xs font-bold uppercase tracking-widest mt-1">Years Excellence</p>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="text-royal-gold text-sm tracking-[0.4em] uppercase mb-4 block">The Visionary</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
              Mr. Rohit Sharma
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light tracking-wide italic border-l-4 border-royal-gold pl-6 py-2">
              &quot;Passionate about luxury perfumes and helping customers find their perfect signature scent. At Royal Fragrance Hub, we don&apos;t just sell perfumes; we curate olfactory experiences.&quot;
            </p>
            <p className="text-gray-400 mb-12 leading-relaxed font-light tracking-wide">
              Rohit has spent over half a decade studying the art of fragrance. His expertise spans from European luxury brands to traditional Indian Attars, ensuring every customer finds a scent that resonates with their personality and occasion.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 rounded-full border border-royal-gold flex items-center justify-center text-royal-gold">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest">Call Directly</p>
                  <p className="text-white text-lg font-medium">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex space-x-4 pt-4 border-t border-white/5">
                {[Instagram, Linkedin, MessageSquare].map((Icon, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -5, color: '#D4AF37' }}
                    href="#"
                    className="text-gray-500 transition-colors"
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
