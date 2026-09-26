const fs = require('fs');

// 1. Fix Header Logo
const headerPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Header.tsx';
let header = fs.readFileSync(headerPath, 'utf8');

// Increase logo image from h-8 to h-12
header = header.replace(
  'className="h-8 w-auto rounded-full"',
  'className="h-12 w-auto rounded-full"'
);
// Increase logo text
header = header.replace(
  'className="font-black text-lg tracking-tight text-slate-900 dark:text-white hidden md:block"',
  'className="font-black text-xl tracking-tight text-slate-900 dark:text-white hidden md:block"'
);
// Increase container padding slightly to fit h-12 without squeezing
header = header.replace(
  'className="flex items-center justify-between px-3 py-1.5 w-[95%] md:w-[85%] lg:w-[1000px]',
  'className="flex items-center justify-between px-4 py-2 w-[95%] md:w-[85%] lg:w-[1000px]'
);

fs.writeFileSync(headerPath, header);


// 2. Fix Footer Logo
const footerPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Footer.tsx';
let footer = fs.readFileSync(footerPath, 'utf8');

// The newFooterLogo from last time:
// <div className="flex items-center gap-4 mb-8">
//   <img src="/logo.png" alt="Ziyo Ta'lim" className="h-16 bg-slate-50 dark:bg-white/5 p-2 rounded-xl backdrop-blur-md border border-slate-100 dark:border-white/10" />
//   <span className="font-black text-3xl tracking-tight text-slate-900 dark:text-white">ZIYO TA'LIM</span>
// </div>

footer = footer.replace(
  'className="h-16 bg-slate-50 dark:bg-white/5 p-2 rounded-xl',
  'className="h-24 bg-slate-50 dark:bg-white/5 p-3 rounded-2xl'
);
footer = footer.replace(
  'className="font-black text-3xl tracking-tight',
  'className="font-black text-4xl tracking-tight'
);

fs.writeFileSync(footerPath, footer);

console.log('Logos made EVEN larger');
