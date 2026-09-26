const fs = require('fs');

const headerPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Header.tsx';
let header = fs.readFileSync(headerPath, 'utf8');

// Replace the <header> with a more creative <header> using framer motion for load animation
const oldHeaderStart = '<header className="fixed top-0 w-full z-50 flex justify-center transition-all duration-500 pt-3">';
const newHeaderStart = `<motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="fixed top-0 w-full z-50 flex justify-center transition-all duration-500 pt-4"
      >`;
header = header.replace(oldHeaderStart, newHeaderStart);
header = header.replace('</header>', '</motion.header>');

// Update the inner container to be ultra-glassmorphic
const oldInnerDiv = 'className="flex items-center justify-between px-4 py-1 w-[95%] md:w-[85%] lg:w-[1000px] bg-white/80 dark:bg-[#050505]/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl rounded-full transition-all duration-500 mx-auto"';
const newInnerDiv = 'className={`flex items-center justify-between px-3 py-1.5 w-[95%] md:w-[85%] lg:w-[1000px] ${isScrolled ? "bg-white/60 dark:bg-zinc-950/60 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.02)] border border-white/50 dark:border-white/10" : "bg-white/40 dark:bg-black/20 backdrop-blur-md shadow-lg border border-white/20 dark:border-white/5"} rounded-full transition-all duration-700 mx-auto relative overflow-hidden`}';
header = header.replace(oldInnerDiv, newInnerDiv);

// Add an ambient glow inside the header if scrolled
const newLogoSection = `<div className="flex-1 flex justify-start z-10 relative group">
            {/* Logo Glow */}
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full group-hover:bg-blue-500/40 transition-colors duration-500 opacity-0 group-hover:opacity-100"></div>
            <a href="/" className="flex items-center gap-2 py-1 relative">
            <img src="/logo.png" alt="Ziyo Ta'lim Logo" className="h-10 w-auto rounded-full group-hover:rotate-12 transition-transform duration-500 shadow-md" />
            <span className="font-black text-xl tracking-tight text-slate-900 dark:text-white hidden md:block">ZIYO TA'LIM</span>
          </a></div>`;
// Replace the old logo section
header = header.replace(/<div className="flex-1 flex justify-start"><a href="\/" className="flex items-center gap-2 py-1">[\s\S]*?<\/a><\/div>/, newLogoSection);

// Update Nav Links for a hyper-modern look
header = header.replace(/className="relative px-3 py-0.5 text-xs md:text-sm font-bold whitespace-nowrap text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors z-10"/g, 'className="relative px-4 py-2 text-xs md:text-sm font-bold whitespace-nowrap text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-all duration-300 z-10 group"');

// Replace the simple background pill with a glowing pill
header = header.replace(
  'className="absolute inset-0 bg-slate-100 dark:bg-white/10 rounded-full -z-10"',
  'className="absolute inset-0 bg-white dark:bg-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_10px_rgba(255,255,255,0.05)] rounded-full -z-10 border border-slate-200/50 dark:border-white/10"'
);

// Add a glowing dot underneath the active/hovered link
header = header.replace(
  '{link.name}',
  '{link.name}\n                {hoveredIndex === idx && (\n                  <motion.div\n                    layoutId="nav-dot"\n                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full blur-[1px]"\n                    initial={{ opacity: 0 }}\n                    animate={{ opacity: 1 }}\n                    exit={{ opacity: 0 }}\n                  />\n                )}'
);

// Make the Button hyper creative
const oldButton = `<button 
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-1 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 text-xs"
            >
              Bepul konsultatsiya
            </button>`;

const newButton = `<button 
              onClick={() => setIsModalOpen(true)}
              className="relative group px-5 py-2 rounded-full font-bold text-xs overflow-hidden z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:scale-105 transition-transform duration-300"></div>
              <div className="absolute inset-[1px] bg-slate-50 dark:bg-zinc-950 rounded-full z-0 group-hover:opacity-0 transition-opacity duration-300"></div>
              <span className="relative z-10 text-blue-600 dark:text-cyan-400 group-hover:text-white transition-colors duration-300">
                Konsultatsiya
              </span>
            </button>`;

header = header.replace(oldButton, newButton);

fs.writeFileSync(headerPath, header);
console.log('Header made incredibly creative');
