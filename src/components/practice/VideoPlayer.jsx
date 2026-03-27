import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="relative group aspect-video rounded-xl overflow-hidden bg-slate-950 shadow-2xl ring-1 ring-white/10">
      <img
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdzsXrXbQH-TKXh2jUrVxxV88QPmFRbB-84L9OMqcNYlQCG8XD2xuayzbPcThyGEqbdhO6ZZqT9XjuUHg2AEnGyH9wL4Ht5kGgRtITSnHxrTBUNLw1byAkiCGVjPDKbdzlnCoHCFbAXYqRw6xrEPThW1smQq5dsuAVcB73cxRHtZxsRMedJbZ_kmdSP_kJol9YJlkzfqYnMeHyUdf_LUVR8LysYT0pI6_Ubqd2QVV-rwRp_RUaFPbLSk3UZYRvoiWnACmNChCNgG_u"
        alt="Video thumbnail"
      />
      {/* Player Controls Overlay (Glassmorphism) */}
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
  );
};

export default VideoPlayer;
