import React from 'react';

const LearningWorkspace = () => {
  return (
    <div className="bg-surface-container-lowest rounded-lg p-8 shadow-sm border border-outline-variant/10">
      <div className="flex gap-8 mb-8 border-b border-surface-container-high pb-4">
        <button className="relative pb-4 text-sm font-bold text-primary group">
          Dictation
          <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full"></div>
        </button>
        <button className="relative pb-4 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors">
          Shadowing
        </button>
        <button className="relative pb-4 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors">
          Vocabulary
        </button>
      </div>
      {/* Dictation Content */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="font-headline text-xl font-bold text-on-surface">Transcribe the Phrase</h2>
          <span className="text-xs font-bold text-primary bg-primary-fixed px-3 py-1 rounded-full uppercase tracking-tighter">Level: Intermediate</span>
        </div>
        <div className="relative group">
          <textarea
            className="w-full bg-surface-container-low border-none rounded-lg p-6 text-lg font-medium text-on-surface focus:ring-2 focus:ring-primary/20 transition-all min-h-[160px] placeholder:text-on-surface-variant/30 custom-scrollbar"
            placeholder="Start typing what you hear..."
          ></textarea>
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button className="p-3 bg-primary text-white rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all">
              <span className="material-symbols-outlined">auto_fix_high</span>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-high text-on-primary-fixed-variant rounded-full text-sm font-bold hover:bg-surface-container-highest transition-colors active:scale-95">
              <span className="material-symbols-outlined text-lg">volume_up</span>
              Hear Again
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-high text-on-primary-fixed-variant rounded-full text-sm font-bold hover:bg-surface-container-highest transition-colors active:scale-95">
              <span className="material-symbols-outlined text-lg">lightbulb</span>
              Get Hint
            </button>
          </div>
          <button className="px-10 py-3 bg-gradient-to-r from-primary to-primary-container text-white rounded-full font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
            Check Answer
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearningWorkspace;
