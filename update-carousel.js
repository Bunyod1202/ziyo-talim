const fs = require('fs');

const path = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Results.tsx';
let content = fs.readFileSync(path, 'utf8');

// Update imports
content = content.replace(
  "import { GraduationCap, Award, Star, Quote } from 'lucide-react';",
  "import { useRef } from 'react';\nimport { GraduationCap, Award, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';"
);

// Add ref and scroll function
content = content.replace(
  "export default function Results() {",
  `export default function Results() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = window.innerWidth > 768 ? 420 : 340;
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };`
);

// Update Header right side (buttons)
const oldHeaderRight = `          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-4 text-slate-500 dark:text-slate-400 font-medium"
          >
            Gorizontal surib ko'ring <ArrowRightIcon className="w-5 h-5 animate-pulse" />
          </motion.div>
        </div>

        {/* Horizontal Scrolling Cards Container */}
        <div className="flex overflow-x-auto gap-6 pb-12 pt-4 px-4 -mx-4 snap-x snap-mandatory custom-scrollbar">`;

const newHeaderRight = `          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-4 mt-8 md:mt-0"
          >
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all active:scale-95 shadow-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all active:scale-95 shadow-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>

        {/* Horizontal Scrolling Cards Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-12 pt-4 px-4 -mx-4 snap-x snap-mandatory hide-scroll"
        >`;

content = content.replace(oldHeaderRight, newHeaderRight);

fs.writeFileSync(path, content);
console.log('Results updated to carousel');
