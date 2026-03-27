import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm h-16 px-6 md:px-12 flex justify-between items-center max-w-screen-2xl mx-auto left-1/2 -translate-x-1/2">
      <div className="flex items-center gap-8">
        <span className="text-2xl font-bold tracking-tight text-primary">Parroto</span>
        <div className="hidden md:flex gap-6">
          <a className="text-primary font-semibold border-b-2 border-primary pb-1" href="#">Lessons</a>
          <a className="text-slate-600 hover:text-blue-800 transition-colors" href="#">Practice</a>
          <a className="text-slate-600 hover:text-blue-800 transition-colors" href="#">Community</a>
          <a className="text-slate-600 hover:text-blue-800 transition-colors" href="#">Pricing</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="material-symbols-outlined text-on-surface-variant p-2 hover:bg-surface-container-low rounded-full transition-all">notifications</button>
        <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-white font-bold text-sm overflow-hidden">
          <img
            alt="User Profile"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNJXr-lf8Qgb5pxPwSfvEBkq5p-KNAO3U63g9zFwJi3XoTlTAiemE1FI3jWFWR1bfISUdeaKLVDyRGE7jFbCQkL-Puj-VDg9PqMgk4bTaYZjkhs4pVWtxjdzf_P62iK3xLfHxV36jHnI1Jl2oMCYP-cKUI8m9mSssJiKs8tsWmTJ2HUSuGFSGIhO9HKZTQkVw-uFyvtv-hiEIjYVg0mIGf3w17vTU33mdj9yh0p949K531E0JTLKh5QsTw8VGXMu6buPzjphDjhsoz"
          />
        </div>
      </div>
      <div className="bg-slate-100/50 h-[1px] w-full absolute bottom-0 left-0"></div>
    </nav>
  );
};

export default Navbar;
