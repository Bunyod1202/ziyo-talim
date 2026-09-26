'use client';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const features = [
  "HTML & CSS",
  "JavaScript",
  "Git & GitHub",
  "React.js",
  "Real projects",
  "Portfolio",
  "Mentor support"
];

export default function FeaturedCourse() {
  return (
    <section className="py-24 bg-[#071426] text-white overflow-hidden relative">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[#1D4ED8]/10 blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] bg-gradient-to-br from-blue-900/40 to-black/40 rounded-[2rem] border border-white/10 p-8 flex flex-col overflow-hidden"
          >
            {/* Code visualization mockup */}
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            
            <div className="font-mono text-sm leading-relaxed">
              <div className="text-blue-400">import <span className="text-white">{'{'} useState, useEffect {'}'}</span> from <span className="text-green-400">'react'</span>;</div>
              <br />
              <div className="text-blue-400">export default function <span className="text-yellow-400">Developer</span>() {'{'}</div>
              <div className="pl-4 text-white">
                <span className="text-blue-400">const</span> [skills, setSkills] = <span className="text-yellow-400">useState</span>([]);
                <br /><br />
                <span className="text-yellow-400">useEffect</span>(() {'>'} {'{'}
                <div className="pl-4">
                  setSkills([<span className="text-green-400">'React'</span>, <span className="text-green-400">'Next.js'</span>, <span className="text-green-400">'Tailwind'</span>]);
                </div>
                {'}'}, []);
                <br /><br />
                <span className="text-blue-400">return</span> (
                <div className="pl-4 text-purple-400">
                  {'<'}<span className="text-pink-400">div</span> className=<span className="text-green-400">"future-ready"</span>{'>'}
                  <div className="pl-4">
                    {'<'}<span className="text-pink-400">h1</span>{'>'}Ready for IT?{'</'}<span className="text-pink-400">h1</span>{'>'}
                  </div>
                  {'</'}<span className="text-pink-400">div</span>{'>'}
                </div>
                );
              </div>
              <div>{'}'}</div>
            </div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute bottom-10 right-10 glass-card text-black p-4 rounded-2xl shadow-2xl font-bold flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-[#023059] rounded-full flex items-center justify-center text-white text-xl">🚀</div>
              <div>
                <div className="text-xs text-slate-500 dark:text-gray-400">Maxsus kurs</div>
                <div>Frontend Dev</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-[#DBEAFE]0/20 text-blue-300 rounded-full font-medium text-sm mb-6 border border-blue-500/30">
              Premium Yo'nalish
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              0 dan professional Frontend Developer'gacha
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Eng zamonaviy texnologiyalarni o'rganing va IT sohasiga birinchi qadamni tashlang. Biz sizga real loyihalar ustida ishlashni va ishga joylashishni o'rgatamiz.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#1D4ED8] w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-[#1D4ED8] hover:bg-[#023059] text-white px-10 py-5 rounded-full font-bold transition-all shadow-[0_0_30px_rgba(8,93,205,0.4)] text-lg">
              Kursga yozilish
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}