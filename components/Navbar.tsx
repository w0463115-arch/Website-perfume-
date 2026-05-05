'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-royal-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 flex items-center"
          >
            <span className="text-2xl font-serif font-bold gold-text-gradient tracking-widest">
              ROYAL FRAGRANCE
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Collection', 'Brands', 'Categories', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-300 hover:text-royal-gold transition-colors tracking-widest uppercase"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-300 hover:text-royal-gold transition-colors">
              <Search size={20} />
            </button>
            <button className="text-gray-300 hover:text-royal-gold transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-royal-gold text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                0
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-royal-gold focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 border-b border-royal-gold/20 pb-6 pt-2"
        >
          <div className="px-4 space-y-4">
            {['Home', 'Collection', 'Brands', 'Categories', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-gray-300 hover:text-royal-gold transition-colors tracking-widest uppercase"
              >
                {item}
              </a>
            ))}
            <div className="flex space-x-6 pt-4 border-t border-gray-800">
              <button className="text-gray-300 hover:text-royal-gold transition-colors">
                <Search size={20} />
              </button>
              <button className="text-gray-300 hover:text-royal-gold transition-colors relative">
                <ShoppingBag size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
