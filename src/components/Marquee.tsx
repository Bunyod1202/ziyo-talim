'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Marquee() {
  return (
    <div className="relative flex overflow-x-hidden bg-slate-900 dark:bg-black text-slate-300 dark:text-zinc-500 py-4 -rotate-2 scale-105 shadow-2xl z-20 my-10 border-y border-white/20">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center space-x-8 mx-4 text-xl font-black uppercase tracking-widest">
            <span>🚀 ZAMONAVIY TA'LIM</span>
            <span>•</span>
            <span>💡 KELAJAK KASBLARI</span>
            <span>•</span>
            <span>🎯 IELTS 7.0+</span>
            <span>•</span>
            <span>🏆 10 MLN KESHBEK</span>
            <span>•</span>
            <span>🔥 INNOVATSIYA</span>
            <span>•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
