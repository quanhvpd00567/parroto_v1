import React from 'react';

const DailyGoals = () => {
  const goals = [
    { title: "15 mins active learning", subtitle: "Completed 18/15 mins", completed: true },
    { title: "Learn 5 new words", subtitle: "Completed 2/5 words", completed: false },
    { title: "Practice pronunciation", subtitle: "Not started", completed: false },
  ];

  return (
    <div className="bg-surface-container-low p-8 rounded-xl flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
        <h2 className="text-xl font-bold">Daily Goals</h2>
      </div>
      <div className="flex flex-col gap-4">
        {goals.map((goal, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className={`w-6 h-6 rounded-md border-2 ${goal.completed ? 'border-tertiary-fixed-dim bg-tertiary-fixed-dim' : 'border-outline-variant'} flex items-center justify-center`}>
              {goal.completed && <span className="material-symbols-outlined text-on-tertiary-fixed-variant text-sm font-bold">check</span>}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">{goal.title}</p>
              <p className="text-[10px] text-on-surface-variant">{goal.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 w-full py-3 bg-white text-primary font-bold rounded-xl text-sm border border-primary/10 hover:bg-primary-container hover:text-white transition-all">Claim Daily Reward</button>
    </div>
  );
};

export default DailyGoals;
