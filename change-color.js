const fs = require('fs');
const path = require('path');

const dirs = [
  'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components',
  'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/app'
];

// We will replace #00B4D8 (cyan) with a darker blue, e.g., #0B5394 (Dark blue) or #1D4ED8 (blue-700)
const OLD_COLOR = '#00B4D8';
const NEW_COLOR = '#1D4ED8'; // A rich, darker blue

// Also replace the extremely light blue #E6F7FA with something that matches the new blue
const OLD_BG = '#E6F7FA';
const NEW_BG = '#DBEAFE'; // blue-100

function processFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processFiles(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let modified = false;
      if (content.includes(OLD_COLOR) || content.includes(OLD_BG)) {
        content = content.split(OLD_COLOR).join(NEW_COLOR);
        content = content.split(OLD_BG).join(NEW_BG);
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

dirs.forEach(dir => processFiles(dir));
console.log('Colors replaced successfully');
