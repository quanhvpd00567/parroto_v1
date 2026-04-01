import React, { useState } from 'react';
import { hasHtmlContent, sanitizeHtml } from '../../utils/html';
import vocabularyService from '../../services/vocabularyService';

const WriteMode = ({ word, onNext, onPrev, progress, total, onWordLearned }) => {
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState('idle'); // idle | correct | close | wrong
  const [xpEarned, setXpEarned] = useState(0);
  const [expected, setExpected] = useState('');
  const [checking, setChecking] = useState(false);
  const [correctStreak, setCorrectStreak] = useState(0);

  if (!word) return null;

  const handleCheck = async () => {
    if (!answer.trim() || checking) return;
    setChecking(true);
    try {
      const res = await vocabularyService.checkAnswer(word.id, answer);
      const d = res.data;
      setExpected(d.expected);
      if (d.correct) {
        setStatus(d.exact ? 'correct' : 'close');
        setXpEarned(d.xp_earned);
        setCorrectStreak((prev) => prev + 1);
        window.dispatchEvent(new CustomEvent('xp-update', { detail: { total_xp: d.total_xp } }));
      } else {
        setStatus('wrong');
        setXpEarned(0);
        setCorrectStreak(0);
      }
    } catch {
      setStatus('wrong');
      setXpEarned(0);
    } finally {
      setChecking(false);
    }
  };

  const handleNext = () => {
    const wasCorrect = status === 'correct' || status === 'close';
    setAnswer('');
    setStatus('idle');
    setXpEarned(0);
    setExpected('');
    onNext();
    if (wasCorrect && onWordLearned) {
      onWordLearned();
    }
  };

  const handlePrev = () => {
    setAnswer('');
    setStatus('idle');
    setXpEarned(0);
    setExpected('');
    onPrev();
  };

  const statusColor = status === 'correct' ? 'text-green-600' : status === 'close' ? 'text-amber-500' : status === 'wrong' ? 'text-error' : 'text-primary';
  const borderClass = status === 'wrong' ? 'border-error ring-2 ring-error/20' : status === 'correct' || status === 'close' ? 'border-green-400 ring-2 ring-green-200' : 'border-slate-100';

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 mb-8">
        <div className="flex items-center gap-3 md:gap-6">
          <div className="relative w-10 h-10 md:w-16 md:h-16 flex items-center justify-center shrink-0">
            <svg className="w-full h-full transform -rotate-90">
              <circle className="text-surface-container-highest" cx="50%" cy="50%" fill="transparent" r="44%" stroke="currentColor" strokeWidth="4" />
              <circle className="text-tertiary-fixed-dim" cx="50%" cy="50%" fill="transparent" r="44%" stroke="currentColor"
                strokeDasharray="176" strokeDashoffset={176 - (176 * (progress - 1)) / total} strokeWidth="4" />
            </svg>
            <span className="absolute font-headline font-bold text-[10px] md:text-sm">{progress}/{total}</span>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <h1 className="font-headline text-lg md:text-2xl font-bold tracking-tight text-on-surface">Writing Practice</h1>
              <span className="text-[9px] md:text-[10px] bg-primary-fixed text-on-primary-fixed px-2 py-0.5 rounded font-bold uppercase tracking-widest">{word.level || '—'}</span>
            </div>
            <p className="text-on-surface-variant text-[10px] md:text-sm">Translate and spell the term correctly.</p>
          </div>
        </div>
        <div className="flex gap-4">
          {correctStreak >= 3 && (
            <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
              <div>
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider leading-none">Streak</p>
                <p className="font-headline font-extrabold text-on-surface">{correctStreak} 🔥</p>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Navigation */}
      <div className="flex items-center justify-between mb-6 gap-2">
        <button onClick={handlePrev} className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 rounded-full bg-white text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-all text-xs md:text-sm font-semibold border border-slate-100">
          <span className="material-symbols-outlined text-lg">arrow_back</span> <span className="hidden sm:inline">Previous</span>
        </button>
        <div className="text-[10px] md:text-xs font-bold text-on-surface-variant/50 tracking-widest uppercase text-center flex-1">Word {progress} of {total}</div>
        <button onClick={handleNext} className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 rounded-full bg-white text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-all text-xs md:text-sm font-semibold border border-slate-100">
          <span className="hidden sm:inline">Next</span> <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Prompt Card */}
        <div className="md:col-span-12 lg:col-span-7 bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-sm border border-slate-100 relative overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-primary-fixed/10 rounded-bl-full -mr-8 -mt-8"></div>
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 md:gap-6 mb-6 md:mb-10 relative z-10">
            <div className="space-y-1 w-full order-2 sm:order-1">
              <p className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-on-surface-variant/60">Meaning</p>
              <h2 className="text-xl md:text-4xl font-bold font-headline text-on-surface break-words leading-tight">{word.definitions?.[0]?.meaning}</h2>
            </div>
            <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 w-full sm:w-auto overflow-x-auto no-scrollbar order-1 sm:order-2">
              <div className="flex items-center gap-2 md:gap-3 shrink-0">
                <span className="px-1.5 md:px-2 py-0.5 md:py-1 rounded-md bg-surface-container-high/50 text-on-surface-variant text-[9px] md:text-[10px] font-medium font-mono truncate max-w-[80px] md:max-w-none">{word.phonetic_uk || ''}</span>
                <button className="flex items-center gap-1 md:gap-1.5 px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-surface-container-low text-primary hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined text-base md:text-[18px]">volume_up</span>
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider">UK</span>
                </button>
              </div>
              <div className="flex items-center gap-2 md:gap-3 shrink-0">
                <span className="px-1.5 md:px-2 py-0.5 md:py-1 rounded-md bg-surface-container-high/50 text-on-surface-variant text-[9px] md:text-[10px] font-medium font-mono truncate max-w-[80px] md:max-w-none">{word.phonetic_us || ''}</span>
                <button className="flex items-center gap-1 md:gap-1.5 px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-surface-container-low text-primary hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined text-base md:text-[18px]">volume_up</span>
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider">US</span>
                </button>
              </div>
            </div>
          </div>
          <div className="p-4 md:p-8 bg-surface-container-low rounded-xl md:rounded-2xl border-l-4 border-primary/20 relative z-10">
            <p className="text-on-surface-variant text-[9px] md:text-xs font-bold uppercase tracking-widest mb-2 md:mb-3 opacity-60">Example sentence</p>
            {hasHtmlContent(word.definitions?.[0]?.example) ? (
              <div className="text-base md:text-xl font-headline leading-relaxed text-on-surface" dangerouslySetInnerHTML={{ __html: sanitizeHtml(word.definitions[0].example) }} />
            ) : (
              <p className="text-base md:text-xl font-headline leading-relaxed text-on-surface-variant italic">No example available</p>
            )}
          </div>
        </div>

        {/* Input Area */}
        <div className="md:col-span-12 lg:col-span-5 flex flex-col gap-4 md:gap-6">
          <div className={`bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border ${borderClass} transition-all duration-300 flex flex-col h-full`}>
            <label className="text-on-surface-variant text-[9px] md:text-xs font-bold uppercase tracking-widest mb-3 md:mb-4" htmlFor="answer">Your Answer</label>
            <div className="relative flex-grow flex flex-col justify-center">
              <input
                className={`w-full text-center text-xl md:text-4xl font-headline font-bold ${statusColor} placeholder:text-surface-container-high border-none focus:ring-0 bg-transparent py-4 md:py-8 outline-none transition-colors duration-300`}
                id="answer" placeholder="Type here..." type="text" autoComplete="off"
                value={answer}
                disabled={status === 'correct' || status === 'close'}
                onChange={(e) => { setAnswer(e.target.value); if (status === 'wrong') setStatus('idle'); }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    if (status === 'correct' || status === 'close') handleNext();
                    else handleCheck();
                  }
                }}
              />
              <div className="h-0.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                <div className={`h-full transition-all duration-500 ${status === 'correct' || status === 'close' ? 'bg-green-500 w-full' : status === 'wrong' ? 'bg-error w-full' : 'bg-tertiary-fixed-dim w-0'}`} />
              </div>
            </div>

            {/* Feedback */}
            {status === 'correct' && (
              <div className="mt-4 p-4 rounded-xl bg-green-50 text-green-700 text-center font-bold flex items-center justify-center gap-2">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                Correct! +{xpEarned} XP 💎
              </div>
            )}
            {status === 'close' && (
              <div className="mt-4 p-4 rounded-xl bg-amber-50 text-amber-700 text-center font-bold flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">spellcheck</span>
                Close enough! The exact spelling is "{expected}". +{xpEarned} XP 💎
              </div>
            )}
            {status === 'wrong' && (
              <div className="mt-4 p-4 rounded-xl bg-red-50 text-red-700 text-center font-bold flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">close</span>
                Incorrect. Try again!
              </div>
            )}

            <div className="mt-6 space-y-3">
              {status === 'correct' || status === 'close' ? (
                <button onClick={handleNext}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 md:py-5 rounded-full font-headline font-bold text-base md:text-lg shadow-xl shadow-green-500/20 hover:scale-[1.02] active:scale-95 transition-all duration-300">
                  Next Word →
                </button>
              ) : (
                <button onClick={handleCheck} disabled={checking || !answer.trim()}
                  className={`w-full ${status === 'wrong' ? 'bg-error' : 'bg-gradient-to-r from-primary to-primary-container'} text-white py-4 md:py-5 rounded-full font-headline font-bold text-base md:text-lg shadow-xl ${status === 'wrong' ? 'shadow-error/20' : 'shadow-primary/20'} hover:scale-[1.02] active:scale-95 transition-all duration-300 disabled:opacity-50`}>
                  {checking ? 'Checking...' : status === 'wrong' ? 'Try Again' : 'Check Answer'}
                </button>
              )}
            </div>
          </div>

          {/* Streak Card */}
          {correctStreak >= 3 && (
            <div className="bg-secondary/5 border border-secondary/10 rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              </div>
              <div>
                <p className="text-on-secondary-container font-headline font-bold">{correctStreak} correct in a row!</p>
                <p className="text-on-secondary-container/70 text-xs">You're on a roll, keep it up!</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Shortcuts */}
      <footer className="mt-12 flex justify-center gap-8 text-on-surface-variant/40">
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2 py-1 rounded bg-surface-container-high font-mono">ENTER</span>
          <span>to submit / next</span>
        </div>
      </footer>
    </div>
  );
};

export default WriteMode;
