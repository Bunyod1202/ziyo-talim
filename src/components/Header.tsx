'use client';
import { useState, useEffect } from 'react';
import { Menu, X, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

      const links = [
    { name: 'Bosh sahifa', href: '/' },
    { name: 'Kurslar', href: '/#courses' },
    { name: 'Natijalar', href: '/natijalar' },
    { name: 'Ustozlar', href: '/ustozlar' },
  ];

  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Custom event listener to open modal from anywhere
    const openModal = () => setIsModalOpen(true);
    window.addEventListener('open-modal', openModal);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('open-modal', openModal);
    };
  }, []);


  
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', surname: '', phone: '', course: 'Ingliz tili' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const botToken = '7076106039:AAEXOG9hym5xUDhCeNkrJqr0PHbnEVYA7-4';
    const chatId = 812851381;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const text = `📝 YANGI ARIZA!\n\n👤 Ism: ${formData.name}\n👥 Familiya: ${formData.surname}\n📱 Telefon: ${formData.phone}\n📚 Yo'nalish: ${formData.course}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: text }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', surname: '', phone: '', course: 'Ingliz tili' });
        setTimeout(() => {
          setIsModalOpen(false);
          setTimeout(() => setIsSubmitted(false), 500);
        }, 2500);
      } else {
        alert("Xatolik yuz berdi. Iltimos qayta urinib ko'ring.");
      }
    } catch (error) {
      alert("Internet aloqasini tekshiring.");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <>
      <header className="fixed top-0 w-full z-50 flex justify-center transition-all duration-500 pt-3">
        <div className="flex items-center justify-between px-3 py-1 w-[95%] md:w-[85%] lg:w-[1000px] bg-white/80 dark:bg-[#050505]/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl rounded-full transition-all duration-500 mx-auto">
          
          <div className="flex-1 flex justify-start"><a href="/" className="flex items-center gap-2 py-1">
            <img src="/logo.png" alt="Ziyo Ta'lim Logo" className="h-5 w-auto rounded-full" />
            <span className="font-black text-sm tracking-tight text-slate-900 dark:text-white hidden md:block">ZIYO TA'LIM</span>
          </a></div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex relative justify-center gap-1 flex-1 items-center">
            {links.map((link, idx) => (
              <a 
                key={link.name} 
                href={link.href}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-3 py-1 text-xs md:text-sm font-bold whitespace-nowrap text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors z-10"
              >
                {hoveredIndex === idx && (
                  <motion.div
                    layoutId="header-hover"
                    className="absolute inset-0 bg-slate-100 dark:bg-white/10 rounded-full -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2 flex-1 justify-end">
            <ThemeToggle />
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 text-xs"
            >
              Bepul konsultatsiya
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex flex-1 items-center justify-end gap-2 py-1">
            <ThemeToggle />
            <button className="text-slate-900 dark:text-white p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-24 z-40 md:hidden bg-white/95 dark:bg-[#050505]/95 backdrop-blur-3xl border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-lg font-bold text-slate-900 dark:text-white p-4 rounded-2xl hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => { setIsOpen(false); setIsModalOpen(true); }}
                className="bg-blue-600 text-white p-4 rounded-2xl font-bold mt-4 shadow-lg shadow-blue-600/20 active:scale-95 transition-transform"
              >
                Bepul konsultatsiya
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Consultation Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-full hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-8 text-center"
                  >
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Arizangiz qabul qilindi!</h3>
                    <p className="text-slate-500 dark:text-slate-400">Tez orada operatorlarimiz siz bilan bog'lanishadi.</p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Konsultatsiya</h3>
                    <p className="text-slate-500 dark:text-slate-400 mb-8">Ma'lumotlaringizni qoldiring, biz sizga o'zimiz aloqaga chiqamiz.</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Ismingiz</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                          placeholder="Masalan: Asadbek"
                          className="w-full px-4 py-3 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-white transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Qaysi yo'nalishga qiziqasiz?</label>
                        <div className="relative">
                          <select
                            required
                            value={formData.course}
                            onChange={e => setFormData({...formData, course: e.target.value})}
                            className="w-full pl-4 pr-12 py-3 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-white transition-all appearance-none cursor-pointer font-medium hover:border-blue-400 dark:hover:border-blue-500/50"
                          >
                            <option value="Ingliz tili">🇬🇧 Ingliz tili (IELTS / CEFR)</option>
                            <option value="Matematika">🧮 Matematika</option>
                            <option value="Kimyo va Biologiya">🧬 Kimyo va Biologiya</option>
                                                        <option value="IT va Dasturlash">💻 IT va Dasturlash</option>
                                                        <option value="Boshqa">Boshqa yo'nalish</option>
                          </select>
                          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                            <div className="bg-slate-200 dark:bg-slate-800 p-1 rounded-md">
                              <svg className="w-4 h-4 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Familiyangiz</label>
                        <input 
                          type="text" 
                          required
                          value={formData.surname}
                          onChange={e => setFormData({...formData, surname: e.target.value})}
                          placeholder="Masalan: Tursunov"
                          className="w-full px-4 py-3 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-white transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Telefon raqamingiz</label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                          placeholder="+998 90 123 45 67"
                          className="w-full px-4 py-3 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-white transition-all"
                        />
                      </div>
                      <button 
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl mt-4 shadow-lg shadow-blue-600/20 active:scale-95 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isLoading ? "Yuborilmoqda..." : "Yuborish"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}