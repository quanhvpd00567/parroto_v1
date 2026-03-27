import React, { useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import WordList from '../components/vocabulary/WordList';
import WordDetail from '../components/vocabulary/WordDetail';

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
  const [activeWord, setActiveWord] = useState(MOCK_WORDS[0]);
  const [studyMode, setStudyMode] = useState('list');

  return (
    <DashboardLayout hideSidebar={true}>
      <div className="min-h-[calc(100vh-8rem)] w-full">
        <div className="flex justify-end gap-3 mb-8">
          <button
            onClick={() => setStudyMode('list')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
              studyMode === 'list'
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
            }`}
          >
            <span className="material-symbols-outlined text-lg">list_alt</span>
            Danh sách
          </button>
          <button
            onClick={() => setStudyMode('flashcard')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
              studyMode === 'flashcard'
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
            }`}
          >
            <span className="material-symbols-outlined text-lg">style</span>
            Thẻ ghi nhớ
          </button>
          <button
            onClick={() => setStudyMode('write')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
              studyMode === 'write'
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
            }`}
          >
            <span className="material-symbols-outlined text-lg">edit_note</span>
            Viết
          </button>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <WordList
            words={MOCK_WORDS}
            activeWord={activeWord}
            onSelectWord={setActiveWord}
          />

          <WordDetail word={activeWord} />
        </div>
      </div>

      {/* FAB for quick action (only on mobile) */}
      <button className="md:hidden fixed bottom-20 right-8 w-16 h-16 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center z-50 hover:scale-105 active:scale-95 transition-all">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </DashboardLayout>
  );
};

export default VocabularyPage;
