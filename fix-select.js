const fs = require('fs');

const path = 'c:/Users/Bunyod/Desktop/Ziyo talim/ziyo-talim/src/components/Header.tsx';
let content = fs.readFileSync(path, 'utf8');

const oldSelect = `                      <div>
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

const newSelect = `                      <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Qaysi yo'nalishga qiziqasiz?</label>
                        <div className="relative">
                          <select
                            required
                            value={formData.course}
                            onChange={e => setFormData({...formData, course: e.target.value})}
                            className="w-full pl-4 pr-12 py-3 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-white transition-all appearance-none cursor-pointer font-medium hover:border-blue-400 dark:hover:border-blue-500/50"
                          >
                            <option value="Ingliz tili">🇬🇧 Ingliz tili (IELTS / CEFR)</option>
                            <option value="Matematika">🧮 Matematika</option>
                            <option value="Kimyo va Biologiya">🧬 Kimyo va Biologiya</option>
                            <option value="Koreys tili">🇰🇷 Koreys tili (TOPIK)</option>
                            <option value="IT va Dasturlash">💻 IT va Dasturlash</option>
                            <option value="Maktab tayyorlov">🎒 Maktab tayyorlov</option>
                            <option value="Boshqa">Boshqa yo'nalish</option>
                          </select>
                          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                            <div className="bg-slate-200 dark:bg-slate-800 p-1 rounded-md">
                              <svg className="w-4 h-4 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                          </div>
                        </div>
                      </div>`;

content = content.replace(oldSelect, newSelect);
fs.writeFileSync(path, content);
console.log('Select field improved');
