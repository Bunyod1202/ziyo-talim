'use client';
import { motion } from 'framer-motion';
import { Trophy, Flame, Target, Star } from 'lucide-react';

export default function Gamification() {
  return (
    <section className="py-24 bg-[#071426] text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O'rganing. Ball to'plang. Rivojlaning.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Bizning zamonaviy platformamiz orqali bilim olish jarayoni qiziqarli o'yinga aylanadi.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0b1d36] rounded-[2rem] p-8 border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#DBEAFE]0/10 rounded-full blur-[100px]"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              
              <div className="flex-1 w-full">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <div className="text-sm text-blue-400 font-medium mb-1">Sizning darajangiz</div>
                    <div className="text-4xl font-black">Level 12</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400 mb-1">Jami XP</div>
                    <div className="text-2xl font-bold text-yellow-400">2,450</div>
                  </div>
                </div>
                
                <div className="h-4 glass-card/10 rounded-full overflow-hidden mb-2">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '75%' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                  />
                </div>
                <div className="text-right text-xs text-gray-400">Level 13 gacha 550 XP qoldi</div>
              </div>

              <div className="flex gap-4 w-full md:w-auto">
                <div className="glass-card/5 p-4 rounded-2xl flex-1 md:flex-none flex flex-col items-center justify-center border border-white/10">
                  <Flame className="text-orange-500 mb-2" size={32} />
                  <div className="text-2xl font-bold">14</div>
                  <div className="text-xs text-gray-400">Kunlik streak</div>
                </div>
                <div className="glass-card/5 p-4 rounded-2xl flex-1 md:flex-none flex flex-col items-center justify-center border border-white/10">
                  <Trophy className="text-yellow-500 mb-2" size={32} />
                  <div className="text-2xl font-bold">8</div>
                  <div className="text-xs text-gray-400">Achievement</div>
                </div>
              </div>

            </div>

            <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
              <div className="glass-card/5 p-3 rounded-xl flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400"><Target size={20}/></div>
                <div className="text-sm font-medium">Uy vazifasi<br/><span className="text-green-400">+50 XP</span></div>
              </div>
              <div className="glass-card/5 p-3 rounded-xl flex items-center gap-3 opacity-50">
                <div className="w-10 h-10 glass-panel dark:bg-[#012240]/500/20 rounded-lg flex items-center justify-center text-gray-400"><Star size={20}/></div>
                <div className="text-sm font-medium">Test 100%<br/>+100 XP</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}