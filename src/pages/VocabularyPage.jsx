import React, { useState, useMemo } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import WordList from '../components/vocabulary/WordList';
import WordDetail from '../components/vocabulary/WordDetail';
import FlashcardMode from '../components/vocabulary/FlashcardMode';
import WriteMode from '../components/vocabulary/WriteMode';

const MOCK_WORDS = [
  {
    id: 1,
    term: 'work',
    phonetic: '/wə:k/',
    level: 'A1',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyyNW0RicgmB60kjjzILc660jgqjKHaZru8RR3mG-WGr8ckJve1RU0PeZYAnTv6JCNJ9E7gy3_hzNkRe3jyA3Uo1Pc6E-esVwtbvxxPEh1X6tAmyl8xruIKR2pMk2-_8jXMW83_bQTYiIN3qt400pHRbQ6PanUMs5ENrEcQTZNLRrz_nm5h28eClnWtap3ppdXq5hA8OIG1Qj0sLX5Q8QRkNVUECy9XoUHGr3R8Bxk8sQhKan_w1CRxxROlWYEixwUgvStotE21iG-',
    definitions: [
      {
        type: 'Danh từ',
        meaning: 'Công việc, việc làm',
        explanation: 'Activity involving mental or physical effort done in order to achieve a purpose or result.',
        example: 'He is looking for <span class="text-primary font-bold">work</span>.',
        exampleTranslation: 'Anh ấy đang tìm kiếm công việc.'
      },
      {
        type: 'Động từ',
        meaning: 'Làm việc, lao động',
        explanation: 'Be engaged in physical or mental activity in order to achieve a result.',
        example: 'I <span class="text-secondary font-bold">work</span> at a bank.',
        exampleTranslation: 'Tôi làm việc tại một ngân hàng.'
      }
    ]
  },
  {
    id: 2,
    term: 'efficient',
    phonetic: '/ɪˈfɪʃ.ənt/',
    level: 'B2',
    definitions: [
      {
        type: 'Adjective',
        meaning: 'Hiệu quả',
        explanation: 'Achieving maximum productivity with minimum wasted effort or expense.',
        example: 'We need to be more <span class="text-primary font-bold">efficient</span>.',
        exampleTranslation: 'Chúng ta cần phải làm việc hiệu quả hơn.'
      }
    ]
  },
  {
    id: 3,
    term: 'sustainable',
    phonetic: '/səˈsteɪ.nə.bəl/',
    level: 'C1',
    definitions: [
      {
        type: 'Adjective',
        meaning: 'Bền vững',
        explanation: 'Able to be maintained at a certain rate or level.',
        example: 'The growth is <span class="text-primary font-bold">sustainable</span>.',
        exampleTranslation: 'Sự tăng trưởng này là bền vững.'
      }
    ]
  },
  {
    id: 4,
    term: 'thrive',
    phonetic: '/θraɪv/',
    level: 'C1',
    definitions: [
      {
        type: 'Verb',
        meaning: 'Phát triển mạnh',
        explanation: 'Prosper; flourish.',
        example: 'The company continues to <span class="text-primary font-bold">thrive</span>.',
        exampleTranslation: 'Công ty tiếp tục phát triển mạnh mẽ.'
      }
    ]
  }
];

const VocabularyPage = () => {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [studyMode, setStudyMode] = useState('list');

  const activeWord = useMemo(() => MOCK_WORDS[activeWordIndex], [activeWordIndex]);

  const handleNext = () => {
    setActiveWordIndex((prev) => (prev + 1) % MOCK_WORDS.length);
  };

  const handlePrev = () => {
    setActiveWordIndex((prev) => (prev - 1 + MOCK_WORDS.length) % MOCK_WORDS.length);
  };

  const renderContent = () => {
    switch (studyMode) {
      case 'flashcard':
        return (
          <FlashcardMode
            key={activeWord.id}
            word={activeWord}
            onNext={handleNext}
            onPrev={handlePrev}
            progress={activeWordIndex + 1}
            total={MOCK_WORDS.length}
          />
        );
      case 'write':
        return (
          <WriteMode
            key={activeWord.id}
            word={activeWord}
            onNext={handleNext}
            onPrev={handlePrev}
            progress={activeWordIndex + 1}
            total={MOCK_WORDS.length}
          />
        );
      case 'list':
      default:
        return (
          <div className="grid grid-cols-12 gap-8 w-full">
            <WordList
              words={MOCK_WORDS}
              activeWord={activeWord}
              onSelectWord={(word) => setActiveWordIndex(MOCK_WORDS.indexOf(word))}
            />
            <WordDetail word={activeWord} />
          </div>
        );
    }
  };

  return (
    <DashboardLayout hideSidebar={true}>
      <div className="min-h-screen bg-background p-8 md:p-12">
        <main className="max-w-7xl mx-auto">
          {/* Header & Mode Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6 border-b border-outline-variant/20 pb-6 w-full">
            <div className="space-y-1">
              <h1 className="text-3xl font-extrabold tracking-tight text-on-surface font-headline">My Vocabulary</h1>
              <div className="text-xs font-bold text-outline uppercase tracking-wider">
                {studyMode === 'list' ? `${MOCK_WORDS.length} words total` : 'Mastery Session'}
              </div>
            </div>
            <div className="flex items-center gap-2 bg-surface-container-low p-1.5 rounded-2xl w-fit shadow-sm">
              <button
                onClick={() => setStudyMode('list')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  studyMode === 'list'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                <span className={`material-symbols-outlined text-lg ${studyMode === 'list' ? 'filled' : ''}`}>list_alt</span>
                <span>List</span>
              </button>
              <button
                onClick={() => setStudyMode('flashcard')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  studyMode === 'flashcard'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                <span className={`material-symbols-outlined text-lg ${studyMode === 'flashcard' ? 'filled' : ''}`}>style</span>
                <span>Flashcard</span>
              </button>
              <button
                onClick={() => setStudyMode('write')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  studyMode === 'write'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                <span className={`material-symbols-outlined text-lg ${studyMode === 'write' ? 'filled' : ''}`}>edit_note</span>
                <span>Write</span>
              </button>
            </div>
          </div>

          <div>
            {renderContent()}
          </div>
        </main>
      </div>

      {/* Mobile Navigation Placeholder for design consistency if needed, but DashboardLayout handles it */}
      {/* FAB for quick action (only on mobile) */}
      <button className="md:hidden fixed bottom-20 right-8 w-16 h-16 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center z-50 hover:scale-105 active:scale-95 transition-all">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </DashboardLayout>
  );
};

export default VocabularyPage;
