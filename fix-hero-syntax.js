const fs = require('fs');
const path = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Hero.tsx';
let content = fs.readFileSync(path, 'utf8');

// The issue is that I wrote \\\` instead of \` and \\\${ instead of \${
content = content.replace(/\\\`/g, '\`').replace(/\\\$/g, '\$');

fs.writeFileSync(path, content);
console.log('Fixed syntax error in Hero.tsx');
