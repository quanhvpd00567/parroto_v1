import React from 'react';

const levelColors = {
  A1: 'bg-green-100 text-green-800',
  A2: 'bg-lime-100 text-lime-800',
  B1: 'bg-blue-100 text-blue-800',
  B2: 'bg-indigo-100 text-indigo-800',
  C1: 'bg-orange-100 text-orange-800',
  C2: 'bg-red-100 text-red-800',
};

const WordList = ({ words, activeWord, onSelectWord }) => {
  return (
    <div className="col-span-12 md:col-span-5 lg:col-span-4 space-y-6">
      <div className="space-y-3 h-[calc(100vh-20rem)] overflow-y-auto pr-2 custom-scrollbar">
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
                <p className="text-sm text-on-surface-variant font-body">{word.phonetic_us || word.phonetic_uk || ''}</p>
              </div>
              {word.level && word.level !== '—' && (
                <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase ${levelColors[word.level] || 'bg-gray-100 text-gray-600'}`}>
                  {word.level}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordList;
