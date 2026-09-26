const fs = require('fs');

// 1. Fix Reasons.tsx auto-rows (causing overlap if text is long)
const reasonsPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Reasons.tsx';
let reasonsContent = fs.readFileSync(reasonsPath, 'utf8');
reasonsContent = reasonsContent.replace(
  'auto-rows-[250px]',
  'auto-rows-min md:auto-rows-[minmax(250px,auto)]'
);
// Make the first card not overflow
reasonsContent = reasonsContent.replace(
  'md:col-span-2 md:row-span-2',
  'md:col-span-2 lg:row-span-2'
);
fs.writeFileSync(reasonsPath, reasonsContent);

// 2. Fix Stats.tsx fixed height
const statsPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Stats.tsx';
let statsContent = fs.readFileSync(statsPath, 'utf8');
statsContent = statsContent.replace(/h-48/g, 'min-h-[12rem] py-8 h-full');
fs.writeFileSync(statsPath, statsContent);

// 3. Fix Hero.tsx title size and padding (prevent overlap)
const heroPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Hero.tsx';
let heroContent = fs.readFileSync(heroPath, 'utf8');
// Fix giant text leading to overlap on small screens
heroContent = heroContent.replace(
  'text-6xl md:text-8xl',
  'text-5xl md:text-7xl lg:text-8xl'
);
// Fix z-index for floating badges so they don't block clicks
heroContent = heroContent.replace(
  'absolute left-10 top-1/3 hidden lg:flex',
  'absolute left-10 top-1/3 hidden lg:flex -z-10'
);
heroContent = heroContent.replace(
  'absolute right-10 bottom-1/3 hidden lg:flex',
  'absolute right-10 bottom-1/3 hidden lg:flex -z-10'
);
fs.writeFileSync(heroPath, heroContent);

// 4. Fix Marquee width issue
const marqueePath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Marquee.tsx';
let marqueeContent = fs.readFileSync(marqueePath, 'utf8');
// Sometimes negative rotate causes horizontal scrollbar on body
marqueeContent = marqueeContent.replace(
  'w-max',
  'w-full'
);
fs.writeFileSync(marqueePath, marqueeContent);

// 5. Ensure Layout prevents horizontal scroll
const layoutPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/app/layout.tsx';
let layoutContent = fs.readFileSync(layoutPath, 'utf8');
if (!layoutContent.includes('overflow-x-hidden')) {
  layoutContent = layoutContent.replace(
    '<body className="min-h-full flex flex-col transition-colors duration-300">',
    '<body className="min-h-full flex flex-col transition-colors duration-300 overflow-x-hidden">'
  );
  fs.writeFileSync(layoutPath, layoutContent);
}

console.log('Fixed layout and overlap issues');
