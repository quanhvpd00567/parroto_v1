import React, { useState } from 'react';
import profileService from '../../services/profileService';
import { useToast } from '../../contexts/ToastContext';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { addToast } = useToast();

  const handleSubmit = async () => {
    if (!currentPassword || !newPassword) {
      addToast('Please fill in all fields', 'warning');
      return;
    }
    if (newPassword.length < 8) {
      addToast('New password must be at least 8 characters', 'warning');
      return;
    }
    if (newPassword !== confirmPassword) {
      addToast('New passwords do not match', 'danger');
      return;
    }

    setIsLoading(true);
    try {
      await profileService.changePassword(currentPassword, newPassword);
      addToast('Password changed successfully', 'success');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      addToast(err.message || 'Failed to change password', 'danger');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="md:col-span-12 bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.04)] space-y-6">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-primary">lock</span>
        <h3 className="text-xl font-bold text-primary-container">Change Password</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-bold text-on-surface-variant tracking-wide uppercase">Current Password</label>
          <input
            className="w-full px-4 py-3 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-on-surface font-medium"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="••••••••"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-bold text-on-surface-variant tracking-wide uppercase">New Password</label>
          <input
            className="w-full px-4 py-3 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-on-surface font-medium"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="••••••••"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-bold text-on-surface-variant tracking-wide uppercase">Confirm Password</label>
          <input
            className="w-full px-4 py-3 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-on-surface font-medium"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isLoading}
          className="px-8 py-3 bg-primary text-on-primary font-bold rounded-xl hover:brightness-110 active:scale-95 transition-all disabled:opacity-50"
        >
          {isLoading ? 'Changing...' : 'Change Password'}
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
