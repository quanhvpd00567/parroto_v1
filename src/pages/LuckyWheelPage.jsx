import React, { useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import LuckyWheel from '../components/LuckyWheel';

const LuckyWheelPage = () => {
  const [lastWinner, setLastWinner] = useState(null);

  const handleSpinEnd = (winner) => {
    setLastWinner(winner);
    // In a real app, you might trigger a toast or update user diamonds here
  };

  const recentWinners = [
    { name: 'Julian D.', prize: '500 Diamonds', initials: 'JD', color: 'bg-secondary-fixed' },
    { name: 'Sarah K.', prize: '100 Diamonds', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtVP2nERYxdHcFIQ5-zfVMtgxsVw_36PHc7wywjU1vn_92Tk3d2gZKw-X57X_FYwRzmVX3yj0RCcAF7-p3zYZTst14-PI5K4YIYWasLCm2besX_7LyFQ7GTqY1Md_K1CPt2sroHTuHwIRflpFrz2Us3gTXtuJtvtUw-1itg0NNqtsRj5zfn6aayaVcQ2PvQ0xYHo-ApCrgi2_aFpHED33B9mIVidNSJIcZKK7Y14t1qXBpm7R8ZV_XmtG8o_EBrZbc1YglbjXoWSMr' },
    { name: 'Alex M.', prize: '1,000 Diamonds', initials: 'AM', color: 'bg-surface-container' },
  ];

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start min-h-[800px] mb-24">
        {/* Left Info Panel */}
        <div className="lg:col-span-4 space-y-10">
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container/10 text-primary font-bold text-[10px] uppercase tracking-widest border border-primary/10">Limited Time Event</span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-primary tracking-tighter leading-[0.95]">
              Spin for <br/><span className="text-secondary italic">Fortune.</span>
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-sm">
              Master your vocabulary and earn rare diamonds. Every spin is a curated step closer to linguistic mastery.
            </p>
          </div>

          {/* Daily Free Spins Card */}
          <div className="p-8 md:p-10 rounded-[2rem] bg-white border border-surface-container-high shadow-[0_8px_32px_rgba(0,40,142,0.04)] relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-headline font-bold text-xl text-on-surface">Daily Reward</h3>
                <span className="text-xs font-bold text-on-surface-variant bg-surface-container-low px-3 py-1 rounded-full">1 left</span>
              </div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-sm font-bold">check</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-sm font-bold">check</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant border border-dashed border-outline-variant">
                  <span className="text-xs font-bold">3</span>
                </div>
              </div>
              <button className="w-full py-4 bg-[#1E40AF] text-white font-bold rounded-2xl active:scale-[0.98] transition-all shadow-xl shadow-primary/20 hover:bg-[#1e3a8a] cursor-pointer">
                CLAIM DAILY REWARD
              </button>
            </div>
          </div>
        </div>

        {/* Central Wheel */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-8">
          <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-pulse"></div>
          </div>
          <LuckyWheel onSpinEnd={handleSpinEnd} />
          {lastWinner && (
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full border border-primary/20 shadow-xl animate-bounce">
              <p className="text-primary font-bold">You won: <span className="text-secondary">{lastWinner}</span>!</p>
            </div>
          )}
        </div>

        {/* Right Winners Panel */}
        <div className="lg:col-span-3">
          <div className="rounded-[2rem] bg-white p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,40,142,0.08)] border border-surface-container-high">
            <h3 className="font-headline font-extrabold text-lg mb-8 text-primary flex items-center gap-3">
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              Recent Hall of Fame
            </h3>
            <div className="space-y-6">
              {recentWinners.map((winner, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  {winner.avatar ? (
                    <div className="w-12 h-12 rounded-full ring-2 ring-primary/10 overflow-hidden border-2 border-white shadow-sm">
                      <img src={winner.avatar} alt={winner.name} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className={`w-12 h-12 rounded-full ${winner.color} flex items-center justify-center font-bold text-on-surface text-sm border-2 border-white shadow-sm uppercase`}>
                      {winner.initials}
                    </div>
                  )}
                  <div className="space-y-0.5">
                    <p className="text-sm font-bold text-on-surface">{winner.name}</p>
                    <p className="text-[11px] font-semibold text-on-surface-variant flex items-center gap-1.5 uppercase tracking-wider">
                      <span className="material-symbols-outlined text-[14px] text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
                      {winner.prize}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-3.5 text-[11px] font-extrabold text-primary hover:bg-primary-fixed/50 transition-colors rounded-xl uppercase tracking-widest border border-primary/5 cursor-pointer">
              VIEW GLOBAL RANKINGS
            </button>
          </div>
        </div>
      </div>

      {/* Prize Pool Bento Grid */}
      <section className="space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-on-surface tracking-tight">Linguistic Treasures</h2>
          <p className="text-on-surface-variant text-lg">Curated rewards designed to accelerate your journey to proficiency.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 rounded-[2.5rem] bg-white border border-surface-container-high transition-all hover:shadow-2xl hover:shadow-primary/5 group">
            <div className="w-14 h-14 rounded-2xl bg-primary-container/20 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">dictionary</span>
            </div>
            <h4 className="font-headline font-bold text-2xl mb-4">Rare Words</h4>
            <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">Unlock sophisticated vocabulary terms curated by linguists to enhance your daily communication.</p>
          </div>

          <div className="p-10 rounded-[2.5rem] bg-white border border-surface-container-high transition-all hover:shadow-2xl hover:shadow-primary/5 group">
            <div className="w-14 h-14 rounded-2xl bg-secondary-fixed/30 flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
            </div>
            <h4 className="font-headline font-bold text-2xl mb-4">Diamond Packs</h4>
            <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">Gain premium currency to access advanced courses, private tutoring modules, and rare study materials.</p>
          </div>

          <div className="p-10 rounded-[2.5rem] bg-white border border-surface-container-high transition-all hover:shadow-2xl hover:shadow-primary/5 group">
            <div className="w-14 h-14 rounded-2xl bg-tertiary-fixed/30 flex items-center justify-center mb-8 group-hover:bg-tertiary-container group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">auto_awesome</span>
            </div>
            <h4 className="font-headline font-bold text-2xl mb-4">Mastery Boosts</h4>
            <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">Temporary experience multipliers and infinite life tokens to help you push through challenging modules.</p>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default LuckyWheelPage;
