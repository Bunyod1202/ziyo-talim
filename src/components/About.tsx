'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 glass-card">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-[#023059] dark:text-white leading-tight mb-8">
              Biz faqat dars bermaymiz. <br />
              <span className="text-[#1D4ED8]">Biz kelajak yaratamiz.</span>
            </h2>
            
            {/* Abstract Graphic Placeholder */}
            <div className="relative h-64 rounded-3xl bg-gradient-to-tr from-blue-50 to-indigo-50 border border-blue-100 overflow-hidden flex items-center justify-center">
              <div className="w-full h-full bg-[url('/grid.svg')] opacity-20 absolute inset-0"></div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 rounded-full border-4 border-dashed border-blue-300 absolute"
              />
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-16 h-16 bg-[#DBEAFE]0 rounded-full blur-xl absolute"
              />
              <div className="relative z-10 text-4xl font-bold text-blue-900 tracking-tighter">
                ZIYO
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-xl text-slate-600 dark:text-gray-400 mb-12 leading-relaxed">
              Ziyo Ta'lim — zamonaviy ta'lim metodikasi, tajribali ustozlar va amaliy mashg'ulotlar orqali o'quvchilarga real natija berishga qaratilgan ta'lim markazi.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: "🎯", title: "Individual yondashuv" },
                { icon: "👨‍🏫", title: "Tajribali ustozlar" },
                { icon: "💻", title: "Zamonaviy texnologiyalar" },
                { icon: "📈", title: "Natijaga yo'naltirilgan ta'lim" }
              ].map((feature, idx) => (
                <div key={idx} className="glass-panel dark:bg-[#012240]/50 rounded-2xl p-6 border border-slate-100 dark:border-white/10">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h4 className="text-lg font-bold text-[#023059] dark:text-white">{feature.title}</h4>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}