'use client';
import { motion } from 'framer-motion';

export default function Stats() {
  return (
    <section className="py-10 relative z-20 -mt-20">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bento-card p-8 flex flex-col justify-center items-center text-center min-h-[12rem] py-8 h-full"
          >
            <div className="text-5xl font-black text-slate-900 dark:text-white mb-2">2022</div>
            <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Yildan beri</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bento-card p-8 flex flex-col justify-center items-center text-center min-h-[12rem] h-full"
          >
            <div className="text-5xl font-black text-slate-900 dark:text-white mb-2">2000+</div>
            <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Muvaffaqiyatli talaba</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bento-card p-8 flex flex-col justify-center items-center text-center min-h-[12rem] py-8 h-full"
          >
            <div className="text-5xl font-black text-slate-900 dark:text-white mb-2">95%</div>
            <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">O'zlashtirish</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}