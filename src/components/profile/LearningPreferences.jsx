import React from 'react';

const LANGUAGES = [
  { key: 'english', label: 'English', color: 'bg-blue-600' },
  { key: 'french', label: 'French', color: 'bg-indigo-600' },
  { key: 'japanese', label: 'Japanese', color: 'bg-red-600' },
];

const LearningPreferences = ({ targetLanguage, dailyGoalMinutes, onTargetLanguageChange, onDailyGoalChange }) => {
  return (
    <div className="md:col-span-12 bg-surface-container-low p-8 rounded-xl space-y-6">
      <h3 className="text-xl font-bold text-primary-container">Learning Preferences</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <label className="block text-sm font-bold text-on-surface-variant tracking-wide uppercase">Target Language</label>
          <div className="grid grid-cols-2 gap-3">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.key}
                className={`flex items-center gap-3 p-3 rounded-lg bg-surface-container-lowest border-2 font-medium transition-colors ${
                  targetLanguage === lang.key
                    ? 'border-primary text-primary font-bold shadow-sm'
                    : 'border-transparent text-on-surface-variant hover:border-outline-variant'
                }`}
                type="button"
                onClick={() => onTargetLanguageChange(lang.key)}
              >
                <span className={`w-6 h-4 ${lang.color} rounded-sm`}></span> {lang.label}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <label className="block text-sm font-bold text-on-surface-variant tracking-wide uppercase">Daily Goal</label>
          <div className="flex items-center gap-4">
            <input
              className="w-full h-2 bg-surface-container-highest rounded-full appearance-none cursor-pointer accent-primary"
              type="range"
              min="5"
              max="120"
              step="5"
              value={dailyGoalMinutes}
              onChange={(e) => onDailyGoalChange(Number(e.target.value))}
            />
            <span className="font-bold text-primary w-20 text-right">{dailyGoalMinutes} min</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPreferences;
