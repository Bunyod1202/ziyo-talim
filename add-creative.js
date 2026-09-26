const fs = require('fs');

const globalsPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/app/globals.css';
let cssContent = fs.readFileSync(globalsPath, 'utf8');

if (!cssContent.includes('animate-marquee')) {
  cssContent += `
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-33.33%); }
}
.animate-marquee {
  animation: marquee 15s linear infinite;
  display: flex;
  width: max-content;
}

/* Creative Gradient Text */
.text-creative {
  background: linear-gradient(135deg, #FF3366, #FF9933, #33CCFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: gradientFlow 5s ease infinite;
}

@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`;
  fs.writeFileSync(globalsPath, cssContent);
}

// Add Marquee to page.tsx
const pagePath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/app/page.tsx';
let pageContent = fs.readFileSync(pagePath, 'utf8');
if (!pageContent.includes('Marquee')) {
  pageContent = pageContent.replace("import Stats", "import Marquee from '@/components/Marquee';\nimport Stats");
  pageContent = pageContent.replace("<Stats />", "<Marquee />\n      <Stats />");
  fs.writeFileSync(pagePath, pageContent);
}

// Enhance Hero.tsx with floating badge and creative text
const heroPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Hero.tsx';
let heroContent = fs.readFileSync(heroPath, 'utf8');
if (!heroContent.includes('text-creative')) {
  heroContent = heroContent.replace(
    'className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"',
    'className="text-creative"'
  );
  heroContent = heroContent.replace(
    '<div className="container mx-auto px-4 md:px-8 z-10">',
    `<div className="absolute left-10 top-1/3 hidden lg:flex flex-col gap-4 animate-bounce" style={{animationDuration: '3s'}}>
        <div className="w-16 h-16 rounded-2xl bg-white dark:bg-zinc-800 shadow-2xl flex items-center justify-center text-2xl -rotate-12 border border-slate-200 dark:border-slate-700">🎨</div>
     </div>
     <div className="absolute right-10 bottom-1/3 hidden lg:flex flex-col gap-4 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>
        <div className="w-16 h-16 rounded-full bg-blue-600 shadow-2xl flex items-center justify-center text-white text-2xl rotate-12">✨</div>
     </div>
     <div className="container mx-auto px-4 md:px-8 z-10">`
  );
  fs.writeFileSync(heroPath, heroContent);
}

// Enhance Reasons.tsx with a floating sticker
const reasonsPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Reasons.tsx';
let reasonsContent = fs.readFileSync(reasonsPath, 'utf8');
if (!reasonsContent.includes('absolute -top-6 -right-6')) {
  reasonsContent = reasonsContent.replace(
    '<h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Professional Ustozlar va Support Teacher</h3>',
    `<div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center text-black font-black text-center text-sm transform rotate-12 border-4 border-white dark:border-black shadow-xl z-20 hover:rotate-180 transition-transform duration-700">TOP<br/>TANLOV</div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 relative z-10">Professional Ustozlar va Support Teacher</h3>`
  );
  fs.writeFileSync(reasonsPath, reasonsContent);
}

console.log('Creative elements added');
