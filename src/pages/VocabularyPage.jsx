import React, { useState, useMemo } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import WordList from '../components/vocabulary/WordList';
import WordDetail from '../components/vocabulary/WordDetail';
import FlashcardMode from '../components/vocabulary/FlashcardMode';
import WriteMode from '../components/vocabulary/WriteMode';
import { useMyVocabulary } from '../hooks/useVocabulary';
import vocabularyService from '../services/vocabularyService';

const LEVEL_OPTIONS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

const POS_LABELS = {
  noun: 'Noun', verb: 'Verb', adjective: 'Adjective', adverb: 'Adverb',
  preposition: 'Preposition', conjunction: 'Conjunction', pronoun: 'Pronoun', interjection: 'Interjection',
};

function isEmptyHtml(html) {
  if (!html) return true;
  const stripped = html.replace(/<[^>]*>/g, '').trim();
  return stripped.length === 0;
}

function mapVocabItem(item) {
  const vocab = item.vocabulary;
  const imageUrl = vocab.image_url
    ? (vocab.image_url.startsWith('http') ? vocab.image_url : `${API_BASE}${vocab.image_url}`)
    : null;
  const example = isEmptyHtml(vocab.example_sentence) ? '' : vocab.example_sentence;
  return {
    id: vocab._id,
    term: vocab.word,
    phonetic_us: vocab.pronunciation_us || null,
    phonetic_uk: vocab.pronunciation_uk || null,
    audio_us: vocab.pronunciation_audio_us || null,
    audio_uk: vocab.pronunciation_audio_uk || null,
    level: vocab.level || null,
    imageUrl,
    is_favorite: item.is_favorite ?? false,
    definitions: [{
      type: POS_LABELS[vocab.part_of_speech] || vocab.part_of_speech,
      meaning: vocab.definition,
      explanation: '',
      example,
      exampleTranslation: '',
    }],
  };
}

const VocabularyPage = () => {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [studyMode, setStudyMode] = useState('list');
  const [searchValue, setSearchValue] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [params, setParams] = useState({ page: 1, limit: 50 });
  const [actionLoading, setActionLoading] = useState(null);

  const { data, loading, error, refetch } = useMyVocabulary(params);

  const words = useMemo(() => {
    if (!data?.data) return [];
    return data.data.map(mapVocabItem);
  }, [data]);

  const activeWord = useMemo(() => words[activeWordIndex] || null, [words, activeWordIndex]);

  const handleSearch = () => {
    setActiveWordIndex(0);
    setParams((prev) => ({ ...prev, page: 1, search: searchValue || undefined }));
  };

  const handleLevelFilter = (level) => {
    setLevelFilter(level);
    setActiveWordIndex(0);
    setParams((prev) => ({ ...prev, page: 1, level: level || undefined }));
  };

  const handleNext = () => setActiveWordIndex((prev) => (prev + 1) % words.length);
  const handlePrev = () => setActiveWordIndex((prev) => (prev - 1 + words.length) % words.length);

  const handleAction = async (action, vocabId) => {
    setActionLoading(vocabId);
    try {
      if (action === 'favorite') await vocabularyService.toggleFavorite(vocabId);
      else if (action === 'learned') await vocabularyService.markLearned(vocabId);
      else if (action === 'remove') await vocabularyService.removeWord(vocabId);
      refetch();
    } catch {
      // silent
    } finally {
      setActionLoading(null);
    }
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
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
          <span className="material-symbols-outlined text-6xl text-on-surface-variant/30">menu_book</span>
          <p className="text-on-surface-variant font-medium">No words yet. Save some words from lessons to start learning.</p>
        </div>
      );
    }

    switch (studyMode) {
      case 'flashcard':
        return <FlashcardMode key={activeWord?.id} word={activeWord} onNext={handleNext} onPrev={handlePrev} progress={activeWordIndex + 1} total={words.length} />;
      case 'write':
        return <WriteMode key={activeWord?.id} word={activeWord} onNext={handleNext} onPrev={handlePrev} progress={activeWordIndex + 1} total={words.length} onWordLearned={refetch} />;
      default:
        return (
          <div className="grid grid-cols-12 gap-8 w-full">
            <WordList words={words} activeWord={activeWord} onSelectWord={(word) => setActiveWordIndex(words.indexOf(word))} />
            <WordDetail word={activeWord} actionLoading={actionLoading} onAction={handleAction} />
          </div>
        );
    }
  };

  return (
    <DashboardLayout>
      <div className="bg-background">
        <div className="max-w-7xl mx-auto md:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-8 gap-4 md:gap-6 border-b border-outline-variant/20 pb-4 md:pb-6 px-4 md:px-0 w-full">
            <div className="space-y-0.5 md:space-y-1">
              <h1 className="text-xl md:text-3xl font-extrabold tracking-tight text-on-surface font-headline">My Vocabulary</h1>
              <div className="text-[9px] md:text-xs font-bold text-outline uppercase tracking-wider">
                {studyMode === 'list' ? `${data?.meta?.total ?? 0} words` : 'Mastery Session'}
              </div>
            </div>
            <div className="flex items-center gap-1 bg-surface-container-low p-1 rounded-xl md:rounded-2xl overflow-x-auto no-scrollbar">
              {[
                { key: 'list', icon: 'list_alt', label: 'List' },
                { key: 'flashcard', icon: 'style', label: 'Flashcard' },
                { key: 'write', icon: 'edit_note', label: 'Write' },
              ].map((mode) => (
                <button key={mode.key} onClick={() => setStudyMode(mode.key)}
                  className={`flex items-center justify-center gap-1.5 md:gap-2 px-3 md:px-5 py-2 md:py-2.5 rounded-lg md:rounded-xl font-bold text-[11px] md:text-sm transition-all whitespace-nowrap flex-1 md:flex-none ${studyMode === mode.key ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-high'}`}>
                  <span className={`material-symbols-outlined text-base md:text-lg ${studyMode === mode.key ? 'filled' : ''}`}>{mode.icon}</span>
                  <span>{mode.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Search & Filter - only in list mode */}
          {studyMode === 'list' && (
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6 px-4 md:px-0">
              <div className="flex items-center gap-2 w-full sm:flex-1">
                <input type="text" placeholder="Search vocabulary..." value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  className="px-4 py-2.5 rounded-xl border border-outline-variant/30 bg-surface-container-lowest text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 flex-1 md:w-60" />
                <button onClick={handleSearch} className="px-5 py-2.5 rounded-xl bg-primary text-on-primary text-sm font-bold hover:opacity-90 transition-opacity">Search</button>
              </div>
              <select value={levelFilter} onChange={(e) => handleLevelFilter(e.target.value)}
                className="px-4 py-2.5 rounded-xl border border-outline-variant/30 bg-surface-container-lowest text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 w-full sm:w-auto">
                <option value="">All Levels</option>
                {LEVEL_OPTIONS.map((lvl) => <option key={lvl} value={lvl}>{lvl}</option>)}
              </select>
            </div>
          )}

          {renderContent()}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default VocabularyPage;
