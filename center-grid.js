const fs = require('fs');
const path = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Courses.tsx';
let content = fs.readFileSync(path, 'utf8');

// Change grid-cols-5 to grid-cols-4
content = content.replace(/lg:grid-cols-5/g, 'lg:grid-cols-4');

fs.writeFileSync(path, content);
console.log('Centered grid layouts by changing to grid-cols-4');
