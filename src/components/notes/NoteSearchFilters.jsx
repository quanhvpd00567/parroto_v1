import React from 'react';

const NoteSearchFilters = ({
  searchValue,
  onSearchChange,
  onSearchClick
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-2 items-center justify-between">
      <div className="relative flex-grow max-w-xl w-full">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40">
          search
        </span>
        <input
          type="text"
          placeholder="Search notes, insights, or grammar points..."
          className="w-full pl-12 pr-28 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all placeholder:text-outline/50 text-sm md:text-base"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onSearchClick()}
        />
        <button
          onClick={onSearchClick}
          className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 rounded-lg bg-primary text-white text-xs font-bold font-headline shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 duration-200"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default NoteSearchFilters;
