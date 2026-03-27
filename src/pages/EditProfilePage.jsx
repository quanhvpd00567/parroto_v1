import React from 'react';
import ProfileAvatar from '../components/profile/ProfileAvatar';
import ProfileIdentity from '../components/profile/ProfileIdentity';
import ProfileBio from '../components/profile/ProfileBio';
import LearningPreferences from '../components/profile/LearningPreferences';
import ProfileActions from '../components/profile/ProfileActions';

const EditProfilePage = () => {
  return (
    <div className="bg-background text-on-surface min-h-screen pt-24 pb-24 md:pb-12">
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-[#F8F9FF]/70 backdrop-blur-lg shadow-[0_8px_32px_rgba(21,28,37,0.06)]">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-extrabold tracking-tight text-[#00288E]">Luminous</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-[#444653] hover:opacity-70 transition-opacity font-headline font-bold text-lg" href="#">Learn</a>
          <a className="text-[#444653] hover:opacity-70 transition-opacity font-headline font-bold text-lg" href="#">Review</a>
          <a className="text-[#444653] hover:opacity-70 transition-opacity font-headline font-bold text-lg" href="#">Vocabulary</a>
          <a className="text-[#00288E] font-bold font-headline text-lg" href="#">Profile</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-[#00288E] text-2xl active:scale-95 duration-200">account_circle</button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-primary tracking-tight mb-2 font-headline">Edit Profile</h1>
          <p className="text-on-surface-variant font-medium">Personalize your luminous learning experience.</p>
        </div>

        {/* Form Layout - Bento Style Cards */}
        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <ProfileAvatar />
            <ProfileIdentity />
            <ProfileBio />
            <LearningPreferences />
          </div>
          <ProfileActions />
        </form>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-[#FFFFFF]/80 backdrop-blur-xl shadow-[0_-8px_40px_rgba(0,0,0,0.04)] rounded-t-[3rem]">
        <a className="flex flex-col items-center justify-center text-[#444653] opacity-60 hover:opacity-100 transition-all active:scale-90 duration-150" href="#">
          <span className="material-symbols-outlined">auto_stories</span>
          <span className="font-body text-[11px] font-semibold uppercase tracking-wider mt-1">Learn</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#444653] opacity-60 hover:opacity-100 transition-all active:scale-90 duration-150" href="#">
          <span className="material-symbols-outlined">psychology</span>
          <span className="font-body text-[11px] font-semibold uppercase tracking-wider mt-1">Review</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#444653] opacity-60 hover:opacity-100 transition-all active:scale-90 duration-150" href="#">
          <span className="material-symbols-outlined">menu_book</span>
          <span className="font-body text-[11px] font-semibold uppercase tracking-wider mt-1">Vocabulary</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#00288E] scale-110 transition-transform active:scale-90 duration-150" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
          <span className="font-body text-[11px] font-semibold uppercase tracking-wider mt-1">Profile</span>
        </a>
      </nav>
    </div>
  );
};

export default EditProfilePage;
