'use client';
import { motion } from 'framer-motion';
import { MessageCircle, Globe, Mail } from 'lucide-react';

const teachers = [
  {
    name: "Azizbek Karimov",
    subject: "Frontend Developer",
    exp: "5+ yil tajriba",
    desc: "Katta IT kompaniyalarda ishlagan, 300+ o'quvchilarga dars bergan.",
    image: "bg-blue-100" // placeholder class for image
  },
  {
    name: "Malika Tohirova",
    subject: "English Teacher",
    exp: "IELTS 8.0",
    desc: "Xalqaro sertifikatga ega, o'quvchilari top universitetlarda o'qiydi.",
    image: "bg-indigo-100"
  },
  {
    name: "Sanjar Qodirov",
    subject: "Mathematics",
    exp: "10+ yil tajriba",
    desc: "Ko'plab shogirdlari xalqaro olimpiada g'oliblari hisoblanadi.",
    image: "bg-emerald-100"
  }
];

export default function Teachers() {
  return (
    <section id="teachers" className="py-24 glass-panel dark:bg-[#012240]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#023059] dark:text-white mb-4">
            Sizning ustozlaringiz
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            O'z ishining ustalari bo'lgan, amaliy tajribaga ega professional jamoa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="glass-card rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-white/10 group"
            >
              <div className={`w-full h-64 rounded-3xl mb-6 ${teacher.image} relative overflow-hidden flex items-end justify-center`}>
                 <div className="w-32 h-32 bg-black/5 rounded-full mb-4 blur-xl"></div>
                 {/* Placeholder for actual image */}
                 <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="px-2">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#023059] dark:text-white">{teacher.name}</h3>
                    <p className="text-[#1D4ED8] font-medium mt-1">{teacher.subject}</p>
                  </div>
                  <div className="bg-gray-100 dark:bg-[#012240] px-3 py-1 rounded-full text-xs font-bold text-slate-600 dark:text-gray-400">
                    {teacher.exp}
                  </div>
                </div>
                
                <p className="text-slate-500 dark:text-gray-400 text-sm mb-6 line-clamp-2">
                  {teacher.desc}
                </p>
                
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full glass-panel dark:bg-[#012240]/50 flex items-center justify-center text-gray-400 hover:text-[#1D4ED8] hover:bg-[#DBEAFE] transition-colors">
                    <MessageCircle size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full glass-panel dark:bg-[#012240]/50 flex items-center justify-center text-gray-400 hover:text-[#1D4ED8] hover:bg-[#DBEAFE] transition-colors">
                    <Globe size={18} />
                  </a>
                  {idx === 0 && (
                    <a href="#" className="w-10 h-10 rounded-full glass-panel dark:bg-[#012240]/50 flex items-center justify-center text-gray-400 hover:text-[#1D4ED8] hover:bg-[#DBEAFE] transition-colors">
                      <Mail size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}