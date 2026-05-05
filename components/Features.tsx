'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Award, BadgeIndianRupee } from 'lucide-react';

const features = [
  {
    title: "100% Original",
    desc: "Every bottle is sourced directly from certified original manufacturers.",
    icon: Award
  },
  {
    title: "Premium Quality",
    desc: "We curate only the highest concentration EDPs and luxury extraits.",
    icon: ShieldCheck
  },
  {
    title: "Fast Delivery",
    desc: "Guaranteed express shipping within 2-4 business days across India.",
    icon: Zap
  },
  {
    title: "Affordable Prices",
    desc: "Luxury scents at the best competitive market prices in the industry.",
    icon: BadgeIndianRupee
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-royal-gold/10 rounded-full border border-royal-gold/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-royal-gold transition-all duration-500 group-hover:scale-110">
                <feature.icon size={28} className="text-royal-gold group-hover:text-black transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-3 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
