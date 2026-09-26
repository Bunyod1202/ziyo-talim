'use client';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, Award, BookOpen, Quote } from 'lucide-react';

export default function UstozlarPage() {
  const teachers = [
    { 
      name: "Sardor Qodirov", 
      role: "IELTS & Ingliz tili", 
      exp: "5 yil", 
      rating: "5.0",
      img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&q=80", 
      desc: "IELTS 8.5 sohibi. 500+ o'quvchilari qisqa muddatda 7.0+ natijaga erishgan."
    },
    { 
      name: "Malika Karimova", 
      role: "Matematika & Mantiq", 
      exp: "7 yil", 
      rating: "4.9",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80", 
      desc: "Prezident maktablari va akademik litseylarga tayyorlash bo'yicha kuchli ekspert."
    },
    { 
      name: "Aziz Rakhimov", 
      role: "Ona tili va Adabiyot", 
      exp: "10 yil", 
      rating: "5.0",
      img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=800&q=80", 
      desc: "Davlat test markazi (DTM) standartlari bo'yicha 100% natijaga olib chiquvchi mutaxassis."
    },
    { 
      name: "Nodira Aliyeva", 
      role: "Kimyo & Biologiya", 
      exp: "4 yil", 
      rating: "4.8",
      img: "https://images.unsplash.com/photo-1580894732444-8ecded790047?auto=format&fit=crop&w=800&q=80", 
      desc: "Tibbiyot oliygohlariga kafolatli tayyorlov. Darslar to'liq amaliyot bilan o'tiladi."
    },
    { 
      name: "Javohir To'rayev", 
      role: "IT & Dasturlash", 
      exp: "3 yil", 
      rating: "4.9",
      img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=800&q=80", 
      desc: "Zamonaviy dasturlash tillari va muammolarni hal qilish (Problem Solving) ustasi."
    },
    { 
      name: "Dildora Umarova", 
      role: "Rus Tili", 
      exp: "6 yil", 
      rating: "4.9",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80", 
      desc: "Erkin so'zlashish va grammatikani interaktiv o'yinlar orqali tezkor o'rgatish metodikasi."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#020813] transition-colors duration-300 flex flex-col">
      <Header />
      
      <section className="pt-40 pb-24 px-4 md:px-8 max-w-7xl mx-auto flex-1 w-full">
        <div className="text-center mb-20 relative">
          {/* Decorative background blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 dark:bg-blue-600/20 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-sm mb-6 uppercase tracking-widest"
          >
            Bizning Jamoa
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-slate-900 dark:text-white"
          >
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Ustozlar</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Sizning muvaffaqiyatingiz uchun yonib ishlaydigan, o'z ishining chinakam ustasi bo'lgan mutaxassislar.
          </motion.p>
        </div>

        {/* Creative Masonry/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden bg-slate-200 dark:bg-zinc-900 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Teacher Image */}
              <img 
                src={teacher.img} 
                alt={teacher.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              {/* Top Badges */}
              <div className="absolute top-6 right-6 flex flex-col gap-2">
                <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white font-bold text-sm shadow-xl">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> {teacher.rating}
                </div>
                <div className="flex items-center justify-center bg-blue-600/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white font-bold text-sm shadow-xl">
                  {teacher.exp}
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white/90 text-sm font-medium border border-white/10 mb-3">
                  <BookOpen className="w-4 h-4" /> {teacher.role}
                </div>
                
                <h3 className="text-3xl font-black text-white mb-3 tracking-tight">
                  {teacher.name}
                </h3>
                
                {/* Description that fades in on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <p className="text-slate-300 text-sm leading-relaxed flex gap-2">
                    <Quote className="w-4 h-4 shrink-0 text-blue-400 opacity-50" />
                    {teacher.desc}
                  </p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/30 rounded-full blur-[50px] group-hover:bg-blue-500/50 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}