import React from 'react';
import LandingNavbar from '../components/landing/LandingNavbar';
import PublicFooter from '../components/landing/PublicFooter';
import LessonLibraryHero from '../components/lessons/LessonLibraryHero';
import FilterBar from '../components/lessons/FilterBar';
import LessonGrid from '../components/lessons/LessonGrid';

const LessonLibraryPage = () => {
  return (
    <div className="bg-surface font-body text-on-surface antialiased min-h-screen">
      <LandingNavbar />
      <main className="pt-24 pb-20 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <LessonLibraryHero />
        <FilterBar />
        <LessonGrid />
      </main>
      <PublicFooter />
    </div>
  );
};

export default LessonLibraryPage;
