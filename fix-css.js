const fs = require('fs');

const path = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/app/globals.css';
let content = fs.readFileSync(path);

// Replace null bytes and weird powershell output
let textContent = content.toString('utf8').replace(/\x00/g, '');

// The original file ended after the keyframes gradientFlow at line 76
const goodEnding = `@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`;

const index = textContent.indexOf(goodEnding);
if (index !== -1) {
  textContent = textContent.substring(0, index + goodEnding.length) + '\n\n.hide-scroll::-webkit-scrollbar { display: none; }\n.hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }\n';
}

fs.writeFileSync(path, textContent, 'utf8');
console.log('Fixed globals.css encoding');
