const fs = require('fs');
const path = require('path');

// 1. Create the Natijalar Page
const dir = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/app/natijalar';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const natijalarTsx = `'use client';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GraduationCap, Award, Quote, ArrowUpRight } from 'lucide-react';

export default function NatijalarPage() {
  const allResults = [
    {
      name: "Akmal Rustamov",
      score: "IELTS 8.0",
      subject: "Ingliz tili",
      uni: "Westminster University",
      grant: "100% Grant",
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      quote: "Ziyo Ta'limdagi 6 oylik intensiv tayyorgarlik menga o'z orzuyimdagi universitetga kirishimga yordam berdi."
    },
    {
      name: "Sabina Aliyeva",
      score: "189 ball",
      subject: "DTM (Tibbiyot)",
      uni: "Toshkent Tibbiyot Akademiyasi",
      grant: "Davlat Granti",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      quote: "Kimyo va Biologiya darslaridagi amaliyot va ustozlarning talabchanligi eng katta yutug'im bo'ldi."
    },
    {
      name: "Javohir Qodirov",
      score: "IELTS 7.5",
      subject: "Ingliz tili",
      uni: "Inha University",
      grant: "Katta Chegirma",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      quote: "Support teacher bilan ishlash va doimiy speaking clublar natijamni tez oshishiga sabab bo'ldi."
    },
    {
      name: "Madina Umarova",
      score: "Topik 5",
      subject: "Koreys tili",
      uni: "Seoul National University",
      grant: "Global Grant",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      quote: "Noldan boshlab 8 oy ichida Topik 5 darajasiga chiqishimga ishonmagandim. Rahmat Ziyo Ta'lim!"
    },
    {
      name: "Asadbek To'rayev",
      score: "175 ball",
      subject: "IT & Matematika",
      uni: "TATU",
      grant: "Davlat Granti",
      img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=800&q=80",
      quote: "Matematikadagi murakkab misollarni oson yo'l bilan ishlashni shu yerda o'rgandim."
    },
    {
      name: "Nigina Karimova",
      score: "CEFR C1",
      subject: "Ingliz tili",
      uni: "Jahon Tillari Universiteti",
      grant: "Imtiyozli qabul",
      img: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=800&q=80",
      quote: "Mock testlar va ustozlarning shaxsiy yondashuvi menga qisqa vaqtda CEFR C1 olishga ko'maklashdi."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#020813] transition-colors duration-300 flex flex-col">
      <Header />
      
      <section className="pt-40 pb-24 px-4 md:px-8 max-w-7xl mx-auto flex-1 w-full">
        <div className="text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 dark:bg-amber-600/20 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 font-bold text-sm mb-6 uppercase tracking-widest"
          >
            Bizning Faxrimiz
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-slate-900 dark:text-white"
          >
            O'quvchilar <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400 dark:from-amber-400 dark:to-orange-300">Natijalari</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Bu yerda bizning eng yaxshi o'quvchilarimizning xalqaro va milliy imtihonlardagi erishgan yuksak natijalari bilan tanishishingiz mumkin.
          </motion.p>
        </div>

        {/* Creative Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allResults.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[500px] rounded-[2.5rem] overflow-hidden bg-slate-200 dark:bg-zinc-900 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-end p-6"
            >
              {/* Student Image */}
              <img 
                src={item.img} 
                alt={item.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              {/* Top Score Badge */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-10">
                <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 shadow-xl">
                  <span className="block text-white/80 text-xs font-bold uppercase tracking-wider mb-1">{item.subject}</span>
                  <span className="block text-white font-black text-2xl">{item.score}</span>
                </div>
                
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-xl shadow-amber-500/30 transform group-hover:rotate-12 transition-all duration-300">
                  <Award className="w-6 h-6" />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-black text-white mb-4 tracking-tight">
                  {item.name}
                </h3>
                
                <div className="inline-flex items-center gap-2 text-blue-200 font-bold text-sm bg-blue-900/40 backdrop-blur-md border border-blue-500/30 px-3 py-2 rounded-xl mb-4 w-fit">
                  <GraduationCap className="w-4 h-4" /> {item.uni}
                  <span className="w-1 h-1 bg-blue-400 rounded-full mx-1"></span>
                  <span className="text-amber-300">{item.grant}</span>
                </div>

                {/* Description that fades in on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 h-0 group-hover:h-auto overflow-hidden">
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-slate-300 text-sm leading-relaxed italic flex gap-2">
                      <Quote className="w-5 h-5 shrink-0 text-amber-400 opacity-50" />
                      {item.quote}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-500/30 rounded-full blur-[50px] group-hover:bg-amber-500/50 transition-colors duration-500 z-0"></div>
            </motion.div>
          ))}
        </div>

        {/* Global Modal trigger button block */}
        <div className="mt-20 text-center">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6">Navbatdagi rekordchi siz bo'lishingiz mumkin!</h3>
            <button 
              onClick={() => window.dispatchEvent(new Event('open-modal'))}
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1"
            >
              Hoziroq ro'yxatdan o'tish <ArrowUpRight className="w-6 h-6" />
            </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}`;

fs.writeFileSync(path.join(dir, 'page.tsx'), natijalarTsx);

// 2. Update Header.tsx Links
const headerPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Header.tsx';
let headerContent = fs.readFileSync(headerPath, 'utf8');

// Change the link to point to /natijalar instead of /#results
const newLinks = `  const links = [
    { name: 'Bosh sahifa', href: '/' },
    { name: 'Kurslar', href: '/#courses' },
    { name: 'Natijalar', href: '/natijalar' },
    { name: 'Ustozlar', href: '/ustozlar' },
  ];`;

headerContent = headerContent.replace(
  /const links = \[\s*\{ name: 'Bosh sahifa', href: '\/' \},\s*\{ name: 'Kurslar', href: '\/#courses' \},\s*\{ name: 'Natijalar', href: '\/#results' \},\s*\{ name: 'Nega biz\?', href: '\/#about' \},\s*\];/g,
  newLinks
);

// If it didn't match perfectly, just try to replace it globally using regex over multiple lines
headerContent = headerContent.replace(
  /const links = \[[^\]]*\];/,
  newLinks
);

fs.writeFileSync(headerPath, headerContent);

console.log('Natijalar page created and Header links updated');
