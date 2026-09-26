const fs = require('fs');
const path = require('path');

// 1. Create Results.tsx
const resultsTsx = `'use client';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Star, Quote } from 'lucide-react';

export default function Results() {
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
    <section id="results" className="py-24 relative bg-white dark:bg-black overflow-hidden transition-colors duration-300">
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
            className="hidden md:flex items-center gap-4 text-slate-500 dark:text-slate-400 font-medium"
          >
            Gorizontal surib ko'ring <ArrowRightIcon className="w-5 h-5 animate-pulse" />
          </motion.div>
        </div>

        {/* Horizontal Scrolling Cards Container */}
        <div className="flex overflow-x-auto gap-6 pb-12 pt-4 px-4 -mx-4 snap-x snap-mandatory custom-scrollbar">
          {results.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="relative shrink-0 w-[320px] md:w-[400px] bg-slate-50 dark:bg-zinc-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 snap-center group overflow-hidden flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Score Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 shadow-xl">
                    <span className="block text-white/80 text-xs font-bold uppercase tracking-wider mb-1">{item.subject}</span>
                    <span className="block text-white font-black text-2xl">{item.score}</span>
                  </div>
                  
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-xl shadow-amber-500/30 transform translate-y-2 group-hover:translate-y-0 group-hover:rotate-12 transition-all duration-300">
                    <Award className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">{item.name}</h3>
                
                <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-lg mb-6 w-fit">
                  <GraduationCap className="w-4 h-4" /> {item.uni}
                  <span className="w-1 h-1 bg-blue-300 rounded-full mx-1"></span>
                  <span className="text-amber-600 dark:text-amber-400">{item.grant}</span>
                </div>

                <div className="relative mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
                  <Quote className="absolute top-0 left-0 w-8 h-8 text-slate-200 dark:text-slate-800 -translate-y-1/2 bg-slate-50 dark:bg-zinc-900 px-1" />
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/>
      <path d="m12 5 7 7-7 7"/>
    </svg>
  );
}
`;

fs.writeFileSync('c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Results.tsx', resultsTsx);

// 2. Add to page.tsx
const pagePath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/app/page.tsx';
let pageContent = fs.readFileSync(pagePath, 'utf8');

if (!pageContent.includes('import Results')) {
  pageContent = pageContent.replace(
    "import Courses from '@/components/Courses';",
    "import Courses from '@/components/Courses';\nimport Results from '@/components/Results';"
  );
  pageContent = pageContent.replace(
    "<Courses />",
    "<Courses />\n      <Results />"
  );
  fs.writeFileSync(pagePath, pageContent);
}

// 3. Update Header.tsx links
const headerPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Header.tsx';
let headerContent = fs.readFileSync(headerPath, 'utf8');

if (!headerContent.includes("name: 'Natijalar'")) {
  headerContent = headerContent.replace(
    "    { name: 'Nega biz?', href: '/#about' },",
    "    { name: 'Natijalar', href: '/#results' },\n    { name: 'Nega biz?', href: '/#about' },"
  );
  fs.writeFileSync(headerPath, headerContent);
}

console.log('Results component created and integrated');
