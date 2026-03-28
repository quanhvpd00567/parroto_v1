import React from 'react';

const ProfileStreak = ({ totalHours = 156, streakDays = 24 }) => {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_8px_32px_rgba(21,28,37,0.06)] flex items-center mb-8">
      <div className="flex items-center gap-4 flex-1 pl-4 border-r border-outline-variant/10">
        <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
        </div>
        <div>
          <div className="text-2xl font-bold text-on-surface">{totalHours} Hours</div>
          <p className="text-sm text-on-surface-variant">Total Focused Learning Time</p>
        </div>
      </div>

      <div className="flex-1 text-right pr-4">
        <div className="text-xs font-bold text-secondary uppercase tracking-widest font-label mb-1">Current Streak</div>
        <div className="text-3xl font-extrabold text-on-surface">{streakDays} Days</div>
      </div>
    </div>
  );
};

export default ProfileStreak;
