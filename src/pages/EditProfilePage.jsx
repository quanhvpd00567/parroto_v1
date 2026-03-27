import React, { useEffect } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import ProfileAvatar from '../components/profile/ProfileAvatar';
import ProfileIdentity from '../components/profile/ProfileIdentity';
import ProfileBio from '../components/profile/ProfileBio';
import LearningPreferences from '../components/profile/LearningPreferences';
import ProfileActions from '../components/profile/ProfileActions';
import ChangePassword from '../components/profile/ChangePassword';
import useProfile from '../hooks/useProfile';
import { useToast } from '../contexts/ToastContext';

const EditProfilePage = () => {
  const { profile, form, isLoading, isSaving, error, success, updateField, save, cancel, setError, setSuccess } = useProfile();
  const { addToast } = useToast();

  useEffect(() => {
    if (success) {
      addToast(success, 'success');
      setSuccess(null);
    }
  }, [success, addToast, setSuccess]);

  useEffect(() => {
    if (error) {
      addToast(error, 'danger');
      setError(null);
    }
  }, [error, addToast, setError]);

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
      <div className="max-w-4xl mx-auto py-6">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-primary tracking-tight mb-2 font-headline">Edit Profile</h1>
          <p className="text-on-surface-variant font-medium">Personalize your luminous learning experience.</p>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <ProfileAvatar avatarUrl={profile?.avatar_url} />
            <ProfileIdentity
              displayName={form?.display_name || ''}
              email={profile?.email || ''}
              onDisplayNameChange={(v) => updateField('display_name', v)}
            />
            <ProfileBio
              bio={form?.bio || ''}
              onBioChange={(v) => updateField('bio', v)}
            />
            <LearningPreferences
              targetLanguage={form?.target_language || 'english'}
              dailyGoalMinutes={form?.daily_goal_minutes || 20}
              onTargetLanguageChange={(v) => updateField('target_language', v)}
              onDailyGoalChange={(v) => updateField('daily_goal_minutes', v)}
            />
          </div>
          <ProfileActions onSave={save} onCancel={cancel} isSaving={isSaving} />

          <div className="border-t border-outline-variant/20 pt-8">
            <ChangePassword />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EditProfilePage;
