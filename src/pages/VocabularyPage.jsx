import React, { useState, useMemo } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import WordList from '../components/vocabulary/WordList';
import WordDetail from '../components/vocabulary/WordDetail';
import FlashcardMode from '../components/vocabulary/FlashcardMode';
import WriteMode from '../components/vocabulary/WriteMode';
import { useVocabularyList } from '../hooks/useVocabulary';

const LEVEL_OPTIONS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

const POS_LABELS = {
  noun: 'Noun',
  verb: 'Verb',
  adjective: 'Adjective',
  adverb: 'Adverb',
  preposition: 'Preposition',
  conjunction: 'Conjunction',
  pronoun: 'Pronoun',
  interjection: 'Interjection',
};

function mapApiToWord(item) {
  const imageUrl = item.image_url
    ? (item.image_url.startsWith('http') ? item.image_url : `${API_BASE}${item.image_url}`)
    : null;

  return {
    id: item._id,
    term: item.word,
    phonetic_us: item.pronunciation_us || null,
    phonetic_uk: item.pronunciation_uk || null,
    audio_us: item.pronunciation_audio_us || null,
    audio_uk: item.pronunciation_audio_uk || null,
    level: item.level || '—',
    imageUrl,
    definitions: [
      {
        type: POS_LABELS[item.part_of_speech] || item.part_of_speech,
        meaning: item.definition,
        explanation: '',
        example: item.example_sentence || '',
        exampleTranslation: '',
      },
    ],
  };
}

const VocabularyPage = () => {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [studyMode, setStudyMode] = useState('list');
  const [searchValue, setSearchValue] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [params, setParams] = useState({ page: 1, limit: 50 });

  const { data, loading, error } = useVocabularyList(params);

  const words = useMemo(() => {
    if (!data?.data) return [];
    return data.data.map(mapApiToWord);
  }, [data]);

  const activeWord = useMemo(() => words[activeWordIndex] || null, [words, activeWordIndex]);

  const handleSearch = () => {
    setActiveWordIndex(0);
    setParams((prev) => ({
      ...prev,
      page: 1,
      search: searchValue || undefined,
    }));
  };

  const handleLevelFilter = (level) => {
    setLevelFilter(level);
    setActiveWordIndex(0);
    setParams((prev) => ({
      ...prev,
      page: 1,
      level: level || undefined,
    }));
  };

  const handleNext = () => {
    setActiveWordIndex((prev) => (prev + 1) % words.length);
  };

  const handlePrev = () => {
    setActiveWordIndex((prev) => (prev - 1 + words.length) % words.length);
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex items-center justify-center min-h-[400px]">
          <p className="text-error font-medium">{error}</p>
        </div>
      );
    }

    if (words.length === 0) {
      return (
        <div className="flex items-center justify-center min-h-[400px]">
          <p className="text-on-surface-variant font-medium">No vocabulary found.</p>
        </div>
      );
    }

    switch (studyMode) {
      case 'flashcard':
        return (
          <FlashcardMode
            key={activeWord?.id}
            word={activeWord}
            onNext={handleNext}
            onPrev={handlePrev}
            progress={activeWordIndex + 1}
            total={words.length}
          />
        );
      case 'write':
        return (
          <WriteMode
            key={activeWord?.id}
            word={activeWord}
            onNext={handleNext}
            onPrev={handlePrev}
            progress={activeWordIndex + 1}
            total={words.length}
          />
        );
      case 'list':
      default:
        return (
          <div className="grid grid-cols-12 gap-8 w-full">
            <WordList
              words={words}
              activeWord={activeWord}
              onSelectWord={(word) => setActiveWordIndex(words.indexOf(word))}
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
                {studyMode === 'list' ? `${data?.meta?.total ?? 0} words total` : 'Mastery Session'}
              </div>
            </div>
            <div className="flex items-center gap-2 bg-surface-container-low p-1.5 rounded-2xl w-fit shadow-sm">
              {[
                { key: 'list', icon: 'list_alt', label: 'List' },
                { key: 'flashcard', icon: 'style', label: 'Flashcard' },
                { key: 'write', icon: 'edit_note', label: 'Write' },
              ].map((mode) => (
                <button
                  key={mode.key}
                  onClick={() => setStudyMode(mode.key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                    studyMode === mode.key
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  <span className={`material-symbols-outlined text-lg ${studyMode === mode.key ? 'filled' : ''}`}>{mode.icon}</span>
                  <span>{mode.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search vocabulary..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="px-4 py-2 rounded-xl border border-outline-variant/30 bg-surface-container-lowest text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 w-60"
              />
              <button
                onClick={handleSearch}
                className="px-4 py-2 rounded-xl bg-primary text-on-primary text-sm font-bold hover:opacity-90 transition-opacity"
              >
                Search
              </button>
            </div>
            <select
              value={levelFilter}
              onChange={(e) => handleLevelFilter(e.target.value)}
              className="px-4 py-2 rounded-xl border border-outline-variant/30 bg-surface-container-lowest text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              <option value="">All Levels</option>
              {LEVEL_OPTIONS.map((lvl) => (
                <option key={lvl} value={lvl}>{lvl}</option>
              ))}
            </select>
          </div>

          <div>
            {renderContent()}
          </div>
        </main>
      </div>
    </DashboardLayout>
  );
};

export default VocabularyPage;
