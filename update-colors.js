const fs = require('fs');
const path = require('path');

const componentsDir = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components';
const appDir = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/app';

const replacements = [
  // Dark mode backgrounds
  { from: 'dark:bg-[#071426]', to: 'dark:bg-[#011627]' },
  { from: 'dark:bg-[#0a192f]', to: 'dark:bg-[#012240]' },
  { from: 'dark:bg-gray-900', to: 'dark:bg-[#011627]' },
  { from: 'dark:bg-gray-800', to: 'dark:bg-[#012240]' },
  
  // Light mode colors
  { from: 'text-[#071426]', to: 'text-[#023059]' },
  { from: 'bg-[#F8FAFC]', to: 'bg-[#F4F9FF]' }, // Softer, more blue-tinted light background
  
  // Brand colors
  { from: 'bg-[#085DCD]', to: 'bg-[#00B4D8]' }, // Main blue replaced with cyan from wings
  { from: 'text-[#085DCD]', to: 'text-[#00B4D8]' },
  { from: 'border-[#085DCD]', to: 'border-[#00B4D8]' },
  { from: 'ring-[#085DCD]', to: 'ring-[#00B4D8]' },
  
  // Specific tweaks
  { from: 'from-[#071426] to-[#0a2342]', to: 'from-[#011627] to-[#023059]' }, // Hero background
  { from: 'from-[#085DCD] to-indigo-600', to: 'from-[#00B4D8] to-[#023059]' }, // CTA background
  { from: 'bg-blue-600', to: 'bg-[#023059]' }, // Navy buttons
  { from: 'hover:bg-blue-500', to: 'hover:bg-[#00B4D8]' },
  { from: 'hover:bg-blue-600', to: 'hover:bg-[#022240]' },
  { from: 'text-blue-600', to: 'text-[#00B4D8]' },
  { from: 'bg-blue-50', to: 'bg-[#E6F7FA]' },
  
  // Improve light mode text contrast
  { from: 'text-gray-600', to: 'text-slate-600' },
  { from: 'text-gray-500', to: 'text-slate-500' },
  { from: 'bg-gray-50', to: 'bg-slate-50' },
  { from: 'border-gray-100', to: 'border-slate-100' },
];

function processFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processFiles(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      for (const rep of replacements) {
        content = content.split(rep.from).join(rep.to);
      }
      
      // Cleanup any duplicate dark classes
      content = content.split('dark:bg-[#011627] dark:bg-[#011627]').join('dark:bg-[#011627]');
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

processFiles(componentsDir);
processFiles(appDir);

// Also copy the logo into public folder so we can use it in the Header and Footer
const logoSrc = 'c:/Users/Bunyod/Desktop/Ziyo talim/logo/1a436211-1b04-461d-a670-9931b69db5e1.png';
const publicDir = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/public';
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
fs.copyFileSync(logoSrc, path.join(publicDir, 'logo.png'));

console.log('Colors updated and logo copied');
