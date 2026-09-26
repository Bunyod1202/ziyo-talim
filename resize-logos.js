const fs = require('fs');

// 1. Fix Header Logo
const headerPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Header.tsx';
let header = fs.readFileSync(headerPath, 'utf8');

// Increase logo image from h-5 to h-8
header = header.replace(
  'className="h-5 w-auto rounded-full"',
  'className="h-8 w-auto rounded-full"'
);
// Increase logo text from text-sm to text-lg
header = header.replace(
  'className="font-black text-sm tracking-tight text-slate-900 dark:text-white hidden md:block"',
  'className="font-black text-lg tracking-tight text-slate-900 dark:text-white hidden md:block"'
);
// Slightly increase padding so it doesn't look squeezed
header = header.replace(
  'className="flex items-center justify-between px-3 py-1 w-[95%] md:w-[85%] lg:w-[1000px]',
  'className="flex items-center justify-between px-3 py-1.5 w-[95%] md:w-[85%] lg:w-[1000px]'
);

fs.writeFileSync(headerPath, header);


// 2. Fix Footer Logo
const footerPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Footer.tsx';
let footer = fs.readFileSync(footerPath, 'utf8');

const oldFooterLogo = `<img src="/logo.png" alt="Ziyo Ta'lim" className="h-16 mb-6 bg-slate-50 dark:bg-white/5 p-2 rounded-xl backdrop-blur-md border border-slate-100 dark:border-white/10" />`;
const newFooterLogo = `<div className="flex items-center gap-4 mb-8">
              <img src="/logo.png" alt="Ziyo Ta'lim" className="h-16 bg-slate-50 dark:bg-white/5 p-2 rounded-xl backdrop-blur-md border border-slate-100 dark:border-white/10" />
              <span className="font-black text-3xl tracking-tight text-slate-900 dark:text-white">ZIYO TA'LIM</span>
            </div>`;

footer = footer.replace(oldFooterLogo, newFooterLogo);

fs.writeFileSync(footerPath, footer);

console.log('Logos resized in Header and Footer');
