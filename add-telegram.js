const fs = require('fs');

const headerPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Header.tsx';
let headerContent = fs.readFileSync(headerPath, 'utf8');

// 1. Add Telegram logic to handleSubmit
const newSubmit = `
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', surname: '', phone: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const botToken = '7076106039:AAEXOG9hym5xUDhCeNkrJqr0PHbnEVYA7-4';
    const chatId = 812851381;
    const url = \`https://api.telegram.org/bot\${botToken}/sendMessage\`;
    const text = \`📝 YANGI ARIZA!\\n\\n👤 Ism: \${formData.name}\\n👥 Familiya: \${formData.surname}\\n📱 Telefon: \${formData.phone}\`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: text }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', surname: '', phone: '' });
        setTimeout(() => {
          setIsModalOpen(false);
          setTimeout(() => setIsSubmitted(false), 500);
        }, 2500);
      } else {
        alert("Xatolik yuz berdi. Iltimos qayta urinib ko'ring.");
      }
    } catch (error) {
      alert("Internet aloqasini tekshiring.");
    } finally {
      setIsLoading(false);
    }
  };
`;

headerContent = headerContent.replace(
  /const handleSubmit = \(e: React\.FormEvent\) => \{[\s\S]*?\};/,
  newSubmit
);

// 2. Add event listener for global modal opening
const effectHook = `
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Custom event listener to open modal from anywhere
    const openModal = () => setIsModalOpen(true);
    window.addEventListener('open-modal', openModal);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('open-modal', openModal);
    };
  }, []);
`;
headerContent = headerContent.replace(
  /useEffect\(\(\) => \{[\s\S]*?\}, \[\]\);/,
  effectHook
);

// 3. Update form inputs to use state
headerContent = headerContent.replace(
  /<input \n                          type="text" \n                          required\n                          placeholder="Masalan: Asadbek"/g,
  '<input \n                          type="text" \n                          required\n                          value={formData.name}\n                          onChange={e => setFormData({...formData, name: e.target.value})}\n                          placeholder="Masalan: Asadbek"'
);

headerContent = headerContent.replace(
  /<input \n                          type="text" \n                          required\n                          placeholder="Masalan: Tursunov"/g,
  '<input \n                          type="text" \n                          required\n                          value={formData.surname}\n                          onChange={e => setFormData({...formData, surname: e.target.value})}\n                          placeholder="Masalan: Tursunov"'
);

headerContent = headerContent.replace(
  /<input \n                          type="tel" \n                          required\n                          placeholder="\+998 90 123 45 67"/g,
  '<input \n                          type="tel" \n                          required\n                          value={formData.phone}\n                          onChange={e => setFormData({...formData, phone: e.target.value})}\n                          placeholder="+998 90 123 45 67"'
);

// 4. Update submit button text
headerContent = headerContent.replace(
  />\n                        Yuborish\n                      <\/button>/,
  '>\n                        {isLoading ? "Yuborilmoqda..." : "Yuborish"}\n                      </button>'
);

// 5. Add cursor-not-allowed if loading
headerContent = headerContent.replace(
  /className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl mt-4 shadow-lg shadow-blue-600\/20 active:scale-95 transition-all"/,
  'disabled={isLoading}\n                        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl mt-4 shadow-lg shadow-blue-600/20 active:scale-95 transition-all disabled:opacity-70 disabled:cursor-not-allowed"'
);

fs.writeFileSync(headerPath, headerContent);


// Now update Hero.tsx buttons to dispatch 'open-modal'
const heroPath = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Hero.tsx';
let heroContent = fs.readFileSync(heroPath, 'utf8');

const heroButtons = `
            <button 
              onClick={() => window.dispatchEvent(new Event('open-modal'))}
              className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
            >
              Kurslarni boshlash
            </button>
            <button 
              onClick={() => window.dispatchEvent(new Event('open-modal'))}
              className="bg-white dark:bg-zinc-800 text-slate-900 dark:text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-zinc-700 transition-colors"
            >
              Bepul konsultatsiya
            </button>
`;

heroContent = heroContent.replace(
  /<button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">\s*Kurslarni boshlash\s*<\/button>\s*<button className="bg-white dark:bg-zinc-800 text-slate-900 dark:text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-zinc-700 transition-colors">\s*Bepul konsultatsiya\s*<\/button>/,
  heroButtons
);

fs.writeFileSync(heroPath, heroContent);
console.log('Telegram integration and global modal trigger complete');
