const fs = require('fs');
const path = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Header.tsx';
let content = fs.readFileSync(path, 'utf8');

// The nav link currently looks like:
// className="relative px-3 py-1 text-xs md:text-sm font-bold text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors z-10"
// We need to add whitespace-nowrap

content = content.replace(
  /className="relative px-3 py-1 text-xs md:text-sm font-bold/g,
  'className="relative px-3 py-1 text-xs md:text-sm font-bold whitespace-nowrap'
);

fs.writeFileSync(path, content);
console.log('Added whitespace-nowrap to header links');
