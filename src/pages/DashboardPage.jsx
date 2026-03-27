import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import ProgressCard from '../components/dashboard/ProgressCard';
import LessonCard from '../components/dashboard/LessonCard';
import DailyGoals from '../components/dashboard/DailyGoals';
import RecommendationCard from '../components/dashboard/RecommendationCard';

const DashboardPage = () => {
  const lessons = [
    { icon: 'movie', title: 'Entertainment', subtitle: 'Master cinema & arts vocabulary', progress: 45 },
    { icon: 'work', title: 'Business', subtitle: 'Professional emails & meetings', progress: 82 },
    { icon: 'flight', title: 'Travel', subtitle: 'Navigating airports & hotels', progress: 15 },
  ];

  return (
    <DashboardLayout>
      {/* Header Section */}
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold text-on-surface tracking-tight mb-2">Welcome back, Sarah!</h1>
        <p className="text-on-surface-variant text-lg">You've mastered 14 new phrases since your last visit. Keep it up!</p>
      </header>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* My Progress Section (Large) */}
        <section className="lg:col-span-2 flex flex-col gap-6">
          <ProgressCard />

          {/* Continue Learning Section */}
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-on-surface">Continue Learning</h2>
              <button className="text-primary font-semibold hover:underline text-sm">View all modules</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {lessons.map((lesson, index) => (
                <LessonCard key={index} {...lesson} />
              ))}
            </div>
          </div>
        </section>

        {/* Sidebar Widgets */}
        <section className="flex flex-col gap-8">
          <DailyGoals />
          <RecommendationCard />
        </section>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
