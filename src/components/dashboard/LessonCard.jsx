import React from 'react';

const LessonCard = ({ icon, title, subtitle, progress }) => {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_8px_32px_rgba(21,28,37,0.06)] border border-outline-variant/10 group cursor-pointer hover:-translate-y-1 transition-all">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-on-surface-variant text-xs mb-4">{subtitle}</p>
      <div className="flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-surface-container-highest rounded-full">
          <div className="h-full bg-primary rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        <span className="text-[10px] font-bold">{progress}%</span>
      </div>
    </div>
  );
};

export default LessonCard;
