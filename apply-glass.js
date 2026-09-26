const fs = require('fs');
const path = require('path');

const componentsDir = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components';
const appDir = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/app';

const glassReplacements = [
  { from: 'bg-white dark:bg-[#011627]', to: 'glass-card' },
  { from: 'bg-[#F4F9FF] dark:bg-[#011627]', to: 'glass-panel' },
  { from: 'bg-[#F4F9FF]', to: 'glass-panel' },
  { from: 'bg-white', to: 'glass-card' },
  { from: 'bg-[#011627]', to: 'glass-panel' },
  { from: 'bg-[#040B16]', to: 'glass-panel' }, // Footer
  { from: 'bg-slate-50', to: 'glass-panel' },
  { from: 'bg-gradient-to-br from-[#F4F9FF] to-[#E0F0FF] dark:from-[#011627] dark:to-[#023059]', to: 'glass-panel' }, // Hero
];

function processFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processFiles(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let modified = false;
      for (const rep of glassReplacements) {
        if (content.includes(rep.from)) {
          content = content.split(rep.from).join(rep.to);
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

processFiles(componentsDir);
processFiles(appDir);
console.log('Applied glassmorphism classes');
