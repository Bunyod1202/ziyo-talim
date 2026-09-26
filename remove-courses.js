const fs = require('fs');

// 1. Remove from Courses.tsx
const coursesPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Courses.tsx';
let courses = fs.readFileSync(coursesPath, 'utf8');

// Remove Koreys tili
courses = courses.replace(/\{\s*title:\s*'Koreys tili',\s*icon:\s*Globe\s*\},?\n?/g, '');
// Remove Maktab tayyorlov
courses = courses.replace(/\{\s*title:\s*'Maktab tayyorlov',\s*icon:\s*GraduationCap\s*\},?\n?/g, '');

fs.writeFileSync(coursesPath, courses);

// 2. Remove from Header.tsx (Dropdown)
const headerPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Header.tsx';
let header = fs.readFileSync(headerPath, 'utf8');

header = header.replace(/<option value="Koreys tili">🇰🇷 Koreys tili \(TOPIK\)<\/option>\n?/g, '');
header = header.replace(/<option value="Maktab tayyorlov">🎒 Maktab tayyorlov<\/option>\n?/g, '');

fs.writeFileSync(headerPath, header);

// 3. Fix Results.tsx
const resultsPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Results.tsx';
let results = fs.readFileSync(resultsPath, 'utf8');

results = results.replace(
  `name: "Madina Umarova",
      score: "Topik 5",
      subject: "Koreys tili",
      uni: "Seoul National University",
      grant: "Global Grant",`,
  `name: "Madina Umarova",
      score: "CEFR C1",
      subject: "Rus tili",
      uni: "Jahon Tillari Universiteti",
      grant: "Davlat Granti",`
).replace(
  `quote: "Noldan boshlab 8 oy ichida Topik 5 darajasiga chiqishimga ishonmagandim. Rahmat Ziyo Ta'lim!"`,
  `quote: "Rus tilini noldan boshlab qisqa vaqt ichida yuqori darajaga olib chiqdim. Rahmat Ziyo Ta'lim!"`
);

fs.writeFileSync(resultsPath, results);

// 4. Fix natijalar/page.tsx
const natijalarPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/app/natijalar/page.tsx';
let natijalar = fs.readFileSync(natijalarPath, 'utf8');

natijalar = natijalar.replace(
  `name: "Madina Umarova",
      score: "Topik 5",
      subject: "Koreys tili",
      uni: "Seoul National University",
      grant: "Global Grant",`,
  `name: "Madina Umarova",
      score: "CEFR C1",
      subject: "Rus tili",
      uni: "Jahon Tillari Universiteti",
      grant: "Davlat Granti",`
).replace(
  `quote: "Noldan boshlab 8 oy ichida Topik 5 darajasiga chiqishimga ishonmagandim. Rahmat Ziyo Ta'lim!"`,
  `quote: "Rus tilini noldan boshlab qisqa vaqt ichida yuqori darajaga olib chiqdim. Rahmat Ziyo Ta'lim!"`
);

fs.writeFileSync(natijalarPath, natijalar);

console.log('Removed Koreys tili and Maktab tayyorlov from the site completely');
