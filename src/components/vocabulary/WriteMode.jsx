import React, { useState } from 'react';

const WriteMode = ({ word, onNext, onPrev, progress, total, streak = 14, accuracy = 94 }) => {
  const [answer, setAnswer] = useState('');
  const [isError, setIsError] = useState(false);

  if (!word) return null;

  const handleCheck = () => {
    if (answer.trim().toLowerCase() === word.term.toLowerCase()) {
      onNext();
      setAnswer('');
      setIsError(false);
    } else {
      setIsError(true);
      // Reset error after animation
      setTimeout(() => setIsError(false), 500);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Header Section: Progress & Stats */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-6">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle className="text-surface-container-highest" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="4"></circle>
              <circle
                className="text-tertiary-fixed-dim"
                cx="32" cy="32" fill="transparent" r="28" stroke="currentColor"
                strokeDasharray="176"
                strokeDashoffset={176 - (176 * (progress - 1)) / total}
                strokeWidth="4"
              ></circle>
            </svg>
            <span className="absolute font-headline font-bold text-sm">{progress}/{total}</span>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <h1 className="font-headline text-2xl font-bold tracking-tight text-on-surface">Writing Practice</h1>
              <span className="text-[10px] bg-primary-fixed text-on-primary-fixed px-2 py-0.5 rounded font-bold uppercase tracking-widest">{word.level || 'Advanced'}</span>
            </div>
            <p className="text-on-surface-variant text-sm">Translate and spell the term correctly.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
            <div>
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider leading-none">Streak</p>
              <p className="font-headline font-extrabold text-on-surface">{streak} Days</p>
            </div>
          </div>
          <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
            <span className="material-symbols-outlined text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            <div>
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider leading-none">Accuracy</p>
              <p className="font-headline font-extrabold text-on-surface">{accuracy}%</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onPrev}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-all text-sm font-semibold border border-slate-100 hover:border-primary/10"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Previous
        </button>
        <div className="text-xs font-bold text-on-surface-variant/50 tracking-widest uppercase">Word {progress} of {total}</div>
        <button
          onClick={onNext}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-all text-sm font-semibold border border-slate-100 hover:border-primary/10"
        >
          Next
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </button>
      </div>

      {/* Learning Canvas: Bento Style */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Simplified Prompt Card */}
        <div className="md:col-span-12 lg:col-span-7 bg-white rounded-2xl p-8 shadow-sm border border-slate-100 relative overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed/10 rounded-bl-full -mr-8 -mt-8"></div>
          <div className="flex justify-between items-start mb-10 relative z-10">
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60">Meaning</p>
              <h2 className="text-4xl font-bold font-headline text-on-surface">{word.definitions?.[0]?.meaning}</h2>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-3">
                <span className="px-2 py-1 rounded-md bg-surface-container-high/50 text-on-surface-variant text-[10px] font-medium font-mono tracking-wide">{word.phonetic_uk || ''}</span>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low text-primary hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[18px]">volume_up</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider">UK</span>
                </button>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-2 py-1 rounded-md bg-surface-container-high/50 text-on-surface-variant text-[10px] font-medium font-mono tracking-wide">{word.phonetic_us || ''}</span>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low text-primary hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[18px]">volume_up</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider">US</span>
                </button>
              </div>
            </div>
          </div>
          <div className="p-8 bg-surface-container-low rounded-2xl border-l-4 border-primary/20 relative z-10">
            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-3 opacity-60">Example sentence</p>
            <p className="text-xl font-headline leading-relaxed text-on-surface">
              {word.definitions?.[0]?.example.split(/(<span.*?>.*?<\/span>)/g).map((part, i) => {
                if (part.startsWith('<span')) {
                  const match = part.match(/<span class="(.*?)">(.*?)<\/span>/);
                  if (match) return <span key={i} className={match[1]}>{match[2]}</span>;
                }
                return part;
              })}
            </p>
          </div>
        </div>

        {/* Input & Action Area */}
        <div className="md:col-span-12 lg:col-span-5 flex flex-col gap-6">
          {/* Write Card */}
          <div className={`bg-white rounded-2xl p-8 shadow-sm border ${isError ? 'border-error ring-2 ring-error/20' : 'border-slate-100'} transition-all duration-300 flex flex-col h-full ${isError ? 'animate-shake' : ''}`}>
            <label className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-4" htmlFor="answer">Your Answer</label>
            <div className="relative flex-grow flex flex-col justify-center">
              <input
                className={`w-full text-center text-4xl font-headline font-bold ${isError ? 'text-error' : 'text-primary'} placeholder:text-surface-container-high border-none focus:ring-0 bg-transparent py-8 outline-none transition-colors duration-300`}
                id="answer"
                placeholder="Type here..."
                type="text"
                autoComplete="off"
                value={answer}
                onChange={(e) => {
                  setAnswer(e.target.value);
                  if (isError) setIsError(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleCheck();
                  }
                }}
              />
              <div className="h-0.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                <div
                  className={`h-full ${isError ? 'bg-error' : 'bg-tertiary-fixed-dim'} transition-all duration-500 ${answer.toLowerCase() === word.term.toLowerCase() ? 'w-full' : 'w-0'}`}
                ></div>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <button
                className={`w-full ${isError ? 'bg-error' : 'bg-gradient-to-r from-primary to-primary-container'} text-white py-5 rounded-full font-headline font-bold text-lg shadow-xl ${isError ? 'shadow-error/20' : 'shadow-primary/20'} hover:scale-[1.02] active:scale-95 transition-all duration-300`}
                onClick={handleCheck}
              >
                {isError ? 'Try Again' : 'Check Answer'}
              </button>
              <button className="w-full text-on-surface-variant py-3 font-medium text-sm hover:text-primary transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">lightbulb</span>
                Show Hint
              </button>
            </div>
          </div>

          {/* Mini Streak Card */}
          <div className="bg-secondary/5 border border-secondary/10 rounded-2xl p-6 flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-container">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            </div>
            <div>
              <p className="text-on-secondary-container font-headline font-bold">5 correct in a row!</p>
              <p className="text-on-secondary-container/70 text-xs">You're on a roll, keep it up!</p>
            </div>
            <div className="ml-auto text-secondary font-extrabold font-headline">+50 XP</div>
          </div>
        </div>
      </div>

      {/* Footer / Shortcuts */}
      <footer className="mt-12 flex justify-center gap-8 text-on-surface-variant/40">
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2 py-1 rounded bg-surface-container-high font-mono">ENTER</span>
          <span>to submit</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2 py-1 rounded bg-surface-container-high font-mono">SPACE</span>
          <span>to replay audio</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2 py-1 rounded bg-surface-container-high font-mono">ALT+H</span>
          <span>for hint</span>
        </div>
      </footer>
    </div>
  );
};

export default WriteMode;
