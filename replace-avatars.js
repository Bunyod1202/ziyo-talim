const fs = require('fs');

const heroPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Hero.tsx';
let content = fs.readFileSync(heroPath, 'utf8');

const oldTrustSection = `<div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={\`https://api.dicebear.com/7.x/avataaars/svg?seed=\${i + 15}&backgroundColor=b6e3f4,c0aede,d1d4f9\` }
                  alt="Student"
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-[#020813] bg-slate-100"
                />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white dark:border-[#020813] bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-xs font-bold text-blue-600 dark:text-blue-400 z-10">
                10k+
              </div>
            </div>`;

const newTrustSection = `<div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
              ].map((url, i) => (
                <img 
                  key={i}
                  src={url}
                  alt="Student"
                  className="w-12 h-12 rounded-full border-2 border-white dark:border-[#020813] object-cover shadow-sm"
                />
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-white dark:border-[#020813] bg-blue-50 dark:bg-blue-900/40 flex items-center justify-center text-xs font-bold text-blue-600 dark:text-blue-400 z-10 shadow-sm backdrop-blur-md">
                10k+
              </div>
            </div>`;

content = content.replace(oldTrustSection, newTrustSection);

fs.writeFileSync(heroPath, content);
console.log('Avatars replaced with realistic photos');
