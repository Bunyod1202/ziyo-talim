const fs = require('fs');

const globalsCss = `@import "tailwindcss";
@custom-variant dark (&:is(.dark *));

.dark {
  --background: #000000;
  --foreground: #ffffff;
}

body {
  background: var(--background, #FAFAFA);
  color: var(--foreground, #111111);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

/* Modern Subtle Dot Grid Background */
.bg-dots {
  background-image: radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 24px 24px;
}

.dark .bg-dots {
  background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
}

/* Bento Card Style */
.bento-card {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
  position: relative;
}

.dark .bento-card {
  background: #0A0A0A;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.bento-card:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02);
  border-color: rgba(29, 78, 216, 0.2);
}

.dark .bento-card:hover {
  border-color: rgba(56, 189, 248, 0.3);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.8);
}
`;

const heroTsx = `'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center bg-dots overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-white to-transparent dark:from-black z-0 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium text-sm mb-8 border border-blue-100 dark:border-blue-800/50"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            Qabul 2026 ochiq
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.1] mb-8"
          >
            Ta'limning yangi <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              standartiga o'ting.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-12"
          >
            Ziyo Ta'lim — zamonaviy yondashuv, premium sharoitlar va kafolatlangan natija. Kelajagingizni biz bilan quring.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-bold text-lg hover:scale-105 transition-transform">
              Kurslarni boshlash
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-[#111] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-sm">
              Bepul konsultatsiya
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}`;

const statsTsx = `'use client';
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
            className="bento-card p-8 flex flex-col justify-center items-center text-center h-48"
          >
            <div className="text-5xl font-black text-slate-900 dark:text-white mb-2">2022</div>
            <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Yildan beri</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bento-card p-8 flex flex-col justify-center items-center text-center h-48 bg-blue-600 dark:bg-blue-600 border-none"
          >
            <div className="text-5xl font-black text-white mb-2">2000+</div>
            <div className="text-sm font-bold text-blue-200 uppercase tracking-widest">Muvaffaqiyatli talaba</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bento-card p-8 flex flex-col justify-center items-center text-center h-48"
          >
            <div className="text-5xl font-black text-slate-900 dark:text-white mb-2">95%</div>
            <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">O'zlashtirish</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}`;

const coursesTsx = `'use client';
import { motion } from 'framer-motion';

export default function Courses() {
  const courses = [
    { cat: 'TILLAR', items: ['Ingliz tili', 'IELTS/CEFR', 'Rus tili', 'Koreys tili', 'Ona tili'], color: 'text-blue-500' },
    { cat: 'FANLAR', items: ['Matematika', 'Kimyo', 'Biologiya', 'IT', 'Maktab tayyorlov'], color: 'text-cyan-500' }
  ];

  return (
    <section id="courses" className="py-24 bg-slate-50 dark:bg-black">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-4">Ta'lim Yo'nalishlari</h2>
          <p className="text-xl text-slate-500 max-w-2xl">O'zingizga mos yo'nalishni tanlang va maqsadlaringiz sari harakatni boshlang.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {courses.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bento-card p-8 md:p-12"
            >
              <h3 className={\`text-sm font-bold tracking-widest uppercase mb-8 \${section.color}\`}>{section.cat}</h3>
              <div className="flex flex-col gap-4">
                {section.items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between group cursor-pointer border-b border-slate-100 dark:border-slate-800 pb-4 last:border-0 last:pb-0">
                    <span className="text-2xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-500 transition-colors">{item}</span>
                    <span className="text-slate-300 dark:text-slate-700 group-hover:text-blue-500 group-hover:translate-x-2 transition-all">→</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card p-8 md:p-12 bg-slate-900 dark:bg-zinc-900"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2">Ingliz tili bosqichlari</h3>
              <p className="text-slate-400">General English va IELTS/CEFR tayyorgarlik</p>
            </div>
            <div className="px-6 py-2 bg-blue-500/20 text-blue-400 rounded-full font-bold text-sm">
              Intensiv
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Beginner', 'Elementary', 'Pre-int', 'Intermed', 'CEFR', 'IELTS'].map((lvl, i) => (
              <div key={i} className="bg-white/5 dark:bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">{i >= 4 ? '4 OY' : '3 OY'}</div>
                <div className="text-white font-bold">{lvl}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}`;

const reasonsTsx = `'use client';
import { motion } from 'framer-motion';

export default function Reasons() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-4">Nega Ziyo Ta'lim?</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">Biz faqatgina dars o'tmaymiz, biz sizning natijangiz uchun ishlaymiz.</p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          
          {/* Card 1: Large */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bento-card md:col-span-2 md:row-span-2 p-10 bg-slate-50 dark:bg-zinc-900 flex flex-col justify-end relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white dark:bg-black rounded-full flex items-center justify-center text-2xl mb-6 shadow-sm border border-slate-100 dark:border-slate-800">👨‍🏫</div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Professional Ustozlar va Support Teacher</h3>
              <p className="text-slate-500 text-lg max-w-md">Asosiy darslar tajribali ustozlar tomonidan o'tiladi, ikkinchi ustoz (support teacher) esa haftasiga 3 marta individual qo'shimcha yordam beradi.</p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bento-card p-8 bg-blue-600 text-white flex flex-col justify-between"
          >
            <h3 className="text-2xl font-black">100 Ming Chegirma</h3>
            <p className="text-blue-100">Birinchi oy to'lovida chegirmaga ega bo'ling va ta'limni boshlang.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bento-card p-8 flex flex-col justify-between"
          >
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center text-xl mb-4">🎁</div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Referral Bonus</h3>
            <p className="text-slate-500 text-sm">Do'stingizni taklif qiling, u ro'yxatdan o'tsa sizga yana 100 ming chegirma.</p>
          </motion.div>

          {/* Card 4: Wide */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bento-card md:col-span-2 p-8 flex flex-col justify-center items-center text-center bg-gradient-to-r from-slate-900 to-blue-900 text-white"
          >
            <h3 className="text-3xl md:text-4xl font-black mb-4">IELTS 7.0+ = 10 MLN KESHBEK</h3>
            <p className="text-blue-200 max-w-lg">IELTS imtihonida yuqori natija qo'lga kiritsangiz, mehnatingizga munosib ravishda biz sizga 10 MLN SO'Mgacha keshbek qaytaramiz.</p>
          </motion.div>

          {/* Card 5 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bento-card p-8 flex flex-col justify-between"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Aktiv Hayot</h3>
            <p className="text-slate-500 text-sm">Kitob musobaqalari, Speaking club, Treninglar va Sport tadbirlarida faol ishtirok eting.</p>
            <div className="mt-4 flex gap-2 text-2xl">
              ⚽ 📚 🎤
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}`;

fs.writeFileSync('c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/app/globals.css', globalsCss);
fs.writeFileSync('c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Hero.tsx', heroTsx);
fs.writeFileSync('c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Stats.tsx', statsTsx);
fs.writeFileSync('c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Courses.tsx', coursesTsx);
fs.writeFileSync('c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Reasons.tsx', reasonsTsx);

console.log('Bento Grid Redesign Complete');
