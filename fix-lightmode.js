const fs = require('fs');

// 1. Fix Courses.tsx light mode (English Levels box)
const coursesPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Courses.tsx';
let coursesContent = fs.readFileSync(coursesPath, 'utf8');

// Replace the dark box background
coursesContent = coursesContent.replace(
  'bg-slate-900 dark:bg-zinc-900 rounded-[3rem] p-8 md:p-12 relative overflow-hidden shadow-2xl border border-slate-800',
  'bg-slate-100 dark:bg-zinc-900 rounded-[3rem] p-8 md:p-12 relative overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800'
);
// Fix title text color
coursesContent = coursesContent.replace(
  'text-3xl md:text-4xl font-black text-white mb-2 tracking-tight',
  'text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tight'
);
// Fix subtitle text color
coursesContent = coursesContent.replace(
  'text-slate-400 text-lg',
  'text-slate-600 dark:text-slate-400 text-lg'
);
// Fix individual level boxes
coursesContent = coursesContent.replace(
  /bg-white\/5 hover:bg-white\/10 border border-white\/10/g,
  'bg-white dark:bg-white/5 hover:bg-white/50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 shadow-sm'
);
// Fix level box number circle
coursesContent = coursesContent.replace(
  /w-10 h-10 rounded-full bg-white\/10 flex items-center justify-center text-slate-400/g,
  'w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400'
);
// Fix level text
coursesContent = coursesContent.replace(
  /<div className="text-white font-black text-lg mb-1">\{item\.lvl\}<\/div>/g,
  '<div className="text-slate-900 dark:text-white font-black text-lg mb-1">{item.lvl}</div>'
);
// Fix duration text
coursesContent = coursesContent.replace(
  /<div className="text-slate-400 text-xs font-bold uppercase tracking-widest">\{item\.duration\}<\/div>/g,
  '<div className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest">{item.duration}</div>'
);
fs.writeFileSync(coursesPath, coursesContent);

// 2. Fix Reasons.tsx light mode (IELTS Cashback box)
const reasonsPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Reasons.tsx';
let reasonsContent = fs.readFileSync(reasonsPath, 'utf8');

// Replace dark box
reasonsContent = reasonsContent.replace(
  'bg-slate-900 dark:bg-zinc-950 rounded-[2rem] border border-slate-800',
  'bg-slate-100 dark:bg-zinc-950 rounded-[2rem] border border-slate-200 dark:border-slate-800'
);
// Fix title text
reasonsContent = reasonsContent.replace(
  'text-3xl md:text-4xl font-black text-white mb-3 tracking-tight',
  'text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight'
);
// Fix paragraph text
reasonsContent = reasonsContent.replace(
  'text-slate-400 max-w-md',
  'text-slate-600 dark:text-slate-400 max-w-md'
);
fs.writeFileSync(reasonsPath, reasonsContent);

// 3. Ensure ThemeToggle has correct styles
const togglePath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/ThemeToggle.tsx';
let toggleContent = fs.readFileSync(togglePath, 'utf8');
if (!toggleContent.includes('bg-white')) {
  toggleContent = toggleContent.replace(
    'p-2 text-[#023059] dark:text-white/90 hover:bg-slate-100',
    'p-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200'
  );
  fs.writeFileSync(togglePath, toggleContent);
}

console.log('Fixed Light Mode consistency');
