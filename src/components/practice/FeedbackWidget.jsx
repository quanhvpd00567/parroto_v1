import React from 'react';

const FeedbackWidget = () => {
  return (
    <div className="space-y-6">
      {/* Stats/Performance Bento Grid */}
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
      {/* Real-time Transcription Feedback */}
      <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-outline-variant/10">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-sm font-bold text-on-surface">Live Feedback</h4>
          <span className="material-symbols-outlined text-sm text-on-tertiary-fixed-variant">verified</span>
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-tertiary-container/10 border-l-4 border-tertiary-container rounded-r-lg">
            <p className="text-xs font-bold text-on-tertiary-fixed-variant mb-1">Grammar Note</p>
            <p className="text-sm text-on-tertiary-fixed italic">"Your liaison between 'les' and 'amis' was perfect. Keep the nasal tone consistent."</p>
          </div>
          <div className="p-4 bg-secondary-container/10 border-l-4 border-secondary-container rounded-r-lg">
            <p className="text-xs font-bold text-on-secondary-container mb-1">Articulation Hint</p>
            <p className="text-sm text-on-secondary-fixed italic">"Watch the /r/ sound. It should be softer, coming from the back of the throat."</p>
          </div>
        </div>
      </div>
      {/* Session Meta */}
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-primary-fixed flex items-center justify-center">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA05zWD0zkRE2vo105GfAj4ee9hm-RK-G1W_eQmAe2tciM5vqHpdwVtQPW7G9yky5DFmzj0EPE8QZZ7eDOFJvK7-Ky9qZyksYcsbBuijkzcSFpCpkb44qx9L-Iaxj5NdOpzNMCqGHMr_wC9jrSwBhOOkb05flf8nG3FaSeN1flT5tUsyWcKDDtCiEwfVGPttc7hN_fofO8IKVgQCGnZ3ZK17dPygLnlpG9uJtAMqDQUUeaEX9Z0Jjl40ccTm248kQJHtSfCTpkNz_CA"
              alt="Tutor profile"
            />
          </div>
          <div>
            <p className="text-[10px] font-bold text-on-surface-variant/60 uppercase">Tutor Profile</p>
            <p className="text-xs font-bold text-on-surface">Marc Dupont • Native Speaker</p>
          </div>
        </div>
        <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined">help_outline</span>
        </button>
      </div>
    </div>
  );
};

export default FeedbackWidget;
