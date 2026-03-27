import React from 'react';

const LessonLibraryHero = () => {
  return (
    <header className="mb-16 text-center max-w-3xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tight text-on-surface mb-6">
        Master any language <span className="text-primary">step by step</span>.
      </h1>
      <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
        Browse our curated catalog of immersive lessons designed by expert linguists to take you from basics to fluency.
      </p>
      {/* Search Bar */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-outline">
          <span className="material-symbols-outlined">search</span>
        </div>
        <input
          className="w-full bg-surface-container-low border-none h-16 pl-14 pr-6 rounded-xl text-lg focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline"
          placeholder="Search topics, phrases, or grammar..."
          type="text"
        />
      </div>
    </header>
  );
};

export default LessonLibraryHero;
