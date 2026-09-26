const fs = require('fs');

const code = `'use client';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Results() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = window.innerWidth > 768 ? 420 : 340;
      const maxScrollLeft = current.scrollWidth - current.clientWidth;
      
      if (direction === 'right') {
        if (current.scrollLeft >= maxScrollLeft - 10) {
          current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      } else {
        if (current.scrollLeft <= 0) {
          current.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
        } else {
          current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      }
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      scroll('right');
    }, 3500); // Scrolls every 3.5 seconds
    return () => clearInterval(interval);
  }, []);

  const results = [
    {
      name: "Akmal Rustamov",
      score: "IELTS 8.0",
      subject: "Ingliz tili",
      uni: "Westminster University",
      grant: "100% Grant",
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
      quote: "Ziyo Ta'limdagi 6 oylik intensiv tayyorgarlik menga o'z orzuyimdagi universitetga kirishimga yordam berdi."
    },
    {
      name: "Sabina Aliyeva",
      score: "189 ball",
      subject: "DTM (Tibbiyot)",
      uni: "Toshkent Tibbiyot Akademiyasi",
      grant: "Davlat Granti",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
      quote: "Kimyo va Biologiya darslaridagi amaliyot va ustozlarning talabchanligi eng katta yutug'im bo'ldi."
    },
    {
      name: "Javohir Qodirov",
      score: "IELTS 7.5",
      subject: "Ingliz tili",
      uni: "Inha University",
      grant: "Katta Chegirma",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
      quote: "Support teacher bilan ishlash va doimiy speaking clublar natijamni tez oshishiga sabab bo'ldi."
    },
    {
      name: "Madina Umarova",
      score: "Topik 5",
      subject: "Koreys tili",
      uni: "Seoul National University",
      grant: "Global Grant",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      quote: "Noldan boshlab 8 oy ichida Topik 5 darajasiga chiqishimga ishonmagandim. Rahmat Ziyo Ta'lim!"
    }
  ];

  return (
    <section id="results" className="py-24 relative bg-slate-50 dark:bg-[#050505] overflow-hidden transition-colors duration-300">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl z-10 relative">
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 font-bold text-sm mb-6 uppercase tracking-widest transition-colors"
            >
              Bizning Faxrimiz
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-4 transition-colors"
            >
              O'quvchilarimizning <br className="hidden md:block"/> Yuksak Natijalari
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-4 mt-8 md:mt-0"
          >
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-zinc-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all active:scale-95 shadow-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-zinc-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all active:scale-95 shadow-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>

        {/* Horizontal Scrolling Cards Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-12 pt-4 px-4 -mx-4 snap-x snap-mandatory hide-scroll"
        >
          {results.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative shrink-0 w-[340px] md:w-[420px] h-[520px] rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.25)] transition-all duration-500 snap-center group overflow-hidden flex flex-col justify-end cursor-pointer bg-slate-900"
            >
              {/* Full Background Image */}
              <img 
                src={item.img} 
                alt={item.name} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              
              {/* Creative Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
              
              {/* Top Floating Badge */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-10">
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 shadow-2xl">
                  <span className="block text-white/70 text-xs font-bold uppercase tracking-widest mb-1">{item.subject}</span>
                  <span className="block text-white font-black text-3xl tracking-tight drop-shadow-md">{item.score}</span>
                </div>
                
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white shadow-xl shadow-amber-500/40 transform group-hover:rotate-[20deg] group-hover:scale-110 transition-all duration-300 border border-white/20">
                  <Award className="w-6 h-6" />
                </div>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-10 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
                  {item.name}
                </h3>
                
                {/* University Pill */}
                <div className="inline-flex items-center gap-2 text-white font-bold text-sm bg-blue-600/80 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl mb-4 w-fit shadow-lg">
                  <GraduationCap className="w-4 h-4" /> {item.uni}
                  <span className="w-1 h-1 bg-white/50 rounded-full mx-1"></span>
                  <span className="text-amber-300">{item.grant}</span>
                </div>

                {/* Quote (Fades in more clearly on hover) */}
                <div className="pt-4 border-t border-white/10 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto overflow-hidden">
                  <p className="text-white/80 text-sm leading-relaxed italic flex gap-3 items-start">
                    <Quote className="w-5 h-5 shrink-0 text-amber-400 opacity-60 mt-1" />
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Hover Ambient Glow */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/30 rounded-full blur-[80px] group-hover:bg-blue-500/50 transition-colors duration-700 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync('c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Results.tsx', code);
console.log('Results component rewritten as creative auto-scrolling carousel');
