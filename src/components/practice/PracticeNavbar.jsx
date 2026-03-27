import React from 'react';

const PracticeNavbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm">
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
      <div className="bg-slate-100/50 h-[1px] w-full absolute bottom-0"></div>
    </nav>
  );
};

export default PracticeNavbar;
