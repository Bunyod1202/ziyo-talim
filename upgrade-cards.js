const fs = require('fs');

const coursesPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Courses.tsx';
let courses = fs.readFileSync(coursesPath, 'utf8');

// Upgrade Courses Cards
const oldCard = `className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center cursor-pointer shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200">{item.title}</h4>`;

const newCard = `className="relative bg-white dark:bg-zinc-900/40 p-6 rounded-3xl border border-slate-100 dark:border-white/5 flex flex-col items-center justify-center text-center cursor-pointer shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] hover:-translate-y-2 transition-all duration-500 group overflow-hidden backdrop-blur-xl"
                >
                  {/* Creative animated background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:via-cyan-500/5 group-hover:to-purple-500/10 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  
                  {/* Animated Border Line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-zinc-800 dark:to-zinc-900 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-inner group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h4 className="font-black text-slate-800 dark:text-slate-100 tracking-tight relative z-10">{item.title}</h4>
                  <div className="opacity-0 group-hover:opacity-100 mt-2 text-xs font-bold text-blue-500 dark:text-blue-400 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 uppercase tracking-widest">Ko'rish</div>`;

courses = courses.replace(new RegExp(oldCard.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), newCard);

fs.writeFileSync(coursesPath, courses);


// Also let's upgrade Results.tsx cards to have the new animated glassy look
const resultsPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Results.tsx';
let results = fs.readFileSync(resultsPath, 'utf8');

const oldResultCard = `className="relative shrink-0 w-[320px] md:w-[400px] bg-slate-50 dark:bg-zinc-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 snap-center group overflow-hidden flex flex-col"`;

const newResultCard = `className="relative shrink-0 w-[320px] md:w-[400px] bg-white/70 dark:bg-zinc-900/70 backdrop-blur-3xl rounded-[2.5rem] border-2 border-white dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.2)] transition-all duration-500 snap-center group overflow-hidden flex flex-col hover:-translate-y-3"`;

results = results.replace(oldResultCard, newResultCard);

fs.writeFileSync(resultsPath, results);

console.log('Cards upgraded to creative styling');
