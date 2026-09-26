const fs = require('fs');
const filePath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Header.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
  "bg-[#071426]/90 backdrop-blur-md shadow-lg py-4",
  "bg-white/90 dark:bg-[#071426]/90 backdrop-blur-md shadow-lg py-4"
);

content = content.replace(
  '<button className="text-white" onClick={() => setIsOpen(!isOpen)}>',
  '<button className="text-[#023059] dark:text-white" onClick={() => setIsOpen(!isOpen)}>'
);

content = content.replace(
  'className="md:hidden overflow-hidden bg-[#071426]/95 backdrop-blur-md"',
  'className="md:hidden overflow-hidden bg-white/95 dark:bg-[#071426]/95 backdrop-blur-md"'
);

// Mobile Nav links
content = content.split('className="text-white py-2"').join('className="text-[#023059] dark:text-white py-2"');

fs.writeFileSync(filePath, content);
console.log('Header fixed');
