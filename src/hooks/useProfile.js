import { useState, useEffect, useCallback } from 'react';
import profileService from '../services/profileService';

export default function useProfile() {
  const [profile, setProfile] = useState(null);
  const [form, setForm] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const fetchProfile = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await profileService.getProfile();
      setProfile(data);
      setForm({
        display_name: data.display_name || '',
        username: data.username || '',
        bio: data.bio || '',
        target_language: data.target_language || 'english',
        daily_goal_minutes: data.daily_goal_minutes || 20,
      });
    } catch (err) {
      setError(err.message || 'Failed to load profile');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => { fetchProfile(); }, [fetchProfile]);

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const save = async () => {
    setIsSaving(true);
    setError(null);
    setSuccess(null);
    try {
      const data = await profileService.updateProfile(form);
      setProfile(data);
      setSuccess('Profile updated successfully');
    } catch (err) {
      setError(err.message || 'Failed to save profile');
    } finally {
      setIsSaving(false);
    }
  };

  const cancel = () => {
    if (profile) {
      setForm({
        display_name: profile.display_name || '',
        username: profile.username || '',
        bio: profile.bio || '',
        target_language: profile.target_language || 'english',
        daily_goal_minutes: profile.daily_goal_minutes || 20,
      });
    }
    setError(null);
    setSuccess(null);
  };

  return { profile, form, isLoading, isSaving, error, success, updateField, save, cancel, setSuccess, setError };
}
