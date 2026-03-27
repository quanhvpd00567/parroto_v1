import React from 'react';

const RecommendationCard = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold px-2">Recommended for You</h2>
      <div className="relative overflow-hidden p-2">
        <div className="bg-surface-container-highest p-6 rounded-xl relative overflow-hidden h-48 flex items-end">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiqs2OfAGNbuI069uwZE8nxf7UMx8HZbot7V1cTp8uu0lzXdIS8h8cI-x2NQWQmte3Gwd7ZeIbn4_1szpJDd8y1i5Vojtqz5tTDZhZ4AKSdJ8a_pMXr660eppzT9ixUgdKgTjxRdWe5HOdRPAZgIWfRwXTl2zmxIswlCiNoNI2Z7WUWO2zuLLDgS1pKR0v6Mda-07n4-n8Q5BuE_A-QGCyMxpQKy5HmRyhl6LFu3FsUnz38gzWt7QlW4ZFM8FrkvmDwp4i2I2EGhba')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
          </div>
          <div className="relative z-10 text-white">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-secondary px-2 py-0.5 rounded-full mb-2 inline-block">New Lesson</span>
            <h3 className="font-bold text-lg leading-tight">Social Nuances in Madrid</h3>
            <p className="text-xs opacity-80">12 mins • Intermediate</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-center">
        <div className="w-6 h-1 bg-primary rounded-full"></div>
        <div className="w-2 h-1 bg-outline-variant rounded-full"></div>
        <div className="w-2 h-1 bg-outline-variant rounded-full"></div>
      </div>
    </div>
  );
};

export default RecommendationCard;
