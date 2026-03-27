import React from 'react';
import PracticeNavbar from '../components/practice/PracticeNavbar';
import VideoPlayer from '../components/practice/VideoPlayer';
import LearningWorkspace from '../components/practice/LearningWorkspace';
import ShadowingWidget from '../components/practice/ShadowingWidget';
import FeedbackWidget from '../components/practice/FeedbackWidget';
import FocusNavigation from '../components/practice/FocusNavigation';

const PracticeSessionPage = () => {
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      <PracticeNavbar />
      <main className="pt-24 pb-12 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Player & Focus Area */}
          <div className="lg:col-span-7 space-y-8">
            <VideoPlayer />
            <LearningWorkspace />
          </div>
          {/* Real-time Feedback & Shadowing Widget */}
          <div className="lg:col-span-5 space-y-6">
            <ShadowingWidget />
            <FeedbackWidget />
          </div>
        </div>
      </main>
      <FocusNavigation />
      {/* Background Decoration for 'Luminous Path' aesthetic */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30vw] h-[30vw] bg-tertiary-fixed-dim/5 rounded-full blur-[100px]"></div>
      </div>
    </div>
  );
};

export default PracticeSessionPage;
