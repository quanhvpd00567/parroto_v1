import React from 'react';

const FilterBar = () => {
  return (
    <section className="mb-12 flex flex-wrap items-center justify-between gap-6">
      <div className="flex flex-wrap items-center gap-3">
        {/* Level Filter */}
        <div className="relative group">
          <button className="flex items-center gap-2 px-6 py-3 bg-surface-container-low hover:bg-surface-container-high rounded-full font-semibold text-sm transition-all text-on-surface-variant">
            Level: All Levels <span className="material-symbols-outlined text-sm">expand_more</span>
          </button>
        </div>
        {/* Topic Filter */}
        <div className="relative group">
          <button className="flex items-center gap-2 px-6 py-3 bg-surface-container-low hover:bg-surface-container-high rounded-full font-semibold text-sm transition-all text-on-surface-variant">
            Topic: Everything <span className="material-symbols-outlined text-sm">expand_more</span>
          </button>
        </div>
        {/* Length Filter */}
        <div className="relative group">
          <button className="flex items-center gap-2 px-6 py-3 bg-surface-container-low hover:bg-surface-container-high rounded-full font-semibold text-sm transition-all text-on-surface-variant">
            Length: Any <span className="material-symbols-outlined text-sm">expand_more</span>
          </button>
        </div>
      </div>
      <div className="text-sm font-medium text-on-surface-variant">
        Showing <span className="text-on-surface font-bold">124</span> lessons
      </div>
    </section>
  );
};

export default FilterBar;
