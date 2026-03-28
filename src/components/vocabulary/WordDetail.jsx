import React, { useState } from 'react';
import ShareModal from './ShareModal';
import { hasHtmlContent } from '../../utils/html';

const WordDetail = ({ word, actionLoading, onAction }) => {
  const [showShareModal, setShowShareModal] = useState(false);
  if (!word) return (
    <div className="col-span-12 md:col-span-7 lg:col-span-8 flex items-center justify-center bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 min-h-[400px]">
      <p className="text-slate-500 font-medium">Select a word to view details</p>
    </div>
  );

  const playAudio = (url) => {
    if (!url) return;
    const audio = new Audio(url);
    audio.play().catch(() => {});
  };

  const isLoading = actionLoading === word.id;

  return (
    <div className="col-span-12 md:col-span-7 lg:col-span-8">
      <div className="bg-surface-container-lowest rounded-xl p-5 md:p-8 lg:p-12 min-h-full shadow-sm relative overflow-hidden border border-outline-variant/10">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 md:mb-12">
            <div className="flex items-center gap-4 flex-wrap">
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-on-surface font-headline">{word.term}</h1>
              {word.level && (
                <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest">
                  Level {word.level}
                </span>
              )}
            </div>
            <div className="flex gap-2 flex-wrap">
              <button onClick={() => onAction?.('favorite', word.id)} disabled={isLoading}
                className="p-3 rounded-full hover:bg-surface-container-low transition-all disabled:opacity-50"
                title={word.is_favorite ? 'Remove from favorites' : 'Add to favorites'}>
                <span className={`material-symbols-outlined ${word.is_favorite ? 'text-amber-500' : 'text-outline'}`}
                  style={word.is_favorite ? { fontVariationSettings: "'FILL' 1" } : {}}>star</span>
              </button>
              <button onClick={() => onAction?.('learned', word.id)} disabled={isLoading}
                className="p-3 rounded-full hover:bg-surface-container-low text-green-600 transition-all disabled:opacity-50"
                title="Mark as learned">
                <span className="material-symbols-outlined">check_circle</span>
              </button>
              <button
                onClick={() => setShowShareModal(true)}
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-surface-container-low text-outline hover:text-blue-600 hover:bg-blue-50 transition-all group"
              >
                <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">share</span>
              </button>
              <button onClick={() => onAction?.('remove', word.id)} disabled={isLoading}
                className="p-3 rounded-full hover:bg-surface-container-low text-error transition-all disabled:opacity-50"
                title="Remove from my vocabulary">
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>

          {/* Pronunciation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-12">
            <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-2xl bg-surface-container-low group hover:bg-surface-container-high transition-colors">
              <button onClick={() => playAudio(word.audio_us)}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-lg shadow-primary/20 group-active:scale-90 transition-transform shrink-0">
                <span className="material-symbols-outlined text-xl md:text-2xl">volume_up</span>
              </button>
              <div className="min-w-0">
                <p className="text-[10px] md:text-xs font-bold text-primary tracking-widest uppercase truncate">US Accent</p>
                <p className="text-base md:text-lg font-medium text-on-surface-variant font-body truncate">{word.phonetic_us || '—'}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-2xl bg-surface-container-low group hover:bg-surface-container-high transition-colors">
              <button onClick={() => playAudio(word.audio_uk)}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary flex items-center justify-center text-on-primary shadow-lg shadow-secondary/20 group-active:scale-90 transition-transform shrink-0">
                <span className="material-symbols-outlined text-xl md:text-2xl">volume_up</span>
              </button>
              <div className="min-w-0">
                <p className="text-[10px] md:text-xs font-bold text-secondary tracking-widest uppercase truncate">UK Accent</p>
                <p className="text-base md:text-lg font-medium text-on-surface-variant font-body truncate">{word.phonetic_uk || '—'}</p>
              </div>
            </div>
          </div>

          {/* Definitions */}
          <div className="space-y-8 md:space-y-10">
            {word.definitions?.map((def, idx) => (
              <section key={idx}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 md:px-4 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary whitespace-nowrap">
                    {def.type}
                  </span>
                  <div className="flex-1 h-px bg-outline-variant/30"></div>
                </div>
                <div className="pl-3 md:pl-4 border-l-2 border-primary/20 space-y-4 md:space-y-6">
                  <div>
                    <p className="text-lg md:text-xl font-semibold text-on-surface leading-snug font-headline">{def.meaning}</p>
                    {def.explanation && (
                      <p className="text-sm md:text-on-surface-variant mt-2 italic font-body">{def.explanation}</p>
                    )}
                    {hasHtmlContent(def.example) && (
                      <div className="mt-4 p-4 md:p-5 rounded-2xl bg-surface-container-low flex gap-4">
                        <div className="w-full">
                          <div
                            className="text-sm md:text-base text-on-surface font-medium font-body"
                            dangerouslySetInnerHTML={{ __html: def.example }}
                          />
                          {def.exampleTranslation && (
                            <p className="text-sm text-on-surface-variant mt-1 font-body">{def.exampleTranslation}</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Image */}
          {word.imageUrl && (
            <div className="mt-12 md:mt-16 rounded-3xl overflow-hidden relative h-48 md:h-64 group">
              <img alt={word.term} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={word.imageUrl} />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-5 md:p-8">
                <p className="text-white text-sm md:text-lg font-medium max-w-md font-body">
                  Visualizing '{word.term}' in a modern context helps anchor the linguistic meaning.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {showShareModal && (
        <ShareModal
          word={word}
          onClose={() => setShowShareModal(false)}
        />
      )}
    </div>
  );
};

export default WordDetail;
