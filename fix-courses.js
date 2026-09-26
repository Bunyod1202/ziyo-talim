const fs = require('fs');

const coursesTsx = `'use client';
import { motion } from 'framer-motion';
import { 
  Languages, Target, BookOpen, Globe, MessageCircle, 
  Calculator, FlaskConical, Dna, Code, GraduationCap 
} from 'lucide-react';

export default function Courses() {
  const languages = [
    { title: 'Ingliz tili', icon: Languages },
    { title: 'IELTS/CEFR', icon: Target },
    { title: 'Rus tili', icon: MessageCircle },
    { title: 'Koreys tili', icon: Globe },
    { title: 'Ona tili', icon: BookOpen },
  ];

  const subjects = [
    { title: 'Matematika', icon: Calculator },
    { title: 'Kimyo', icon: FlaskConical },
    { title: 'Biologiya', icon: Dna },
    { title: 'IT', icon: Code },
    { title: 'Maktab tayyorlov', icon: GraduationCap },
  ];

  const englishLevels = [
    { lvl: 'Beginner', duration: '3 OY' },
    { lvl: 'Elementary', duration: '3 OY' },
    { lvl: 'Pre-int', duration: '3 OY' },
    { lvl: 'Intermed', duration: '3 OY' },
    { lvl: 'CEFR', duration: '4 OY' },
    { lvl: 'IELTS', duration: '4 OY' },
  ];

  return (
    <section id="courses" className="py-24 relative bg-slate-50 dark:bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl z-10 relative">
        
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm mb-6 uppercase tracking-widest"
          >
            Bizning Kurslar
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-4"
          >
            Ta'lim Yo'nalishlari
          </motion.h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">O'zingizga mos yo'nalishni tanlang va maqsadlaringiz sari harakatni boshlang.</p>
        </div>

        {/* TILLAR SECTION */}
        <div className="mb-16">
          <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 tracking-wide uppercase">
            Tillar
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {languages.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center cursor-pointer shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200">{item.title}</h4>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* FANLAR SECTION */}
        <div className="mb-20">
          <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 tracking-wide uppercase">
            Fanlar
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {subjects.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center cursor-pointer shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200">{item.title}</h4>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* INGLIZ TILI BOSQICHLARI */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 dark:bg-zinc-900 rounded-[3rem] p-8 md:p-12 relative overflow-hidden shadow-2xl border border-slate-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 relative z-10">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">Ingliz Tili Bosqichlari</h3>
              <p className="text-slate-400 text-lg">Noldan boshlab IELTS darajasigacha intensiv tayyorgarlik</p>
            </div>
            <div className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-sm">
              ENG MASHHUR
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
            {englishLevels.map((item, i) => (
              <div 
                key={i} 
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-slate-400 font-black mb-4 group-hover:text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                  {i + 1}
                </div>
                <div className="text-white font-black text-lg mb-1">{item.lvl}</div>
                <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">{item.duration}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}`;

fs.writeFileSync('c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Courses.tsx', coursesTsx);
console.log('Courses component successfully updated to standard uniform style');
