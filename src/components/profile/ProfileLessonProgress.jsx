import React, { useState } from 'react';

const ProfileLessonProgress = () => {
  const [activeTab, setActiveTab] = useState('Dictation');

  const progressData = [
    { name: 'BEGINNER FUNDAMENTALS', percentage: 100, color: 'bg-tertiary-fixed-dim' },
    { name: 'INTERMEDIATE NARRATIVE', percentage: 68, color: 'bg-primary' },
    { name: 'ADVANCED EDITORIAL ANALYSIS', percentage: 12, color: 'bg-primary' }
  ];

  return (
    <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_32px_rgba(21,28,37,0.06)]">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-xl font-bold text-on-surface">Lesson Progress</h2>
        <div className="flex bg-surface-container-low p-1 rounded-full">
          {['Dictation', 'Shadowing'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeTab === tab
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-10">
        {progressData.map((item, idx) => (
          <div key={idx} className="space-y-3">
            <div className="flex justify-between items-center text-xs font-bold tracking-widest uppercase text-on-surface-variant">
              <span>{item.name}</span>
              <span className={item.percentage === 100 ? 'text-primary' : ''}>{item.percentage}%</span>
            </div>
            <div className="h-2.5 bg-surface-container-high rounded-full overflow-hidden">
              <div
                className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileLessonProgress;
