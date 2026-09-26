const fs = require('fs');
const path = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Header.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Update formData state
content = content.replace(
  "const [formData, setFormData] = useState({ name: '', surname: '', phone: '' });",
  "const [formData, setFormData] = useState({ name: '', surname: '', phone: '', course: 'Ingliz tili' });"
);

// 2. Update Telegram text template
content = content.replace(
  "const text = \`📝 YANGI ARIZA!\\n\\n👤 Ism: \${formData.name}\\n👥 Familiya: \${formData.surname}\\n📱 Telefon: \${formData.phone}\`;",
  "const text = \`📝 YANGI ARIZA!\\n\\n👤 Ism: \${formData.name}\\n👥 Familiya: \${formData.surname}\\n📱 Telefon: \${formData.phone}\\n📚 Yo'nalish: \${formData.course}\`;"
);

// 3. Reset form data correctly after submission
content = content.replace(
  "setFormData({ name: '', surname: '', phone: '' });",
  "setFormData({ name: '', surname: '', phone: '', course: 'Ingliz tili' });"
);

// 4. Add the Select field to the form
const phoneFieldEnd = `className="w-full px-4 py-3 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-white transition-all"
                        />
                      </div>`;

const selectFieldHTML = `${phoneFieldEnd}
                      <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Qaysi yo'nalishga qiziqasiz?</label>
                        <select
                          required
                          value={formData.course}
                          onChange={e => setFormData({...formData, course: e.target.value})}
                          className="w-full px-4 py-3 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-white transition-all appearance-none cursor-pointer"
                        >
                          <option value="Ingliz tili">🇬🇧 Ingliz tili (IELTS / CEFR)</option>
                          <option value="Matematika">🧮 Matematika</option>
                          <option value="Kimyo va Biologiya">🧬 Kimyo va Biologiya</option>
                          <option value="Koreys tili">🇰🇷 Koreys tili (TOPIK)</option>
                          <option value="IT va Dasturlash">💻 IT va Dasturlash</option>
                          <option value="Maktab tayyorlov">🎒 Maktab tayyorlov</option>
                          <option value="Boshqa">Boshqa yo'nalish</option>
                        </select>
                      </div>`;

content = content.replace(phoneFieldEnd, selectFieldHTML);

fs.writeFileSync(path, content);
console.log('Course selection added to modal');
