const fs = require('fs');

const path = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Header.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Make inner padding thinner (py-2 -> py-1.5)
content = content.replace(
  'className="flex items-center justify-between px-4 py-2',
  'className="flex items-center justify-between px-4 py-1.5'
);

// 2. Reduce Logo height
content = content.replace(
  'className="h-8 w-auto rounded-full"',
  'className="h-6 w-auto rounded-full"'
);

// 3. Make the nav links a bit thinner
content = content.replace(
  'className="hidden md:flex relative justify-center gap-2 py-2 flex-1"',
  'className="hidden md:flex relative justify-center gap-1 py-1 flex-1"'
);
content = content.replace(
  /className="relative px-5 py-2 text-sm/g,
  'className="relative px-4 py-1.5 text-sm'
);

// 4. Reduce right container padding
content = content.replace(
  'className="hidden md:flex items-center gap-2 py-2 flex-1 justify-end"',
  'className="hidden md:flex items-center gap-2 py-1 flex-1 justify-end"'
);

// 5. Reduce the button height
content = content.replace(
  'text-white px-6 py-2.5 rounded-full',
  'text-white px-5 py-2 rounded-full'
);

// 6. Reduce the "pt-6" on the main header so it floats slightly higher up
content = content.replace(
  'flex justify-center transition-all duration-500 pt-6"',
  'flex justify-center transition-all duration-500 pt-4"'
);

fs.writeFileSync(path, content);
console.log('Header made thinner');
