import React from 'react';

const ProfileAvatar = () => {
  return (
    <div className="md:col-span-4 bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center space-y-4">
      <div className="relative group">
        <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-surface-container-low">
          <img
            className="w-full h-full object-cover"
            alt="User avatar"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKgNitD-5JFoIXLz3UGGdGcc_G8t7U6DkHRJ-0ARcM4oi7z0YbaoEIWhLERVSrDxobpvLTLuGHOD2ukiwUV4BdpGaebzXaVcq6kGzs9es6ljzD_HsBcZ4Ua0DnqDBvgEP1YEVfQVlhydjkezOWgFOqlQy5A9eawLuGMhelP2FyzvTUw27lPKYbyBX6dpRkXPLDBvH1UbQwwZZvatkcWFg3MGcFA6EaAewV1kUSBNU73Alp0Aik2gofQvU8zXBzya-_mYJeSZHzTWAw"
          />
        </div>
        <button
          className="absolute bottom-0 right-0 bg-primary text-on-primary p-2 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform"
          type="button"
        >
          <span className="material-symbols-outlined text-sm">edit</span>
        </button>
      </div>
      <div className="text-center">
        <span className="block text-sm font-bold text-primary uppercase tracking-widest">Profile Photo</span>
        <p className="text-xs text-on-surface-variant mt-1">PNG or JPG, max 5MB</p>
      </div>
    </div>
  );
};

export default ProfileAvatar;
