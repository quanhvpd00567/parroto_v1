import React, { useRef } from 'react';
import { toPng } from 'html-to-image';
import { hasHtmlContent } from '../../utils/html';

const ShareModal = ({ word, onClose }) => {
  const cardRef = useRef(null);

  const handleDownload = async () => {
    if (cardRef.current === null) return;
    try {
      const dataUrl = await toPng(cardRef.current, { cacheBust: true });
      const link = document.createElement('a');
      link.download = `parroto-${word.term}.png`;
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
      const file = new File([blob], `parroto-${word.term}.png`, { type: 'image/png' });

      if (navigator.share) {
        await navigator.share({
          files: [file],
          title: `Learn '${word.term}' on Parroto`,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-[2rem] w-full max-w-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-8 pb-4">
          <h2 className="text-2xl font-bold text-on-surface font-headline">Share Vocabulary</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-surface-container-low text-outline transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-8 pt-0 flex flex-col items-center">
          {/* Preview Card */}
          <div className="w-full bg-surface-container-low/50 rounded-3xl p-6 mb-8 flex justify-center">
            <div
              ref={cardRef}
              className="bg-white w-full max-w-sm aspect-[4/3] rounded-3xl p-8 shadow-sm border border-outline-variant/20 flex flex-col relative overflow-hidden"
            >
              {/* Background gradient hint */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16"></div>

              {/* Card Header */}
              <div className="flex justify-between items-start mb-6">
                <span className="text-primary font-black tracking-tighter text-sm">PARROTO</span>
                {word.level && (
                  <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">
                    Level {word.level}
                  </span>
                )}
              </div>

              {/* Word & Phonetic */}
              <div className="mb-6">
                <h3 className="text-4xl font-extrabold text-on-surface font-headline mb-1">{word.term}</h3>
                <p className="text-primary font-medium">{word.phonetic_us || word.phonetic_uk}</p>
              </div>

              {/* Meaning */}
              <div className="flex gap-3 mb-4">
                <span className="bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded h-fit mt-1 uppercase">
                  {word.definitions?.[0]?.type?.slice(0, 3)}
                </span>
                <p className="text-sm font-bold text-on-surface leading-snug">
                  {word.definitions?.[0]?.meaning}
                </p>
              </div>

              {/* Example */}
              {hasHtmlContent(word.definitions?.[0]?.example) && (
                <div
                  className="bg-surface-container-low/50 p-4 rounded-xl flex-1 italic text-on-surface-variant text-sm"
                  dangerouslySetInnerHTML={{ __html: word.definitions[0].example }}
                >
                </div>
              )}

              {/* Footer */}
              <div className="mt-6 flex justify-between items-end">
                <div>
                  <p className="text-[8px] font-bold text-outline uppercase tracking-widest mb-0.5">Mastered on Parroto</p>
                  <p className="text-[6px] text-outline-variant">Learn 100+ languages through context</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-lg">public</span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <button
              onClick={handleShare}
              className="flex items-center justify-center gap-2 bg-primary text-on-primary py-4 rounded-3xl font-bold hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined">share</span>
              Share Image
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center justify-center gap-2 bg-surface-container-low text-on-surface py-4 rounded-3xl font-bold hover:bg-surface-container-high transition-colors"
            >
              <span className="material-symbols-outlined">download</span>
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
