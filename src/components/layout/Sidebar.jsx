import React from 'react';

const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-64 fixed left-0 top-16 bottom-0 bg-surface border-r border-outline-variant/15 p-6 gap-8">
      <div className="flex flex-col gap-2">
        <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary-container text-white transition-all shadow-lg shadow-primary/10" href="/dashboard">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
          <span className="font-medium">Dashboard</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-low transition-all" href="/lessons">
          <span className="material-symbols-outlined">menu_book</span>
          <span className="font-medium">Lessons</span>
        </a>
      </div>
      <div className="mt-auto p-4 rounded-2xl bg-secondary-fixed text-on-secondary-fixed flex flex-col gap-3">
        <p className="text-xs font-bold uppercase tracking-widest opacity-70">Current Streak</p>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
          <span className="text-2xl font-bold">12 Days</span>
        </div>
        <p className="text-xs">You're in the top 5% this week!</p>
      </div>
    </aside>
  );
};

export default Sidebar;
