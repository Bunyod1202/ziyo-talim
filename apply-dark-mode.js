const fs = require('fs');
const path = require('path');

const componentsDir = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components';

const replacements = [
  { from: 'bg-white', to: 'bg-white dark:bg-[#071426]' },
  { from: 'bg-[#F8FAFC]', to: 'bg-[#F8FAFC] dark:bg-[#0a192f]' },
  { from: 'text-[#071426]', to: 'text-[#071426] dark:text-white' },
  { from: 'text-gray-900', to: 'text-gray-900 dark:text-gray-100' },
  { from: 'text-gray-800', to: 'text-gray-800 dark:text-gray-200' },
  { from: 'text-gray-700', to: 'text-gray-700 dark:text-gray-300' },
  { from: 'text-gray-600', to: 'text-gray-600 dark:text-gray-400' },
  { from: 'text-gray-500', to: 'text-gray-500 dark:text-gray-400' },
  { from: 'bg-gray-50', to: 'bg-gray-50 dark:bg-[#0a192f]/50' },
  { from: 'bg-gray-100', to: 'bg-gray-100 dark:bg-[#0a192f]' },
  { from: 'border-gray-100', to: 'border-gray-100 dark:border-white/10' },
  { from: 'border-gray-200', to: 'border-gray-200 dark:border-white/20' },
];

const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  if (file === 'ThemeToggle.tsx' || file === 'ThemeProvider.tsx') continue;
  
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  if (file === 'Header.tsx') {
    if (!content.includes('ThemeToggle')) {
      content = content.replace("import { motion } from 'framer-motion';", "import { motion } from 'framer-motion';\nimport { ThemeToggle } from './ThemeToggle';");
      content = content.replace(
        '<div className="hidden md:block">',
        '<div className="hidden md:flex items-center gap-4">\\n          <ThemeToggle />'
      );
      content = content.replace(
        '<button className="md:hidden text-white"',
        '<div className="md:hidden flex items-center gap-2">\\n          <ThemeToggle />\\n          <button className="text-white"'
      );
      content = content.replace(
        '{isOpen ? <X /> : <Menu />}\\n        </button>',
        '{isOpen ? <X /> : <Menu />}\\n          </button>\\n        </div>'
      );
      content = content.replace("bg-navy-900/80", "bg-[#071426]/90");
    }
  }

  for (const rep of replacements) {
    // Basic string replace for simplicity
    content = content.split(rep.from).join(rep.to);
  }
  
  // Fix nested replacements
  content = content.split('dark:bg-[#071426] dark:bg-[#071426]').join('dark:bg-[#071426]');
  content = content.split('dark:text-white dark:text-white').join('dark:text-white');

  fs.writeFileSync(filePath, content);
}

// Special case for layout.tsx body
const layoutPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/app/layout.tsx';
let layoutContent = fs.readFileSync(layoutPath, 'utf8');
if (!layoutContent.includes('dark:bg-[#071426]')) {
  layoutContent = layoutContent.replace('className="min-h-full flex flex-col"', 'className="min-h-full flex flex-col bg-white dark:bg-[#071426] text-[#071426] dark:text-white transition-colors duration-300"');
  fs.writeFileSync(layoutPath, layoutContent);
}

console.log('Dark mode classes added');
