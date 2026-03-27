import React from 'react';

const LandingHero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <span className="inline-block py-1 px-4 rounded-full bg-secondary-fixed text-on-secondary-fixed font-semibold text-sm mb-6 tracking-wide">PHƯƠNG PHÁP ĐỘT PHÁ</span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-primary-fixed leading-[1.1] mb-8">
            Luyện Nghe Nói Tiếng Anh với <span className="text-secondary">Dictation</span> và <span className="text-primary-container">Shadowing</span>
          </h1>
          <p className="text-on-surface-variant text-xl leading-relaxed mb-10 max-w-xl">
            Nâng tầm khả năng ngoại ngữ của bạn thông qua việc nghe chép chính tả và nhại giọng người bản xứ một cách tự nhiên và khoa học.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-gradient text-white text-lg font-bold px-10 py-5 rounded-xl ambient-shadow hover:scale-105 transition-transform">Bắt đầu học ngay</button>
            <button className="bg-surface-container-high text-on-primary-fixed-variant text-lg font-bold px-10 py-5 rounded-xl flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-colors">
              <span className="material-symbols-outlined">play_circle</span>
              Xem demo
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
          <div className="relative rounded-xl overflow-hidden ambient-shadow border border-outline-variant/15">
            <img
              alt="Student learning language"
              className="w-full h-auto object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIj7DLK4-xEv5EycHzGvfrrmNziOsOBkKDv6fL9APWQU4HWwVXnnHV-eWTXu9R9VEcFBAlk4Bzya_c5yUcXuqbKsNWxWktzHVE0cnCmF3foRMDfrQgADEItvHl26w6kYB2HHz6_2VEPmscnzehAC4POJI86pIx6G64lbV9-8ERzV-O8bxz9zb_rLLtV0G81K65Gp2B__wf3tvcb-f2YFM6JECa8ClKnLaRwbEXoP4HnHM_ksfrVuxv55l9Zcv2BZeyxMRjWd3MK3FA"
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 glass-nav bg-white/40 rounded-xl border border-white/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-tertiary-fixed-dim flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary">trending_up</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">Tiến độ hôm nay</p>
                  <p className="text-xs text-on-surface-variant">Bạn đã hoàn thành 85% mục tiêu nghe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
