const fs = require('fs');

// 1. Update globals.css to fix .text-creative gradient
const globalsPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/app/globals.css';
let cssContent = fs.readFileSync(globalsPath, 'utf8');
cssContent = cssContent.replace(
  'background: linear-gradient(135deg, #FF3366, #FF9933, #33CCFF);',
  'background: linear-gradient(135deg, #1D4ED8, #0EA5E9, #1D4ED8); /* Sophisticated blue gradient instead of rainbow */'
);
fs.writeFileSync(globalsPath, cssContent);

// 2. Update Hero.tsx to use sleek floating UI instead of colorful emojis
const heroPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Hero.tsx';
let heroContent = fs.readFileSync(heroPath, 'utf8');
heroContent = heroContent.replace(
  '<div className="w-16 h-16 rounded-2xl bg-white dark:bg-zinc-800 shadow-2xl flex items-center justify-center text-2xl -rotate-12 border border-slate-200 dark:border-slate-700">🎨</div>',
  '<div className="px-5 py-3 rounded-full bg-white dark:bg-zinc-900 shadow-xl flex items-center gap-2 text-sm font-bold -rotate-6 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white"><span className="text-blue-500">✦</span> KREATIVLIK</div>'
);
heroContent = heroContent.replace(
  '<div className="w-16 h-16 rounded-full bg-blue-600 shadow-2xl flex items-center justify-center text-white text-2xl rotate-12">✨</div>',
  '<div className="px-5 py-3 rounded-full bg-slate-900 dark:bg-zinc-800 shadow-xl flex items-center gap-2 text-sm font-bold rotate-6 border border-slate-800 dark:border-slate-700 text-white"><span className="text-cyan-400">⚡</span> NATIJA</div>'
);
fs.writeFileSync(heroPath, heroContent);

// 3. Update Marquee.tsx to be sleek (slate-900) instead of bright blue
const marqueePath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Marquee.tsx';
let marqueeContent = fs.readFileSync(marqueePath, 'utf8');
marqueeContent = marqueeContent.replace(
  'bg-blue-600 dark:bg-blue-600 text-white',
  'bg-slate-900 dark:bg-black text-slate-300 dark:text-zinc-500'
);
fs.writeFileSync(marqueePath, marqueeContent);

// 4. Update Reasons.tsx to change yellow sticker to dark navy
const reasonsPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Reasons.tsx';
let reasonsContent = fs.readFileSync(reasonsPath, 'utf8');
reasonsContent = reasonsContent.replace(
  'bg-yellow-400 rounded-full flex items-center justify-center text-black font-black',
  'bg-slate-900 dark:bg-blue-600 rounded-full flex items-center justify-center text-white font-black'
);
fs.writeFileSync(reasonsPath, reasonsContent);

console.log('Toned down colors successfully');
