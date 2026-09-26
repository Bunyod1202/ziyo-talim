const fs = require('fs');

const path = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Header.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Container padding
content = content.replace(
  'className="flex items-center justify-between px-4 py-1.5 w-[95%] md:w-[85%] lg:w-[1000px]',
  'className="flex items-center justify-between px-3 py-1 w-[95%] md:w-[85%] lg:w-[1000px]'
);

// 2. Logo container and text
content = content.replace(
  '<a href="/" className="flex items-center gap-2 py-2">',
  '<a href="/" className="flex items-center gap-2 py-1">'
);
content = content.replace(
  'className="h-6 w-auto rounded-full"',
  'className="h-5 w-auto rounded-full"'
);
content = content.replace(
  'className="font-black text-lg tracking-tight',
  'className="font-black text-sm tracking-tight'
);

// 3. Nav container and links
content = content.replace(
  '<nav className="hidden md:flex relative justify-center gap-1 py-1 flex-1">',
  '<nav className="hidden md:flex relative justify-center gap-1 flex-1 items-center">'
);
content = content.replace(
  /className="relative px-4 py-1.5 text-sm/g,
  'className="relative px-3 py-1 text-xs md:text-sm'
);

// 4. Right container
content = content.replace(
  '<div className="hidden md:flex items-center gap-2 py-1 flex-1 justify-end">',
  '<div className="hidden md:flex items-center gap-2 flex-1 justify-end">'
);

// 5. Button
content = content.replace(
  'text-white px-5 py-2 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 text-sm',
  'text-white px-4 py-1.5 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 text-xs'
);

// 6. Move the header even higher (pt-4 -> pt-3)
content = content.replace(
  'flex justify-center transition-all duration-500 pt-4"',
  'flex justify-center transition-all duration-500 pt-3"'
);

fs.writeFileSync(path, content);
console.log('Header made even thinner');
