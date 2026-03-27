import React from 'react';

const ProfileBio = () => {
  return (
    <div className="md:col-span-12 bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.04)] space-y-4">
      <label className="block text-sm font-bold text-on-surface-variant tracking-wide uppercase">Bio</label>
      <textarea
        className="w-full px-4 py-3 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-on-surface font-medium resize-none"
        placeholder="Tell us about your language journey..."
        rows="4"
        defaultValue="Polyglot in the making. Currently mastering French and exploring the nuances of Japanese culture. Lover of linguistics and travel."
      ></textarea>
    </div>
  );
};

export default ProfileBio;
