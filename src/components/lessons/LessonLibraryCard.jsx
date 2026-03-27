import React from 'react';

const LessonLibraryCard = ({ image, level, category, rating, title, description, duration, vocabCount }) => {
  return (
    <div className="lesson-card group relative bg-surface-container-lowest rounded-lg overflow-hidden flex flex-col transition-all duration-300">
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={image} alt={title} />
        <div className="lesson-overlay absolute inset-0 bg-primary/40 backdrop-blur-[2px] opacity-0 flex items-center justify-center transition-opacity duration-300">
          <button className="bg-surface-container-lowest text-primary px-8 py-3 rounded-full font-bold shadow-xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform">
            Start Lesson <span className="material-symbols-outlined">play_circle</span>
          </button>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-surface-container-lowest/90 backdrop-blur-md text-primary text-xs font-bold rounded-full uppercase tracking-wider">{level}</span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-secondary uppercase tracking-widest">{category}</span>
          <div className="flex items-center gap-1 text-on-surface">
            <span className="material-symbols-outlined text-sm text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="text-sm font-bold">{rating}</span>
          </div>
        </div>
        <h3 className="text-xl font-headline font-bold mb-2 text-on-surface leading-snug">{title}</h3>
        <p className="text-on-surface-variant text-sm line-clamp-2 mb-6">{description}</p>
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-surface-container-low">
          <div className="flex items-center gap-2 text-outline">
            <span className="material-symbols-outlined text-lg">schedule</span>
            <span className="text-xs font-medium">{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-outline">
            <span className="material-symbols-outlined text-lg">description</span>
            <span className="text-xs font-medium">{vocabCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonLibraryCard;
