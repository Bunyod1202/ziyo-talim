'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-24 glass-card relative">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#1D4ED8] to-[#023059] rounded-[2rem] p-12 mb-24 text-center relative overflow-hidden text-white shadow-2xl">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Kelajak kutib turmaydi. Siz ham kutmang.</h2>
            <p className="text-xl text-blue-100 mb-10">Bugun boshlang va o'zingiz uchun yangi imkoniyatlar yarating.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glass-card text-[#1D4ED8] px-8 py-4 rounded-full font-bold text-lg hover:glass-panel dark:bg-[#012240]/50 transition-colors">
                Kurslarni ko'rish
              </button>
              <button className="bg-blue-700/50 hover:bg-blue-700 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg backdrop-blur-sm transition-colors">
                Bog'lanish
              </button>
            </div>
          </div>
        </div>

        {/* Contact Info & Form */}
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-[#023059] dark:text-white mb-8">Biz bilan bog'laning</h2>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#DBEAFE] rounded-xl flex items-center justify-center text-[#1D4ED8] text-xl">📍</div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-gray-400 mb-1">Manzil</div>
                  <div className="font-semibold text-[#023059] dark:text-white">Toshkent shahar, Yunusobod tumani</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#DBEAFE] rounded-xl flex items-center justify-center text-[#1D4ED8] text-xl">📞</div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-gray-400 mb-1">Telefon</div>
                  <div className="font-semibold text-[#023059] dark:text-white">+998 90 123 45 67</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#DBEAFE] rounded-xl flex items-center justify-center text-[#1D4ED8] text-xl">📱</div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-gray-400 mb-1">Ijtimoiy tarmoqlar</div>
                  <div className="flex gap-4 mt-1 font-medium text-[#1D4ED8]">
                    <a href="#">Telegram</a>
                    <a href="#">Instagram</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map placeholder */}
            <div className="w-full h-64 bg-gray-100 dark:bg-[#012240] rounded-2xl flex items-center justify-center text-gray-400 border border-gray-200 dark:border-white/20">
               Google Maps
            </div>
          </div>

          <div className="glass-panel dark:bg-[#012240] rounded-3xl p-8 border border-slate-100 dark:border-white/10">
            <h3 className="text-2xl font-bold text-[#023059] dark:text-white mb-6">Xabar yuborish</h3>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Ism</label>
                <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-white/20 focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] transition-all glass-card" placeholder="Ismingizni kiriting" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Telefon raqam</label>
                <input type="tel" className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-white/20 focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] transition-all glass-card" placeholder="+998" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Qiziqayotgan kurs</label>
                <select className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-white/20 focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] transition-all glass-card text-slate-600 dark:text-gray-400">
                  <option>Tanlang</option>
                  <option>Frontend</option>
                  <option>Ingliz tili</option>
                  <option>Matematika</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Xabar</label>
                <textarea rows={4} className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-white/20 focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] transition-all glass-card" placeholder="Qo'shimcha savollaringiz..."></textarea>
              </div>
              <button type="submit" className="w-full bg-[#1D4ED8] text-white py-4 rounded-xl font-bold hover:bg-[#023059] transition-colors">
                Yuborish
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}