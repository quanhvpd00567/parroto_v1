import React from 'react';

const ProgressCard = ({ level = "B2", percentage = 74 }) => {
  return (
    <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_32px_rgba(21,28,37,0.06)] flex flex-col gap-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-on-surface">My Progress</h2>
          <p className="text-on-surface-variant text-sm">Overall mastery of Spanish (Level {level})</p>
        </div>
        <span className="text-primary font-bold text-3xl">{percentage}%</span>
      </div>
      <div className="w-full h-4 bg-surface-container-highest rounded-full overflow-hidden">
        <div className="h-full bg-tertiary-fixed-dim rounded-full shadow-[0_0_12px_rgba(78,222,163,0.4)]" style={{ width: `${percentage}%` }}></div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 rounded-lg bg-surface-container-low flex flex-col items-center text-center gap-2">
          <span className="material-symbols-outlined text-primary">record_voice_over</span>
          <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-tighter">Speaking</span>
          <span className="text-lg font-bold">82%</span>
        </div>
        <div className="p-4 rounded-lg bg-surface-container-low flex flex-col items-center text-center gap-2">
          <span className="material-symbols-outlined text-primary">menu_book</span>
          <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-tighter">Reading</span>
          <span className="text-lg font-bold">68%</span>
        </div>
        <div className="p-4 rounded-lg bg-surface-container-low flex flex-col items-center text-center gap-2">
          <span className="material-symbols-outlined text-primary">headset</span>
          <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-tighter">Listening</span>
          <span className="text-lg font-bold">71%</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
