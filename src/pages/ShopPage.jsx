import React, { useState, useEffect } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import profileService from '../services/profileService';

const ShopPage = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    profileService.getProfile()
      .then(setUserProfile)
      .catch(() => {});
  }, []);

  const avatars = [
    {
      id: 1,
      name: 'Cyber Polyglot',
      price: 2500,
      tier: 'Legendary',
      tierClass: 'bg-amber-400 text-amber-900',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYbJ-X1HpDxsQ0mCT5Ch5tLZt63ocdAArULDeIxhYPd7IYyyvZeBaq3fMhEQpKXZo_kPTiTfl7c-tYA0ogdfrhqk_rJpPPkUTCZChCAYqQ_wuLrnrJfARq7R33Nnk_KMsRG9G1F6JIpi-RIWf_cmPLgAP89rTo8HjIfYTDnb7SSpub_ZVBNyeyetXiHQ1Wso0kuvkJNTz6Urz9C9Czor9TI90wx2IcDGxYj4QTDcMLiYo7R5HoklRZ2WqTiIujDflWoS6iVM2-47h1'
    },
    {
      id: 2,
      name: 'Zen Scholar',
      price: 1200,
      tier: 'Rare',
      tierClass: 'bg-purple-500 text-white',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDK_SJYKSXdhY9UgvmvVkKg0eO0-Gnn8wA2LH9wJeMaO5I48W9nsc1HLeBCsirX-B9n1PIoGZDoB94dk4azWCm39lLezgXJiQXg6N0Pki095pux79b_E4g0yycXvc1CDH1VyGG2R7KRf-FUVoXMGA4P32Sx6G8BOUfXBHLBK0_8cD6GRAb8WGPRcDFW8qeUuZei2MGv6sKwl1uKYZjyNAsfw0h8OHAvNkDq-QeDc7VTKXL5iosslvU5txS1BPKDmZjMX8ocAk2sIhR7'
    },
    {
      id: 3,
      name: 'Deep Sea Talker',
      price: 500,
      tier: 'Common',
      tierClass: 'bg-slate-300 text-slate-700',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbXUw88qRySEGKX_aTMrL7SGTgszprHquDwMcpvUVl1-f6_-szrt531zVrtMoSIVraY0GKi3vzfW3TUroTeSuz7ua1jLwKSEUj4iM-e66T1cuwWJQlo70JgRbpRQQDv_wpsGIGo5MgDWonBfAZ3C_Tx9Ek2G3qW39xRmzxFunsVMHmGSa2Mvbsdfz6WYJvWPBR-hYGbaavZjojGIa7UUALO5m0snB6p3fIJBJGYm9inH4hZN6qGCy494xhuJdMMdRr6Pt9SiQe8afp'
    },
    {
      id: 4,
      name: 'Solar Scribe',
      price: 1450,
      tier: 'Rare',
      tierClass: 'bg-purple-500 text-white',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFDVGywthOCTYgyw-Tub2CK6ENPiuMdRZ1kQ8-ErsGn9FwQudBLbuz1PcZBhVJk8UTEPiUkzSWNGEhxyHd2PoDB78K_yMihDKcom-_Tzqc7XPI1E3EiWbGiUjRq2TO-ds4glS5F5bElhUl3h7O9dOCtOoTIK4fcJk4bPVyrrgyg3UTvL3GQ-rYcGuGnGK9BedomUQ9yoR2al3cXVN6HGKw4dvAijrKD3LkBHxA_6MZZ8b3u5BM8wRD6HYbhl-sna1k-gEjJJojeAII'
    }
  ];

  const badges = [
    {
      id: 1,
      name: 'Early Bird',
      tier: 'Legendary',
      price: 1000,
      icon: 'military_tech',
      color: 'amber',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-100',
      iconColor: 'text-amber-500'
    },
    {
      id: 2,
      name: 'Polyglot Pro',
      tier: 'Rare',
      price: 600,
      icon: 'translate',
      color: 'blue',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-100',
      iconColor: 'text-blue-500'
    },
    {
      id: 3,
      name: 'Speed Learner',
      tier: 'Common',
      price: 300,
      icon: 'rocket_launch',
      color: 'emerald',
      bgColor: 'bg-tertiary-fixed-dim/20',
      borderColor: 'border-tertiary-fixed-dim/30',
      iconColor: 'text-on-tertiary-fixed-variant'
    },
    {
      id: 4,
      name: 'Streak King',
      tier: 'Rare',
      price: 850,
      icon: 'trophy',
      color: 'orange',
      bgColor: 'bg-secondary-fixed',
      borderColor: 'border-secondary-fixed-dim',
      iconColor: 'text-on-secondary-fixed-variant'
    }
  ];

  return (
    <DashboardLayout>
      <div className="pb-24">
        {/* Hero Balance Section */}
        <section className="mb-12 relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-container p-8 md:p-12 text-on-primary">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h1 className="font-headline text-3xl md:text-4xl font-extrabold mb-2 tracking-tight">The Parroto Treasury</h1>
              <p className="text-blue-100 opacity-90 max-w-md">Redeem your hard-earned gems and points for exclusive collectibles and powerful learning boosts.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 min-w-[140px]">
                <p className="text-[11px] font-bold uppercase tracking-wider opacity-70 mb-1">Gems Balance</p>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-amber-400" style={{ fontVariationSettings: "'FILL' 1" }}>toll</span>
                  <span className="text-2xl font-black">{userProfile?.xp || 0}</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 min-w-[140px]">
                <p className="text-[11px] font-bold uppercase tracking-wider opacity-70 mb-1">Total Points</p>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-blue-300" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                  <span className="text-2xl font-black">{Math.floor((userProfile?.xp || 0) / 2.5)}</span>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -right-12 -top-12 w-64 h-64 bg-tertiary-fixed-dim/20 rounded-full blur-3xl"></div>
        </section>

        {/* Category: Avatars */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-headline text-2xl font-extrabold text-blue-900 tracking-tight">Limited Edition Avatars</h2>
              <p className="text-on-surface-variant text-sm mt-1">Express your linguistic identity with unique profile art.</p>
            </div>
            <button className="text-primary font-bold text-sm hover:underline">View All</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {avatars.map((avatar) => (
              <div key={avatar.id} className="bg-surface-container-low rounded-xl overflow-hidden group">
                <div className="aspect-square relative overflow-hidden">
                  <img src={avatar.image} alt={avatar.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-3 left-3">
                    <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-full shadow-sm ${avatar.tierClass}`}>{avatar.tier}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-on-surface truncate">{avatar.name}</h4>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-blue-500 text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                      <span className="text-xs font-bold text-on-surface-variant">{avatar.price.toLocaleString()}</span>
                    </div>
                    <button className="bg-surface-container-highest text-primary font-bold text-[11px] px-3 py-1.5 rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer">Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category: Badges */}
        <section className="mb-12">
          <div className="bg-surface-container-high rounded-xl p-8 md:p-12 overflow-hidden relative">
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                  <h2 className="font-headline text-2xl font-extrabold text-blue-900 tracking-tight">Displayable Badges</h2>
                  <p className="text-on-surface-variant text-sm mt-1">Showcase your achievements on your public profile.</p>
                </div>
                <div className="flex gap-2">
                  <button className="bg-white/50 p-2 rounded-full hover:bg-white transition-colors cursor-pointer">
                    <span className="material-symbols-outlined">arrow_back</span>
                  </button>
                  <button className="bg-white/50 p-2 rounded-full hover:bg-white transition-colors cursor-pointer">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
              <div className="flex gap-8 overflow-x-auto pb-4 no-scrollbar">
                {badges.map((badge) => (
                  <div key={badge.id} className="flex-shrink-0 w-48 bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-sm">
                    <div className={`w-20 h-20 mb-4 ${badge.bgColor} rounded-full flex items-center justify-center border-4 ${badge.borderColor}`}>
                      <span className={`material-symbols-outlined ${badge.iconColor} text-4xl`} style={{ fontVariationSettings: "'FILL' 1" }}>{badge.icon}</span>
                    </div>
                    <h5 className="font-bold text-sm mb-1">{badge.name}</h5>
                    <span className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest mb-4">{badge.tier}</span>
                    <div className="mt-auto w-full">
                      <div className="flex items-center justify-center gap-1 mb-3">
                        <span className="material-symbols-outlined text-amber-500 text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>toll</span>
                        <span className="text-xs font-bold">{badge.price.toLocaleString()}</span>
                      </div>
                      <button className="w-full py-2 bg-surface-container-low rounded-full text-[11px] font-bold text-primary hover:bg-primary hover:text-white transition-all cursor-pointer">Redeem</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Background Decoration */}
            <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10 flex items-end justify-end pointer-events-none">
              <span className="material-symbols-outlined text-[300px]">shopping_bag</span>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default ShopPage;
