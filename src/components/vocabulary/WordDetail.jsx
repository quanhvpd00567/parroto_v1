import React from 'react';

const WordDetail = ({ word, actionLoading, onAction }) => {
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
      <div className="bg-surface-container-lowest rounded-xl p-8 lg:p-12 min-h-full shadow-sm relative overflow-hidden border border-outline-variant/10">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-4">
              <h1 className="text-5xl font-extrabold tracking-tighter text-on-surface font-headline">{word.term}</h1>
              {word.level && (
                <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Level {word.level}
                </span>
              )}
            </div>
            <div className="flex gap-2">
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
              <button onClick={() => onAction?.('remove', word.id)} disabled={isLoading}
                className="p-3 rounded-full hover:bg-surface-container-low text-error transition-all disabled:opacity-50"
                title="Remove from my vocabulary">
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>

          {/* Pronunciation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low group hover:bg-surface-container-high transition-colors">
              <button onClick={() => playAudio(word.audio_us)}
                className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-lg shadow-primary/20 group-active:scale-90 transition-transform">
                <span className="material-symbols-outlined">volume_up</span>
              </button>
              <div>
                <p className="text-xs font-bold text-primary tracking-widest uppercase">US Accent</p>
                <p className="text-lg font-medium text-on-surface-variant font-body">{word.phonetic_us || '—'}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low group hover:bg-surface-container-high transition-colors">
              <button onClick={() => playAudio(word.audio_uk)}
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-on-primary shadow-lg shadow-secondary/20 group-active:scale-90 transition-transform">
                <span className="material-symbols-outlined">volume_up</span>
              </button>
              <div>
                <p className="text-xs font-bold text-secondary tracking-widest uppercase">UK Accent</p>
                <p className="text-lg font-medium text-on-surface-variant font-body">{word.phonetic_uk || '—'}</p>
              </div>
            </div>
          </div>

          {/* Definitions */}
          <div className="space-y-10">
            {word.definitions?.map((def, idx) => (
              <section key={idx}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary">
                    {def.type}
                  </span>
                  <div className="flex-1 h-px bg-outline-variant/30"></div>
                </div>
                <div className="pl-4 border-l-2 border-primary/20 space-y-6">
                  <div>
                    <p className="text-xl font-semibold text-on-surface leading-snug font-headline">{def.meaning}</p>
                    {def.explanation && (
                      <p className="text-on-surface-variant mt-2 italic font-body">{def.explanation}</p>
                    )}
                    {def.example && (
                      <div className="mt-4 p-5 rounded-2xl bg-surface-container-low flex gap-4">
                        <div>
                          <div
                            className="text-on-surface font-medium font-body"
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
            <div className="mt-16 rounded-3xl overflow-hidden relative h-64 group">
              <img alt={word.term} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={word.imageUrl} />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-8">
                <p className="text-white text-lg font-medium max-w-md font-body">
                  Visualizing '{word.term}' in a modern context helps anchor the linguistic meaning.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WordDetail;
