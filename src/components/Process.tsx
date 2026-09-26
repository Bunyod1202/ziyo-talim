'use client';
import { motion } from 'framer-motion';

const steps = [
  { num: "01", title: "Yo'nalishni tanlang", desc: "Qiziqishlaringizga mos kursni toping" },
  { num: "02", title: "Darajangizni aniqlang", desc: "Bepul test va maslahat oling" },
  { num: "03", title: "Ustoz bilan dars boshlang", desc: "Zamonaviy metodika asosida o'qing" },
  { num: "04", title: "Amaliyot qiling", desc: "Real loyihalarda ishtirok eting" },
  { num: "05", title: "Natijaga erishing", desc: "Sertifikat va ish imkoniyati" },
];

export default function Process() {
  return (
    <section className="py-24 glass-panel dark:bg-[#012240] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#023059] dark:text-white mb-4">
            Ziyo Ta'limda ta'lim qanday ishlaydi?
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 hidden md:block" />
          <div className="absolute top-0 left-8 w-1 h-full bg-gray-200 md:hidden" />

          <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-4">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex md:flex-col items-center md:text-center gap-6 md:gap-4 group"
              >
                <div className="w-16 h-16 rounded-2xl glass-card border-2 border-slate-100 dark:border-white/10 flex items-center justify-center text-xl font-black text-gray-400 group-hover:border-[#1D4ED8] group-hover:text-[#1D4ED8] group-hover:shadow-[0_0_20px_rgba(8,93,205,0.2)] transition-all duration-300 relative z-10">
                  {step.num}
                </div>
                <div>
                  <h4 className="font-bold text-[#023059] dark:text-white mb-1">{step.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-gray-400 hidden md:block max-w-[150px] mx-auto">{step.desc}</p>
                  <p className="text-sm text-slate-500 dark:text-gray-400 md:hidden">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}