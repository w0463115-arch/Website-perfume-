'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <span className="text-royal-gold text-sm tracking-[0.4em] uppercase mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-12">
              Visit Our <span className="italic">Boutique</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-royal-gold shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg mb-1">Our Location</h4>
                  <p className="text-gray-400 font-light">123, Luxury Mall, South Extension, New Delhi - 110049</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-royal-gold shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg mb-1">Quick Call</h4>
                  <p className="text-gray-400 font-light">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-royal-gold shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg mb-1">Email Support</h4>
                  <p className="text-gray-400 font-light">contact@royalfragrance.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center space-x-4 bg-[#25D366] text-white px-8 py-4 rounded-none uppercase tracking-widest text-sm font-bold hover:bg-[#128C7E] transition-colors"
              >
                <div className="bg-white/20 p-2 rounded-full">
                  <Send size={16} />
                </div>
                <span>Chat on WhatsApp</span>
              </motion.button>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white/5 border border-white/10 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-royal-gold/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
            
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-royal-gold outline-none transition-colors font-light" 
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-royal-gold outline-none transition-colors font-light" 
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Interested In</label>
                <select className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-royal-gold outline-none transition-colors font-light appearance-none cursor-pointer">
                  <option className="bg-black">Men&apos;s Perfumes</option>
                  <option className="bg-black">Women&apos;s Perfumes</option>
                  <option className="bg-black">Unisex Collection</option>
                  <option className="bg-black">Traditional Attar</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Your Message</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-royal-gold outline-none transition-colors font-light resize-none" 
                  placeholder="How can we help you find your signature scent?"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-royal-gold text-black font-bold uppercase tracking-[0.3em] text-xs hover:bg-yellow-500 transition-colors mt-4"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
