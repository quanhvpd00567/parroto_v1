import React from 'react';

const ProfileIdentity = ({ displayName, email, onDisplayNameChange }) => {
  return (
    <div className="md:col-span-8 bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.04)] space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-bold text-on-surface-variant tracking-wide uppercase">Full Name</label>
        <input
          className="w-full px-4 py-3 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-on-surface font-medium placeholder:text-outline"
          type="text"
          value={displayName}
          onChange={(e) => onDisplayNameChange(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-bold text-on-surface-variant tracking-wide uppercase">Email</label>
        <input
          className="w-full px-4 py-3 bg-surface-container-low border-none rounded-lg text-on-surface/60 font-medium cursor-not-allowed"
          type="email"
          value={email}
          disabled
        />
      </div>
    </div>
  );
};

export default ProfileIdentity;
