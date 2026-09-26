'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useState } from 'react';

const reviews = [
  {
    name: "Javohir T.",
    course: "Frontend Development",
    rating: 5,
    text: "O'qitish metodikasi juda zo'r. 6 oy ichida noldan loyihalar qilish darajasiga chiqdim."
  },
  {
    name: "Madina A.",
    course: "IELTS",
    rating: 5,
    text: "Ustozlar juda tajribali. IELTS dan 7.5 oldim va xorijda o'qish imkoniyatiga ega bo'ldim."
  },
  {
    name: "Sanjar R.",
    course: "Mathematics",
    rating: 5,
    text: "Matematikadan o'zlashtirishim juda past edi, hozir esa olimpiadalarda qatnashyapman."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 glass-card overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#023059] dark:text-white mb-4">
            O'quvchilar nima deydi?
          </h2>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 snap-x">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              className="min-w-[300px] md:min-w-[400px] glass-panel dark:bg-[#012240]/50 p-8 rounded-3xl border border-slate-100 dark:border-white/10 snap-center"
            >
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={18} />)}
              </div>
              <p className="text-slate-600 dark:text-gray-400 mb-6 font-medium text-lg">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1D4ED8]/10 rounded-full"></div>
                <div>
                  <h4 className="font-bold text-[#023059] dark:text-white">{review.name}</h4>
                  <p className="text-sm text-[#1D4ED8]">{review.course}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}