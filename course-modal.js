const fs = require('fs');

const coursesTsx = `'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Languages, Target, BookOpen, Globe, MessageCircle, 
  Calculator, FlaskConical, Dna, Code, GraduationCap,
  X, Star, Award, User, ArrowRight
} from 'lucide-react';

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  const getCourseDetails = (title: string) => {
    const isLanguage = ['Ingliz tili', 'IELTS/CEFR', 'Rus tili', 'Koreys tili', 'Ona tili'].includes(title);
    return {
      description: \`\${title} bo'yicha maxsus intensiv dastur. Bizning metodikamiz orqali qisqa muddatda yuqori natijaga erishing. Darslar interaktiv va amaliyotga asoslangan holda o'tiladi.\`,
      teachers: [
        { name: 'Sardor Qodirov', role: 'Katta O\\'qituvchi', exp: '5 yillik tajriba', rating: '5.0' },
        { name: 'Malika Karimova', role: 'Support Teacher', exp: '3 yillik tajriba', rating: '4.9' }
      ],
      results: [
        { name: 'Azizbek T.', score: isLanguage ? 'IELTS 7.5' : '100% Grant', highlight: 'Top Natija' },
        { name: 'Sevara A.', score: isLanguage ? 'IELTS 7.0' : 'Davlat Granti', highlight: 'Faxriy yorliq' }
      ]
    };
  };

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
    <section id="courses" className="py-24 relative bg-slate-50 dark:bg-[#050505] overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl z-10 relative">
        
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm mb-6 uppercase tracking-widest transition-colors"
          >
            Bizning Kurslar
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-4 transition-colors"
          >
            Ta'lim Yo'nalishlari
          </motion.h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto transition-colors">O'zingizga mos yo'nalishni tanlang va maqsadlaringiz sari harakatni boshlang.</p>
        </div>

        {/* TILLAR SECTION */}
        <div className="mb-16">
          <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 tracking-wide uppercase transition-colors">
            Tillar
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {languages.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={idx}
                  onClick={() => setSelectedCourse({ title: item.title, icon: Icon, ...getCourseDetails(item.title) })}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center cursor-pointer shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
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
          <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 tracking-wide uppercase transition-colors">
            Fanlar
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {subjects.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={idx}
                  onClick={() => setSelectedCourse({ title: item.title, icon: Icon, ...getCourseDetails(item.title) })}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center cursor-pointer shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
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
          className="bg-slate-100 dark:bg-zinc-900 rounded-[3rem] p-8 md:p-12 relative overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 transition-colors"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 relative z-10">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tight transition-colors">Ingliz Tili Bosqichlari</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg transition-colors">Noldan boshlab IELTS darajasigacha intensiv tayyorgarlik</p>
            </div>
            <div className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg shadow-blue-600/30">
              ENG MASHHUR
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
            {englishLevels.map((item, i) => (
              <div 
                key={i} 
                className="bg-white dark:bg-white/5 hover:bg-white/50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 rounded-3xl p-6 flex flex-col items-center text-center transition-all duration-300 shadow-sm group"
              >
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 font-black mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 transition-colors">
                  {i + 1}
                </div>
                <div className="text-slate-900 dark:text-white font-black text-lg mb-1 transition-colors">{item.lvl}</div>
                <div className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest transition-colors">{item.duration}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Course Details Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white dark:bg-zinc-950 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <selectedCourse.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">{selectedCourse.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedCourse(null)}
                  className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-full hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto custom-scrollbar">
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                  {selectedCourse.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Teachers */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <User className="w-4 h-4" /> Ustozlar
                    </h4>
                    <div className="space-y-3">
                      {selectedCourse.teachers.map((teacher: any, i: number) => (
                        <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-slate-800">
                          <div>
                            <div className="font-bold text-slate-900 dark:text-white">{teacher.name}</div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">{teacher.role} • {teacher.exp}</div>
                          </div>
                          <div className="flex items-center gap-1 text-amber-500 bg-amber-50 dark:bg-amber-500/10 px-2 py-1 rounded-lg text-sm font-bold">
                            <Star className="w-4 h-4 fill-current" /> {teacher.rating}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Award className="w-4 h-4" /> Natijalar
                    </h4>
                    <div className="space-y-3">
                      {selectedCourse.results.map((res: any, i: number) => (
                        <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30">
                          <div>
                            <div className="font-bold text-slate-900 dark:text-white">{res.name}</div>
                            <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">{res.highlight}</div>
                          </div>
                          <div className="text-xl font-black text-slate-900 dark:text-white">
                            {res.score}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-zinc-900 mt-auto">
                <button 
                  onClick={() => {
                    setSelectedCourse(null);
                    setTimeout(() => window.dispatchEvent(new Event('open-modal')), 300);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 active:scale-95 transition-all"
                >
                  {selectedCourse.title} kursiga yozilish <ArrowRight className="w-5 h-5" />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}`;

fs.writeFileSync('c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Courses.tsx', coursesTsx);
console.log('Courses component updated with detailed modal');
