import React from 'react';

const ShadowingWidget = () => {
  return (
    <div className="bg-primary text-on-primary p-8 rounded-lg shadow-2xl relative overflow-hidden">
      <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="font-headline text-lg font-bold">Shadowing Mode</h3>
            <p className="text-on-primary-container text-xs font-medium">Record and match the waveform</p>
          </div>
          <span className="material-symbols-outlined bg-white/10 p-2 rounded-lg">mic</span>
        </div>
        {/* Waveform Mock */}
        <div className="flex items-center justify-center gap-1 h-24 mb-6">
          <div className="w-1.5 h-8 bg-on-tertiary-container rounded-full opacity-40"></div>
          <div className="w-1.5 h-12 bg-on-tertiary-container rounded-full opacity-60"></div>
          <div className="w-1.5 h-16 bg-on-tertiary-container rounded-full opacity-80"></div>
          <div className="w-1.5 h-20 bg-on-tertiary-container rounded-full shadow-[0_0_12px_rgba(63,210,152,0.8)]"></div>
          <div className="w-1.5 h-14 bg-on-tertiary-container rounded-full opacity-80"></div>
          <div className="w-1.5 h-18 bg-on-tertiary-container rounded-full opacity-60"></div>
          <div className="w-1.5 h-10 bg-on-tertiary-container rounded-full opacity-40"></div>
          <div className="w-1.5 h-6 bg-on-tertiary-container rounded-full opacity-20"></div>
          <div className="w-1.5 h-12 bg-on-tertiary-container rounded-full opacity-40"></div>
          <div className="w-1.5 h-14 bg-on-tertiary-container rounded-full opacity-60"></div>
        </div>
        <div className="flex justify-center">
          <button className="flex items-center justify-center w-16 h-16 bg-white rounded-full text-primary shadow-xl hover:scale-105 active:scale-95 transition-all group">
            <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">fiber_manual_record</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShadowingWidget;
