import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileHero = ({ profile }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_32px_rgba(21,28,37,0.06)] flex items-center gap-8 mb-8">
      <div className="relative group">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary-container overflow-hidden border-4 border-white shadow-lg">
          <img
            src={profile?.avatar_url || "https://lh3.googleusercontent.com/aida-public/AB6AXuDNJXr-lf8Qgb5pxPwSfvEBkq5p-KNAO3U63g9zFwJi3XoTlTAiemE1FI3jWFWR1bfISUdeaKLVDyRGE7jFbCQkL-Puj-VDg9PqMgk4bTaYZjkhs4pVWtxjdzf_P62iK3xLfHxV36jHnI1Jl2oMCYP-cKUI8m9mSssJiKs8tsWmTJ2HUSuGFSGIhO9HKZTQkVw-uFyvtv-hiEIjYVg0mIGf3w17vTU33mdj9yh0p949K531E0JTLKh5QsTw8VGXMu6buPzjphDjhsoz"}
            alt="Profile Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <button
          onClick={() => navigate('/profile/edit')}
          className="absolute bottom-0 right-0 w-8 h-8 bg-primary text-white rounded-full border-2 border-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
        >
          <span className="material-symbols-outlined text-[18px]">edit</span>
        </button>
      </div>

      <div className="flex-grow">
        <h1 className="text-3xl font-extrabold text-on-surface font-headline mb-1">
          {profile?.display_name || 'Elena Rostova'}
        </h1>
        <p className="text-on-surface-variant font-medium mb-4">
          {profile?.bio || 'Polylingual Enthusiast'} • Level {Math.floor((profile?.xp || 0) / 100) || 42}
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/profile/edit')}
            className="px-6 py-2.5 bg-primary text-white rounded-lg font-bold hover:bg-primary-container transition-all active:scale-95"
          >
            Edit Profile
          </button>
          <button className="px-6 py-2.5 bg-surface-container-low text-primary rounded-lg font-bold hover:bg-surface-container-high transition-all active:scale-95">
            Share Progress
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHero;
