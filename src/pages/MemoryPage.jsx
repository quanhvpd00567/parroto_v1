import React, { useState } from 'react';

const ClozeText = ({ original, masked }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <span
      className="cloze-text px-2 py-0.5 bg-surface-container-highest rounded-md text-on-surface-variant font-bold text-sm border border-outline-variant/20 hover:bg-primary-fixed hover:text-primary cursor-pointer transition-all duration-200"
      onClick={() => setIsRevealed(prev => !prev)}
    >
      {isRevealed ? original : masked}
    </span>
  );
};

const MemoryPage = () => {
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      {/* Top Progress Shell */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm border-b border-slate-100/50">
        <div className="max-w-screen-2xl mx-auto h-16 px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-surface-container-low rounded-full transition-all active:scale-95">
              <span className="material-symbols-outlined text-on-surface-variant">close</span>
            </button>
            <div className="hidden md:block h-6 w-[1px] bg-outline-variant/30"></div>
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 font-headline">Session</span>
              <span className="text-sm font-semibold text-primary">Advanced Phonetics: Unit 4</span>
            </div>
          </div>
          {/* Central Progress Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-[65%] bg-tertiary-fixed-dim rounded-full shadow-[0_0_8px_rgba(78,222,163,0.5)]"></div>
            </div>
            <div className="flex justify-between mt-1 px-1">
              <span className="text-[10px] font-bold text-on-tertiary-fixed-variant">65% Complete</span>
              <span className="text-[10px] font-bold text-on-surface-variant/40">Next: Quiz</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-secondary-fixed px-3 py-1 rounded-full gap-2">
              <span className="material-symbols-outlined text-secondary scale-75" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
              <span className="text-sm font-bold text-on-secondary-fixed">12 Day Streak</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="pt-24 pb-12 px-6 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Player Area */}
          <div className="lg:col-span-7 space-y-6">
            {/* Video/Audio Player Section */}
            <div className="relative group aspect-video rounded-xl overflow-hidden bg-slate-950 shadow-2xl ring-1 ring-white/10">
              <img
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                alt="Cinematic close-up of a person speaking with soft rim lighting and a blurred minimalist studio background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdzsXrXbQH-TKXh2jUrVxxV88QPmFRbB-84L9OMqcNYlQCG8XD2xuayzbPcThyGEqbdhO6ZZqT9XjuUHg2AEnGyH9wL4Ht5kGgRtITSnHxrTBUNLw1byAkiCGVjPDKbdzlnCoHCFbAXYqRw6xrEPThW1smQq5dsuAVcB73cxRHtZxsRMedJbZ_kmdSP_kJol9YJlkzfqYnMeHyUdf_LUVR8LysYT0pI6_Ubqd2QVV-rwRp_RUaFPbLSk3UZYRvoiWnACmNChCNgG_u"
              />
              {/* Player Controls Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <button className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-primary shadow-xl hover:scale-105 transition-transform active:scale-95">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                    </button>
                    <div className="text-white">
                      <p className="text-sm font-medium opacity-80">Now Playing</p>
                      <p className="font-headline font-bold">Vowel Clarification Exercise</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-white/10 backdrop-blur-md rounded-lg text-white hover:bg-white/20 transition-all">
                      <span className="material-symbols-outlined text-lg">replay_10</span>
                    </button>
                    <button className="p-2 bg-white/10 backdrop-blur-md rounded-lg text-white hover:bg-white/20 transition-all">
                      <span className="material-symbols-outlined text-lg">settings</span>
                    </button>
                  </div>
                </div>
                {/* Scrub Bar */}
                <div className="h-1 w-full bg-white/20 rounded-full cursor-pointer relative">
                  <div className="absolute top-0 left-0 h-full w-1/3 bg-primary rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Live Feedback & Shadowing Widget */}
            <div className="space-y-6">
              <div className="bg-primary text-on-primary p-8 rounded-lg shadow-2xl relative overflow-hidden">
                <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-headline text-lg font-bold">Shadowing Mode</h3>
                      <p className="text-on-primary-container text-xs font-medium">Record and match the waveform</p>
                    </div>
                    <span className="material-symbols-outlined bg-white/10 p-2 rounded-lg">mic</span>
                  </div>
                  {/* Waveform Mock */}
                  <div className="flex items-center justify-center gap-1 h-24 mb-6">
                    {[40, 60, 80, 100, 80, 60, 40, 20, 40, 60].map((opacity, idx) => (
                      <div
                        key={idx}
                        className={`w-1.5 bg-on-tertiary-container rounded-full`}
                        style={{
                          height: opacity === 100 ? '5rem' : opacity === 80 ? '4rem' : opacity === 60 ? '3rem' : opacity === 40 ? '2rem' : '1.5rem',
                          opacity: opacity / 100,
                          boxShadow: opacity === 100 ? '0 0 12px rgba(63,210,152,0.8)' : 'none'
                        }}
                      ></div>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <button className="flex items-center justify-center w-16 h-16 bg-white rounded-full text-primary shadow-xl hover:scale-105 active:scale-95 transition-all group">
                      <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">fiber_manual_record</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">Pronunciation</span>
                  <div className="flex items-end gap-2 mt-2">
                    <span className="text-3xl font-headline font-extrabold text-on-surface">94%</span>
                    <span className="text-xs font-bold text-tertiary-container mb-1">+2% vs last</span>
                  </div>
                </div>
                <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">Tempo Match</span>
                  <div className="flex items-end gap-2 mt-2">
                    <span className="text-3xl font-headline font-extrabold text-on-surface">Good</span>
                    <div className="flex gap-0.5 mb-1.5">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-surface-container-highest rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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

                {/* Phrase Item #5 */}
                <div className="p-5 bg-primary-fixed/30 border border-primary/20 rounded-lg hover:border-primary/40 transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-extrabold text-primary-container bg-primary-fixed px-2 py-1 rounded">#5</span>
                    <div className="flex gap-3">
                      <button className="text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-lg">edit_square</span>
                      </button>
                      <button className="text-on-surface-variant hover:text-error transition-colors">
                        <span className="material-symbols-outlined text-lg">report</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-x-2 gap-y-3 items-center">
                    <span className="text-base font-medium">Je</span>
                    <ClozeText original="suis" masked="****" />
                    <span className="text-base font-medium">content de</span>
                    <ClozeText original="votre" masked="*****" />
                    <span className="text-base font-medium">visite.</span>
                  </div>
                </div>

                {/* Phrase Item #6 */}
                <div className="p-5 bg-surface-container-lowest border border-outline-variant/10 rounded-lg hover:border-primary/20 transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-extrabold text-on-surface-variant/60 bg-surface-container-high px-2 py-1 rounded">#6</span>
                    <div className="flex gap-3">
                      <button className="text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-lg">edit_square</span>
                      </button>
                      <button className="text-on-surface-variant hover:text-error transition-colors">
                        <span className="material-symbols-outlined text-lg">report</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-x-2 gap-y-3 items-center">
                    <ClozeText original="Est" masked="***" />
                    <span className="text-base font-medium">-ce que</span>
                    <ClozeText original="vous" masked="****" />
                    <span className="text-base font-medium">avez des</span>
                    <ClozeText original="questions" masked="********" />
                    <span className="text-base font-medium">?</span>
                  </div>
                </div>

                {/* Phrase Item #7 */}
                <div className="p-5 bg-surface-container-lowest border border-outline-variant/10 rounded-lg hover:border-primary/20 transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-extrabold text-on-surface-variant/60 bg-surface-container-high px-2 py-1 rounded">#7</span>
                    <div className="flex gap-3">
                      <button className="text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-lg">edit_square</span>
                      </button>
                      <button className="text-on-surface-variant hover:text-error transition-colors">
                        <span className="material-symbols-outlined text-lg">report</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-x-2 gap-y-3 items-center">
                    <span className="text-base font-medium">Le</span>
                    <ClozeText original="spectacle" masked="*********" />
                    <span className="text-base font-medium">était</span>
                    <ClozeText original="vraiment" masked="********" />
                    <span className="text-base font-medium">incroyable.</span>
                  </div>
                </div>

                {/* Phrase Item #8 */}
                <div className="p-5 bg-surface-container-lowest border border-outline-variant/10 rounded-lg hover:border-primary/20 transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-extrabold text-on-surface-variant/60 bg-surface-container-high px-2 py-1 rounded">#8</span>
                    <div className="flex gap-3">
                      <button className="text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-lg">edit_square</span>
                      </button>
                      <button className="text-on-surface-variant hover:text-error transition-colors">
                        <span className="material-symbols-outlined text-lg">report</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-x-2 gap-y-3 items-center">
                    <span className="text-base font-medium">Nous</span>
                    <ClozeText original="devons" masked="******" />
                    <span className="text-base font-medium">partir</span>
                    <ClozeText original="tout" masked="****" />
                    <span className="text-base font-medium">de suite.</span>
                  </div>
                </div>

                {/* Phrase Item #9 */}
                <div className="p-5 bg-surface-container-lowest border border-outline-variant/10 rounded-lg hover:border-primary/20 transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-extrabold text-on-surface-variant/60 bg-surface-container-high px-2 py-1 rounded">#9</span>
                    <div className="flex gap-3">
                      <button className="text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-lg">edit_square</span>
                      </button>
                      <button className="text-on-surface-variant hover:text-error transition-colors">
                        <span className="material-symbols-outlined text-lg">report</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-x-2 gap-y-3 items-center">
                    <span className="text-base font-medium">Il</span>
                    <ClozeText original="fait" masked="****" />
                    <span className="text-base font-medium">beau</span>
                    <ClozeText original="aujourd'hui" masked="***********" />
                  </div>
                </div>
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

      {/* Contextual Focus Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 px-6 py-4 bg-white/80 backdrop-blur-xl rounded-full shadow-2xl border border-white/50 z-40">
        <button className="flex items-center gap-2 px-4 py-2 text-on-surface-variant font-bold text-sm hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-lg">skip_previous</span>
          Previous
        </button>
        <div className="w-[1px] h-6 bg-outline-variant/30 my-auto"></div>
        <button className="flex items-center gap-2 px-6 py-2 bg-primary text-on-primary rounded-full font-bold text-sm hover:opacity-90 active:scale-95 transition-all">
          Next Lesson
          <span className="material-symbols-outlined text-lg">keyboard_arrow_right</span>
        </button>
      </div>

      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30vw] h-[30vw] bg-tertiary-fixed-dim/5 rounded-full blur-[100px]"></div>
      </div>
    </div>
  );
};

export default MemoryPage;
