const fs = require('fs');

const path = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Header.tsx';
let content = fs.readFileSync(path, 'utf8');

// The original line:
// <div className={`flex items-center justify-between px-2 pr-2 pl-4 transition-all duration-500 ${isScrolled ? 'w-[95%] md:w-auto bg-white/70 dark:bg-[#050505]/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl rounded-full' : 'w-full px-4 md:px-8 bg-transparent'}`}>

// Make it ALWAYS a pill.
const newHeaderDiv = `<div className="flex items-center justify-between px-4 py-2 w-[95%] md:w-[85%] lg:w-[1000px] bg-white/80 dark:bg-[#050505]/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl rounded-full transition-all duration-500 mx-auto">`;

content = content.replace(
  /<div className=\{\`flex items-center justify-between px-2 pr-2 pl-4 transition-all duration-500 \$\{isScrolled \? '[^`]+' : '[^`]+'\}\`\}>/,
  newHeaderDiv
);

// Also remove the conditional padding on <header>
content = content.replace(
  /<header className=\{\`fixed top-0 w-full z-50 flex justify-center transition-all duration-500 \$\{isScrolled \? 'pt-4' : 'pt-6'\}\`\}>/,
  `<header className="fixed top-0 w-full z-50 flex justify-center transition-all duration-500 pt-6">`
);

// To ensure nav links are centered relative to the header:
// We can use flex-1 to push sides equally.
content = content.replace(
  '<a href="#" className="flex items-center gap-2 mr-8 py-2">',
  '<div className="flex-1 flex justify-start"><a href="/" className="flex items-center gap-2 py-2">'
);
content = content.replace(
  '            <span className="font-black text-lg tracking-tight text-slate-900 dark:text-white hidden md:block">ZIYO TA\'LIM</span>\n          </a>',
  '            <span className="font-black text-lg tracking-tight text-slate-900 dark:text-white hidden md:block">ZIYO TA\'LIM</span>\n          </a></div>'
);

content = content.replace(
  '<nav className="hidden md:flex relative mr-8 py-2">',
  '<nav className="hidden md:flex relative justify-center gap-2 py-2 flex-1">'
);

content = content.replace(
  '<div className="hidden md:flex items-center gap-2 py-2">',
  '<div className="hidden md:flex items-center gap-2 py-2 flex-1 justify-end">'
);

fs.writeFileSync(path, content);
console.log('Header centralized');
