import React from 'react';

const ProfileSidebar = ({ dailyGoal = 15, totalGoal = 20 }) => {
  const achievements = [
    { icon: 'military_tech', color: 'text-secondary', filled: true },
    { icon: 'rocket_launch', color: 'text-primary', filled: true },
    { icon: 'psychology', color: 'text-tertiary-fixed-dim', filled: true },
    { icon: 'lock', color: 'text-outline-variant/30', filled: false },
    { icon: 'lock', color: 'text-outline-variant/30', filled: false },
    { icon: 'lock', color: 'text-outline-variant/30', filled: false }
  ];

  const percentage = (dailyGoal / totalGoal) * 100;

  return (
    <div className="flex flex-col gap-8">
      {/* Premium Banner */}
      <div className="bg-secondary-container p-8 rounded-xl text-white relative overflow-hidden group shadow-lg">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Premium Member</span>
          </div>
          <h2 className="text-2xl font-extrabold font-headline leading-tight mb-4">
            Unlock the Full Luminous Path
          </h2>
          <p className="text-sm text-on-secondary/80 leading-relaxed mb-8">
            Your subscription is active until Dec 2024. Continue enjoying ad-free lessons and offline modes.
          </p>
          <button className="w-full bg-white text-on-secondary-container py-3.5 rounded-full font-bold hover:bg-slate-50 transition-all active:scale-95 shadow-md">
            Manage Subscription
          </button>
        </div>
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
           <span className="material-symbols-outlined text-[100px]">auto_awesome</span>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_32px_rgba(21,28,37,0.06)]">
        <h3 className="text-lg font-bold text-on-surface mb-8">Achievements</h3>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {achievements.map((item, idx) => (
            <div key={idx} className="aspect-square rounded-full bg-surface-container-low flex items-center justify-center group cursor-pointer hover:bg-surface-container-high transition-all">
              <span className={`material-symbols-outlined ${item.color} ${item.filled ? 'text-2xl' : 'text-xl opacity-50'}`} style={item.filled ? { fontVariationSettings: "'FILL' 1" } : {}}>
                {item.icon}
              </span>
            </div>
          ))}
        </div>
        <button className="w-full text-primary text-sm font-bold hover:underline">
          View All 24 Badges
        </button>
      </div>

      {/* Daily Goal */}
      <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_32px_rgba(21,28,37,0.06)]">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-lg font-bold text-on-surface">Daily Goal</h3>
          <span className="px-3 py-1 bg-tertiary-fixed-dim/20 text-tertiary-fixed-dim text-[10px] font-bold rounded-full">ON TRACK</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative w-24 h-24 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="48"
                cy="48"
                r="40"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                className="text-surface-container-high"
              />
              <circle
                cx="48"
                cy="48"
                r="40"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeDasharray={251}
                strokeDashoffset={251 - (251 * percentage) / 100}
                className="text-tertiary-fixed-dim"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute text-sm font-bold text-on-surface">{Math.round(percentage)}%</span>
          </div>
          <div>
            <div className="text-xl font-bold text-on-surface">{dailyGoal}/{totalGoal} mins</div>
            <p className="text-xs text-on-surface-variant">Stay focused for 5 more!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
