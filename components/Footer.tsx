'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Logo & About */}
          <div className="col-span-1 lg:col-span-1">
            <span className="text-2xl font-serif font-bold gold-text-gradient tracking-widest block mb-8 uppercase">
              ROYAL FRAGRANCE
            </span>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs font-light">
              Crafting stories through unforgettable scents. India&apos;s premier destination for high-end authentic perfumes and luxury fragrances.
            </p>
            <div className="flex space-x-6">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-500 hover:text-royal-gold transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Perfumes', 'Brands', 'Categories', 'Boutique', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-royal-gold transition-colors text-sm uppercase tracking-widest font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-serif text-lg mb-8">Collections</h4>
            <ul className="space-y-4 text-sm font-light">
              {["Men's Luxury", "Women's Private", "Oriental Oud", "Authentic Attar", "Signature Limited"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-serif text-lg mb-8">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-6 font-light">Join our inner circle for exclusive access to sales and new arrivals.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white w-full outline-none focus:border-royal-gold transition-colors"
              />
              <button className="bg-royal-gold text-black px-4 py-3 hover:bg-yellow-500 transition-colors uppercase font-bold text-xs">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] uppercase tracking-widest">
            © 2026 ROYAL FRAGRANCE HUB. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8 text-[10px] uppercase tracking-widest text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Shipping Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
