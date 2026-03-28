import React from 'react';

const ProfileStats = ({ lessonsCompleted = 842, sentences = "12.5k", globalRank = "Top 5%" }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Lessons Completed Card */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary to-[#1e40af] p-8 rounded-xl text-white shadow-lg">
        <div className="relative z-10">
          <span className="material-symbols-outlined text-tertiary-fixed-dim text-3xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          <div className="text-4xl font-extrabold font-headline mb-1">{lessonsCompleted}</div>
          <div className="text-sm font-bold opacity-80 uppercase tracking-widest font-label">Lessons Completed</div>
        </div>
        <div className="absolute -bottom-4 -right-4 opacity-20 transform rotate-12">
           <span className="material-symbols-outlined text-[120px]">menu_book</span>
        </div>
      </div>

      {/* Sentences Card */}
      <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_32px_rgba(21,28,37,0.06)] flex flex-col items-center justify-center text-center">
        <div className="text-4xl font-extrabold text-primary font-headline mb-1">{sentences}</div>
        <div className="text-sm font-bold text-on-surface-variant uppercase tracking-widest font-label">Sentences</div>
      </div>

      {/* Global Rank Card */}
      <div className="relative overflow-hidden bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_32px_rgba(21,28,37,0.06)] flex flex-col items-center justify-center text-center">
        <div className="relative z-10">
          <div className="text-4xl font-extrabold text-on-surface font-headline mb-1">{globalRank}</div>
          <div className="text-sm font-bold text-on-surface-variant uppercase tracking-widest font-label">Global Rank</div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg className="w-32 h-32 transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="58"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="2"
              className="text-tertiary/10"
            />
            <circle
              cx="64"
              cy="64"
              r="58"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="4"
              strokeDasharray={364}
              strokeDashoffset={364 * 0.25}
              className="text-tertiary-fixed-dim"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProfileStats;
