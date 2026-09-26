'use client';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#020813] transition-colors duration-500 pt-20">
      
      {/* --- Ambient Background Glows --- */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/20 dark:bg-blue-600/20 rounded-[100%] blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-400/20 dark:bg-cyan-500/20 rounded-[100%] blur-[100px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/20 rounded-[100%] blur-[120px] pointer-events-none mix-blend-screen"></div>

      {/* --- Floating Glass Pills (Background) --- */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[10%] top-[25%] hidden lg:flex items-center gap-2 px-5 py-3 rounded-full bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-xl text-sm font-bold text-slate-800 dark:text-slate-200 z-0"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">🏆</span>
        100% Grantlar
      </motion.div>

      <motion.div 
        animate={{ y: [0, 25, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-[12%] top-[30%] hidden lg:flex items-center gap-2 px-5 py-3 rounded-full bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-xl text-sm font-bold text-slate-800 dark:text-slate-200 z-0"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400">⭐</span>
        IELTS 8.0+
      </motion.div>

      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute left-[20%] bottom-[25%] hidden lg:flex items-center gap-2 px-5 py-3 rounded-full bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-xl text-sm font-bold text-slate-800 dark:text-slate-200 z-0"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400">💼</span>
        Karyera
      </motion.div>

      <div className="container mx-auto px-4 md:px-8 z-10 relative">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="group relative inline-flex items-center gap-3 px-2 py-1.5 pr-5 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium text-sm mb-10 shadow-lg cursor-pointer hover:bg-white/80 dark:hover:bg-white/10 transition-colors"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white shadow-inner">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="tracking-wide">2026-yilgi qabul boshlandi</span>
            <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[2.75rem] sm:text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter leading-[1.05] text-slate-900 dark:text-white mb-8"
          >
            Ta'limda yangi <br className="hidden sm:block" />
            <span className="relative inline-block mt-2">
              <span className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-400 blur-2xl opacity-20 dark:opacity-40 rounded-full"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                mukammallik darajasi.
              </span>
            </span>
          </motion.h1>

          {/* Sub headline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 font-medium leading-relaxed px-2"
          >
            Sizning kelajagingiz kafolati — tajribali ustozlar, premium muhit va innovatsion o'qitish metodikasi. Bugunoq Ziyo Ta'limga qo'shiling.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
          >
            <button 
              onClick={() => window.dispatchEvent(new Event('open-modal'))}
              className="relative group w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors">
                Kurslarni boshlash <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button 
              onClick={() => window.dispatchEvent(new Event('open-modal'))}
              className="w-full sm:w-auto px-8 py-4 bg-white/50 dark:bg-white/5 backdrop-blur-md text-slate-900 dark:text-white border border-slate-200/50 dark:border-white/10 rounded-full font-bold text-lg hover:bg-white dark:hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-sm"
            >
              Bepul konsultatsiya
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 flex flex-col items-center gap-4"
          >
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
              ].map((url, i) => (
                <img 
                  key={i}
                  src={url}
                  alt="Student"
                  className="w-12 h-12 rounded-full border-2 border-white dark:border-[#020813] object-cover shadow-sm"
                />
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-white dark:border-[#020813] bg-blue-50 dark:bg-blue-900/40 flex items-center justify-center text-xs font-bold text-blue-600 dark:text-blue-400 z-10 shadow-sm backdrop-blur-md">
                10k+
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span>O'quvchilar ishonchi</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}