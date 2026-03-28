import React, { useRef, useState, useEffect } from 'react';
import { toPng } from 'html-to-image';

const ShareModal = ({ word, isOpen, onClose }) => {
  const posterRef = useRef(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (isOpen && word) {
      generateImage();
    } else {
      setImgUrl(null);
    }
  }, [isOpen, word]);

  const generateImage = async () => {
    if (!posterRef.current) return;
    setIsGenerating(true);
    try {
      // Small delay to ensure styles are applied
      await new Promise(resolve => setTimeout(resolve, 300));
      const dataUrl = await toPng(posterRef.current, {
        cacheBust: true,
        backgroundColor: '#f8f9ff',
        style: {
          borderRadius: '0px' // Ensure it's square/clean for capture
        }
      });
      setImgUrl(dataUrl);
    } catch (err) {
      console.error('Failed to generate image', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.download = `parroto-${word.term}.png`;
    link.href = imgUrl;
    link.click();
  };

  const handleShare = async () => {
    if (!imgUrl) return;

    try {
      const response = await fetch(imgUrl);
      const blob = await response.blob();
      const file = new File([blob], `parroto-${word.term}.png`, { type: 'image/png' });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: `Vocabulary: ${word.term}`,
          text: `Check out this word on Parroto: ${word.term} - ${word.definitions?.[0]?.meaning}`,
        });
      } else {
        handleDownload();
      }
    } catch (err) {
      console.error('Sharing failed', err);
      handleDownload();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-on-surface/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-surface-container-lowest w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-slide-in">
        <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
          <h2 className="text-xl font-bold font-headline text-on-surface">Share Vocabulary</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-8 flex flex-col items-center">
          {/* Preview Card */}
          <div className="w-full aspect-square max-w-[320px] bg-white rounded-2xl shadow-lg overflow-hidden border border-outline-variant/10 mb-8 relative">
            {isGenerating ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface-container-low/50">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mb-2"></div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest">Generating Card...</p>
              </div>
            ) : imgUrl ? (
              <img src={imgUrl} alt="Share Preview" className="w-full h-full object-contain" />
            ) : null}
          </div>

          <div className="grid grid-cols-2 gap-4 w-full">
            <button
              onClick={handleShare}
              disabled={isGenerating || !imgUrl}
              className="flex items-center justify-center gap-2 bg-primary text-on-primary py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:scale-100"
            >
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>share</span>
              <span>Share Image</span>
            </button>
            <button
              onClick={handleDownload}
              disabled={isGenerating || !imgUrl}
              className="flex items-center justify-center gap-2 bg-surface-container-high text-on-surface py-4 rounded-full font-bold hover:bg-surface-variant transition-all disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-xl">download</span>
              <span>Download</span>
            </button>
          </div>
        </div>

        {/* Hidden Poster Source */}
        <div className="fixed -left-[9999px] -top-[9999px]">
          <div
            ref={posterRef}
            className="w-[600px] h-[600px] bg-white p-12 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Branding */}
            <div className="flex justify-between items-center mb-8 relative z-10">
              <span className="text-2xl font-black text-primary tracking-tighter font-headline">PARROTO</span>
              <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest">
                Level {word.level}
              </span>
            </div>

            {/* Word Content */}
            <div className="relative z-10">
              <h1 className="text-7xl font-black text-on-surface mb-2 tracking-tighter font-headline">{word.term}</h1>
              <p className="text-2xl font-medium text-primary/60 mb-8 font-body">{word.phonetic}</p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="px-3 py-1 bg-primary text-on-primary text-[10px] font-bold rounded uppercase h-fit mt-1.5">DEF</span>
                  <div>
                    <p className="text-2xl font-bold text-on-surface font-headline leading-tight">{word.definitions?.[0]?.meaning}</p>
                    <p className="text-lg text-on-surface-variant italic font-body mt-1">{word.definitions?.[0]?.explanation}</p>
                  </div>
                </div>

                <div className="p-6 bg-surface-container-low rounded-2xl">
                  <p className="text-on-surface font-medium font-body text-xl italic leading-relaxed">
                    "{word.definitions?.[0]?.example.replace(/<span.*?>|<\/span>/g, '')}"
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-8 border-t border-outline-variant/20 flex justify-between items-end relative z-10">
              <div>
                <p className="text-xs font-bold text-outline uppercase tracking-widest">Mastered on Parroto</p>
                <p className="text-[10px] text-outline/60 mt-0.5">Learn 100+ languages through context</p>
              </div>
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>language</span>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full -ml-10 -mb-10 blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
