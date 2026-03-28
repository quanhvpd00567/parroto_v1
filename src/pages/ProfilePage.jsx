import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import ProfileHero from '../components/profile/ProfileHero';
import ProfileStats from '../components/profile/ProfileStats';
import ProfileStreak from '../components/profile/ProfileStreak';
import ProfileLessonProgress from '../components/profile/ProfileLessonProgress';
import ProfileSidebar from '../components/profile/ProfileSidebar';
import useProfile from '../hooks/useProfile';

const ProfilePage = () => {
  const { profile, isLoading } = useProfile();

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center py-32">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto py-8 flex flex-col gap-12">
        <ProfileHero profile={profile} />

        <ProfileStats />
        <ProfileStreak />
        <ProfileLessonProgress />

        <ProfileSidebar
          dailyGoal={profile?.daily_goal_minutes || 15}
          totalGoal={20}
        />
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;
