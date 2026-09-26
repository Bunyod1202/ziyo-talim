const fs = require('fs');

// 1. Fix Header.tsx
const headerPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Header.tsx';
let header = fs.readFileSync(headerPath, 'utf8');
header = header.replace(
  '<div className="md:hidden flex items-center gap-2 py-2">',
  '<div className="md:hidden flex flex-1 items-center justify-end gap-2 py-1">'
);
fs.writeFileSync(headerPath, header);

// 2. Fix Hero.tsx
const heroPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Hero.tsx';
let hero = fs.readFileSync(heroPath, 'utf8');
hero = hero.replace(
  'className="text-[3.5rem] sm:text-6xl md:text-7xl lg:text-[6rem] font-black tracking-tighter leading-[1.05] text-slate-900 dark:text-white mb-8"',
  'className="text-[2.75rem] sm:text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter leading-[1.05] text-slate-900 dark:text-white mb-8"'
);
hero = hero.replace(
  'className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"',
  'className="text-base sm:text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 font-medium leading-relaxed px-2"'
);
hero = hero.replace(
  '<div className="mt-16 flex flex-col items-center gap-4">',
  '<div className="mt-10 md:mt-16 flex flex-col items-center gap-4 scale-90 sm:scale-100">'
);
fs.writeFileSync(heroPath, hero);

// 3. Fix Results.tsx
const resultsPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Results.tsx';
let results = fs.readFileSync(resultsPath, 'utf8');
results = results.replace(
  /w-\[340px\] md:w-\[420px\] h-\[520px\]/g,
  'w-[280px] sm:w-[340px] md:w-[420px] h-[450px] sm:h-[520px]'
);
fs.writeFileSync(resultsPath, results);

console.log('Mobile optimizations applied');
