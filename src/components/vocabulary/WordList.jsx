import React from 'react';

const WordList = ({ words, activeWord, onSelectWord }) => {
  return (
    <div className="col-span-12 md:col-span-5 lg:col-span-4 space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-extrabold tracking-tight font-headline text-on-surface">My Vocabulary</h1>
        <button className="bg-primary text-on-primary px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-sm">add</span>
          NEW WORD
        </button>
      </div>
      <div className="space-y-3 h-[calc(100vh-16rem)] overflow-y-auto pr-2 custom-scrollbar">
        {words.map((word) => (
          <div
            key={word.id}
            onClick={() => onSelectWord(word)}
            className={`p-5 rounded-2xl transition-all cursor-pointer border-l-4 ${
              activeWord?.id === word.id
                ? 'bg-surface-container-lowest shadow-sm border-primary'
                : 'bg-surface-container-low hover:bg-surface-container-high border-transparent'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className={`text-lg font-bold ${activeWord?.id === word.id ? 'text-primary' : 'text-on-surface'}`}>
                  {word.term}
                </h3>
                <p className="text-sm text-on-surface-variant font-body">{word.phonetic}</p>
              </div>
              <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase ${
                word.level === 'A1' ? 'bg-primary-fixed text-on-primary-fixed-variant' :
                word.level === 'B2' ? 'bg-tertiary-fixed text-on-tertiary-fixed-variant' :
                'bg-secondary-fixed text-on-secondary-fixed-variant'
              }`}>
                {word.level}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordList;
