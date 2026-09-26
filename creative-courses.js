const fs = require('fs');

const coursesTsx = `'use client';
import { motion } from 'framer-motion';

export default function Courses() {
  const languages = [
    { title: 'Ingliz tili', icon: '🇬🇧', color: 'from-blue-500 to-cyan-400', shadow: 'shadow-blue-500/20' },
    { title: 'IELTS/CEFR', icon: '🎯', color: 'from-indigo-500 to-purple-500', shadow: 'shadow-purple-500/20' },
    { title: 'Rus tili', icon: '🇷🇺', color: 'from-red-500 to-orange-500', shadow: 'shadow-orange-500/20' },
    { title: 'Koreys tili', icon: '🇰🇷', color: 'from-pink-500 to-rose-400', shadow: 'shadow-pink-500/20' },
    { title: 'Ona tili', icon: '📖', color: 'from-emerald-500 to-teal-400', shadow: 'shadow-emerald-500/20' },
  ];

  const subjects = [
    { title: 'Matematika', icon: '➗', color: 'from-blue-600 to-indigo-600', shadow: 'shadow-indigo-500/20' },
    { title: 'Kimyo', icon: '🧪', color: 'from-violet-500 to-fuchsia-500', shadow: 'shadow-fuchsia-500/20' },
    { title: 'Biologiya', icon: '🧬', color: 'from-green-500 to-emerald-600', shadow: 'shadow-green-500/20' },
    { title: 'IT', icon: '💻', color: 'from-slate-700 to-slate-900', shadow: 'shadow-slate-500/20' },
    { title: 'Maktabga tayyorlov', icon: '🎒', color: 'from-amber-400 to-orange-500', shadow: 'shadow-amber-500/20' },
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
      {/* Creative Background Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl z-10 relative">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-sm mb-6 uppercase tracking-widest"
          >
            <span>📚</span> Bizning Kurslar
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
          <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">💬</span> 
            TILLAR
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {languages.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={\`bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center text-center cursor-pointer shadow-lg hover:\${item.shadow} transition-all duration-300 relative overflow-hidden group\`}
              >
                <div className={\`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br \${item.color} transition-opacity duration-300\`}></div>
                <div className={\`w-16 h-16 rounded-full bg-gradient-to-br \${item.color} text-white flex items-center justify-center text-3xl mb-4 shadow-xl transform group-hover:rotate-12 transition-transform duration-300\`}>
                  {item.icon}
                </div>
                <h4 className="font-bold text-slate-800 dark:text-slate-200">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FANLAR SECTION */}
        <div className="mb-20">
          <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center text-cyan-600 dark:text-cyan-400">🎓</span> 
            FANLAR
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {subjects.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={\`bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center text-center cursor-pointer shadow-lg hover:\${item.shadow} transition-all duration-300 relative overflow-hidden group\`}
              >
                <div className={\`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br \${item.color} transition-opacity duration-300\`}></div>
                <div className={\`w-16 h-16 rounded-full bg-gradient-to-br \${item.color} text-white flex items-center justify-center text-3xl mb-4 shadow-xl transform group-hover:-rotate-12 transition-transform duration-300\`}>
                  {item.icon}
                </div>
                <h4 className="font-bold text-slate-800 dark:text-slate-200">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* INGLIZ TILI BOSQICHLARI - CREATIVE TICKET STYLE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 dark:bg-zinc-900 rounded-[3rem] p-8 md:p-12 relative overflow-hidden shadow-2xl border border-slate-800"
        >
          {/* Decorative lines */}
          <div className="absolute top-0 right-10 w-px h-full bg-white/10 hidden md:block"></div>
          <div className="absolute top-0 right-20 w-px h-full bg-white/5 hidden md:block"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 hidden md:block"></div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 relative z-10">
            <div>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tight">Ingliz Tili Bosqichlari</h3>
              <p className="text-blue-200/80 text-lg">Noldan boshlab IELTS darajasigacha intensiv tayyorgarlik</p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-full font-bold text-sm shadow-[0_0_20px_rgba(56,189,248,0.4)] flex items-center gap-2">
              <span className="animate-pulse">🔥</span> ENG MASHHUR
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
            {englishLevels.map((item, i) => (
              <div 
                key={i} 
                className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/50 font-black mb-4 group-hover:text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                  {i + 1}
                </div>
                <div className="text-white font-black text-lg mb-1">{item.lvl}</div>
                <div className="text-blue-300/80 text-xs font-bold uppercase tracking-widest">{item.duration}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}`;

fs.writeFileSync('c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Courses.tsx', coursesTsx);
console.log('Courses component successfully redesigned');
