'use client';
import { motion } from 'framer-motion';
import { Phone, Send, Camera, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-white dark:bg-[#020813] text-slate-900 dark:text-white overflow-hidden pt-20 pb-10 mt-20 border-t border-slate-200 dark:border-slate-800/60 transition-colors duration-300">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none transition-colors"></div>
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 dark:bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none transition-colors"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Large Creative CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-16 border-b border-slate-200 dark:border-white/10 mb-16 transition-colors">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">
              Kelajakni <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">birga quramiz.</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-md">Hoziroq ro'yxatdan o'ting va o'zgarishlarni o'zingizda his qiling.</p>
          </div>
          <button 
            onClick={() => window.dispatchEvent(new Event('open-modal'))}
            className="group flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 dark:hover:bg-blue-50 transition-colors shadow-xl hover:shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:scale-105 duration-300"
          >
            Joyni band qilish
            <div className="w-8 h-8 rounded-full bg-white/20 dark:bg-slate-100 flex items-center justify-center group-hover:bg-white/30 dark:group-hover:bg-blue-100 transition-colors">
              <ArrowRight className="w-4 h-4 text-white dark:text-slate-950 group-hover:text-white dark:group-hover:text-blue-600 transition-colors" />
            </div>
          </button>
        </div>

        {/* Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:pr-8">
            <img src="/logo.png" alt="Ziyo Ta'lim" className="h-16 mb-6 bg-slate-50 dark:bg-white/5 p-2 rounded-xl backdrop-blur-md border border-slate-100 dark:border-white/10" />
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Zamonaviy bilim, kuchli ustozlar va real natijalar birlashgan ta'lim markazi.
            </p>
          </div>

          {/* Nav Col 1 */}
          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wide text-slate-900 dark:text-white">MARKAZ</h4>
            <ul className="space-y-4">
              {['Biz haqimizda', 'Kurslar', 'Ustozlar', 'Natijalar'].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white hover:translate-x-1 inline-block transition-all duration-300 font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Col 2 */}
          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wide text-slate-900 dark:text-white">O'QUVCHILAR</h4>
            <ul className="space-y-4">
              {['Qabul 2026', 'Jadval', 'Yangiliklar', 'FAQ'].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white hover:translate-x-1 inline-block transition-all duration-300 font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wide text-slate-900 dark:text-white">ALOQA</h4>
            <ul className="space-y-5">
              <li>
                <a href="tel:+998901234567" className="group flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-medium">+998 90 123 45 67</span>
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <Send className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Telegram</span>
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-pink-100 dark:group-hover:bg-pink-500/20 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                    <Camera className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Instagram</span>
                </a>
              </li>
              <li className="flex items-start gap-4 text-slate-600 dark:text-slate-400 mt-2">
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-medium text-sm pt-2">Toshkent shahar, Yunusobod tumani</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200 dark:border-white/10 text-sm text-slate-500 dark:text-slate-500 transition-colors">
          <p>© 2026 Ziyo Ta'lim. Barcha huquqlar himoyalangan.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-600 dark:hover:text-white transition-colors">Maxfiylik siyosati</a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-white transition-colors">Ommaviy oferta</a>
          </div>
        </div>

      </div>
    </footer>
  );
}