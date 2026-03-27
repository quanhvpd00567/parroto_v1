import React from 'react';

const MobileNav = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white/70 backdrop-blur-xl border-t border-slate-100 flex items-center justify-around z-50 px-4">
      <a className="flex flex-col items-center gap-1 text-primary" href="#">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
        <span className="text-[10px] font-bold">Home</span>
      </a>
      <a className="flex flex-col items-center gap-1 text-slate-500" href="#">
        <span className="material-symbols-outlined">menu_book</span>
        <span className="text-[10px]">Lessons</span>
      </a>
      <a className="flex flex-col items-center gap-1 text-slate-500" href="#">
        <span className="material-symbols-outlined">groups</span>
        <span className="text-[10px]">Community</span>
      </a>
      <a className="flex flex-col items-center gap-1 text-slate-500" href="#">
        <span className="material-symbols-outlined">person</span>
        <span className="text-[10px]">Profile</span>
      </a>
    </nav>
  );
};

export default MobileNav;
