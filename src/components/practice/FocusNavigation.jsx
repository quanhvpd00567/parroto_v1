import React from 'react';

const FocusNavigation = () => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 px-6 py-4 bg-white/80 backdrop-blur-xl rounded-full shadow-2xl border border-white/50 z-40">
      <button className="flex items-center gap-2 px-4 py-2 text-on-surface-variant font-bold text-sm hover:text-primary transition-colors">
        <span className="material-symbols-outlined text-lg">skip_previous</span>
        Previous
      </button>
      <div className="w-[1px] h-6 bg-outline-variant/30 my-auto"></div>
      <button className="flex items-center gap-2 px-6 py-2 bg-primary text-on-primary rounded-full font-bold text-sm hover:opacity-90 active:scale-95 transition-all">
        Next Lesson
        <span className="material-symbols-outlined text-lg">keyboard_arrow_right</span>
      </button>
    </div>
  );
};

export default FocusNavigation;
