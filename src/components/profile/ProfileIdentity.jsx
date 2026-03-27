import React from 'react';

const ProfileIdentity = () => {
  return (
    <div className="md:col-span-8 bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.04)] space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-bold text-on-surface-variant tracking-wide uppercase">Full Name</label>
        <input
          className="w-full px-4 py-3 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-on-surface font-medium placeholder:text-outline"
          type="text"
          defaultValue="Elena Rodriguez"
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-bold text-on-surface-variant tracking-wide uppercase">Username</label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant font-bold">@</span>
          <input
            className="w-full pl-8 pr-4 py-3 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-on-surface font-medium"
            type="text"
            defaultValue="elena_codes"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileIdentity;
