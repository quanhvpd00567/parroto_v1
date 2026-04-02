import React from 'react';
import TopNav from '../components/memory/TopNav';
import PlayerArea from '../components/memory/PlayerArea';
import BottomNav from '../components/memory/BottomNav';
import MaskedSentence from '../components/memory/MaskedSentence';

const MemoryPage = () => {
  const phrases = [
    "Je suis content de votre visite.",
    "Est-ce que vous avez des questions ?",
    "Le spectacle était vraiment incroyable.",
    "Nous devons partir tout de suite.",
    "Il fait beau aujourd'hui"
  ];

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      <TopNav />

      {/* Main Content Canvas */}
      <main className="pt-24 pb-12 px-6 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          <PlayerArea />

          {/* Shadowing Content Area */}
          <div className="lg:col-span-5 flex flex-col h-[calc(100vh-160px)] sticky top-24">
            <div className="bg-surface-container-lowest rounded-lg shadow-sm border border-outline-variant/10 flex flex-col h-full overflow-hidden">
              {/* Tabs */}
              <div className="flex gap-8 px-8 pt-6 border-b border-surface-container-high">
                <button className="relative pb-4 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors">
                  Dictation
                </button>
                <button className="relative pb-4 text-sm font-bold text-primary group">
                  Shadowing
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full"></div>
                </button>
                <button className="relative pb-4 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors">
                  Vocabulary
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 custom-scrollbar space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-headline text-lg font-bold text-on-surface">Shadowing Phrases</h2>
                  <div className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full text-xs font-bold">
                    0% Match
                  </div>
                </div>

                {/* Render Phrase Items */}
                {phrases.map((phrase, index) => {
                  const phraseNum = index + 5;
                  const isFirst = index === 0;
                  const containerClasses = isFirst
                    ? "p-5 bg-primary-fixed/30 border border-primary/20 rounded-lg hover:border-primary/40 transition-all"
                    : "p-5 bg-surface-container-lowest border border-outline-variant/10 rounded-lg hover:border-primary/20 transition-all";
                  const badgeClasses = isFirst
                    ? "text-xs font-extrabold text-primary-container bg-primary-fixed px-2 py-1 rounded"
                    : "text-xs font-extrabold text-on-surface-variant/60 bg-surface-container-high px-2 py-1 rounded";

                  return (
                    <div key={index} className={containerClasses}>
                      <div className="flex justify-between items-start mb-3">
                        <span className={badgeClasses}>#{phraseNum}</span>
                        <div className="flex gap-3">
                          <button className="text-on-surface-variant hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-lg">edit_square</span>
                          </button>
                          <button className="text-on-surface-variant hover:text-error transition-colors">
                            <span className="material-symbols-outlined text-lg">report</span>
                          </button>
                        </div>
                      </div>
                      <MaskedSentence sentence={phrase} />
                    </div>
                  );
                })}
              </div>

              {/* Live Feedback Sidebar Section */}
              <div className="p-6 bg-surface-container-low border-t border-outline-variant/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-primary-fixed flex items-center justify-center">
                    <img
                      className="w-full h-full object-cover"
                      alt="Close-up portrait of a male language instructor with a kind smile"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA05zWD0zkRE2vo105GfAj4ee9hm-RK-G1W_eQmAe2tciM5vqHpdwVtQPW7G9yky5DFmzj0EPE8QZZ7eDOFJvK7-Ky9qZyksYcsbBuijkzcSFpCpkb44qx9L-Iaxj5NdOpzNMCqGHMr_wC9jrSwBhOOkb05flf8nG3FaSeN1flT5tUsyWcKDDtCiEwfVGPttc7hN_fofO8IKVgQCGnZ3ZK17dPygLnlpG9uJtAMqDQUUeaEX9Z0Jjl40ccTm248kQJHtSfCTpkNz_CA"
                    />
                  </div>
                  <p className="text-xs font-bold text-on-surface">Tutor Insight: Tap asterisks to reveal keywords.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />

      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30vw] h-[30vw] bg-tertiary-fixed-dim/5 rounded-full blur-[100px]"></div>
      </div>
    </div>
  );
};

export default MemoryPage;
