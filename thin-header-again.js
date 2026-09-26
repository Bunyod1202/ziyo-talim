const fs = require('fs');
const headerPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Header.tsx';
let header = fs.readFileSync(headerPath, 'utf8');

// Reduce container padding
header = header.replace(
  'className="flex items-center justify-between px-4 py-2 w-[95%] md:w-[85%] lg:w-[1000px]',
  'className="flex items-center justify-between px-4 py-1 w-[95%] md:w-[85%] lg:w-[1000px]'
);

// Reduce logo slightly to help header be thin (from h-12 to h-10)
header = header.replace(
  'className="h-12 w-auto rounded-full"',
  'className="h-10 w-auto rounded-full"'
);

// Make Nav links padding thin
header = header.replace(
  /className="relative px-3 py-1 text-xs md:text-sm/g,
  'className="relative px-3 py-0.5 text-xs md:text-sm'
);

// Fix button padding to keep it thin
header = header.replace(
  'text-white px-4 py-1.5 rounded-full font-bold',
  'text-white px-4 py-1 rounded-full font-bold'
);

fs.writeFileSync(headerPath, header);
console.log('Header made thinner by adjusting padding and slight logo tweak');
