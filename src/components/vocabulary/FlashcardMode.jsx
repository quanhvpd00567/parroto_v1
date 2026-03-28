import React, { useState } from 'react';
import { hasHtmlContent } from '../../utils/html';

const FlashcardMode = ({ word, onNext, onPrev, progress, total }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  if (!word) return null;

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      {/* Session Progress Section */}
      <div className="w-full mb-6 flex flex-col items-center text-center mt-4">
        <div className="w-full max-w-md">
          <div className="flex justify-between items-end mb-2">
            <span className="text-on-surface-variant font-medium text-xs">Session Progress</span>
            <span className="text-primary font-headline font-bold text-base">
              {progress}
              <span className="text-on-surface-variant/40 font-normal">/{total}</span>
            </span>
          </div>
          <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
            <div
              className="h-full bg-tertiary-fixed-dim shadow-[inset_0_0_8px_rgba(78,222,163,0.4)] rounded-full transition-all duration-500"
              style={{ width: `${(progress / total) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Flashcard Interface with Navigation */}
      <div className="flex items-center gap-2 md:gap-6 w-full justify-center px-2">
        {/* Prev Button */}
        <button
          onClick={onPrev}
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant hover:bg-primary hover:text-white transition-all duration-300 active:scale-90 shadow-sm shrink-0"
        >
          <span className="material-symbols-outlined text-xl md:text-2xl">arrow_back</span>
        </button>

        {/* Main Card Container */}
        <div
          className="relative w-full max-w-xl aspect-[0.8/1] sm:aspect-[1.4/1] group cursor-pointer perspective-1000"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Background Layering for Depth */}
          <div className="absolute -inset-2 md:-inset-3 bg-surface-container-low rounded-[1.5rem] md:rounded-[2.5rem] -rotate-1 scale-102 opacity-50"></div>
          <div className="absolute -inset-0.5 md:-inset-1 bg-surface-container-low rounded-[1.5rem] md:rounded-[2.5rem] rotate-1 scale-101 opacity-80"></div>

          {/* Card Inner with 3D Transform */}
          <div className={`relative h-full w-full transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>

            {/* Front Face */}
            <div className="absolute inset-0 h-full w-full bg-surface-container-lowest rounded-[1.5rem] md:rounded-[2.5rem] ambient-shadow flex flex-col items-center justify-center p-4 md:p-8 border border-outline-variant/15 overflow-hidden backface-hidden">
              {/* Card Actions (Top Right) */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 flex gap-2">
                <button
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant"
                  onClick={(e) => { e.stopPropagation(); /* Logic for star could go here */ }}
                >
                  <span className="material-symbols-outlined text-xl md:text-2xl">star</span>
                </button>
              </div>

              {/* Content */}
              <div className="text-center w-full">
                <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-surface-container-high text-on-primary-fixed-variant rounded-full text-[9px] md:text-[10px] font-bold font-headline mb-3 md:mb-4 tracking-wide uppercase">
                  {word.definitions?.[0]?.type || 'WORD'}
                </span>
                <h2 className="text-2xl md:text-6xl font-headline font-extrabold text-primary mb-2 md:mb-3 tracking-tighter break-words">{word.term}</h2>
                <div className="flex justify-center gap-3 md:gap-4 mt-1 md:mt-4">
                  <div className="flex flex-col gap-1.5 md:gap-2 items-center w-full">
                    <div className="flex items-center gap-2 md:gap-3">
                      <button
                        className="flex items-center gap-1.5 md:gap-2 px-2 py-1 md:px-3 md:py-1.5 rounded-full bg-surface-container-high hover:bg-primary-fixed transition-colors group/audio"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="material-symbols-outlined text-[14px] md:text-base text-primary group-hover/audio:scale-110 transition-transform">volume_up</span>
                        <span className="text-[8px] md:text-[10px] font-bold font-headline text-on-surface-variant group-hover/audio:text-primary">UK</span>
                      </button>
                      <span className="text-[8px] md:text-[10px] font-mono text-on-surface-variant/60 truncate max-w-[100px] md:max-w-none">{word.phonetic_uk || ''}</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3">
                      <button
                        className="flex items-center gap-1.5 md:gap-2 px-2 py-1 md:px-3 md:py-1.5 rounded-full bg-surface-container-high hover:bg-primary-fixed transition-colors group/audio"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="material-symbols-outlined text-[14px] md:text-base text-primary group-hover/audio:scale-110 transition-transform">volume_up</span>
                        <span className="text-[8px] md:text-[10px] font-bold font-headline text-on-surface-variant group-hover/audio:text-primary">US</span>
                      </button>
                      <span className="text-[8px] md:text-[10px] font-mono text-on-surface-variant/60 truncate max-w-[100px] md:max-w-none">{word.phonetic_us || ''}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Flip Hint */}
              <div className="absolute bottom-8 flex flex-col items-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-2xl">touch_app</span>
                <span className="text-[9px] font-bold tracking-widest uppercase">Click to flip</span>
              </div>
            </div>

            {/* Back Face */}
            <div className="absolute inset-0 h-full w-full bg-surface-container-lowest rounded-[1.5rem] md:rounded-[2.5rem] ambient-shadow flex flex-col items-center justify-center p-6 md:p-8 border border-outline-variant/15 overflow-hidden backface-hidden rotate-y-180">
              <div className="text-center px-4 md:px-6">
                <h3 className="text-xl md:text-3xl font-headline font-bold text-primary mb-3 md:mb-4">{word.definitions?.[0]?.meaning}</h3>
                <p className="text-on-surface-variant text-sm md:text-base italic leading-relaxed">{word.definitions?.[0]?.explanation}</p>
              </div>

              {/* Flip Hint */}
              <div className="absolute bottom-6 md:bottom-8 flex flex-col items-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-xl md:text-2xl">touch_app</span>
                <span className="text-[8px] md:text-[9px] font-bold tracking-widest uppercase whitespace-nowrap">Click to flip</span>
              </div>
            </div>

          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant hover:bg-primary hover:text-white transition-all duration-300 active:scale-90 shadow-sm shrink-0"
        >
          <span className="material-symbols-outlined text-xl md:text-2xl">arrow_forward</span>
        </button>
      </div>

      {/* Control Buttons */}
      <div className="mt-8 md:mt-10 flex items-center gap-4 md:gap-8">
        <button className="group flex flex-col items-center gap-2 md:gap-3">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-error-container/30 flex items-center justify-center text-error group-hover:bg-error group-hover:text-white transition-all duration-300 group-active:scale-95">
            <span className="material-symbols-outlined text-xl md:text-2xl">refresh</span>
          </div>
          <span className="text-[8px] md:text-[10px] font-headline font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-error transition-colors text-center">Review again</span>
        </button>
        <button
          className="group flex flex-col items-center gap-2 md:gap-3"
          onClick={onNext}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary to-primary-container p-[2px] md:p-[3px] shadow-lg group-hover:shadow-2xl transition-all duration-300 group-active:scale-95">
            <div className="w-full h-full rounded-full bg-background group-hover:bg-transparent flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-primary group-hover:text-white transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
          </div>
          <span className="text-[8px] md:text-[10px] font-headline font-bold uppercase tracking-widest text-primary text-center">I know this</span>
        </button>
        <button className="group flex flex-col items-center gap-2 md:gap-3">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant group-hover:bg-secondary group-hover:text-white transition-all duration-300 group-active:scale-95">
            <span className="material-symbols-outlined text-xl md:text-2xl">lightbulb</span>
          </div>
          <span className="text-[8px] md:text-[10px] font-headline font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-secondary transition-colors text-center">Get Hint</span>
        </button>
      </div>

      {/* Hint / Context Card (Secondary Content) */}
      <div className="w-full max-w-4xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
          <div className="flex items-center gap-3 mb-3">
            <span className="material-symbols-outlined text-secondary text-xl">menu_book</span>
            <h4 className="font-headline font-bold text-on-surface text-sm">Usage Example</h4>
          </div>
          <div
            className="text-on-surface-variant text-sm italic leading-relaxed"
            dangerouslySetInnerHTML={{ __html: hasHtmlContent(word.definitions?.[0]?.example) ? word.definitions[0].example : '<em>No example available</em>' }}
          />
        </div>
        <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
          <div className="flex items-center gap-3 mb-3">
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
            <h4 className="font-headline font-bold text-on-surface text-sm">Mnemonic Aid</h4>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            {word.mnemonic ? (
              word.mnemonic
            ) : (
              <>
                Focus on the pattern of <span className="text-primary font-bold">"{word.term}"</span> and its unique pronunciation to build a mental bridge for better recall.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlashcardMode;
