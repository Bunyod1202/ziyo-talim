'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const news = [
  {
    cat: "IT yangiliklari",
    title: "Yangi Frontend kursimizga qabul boshlandi",
    date: "12 Oktabr, 2026",
    color: "bg-blue-100 text-[#1D4ED8]"
  },
  {
    cat: "Natijalar",
    title: "O'quvchimiz Xalqaro olimpiadada g'olib bo'ldi",
    date: "10 Oktabr, 2026",
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    cat: "Tadbirlar",
    title: "Ochiq eshiklar kuni: IT sohasiga kirish",
    date: "08 Oktabr, 2026",
    color: "bg-purple-100 text-purple-600"
  }
];

export default function News() {
  return (
    <section id="news" className="py-24 glass-panel dark:bg-[#012240]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#023059] dark:text-white mb-4">
              Ziyo Ta'lim yangiliklari
            </h2>
            <p className="text-slate-500 dark:text-gray-400 text-lg">So'nggi voqealar va yangiliklardan xabardor bo'ling.</p>
          </div>
          <button className="text-[#1D4ED8] font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Barcha yangiliklar <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="glass-card rounded-3xl overflow-hidden border border-slate-100 dark:border-white/10 hover:shadow-xl transition-all group"
            >
              <div className="h-48 bg-gray-100 dark:bg-[#012240] group-hover:scale-105 transition-transform duration-500"></div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.color}`}>{item.cat}</span>
                  <span className="text-sm text-gray-400">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-[#023059] dark:text-white mb-4 line-clamp-2 group-hover:text-[#1D4ED8] transition-colors">{item.title}</h3>
                <button className="text-slate-500 dark:text-gray-400 font-medium flex items-center gap-2 text-sm group-hover:text-[#1D4ED8] transition-colors">
                  Batafsil o'qish <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}