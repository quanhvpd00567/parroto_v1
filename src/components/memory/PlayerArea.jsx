import React from 'react';

const PlayerArea = () => {
  return (
    <div className="lg:col-span-7 space-y-6">
      {/* Video/Audio Player Section */}
      <div className="relative group aspect-video rounded-xl overflow-hidden bg-slate-950 shadow-2xl ring-1 ring-white/10">
        <img
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
          alt="Cinematic close-up of a person speaking with soft rim lighting and a blurred minimalist studio background"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdzsXrXbQH-TKXh2jUrVxxV88QPmFRbB-84L9OMqcNYlQCG8XD2xuayzbPcThyGEqbdhO6ZZqT9XjuUHg2AEnGyH9wL4Ht5kGgRtITSnHxrTBUNLw1byAkiCGVjPDKbdzlnCoHCFbAXYqRw6xrEPThW1smQq5dsuAVcB73cxRHtZxsRMedJbZ_kmdSP_kJol9YJlkzfqYnMeHyUdf_LUVR8LysYT0pI6_Ubqd2QVV-rwRp_RUaFPbLSk3UZYRvoiWnACmNChCNgG_u"
        />
        {/* Player Controls Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <button className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-primary shadow-xl hover:scale-105 transition-transform active:scale-95">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
              </button>
              <div className="text-white">
                <p className="text-sm font-medium opacity-80">Now Playing</p>
                <p className="font-headline font-bold">Vowel Clarification Exercise</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 bg-white/10 backdrop-blur-md rounded-lg text-white hover:bg-white/20 transition-all">
                <span className="material-symbols-outlined text-lg">replay_10</span>
              </button>
              <button className="p-2 bg-white/10 backdrop-blur-md rounded-lg text-white hover:bg-white/20 transition-all">
                <span className="material-symbols-outlined text-lg">settings</span>
              </button>
            </div>
          </div>
          {/* Scrub Bar */}
          <div className="h-1 w-full bg-white/20 rounded-full cursor-pointer relative">
            <div className="absolute top-0 left-0 h-full w-1/3 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Live Feedback & Shadowing Widget */}
      <div className="space-y-6">
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
              {[40, 60, 80, 100, 80, 60, 40, 20, 40, 60].map((opacity, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 bg-on-tertiary-container rounded-full`}
                  style={{
                    height: opacity === 100 ? '5rem' : opacity === 80 ? '4rem' : opacity === 60 ? '3rem' : opacity === 40 ? '2rem' : '1.5rem',
                    opacity: opacity / 100,
                    boxShadow: opacity === 100 ? '0 0 12px rgba(63,210,152,0.8)' : 'none'
                  }}
                ></div>
              ))}
            </div>
            <div className="flex justify-center">
              <button className="flex items-center justify-center w-16 h-16 bg-white rounded-full text-primary shadow-xl hover:scale-105 active:scale-95 transition-all group">
                <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">fiber_manual_record</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">Pronunciation</span>
            <div className="flex items-end gap-2 mt-2">
              <span className="text-3xl font-headline font-extrabold text-on-surface">94%</span>
              <span className="text-xs font-bold text-tertiary-container mb-1">+2% vs last</span>
            </div>
          </div>
          <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">Tempo Match</span>
            <div className="flex items-end gap-2 mt-2">
              <span className="text-3xl font-headline font-extrabold text-on-surface">Good</span>
              <div className="flex gap-0.5 mb-1.5">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-surface-container-highest rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerArea;
