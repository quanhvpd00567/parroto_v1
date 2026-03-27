import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const AddVocabularyPage = () => {
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen pt-24 pb-12">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-primary font-headline tracking-tight mb-2">Personal Dictionary</h1>
          <p className="text-on-surface-variant font-medium">Add new words and phrases to your collection.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Add Word Form */}
          <section className="md:col-span-8 bg-surface-container-lowest p-8 rounded-lg shadow-sm border border-outline-variant/10">
            <h2 className="text-xl font-bold mb-6 font-headline flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">add_circle</span>
              New Vocabulary
            </h2>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Word or Phrase</label>
                <input
                  type="text"
                  placeholder="e.g. Ephemeral"
                  className="w-full bg-surface-container-low border-none rounded-lg p-4 text-lg focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Type</label>
                  <select className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all">
                    <option>Noun</option>
                    <option>Verb</option>
                    <option>Adjective</option>
                    <option>Adverb</option>
                    <option>Phrase</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Pronunciation</label>
                  <input
                    type="text"
                    placeholder="/iˈfem(ə)rəl/"
                    className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Meaning</label>
                <textarea
                  rows="3"
                  placeholder="Lasting for a very short time..."
                  className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all"
                ></textarea>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Example Sentence</label>
                <textarea
                  rows="2"
                  placeholder="Fashions are ephemeral..."
                  className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all"
                ></textarea>
              </div>

              <div className="pt-4">
                <button className="w-full bg-primary text-on-primary font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-95 transition-all">
                  Add to Dictionary
                </button>
              </div>
            </form>
          </section>

          {/* Recently Added / Tips */}
          <aside className="md:col-span-4 space-y-6">
            <div className="bg-primary-container p-6 rounded-lg text-white shadow-lg">
              <span className="material-symbols-outlined mb-2 text-3xl">lightbulb</span>
              <h3 className="text-lg font-bold font-headline mb-2">Quick Tip</h3>
              <p className="text-primary-fixed/80 text-sm leading-relaxed">
                Adding an example sentence helps you remember how to use the word in a real context.
              </p>
            </div>

            <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
              <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-4">Recent Words</h3>
              <div className="space-y-4">
                {[
                  { word: 'Luminous', type: 'Adj' },
                  { word: 'Resilience', type: 'Noun' },
                  { word: 'Eloquence', type: 'Noun' }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm border border-outline-variant/5">
                    <span className="font-bold text-on-surface">{item.word}</span>
                    <span className="text-[10px] font-bold bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded-full uppercase">{item.type}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 text-primary font-bold text-sm hover:underline">View Dictionary</button>
            </div>
          </aside>
        </div>
      </main>

      <Footer />

      {/* Decorative Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-secondary/5 rounded-full blur-[100px]"></div>
      </div>
    </div>
  );
};

export default AddVocabularyPage;
