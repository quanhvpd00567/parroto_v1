import React from 'react';

const LearningPreferences = () => {
  return (
    <div className="md:col-span-12 bg-surface-container-low p-8 rounded-xl space-y-6">
      <h3 className="text-xl font-bold text-primary-container">Learning Preferences</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <label className="block text-sm font-bold text-on-surface-variant tracking-wide uppercase">Target Language</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-lowest border-2 border-primary text-primary font-bold shadow-sm"
              type="button"
            >
              <span className="w-6 h-4 bg-blue-600 rounded-sm"></span> French
            </button>
            <button
              className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-lowest border-2 border-transparent text-on-surface-variant font-medium hover:border-outline-variant transition-colors"
              type="button"
            >
              <span className="w-6 h-4 bg-red-600 rounded-sm"></span> Japanese
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <label className="block text-sm font-bold text-on-surface-variant tracking-wide uppercase">Daily Goal</label>
          <div className="flex items-center gap-4">
            <input
              className="w-full h-2 bg-surface-container-highest rounded-full appearance-none cursor-pointer accent-primary"
              type="range"
            />
            <span className="font-bold text-primary w-16">20 min</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPreferences;
