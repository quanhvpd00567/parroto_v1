import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm h-16 px-6 md:px-12 flex justify-between items-center max-w-screen-2xl mx-auto left-1/2 -translate-x-1/2">
      <div className="flex items-center gap-8">
        <span className="text-2xl font-bold tracking-tight text-primary">Parroto</span>
        <div className="hidden md:flex gap-6">
          <a className="text-primary font-semibold border-b-2 border-primary pb-1" href="/lessons">Lessons</a>
          <a className="text-slate-600 hover:text-blue-800 transition-colors" href="/practice">Practice</a>
          <a className="text-slate-600 hover:text-blue-800 transition-colors" href="/vocabulary">Vocabulary</a>
          <a className="text-slate-600 hover:text-blue-800 transition-colors" href="#">Community</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="material-symbols-outlined text-on-surface-variant p-2 hover:bg-surface-container-low rounded-full transition-all">notifications</button>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-white font-bold text-sm overflow-hidden border border-outline-variant/10 hover:ring-2 hover:ring-primary/20 transition-all cursor-pointer"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
          >
            <img
              alt="User Profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNJXr-lf8Qgb5pxPwSfvEBkq5p-KNAO3U63g9zFwJi3XoTlTAiemE1FI3jWFWR1bfISUdeaKLVDyRGE7jFbCQkL-Puj-VDg9PqMgk4bTaYZjkhs4pVWtxjdzf_P62iK3xLfHxV36jHnI1Jl2oMCYP-cKUI8m9mSssJiKs8tsWmTJ2HUSuGFSGIhO9HKZTQkVw-uFyvtv-hiEIjYVg0mIGf3w17vTU33mdj9yh0p949K531E0JTLKh5QsTw8VGXMu6buPzjphDjhsoz"
            />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-3 w-56 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] z-50 overflow-hidden">
              <div className="px-5 py-4 bg-gradient-to-r from-primary/5 to-transparent border-b border-slate-100">
                <p className="text-sm font-semibold text-slate-800">Learner</p>
                <p className="text-xs text-slate-500 mt-0.5">learner@parroto.com</p>
              </div>
              <div className="py-1">
                <a href="/vocabulary" className="flex items-center gap-3 px-5 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors group">
                  <span className="material-symbols-outlined text-[18px] text-slate-400 group-hover:text-primary transition-colors">book_2</span>
                  My Vocabulary
                </a>
                <a href="/notes" className="flex items-center gap-3 px-5 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors group">
                  <span className="material-symbols-outlined text-[18px] text-slate-400 group-hover:text-primary transition-colors">sticky_note_2</span>
                  My Note
                </a>
              </div>
              <div className="border-t border-slate-100">
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-3 px-5 py-3 text-sm text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors w-full text-left cursor-pointer group"
                >
                  <span className="material-symbols-outlined text-[18px]">logout</span>
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="bg-slate-100/50 h-[1px] w-full absolute bottom-0 left-0"></div>
    </nav>
  );
};

export default Navbar;
