const fs = require('fs');

const reasonsTsx = `'use client';
import { motion } from 'framer-motion';
import { Users, Gift, UserPlus, Trophy, Activity } from 'lucide-react';

export default function Reasons() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm mb-6 uppercase tracking-widest"
          >
            Nega Ziyo Ta'lim?
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-4"
          >
            Mukammal Natija <br className="hidden md:block" /> Uchun Barchasi
          </motion.h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">Biz faqatgina dars o'tmaymiz, biz sizning haqiqiy natijangiz uchun ishlaymiz.</p>
        </div>

        {/* Creative Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Large (Professional Ustozlar) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="md:col-span-2 lg:row-span-2 p-10 bg-slate-50 dark:bg-zinc-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors"></div>
            
            <div className="absolute top-6 right-6 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-center text-xs transform rotate-12 border-4 border-white dark:border-zinc-900 shadow-xl z-20 group-hover:rotate-180 transition-transform duration-700">
              TOP <br/> TANLOV
            </div>

            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-8 z-10 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Professional Ustozlar va <br/> Support Teacher</h3>
              <p className="text-slate-500 dark:text-slate-400 text-lg max-w-md">Asosiy darslar tajribali ustozlar tomonidan o'tiladi, ikkinchi ustoz (support teacher) esa haftasiga 3 marta individual qo'shimcha yordam beradi.</p>
            </div>
          </motion.div>

          {/* Card 2: 100 Ming Chegirma */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="p-8 bg-blue-600 dark:bg-blue-600 rounded-[2rem] text-white flex flex-col justify-between shadow-lg shadow-blue-600/20 group hover:shadow-blue-600/40 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute -right-4 -top-4 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6 z-10 group-hover:scale-110 transition-transform">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-2">100 Ming<br/>Chegirma</h3>
              <p className="text-blue-100 text-sm">Birinchi oy to'lovida chegirmaga ega bo'ling.</p>
            </div>
          </motion.div>

          {/* Card 3: Referral Bonus */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="p-8 bg-white dark:bg-zinc-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <UserPlus className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Referral Bonus</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Do'stingizni taklif qiling, ro'yxatdan o'tsa yana 100 ming chegirma.</p>
            </div>
          </motion.div>

          {/* Card 4: Wide (IELTS 10 MLN) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="md:col-span-2 p-8 md:p-10 bg-slate-900 dark:bg-zinc-950 rounded-[2rem] border border-slate-800 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-full bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-colors"></div>
            
            <div className="flex-1 relative z-10 pr-0 md:pr-8 mb-6 md:mb-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs mb-4 uppercase tracking-widest">
                Maxsus Keshbek
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">IELTS 7.0+ <br/><span className="text-blue-400">10 MLN KESHBEK</span></h3>
              <p className="text-slate-400 max-w-md">IELTS imtihonida yuqori natija qo'lga kiritsangiz, sizga 10 MLN SO'Mgacha pul qaytaramiz.</p>
            </div>
            
            <div className="w-32 h-32 shrink-0 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500">
              <Trophy className="w-14 h-14 text-blue-400" />
            </div>
          </motion.div>

          {/* Card 5: Aktiv Hayot */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="p-8 bg-white dark:bg-zinc-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Activity className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Aktiv Hayot</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Kitob musobaqalari, Speaking club, Trening va Sport tadbirlari.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}`;

fs.writeFileSync('c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Reasons.tsx', reasonsTsx);
console.log('Reasons component completely redesigned successfully');
