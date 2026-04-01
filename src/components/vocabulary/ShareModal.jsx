import React, { useRef } from 'react';
import { toPng } from 'html-to-image';
import { hasHtmlContent, sanitizeHtml } from '../../utils/html';

const ShareModal = ({ word, onClose }) => {
  const cardRef = useRef(null);

  const handleDownload = async () => {
    if (cardRef.current === null) return;
    try {
      const dataUrl = await toPng(cardRef.current, { cacheBust: true });
      const link = document.createElement('a');
      link.download = `Vocera-${word.term}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('oops, something went wrong!', err);
    }
  };

  const handleShare = async () => {
    if (cardRef.current === null) return;
    try {
      const dataUrl = await toPng(cardRef.current, { cacheBust: true });
      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], `Vocera-${word.term}.png`, { type: 'image/png' });

      if (navigator.share) {
        await navigator.share({
          files: [file],
          title: `Learn '${word.term}' on Vocera`,
          text: `I just mastered the word '${word.term}'!`,
        });
      } else {
        handleDownload();
      }
    } catch (err) {
      console.error('Error sharing:', err);
      handleDownload();
    }
  };

  if (!word) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-on-surface/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl md:rounded-[2rem] w-full max-w-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-5 md:p-8 pb-3 md:pb-4">
          <h2 className="text-xl md:text-2xl font-bold text-on-surface font-headline">Share Vocabulary</h2>
          <button
            onClick={onClose}
            className="p-1.5 md:p-2 rounded-full hover:bg-surface-container-low text-outline transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-5 md:p-8 pt-0 flex flex-col items-center">
          {/* Preview Card */}
          <div className="w-full bg-surface-container-low/50 rounded-2xl md:rounded-3xl p-4 md:p-6 mb-6 md:mb-8 flex justify-center">
            <div
              ref={cardRef}
              className="bg-white w-full max-w-sm aspect-[4/3] rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm border border-outline-variant/20 flex flex-col relative overflow-hidden"
            >
              {/* Background gradient hint */}
              <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-primary/5 rounded-full blur-2xl -mr-12 -mt-12 md:-mr-16 md:-mt-16"></div>

              {/* Card Header */}
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <span className="text-primary font-black tracking-tighter text-[10px] md:text-sm">Vocera</span>
                {word.level && (
                  <span className="bg-primary/10 text-primary text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 md:px-2 md:py-1 rounded-full uppercase tracking-widest">
                    Level {word.level}
                  </span>
                )}
              </div>

              {/* Word & Phonetic */}
              <div className="mb-4 md:mb-6">
                <h3 className="text-2xl md:text-4xl font-extrabold text-on-surface font-headline mb-0.5 md:mb-1">{word.term}</h3>
                <p className="text-primary font-medium text-xs md:text-sm truncate">{word.phonetic_us || word.phonetic_uk}</p>
              </div>

              {/* Meaning */}
              <div className="flex gap-2 md:gap-3 mb-3 md:mb-4">
                <span className="bg-primary text-white text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 rounded h-fit mt-0.5 md:mt-1 uppercase">
                  {word.definitions?.[0]?.type?.slice(0, 3)}
                </span>
                <p className="text-xs md:text-sm font-bold text-on-surface leading-snug line-clamp-2">
                  {word.definitions?.[0]?.meaning}
                </p>
              </div>

              {/* Example */}
              {hasHtmlContent(word.definitions?.[0]?.example) && (
                <div
                  className="bg-surface-container-low/50 p-3 md:p-4 rounded-xl flex-1 italic text-on-surface-variant text-[11px] md:text-sm overflow-hidden"
                  dangerouslySetInnerHTML={{ __html: sanitizeHtml(word.definitions[0].example) }}
                >
                </div>
              )}

              {/* Footer */}
              <div className="mt-4 md:mt-6 flex justify-between items-end shrink-0">
                <div className="min-w-0">
                  <p className="text-[7px] md:text-[8px] font-bold text-outline uppercase tracking-widest mb-0.5">Mastered on Vocera</p>
                  <p className="text-[5px] md:text-[6px] text-outline-variant truncate">Learn 100+ languages through context</p>
                </div>
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                  <span className="material-symbols-outlined text-sm md:text-lg">public</span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 w-full">
            <button
              onClick={handleShare}
              className="flex items-center justify-center gap-2 bg-primary text-on-primary py-3 md:py-4 rounded-2xl md:rounded-3xl font-bold text-sm md:text-base hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined text-xl md:text-2xl">share</span>
              <span className="whitespace-nowrap">Share Image</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center justify-center gap-2 bg-surface-container-low text-on-surface py-3 md:py-4 rounded-2xl md:rounded-3xl font-bold text-sm md:text-base hover:bg-surface-container-high transition-colors"
            >
              <span className="material-symbols-outlined text-xl md:text-2xl">download</span>
              <span className="whitespace-nowrap">Download</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
