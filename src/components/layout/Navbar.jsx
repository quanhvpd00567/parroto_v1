import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, NavLink, Link, useLocation } from 'react-router-dom';
import apiClient from '../../services/apiClient';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [userXp, setUserXp] = useState(0);
  const [userProfile, setUserProfile] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    apiClient.get('/api/profile')
      .then((res) => {
        const data = res.data || res;
        setUserXp(data.xp ?? 0);
        setUserProfile(data);
      })
      .catch(() => {});
  }, [location.pathname]);

  useEffect(() => {
    const handleXpUpdate = (e) => {
      setUserXp(e.detail.total_xp);
    };
    window.addEventListener('xp-update', handleXpUpdate);
    return () => window.removeEventListener('xp-update', handleXpUpdate);
  }, []);

  const notificationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(e.target)) {
        setIsNotificationOpen(false);
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
        <Link to="/dashboard" className="text-2xl font-bold tracking-tight text-primary cursor-pointer">Vocera</Link>
        <div className="hidden md:flex gap-6">
          <NavLink className={({ isActive }) => `${isActive ? 'text-primary font-semibold border-b-2 border-primary pb-1' : 'text-slate-600 hover:text-blue-800 transition-colors'}`} to="/lessons">Lessons</NavLink>
          <NavLink className={({ isActive }) => `${isActive ? 'text-primary font-semibold border-b-2 border-primary pb-1' : 'text-slate-600 hover:text-blue-800 transition-colors'}`} to="/practice">Practice</NavLink>
          <NavLink className={({ isActive }) => `${isActive ? 'text-primary font-semibold border-b-2 border-primary pb-1' : 'text-slate-600 hover:text-blue-800 transition-colors'}`} to="/shop">Shop</NavLink>
          <NavLink className={({ isActive }) => `${isActive ? 'text-primary font-semibold border-b-2 border-primary pb-1' : 'text-slate-600 hover:text-blue-800 transition-colors'}`} to="/lucky-wheel">Play & Win</NavLink>
          <a className="text-slate-600 hover:text-blue-800 transition-colors" href="#">Community</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200/50">
          <span className="material-symbols-outlined text-amber-500 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
          <span className="font-bold text-sm text-amber-700">{userXp}</span>
        </div>

        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            className={`material-symbols-outlined p-2 hover:bg-surface-container-low rounded-full transition-all cursor-pointer ${isNotificationOpen ? 'bg-surface-container-low text-primary' : 'text-on-surface-variant'}`}
          >
            notifications
          </button>

          {isNotificationOpen && (
            <div className="absolute right-0 mt-3 w-72 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] z-50 overflow-hidden border border-slate-100 rounded-lg">
              <div className="px-5 py-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
                <p className="text-sm font-bold text-slate-800 font-headline">Support & Feedback</p>
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              </div>
              <div className="py-2">
                <Link
                  to="/feedback"
                  onClick={() => setIsNotificationOpen(false)}
                  className="flex items-center gap-4 px-5 py-3.5 hover:bg-primary/5 group transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[20px]">inbox</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-800">Message Inbox</p>
                    <p className="text-[11px] text-slate-500">Track your active inquiries</p>
                  </div>
                </Link>

                <Link
                  to="/vocabulary-feedback"
                  onClick={() => setIsNotificationOpen(false)}
                  className="flex items-center gap-4 px-5 py-3.5 hover:bg-secondary/5 group transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-800">My Contributions</p>
                    <p className="text-[11px] text-slate-500">Linguistic feedback status</p>
                  </div>
                </Link>

                <Link
                  to="/contact-support"
                  onClick={() => setIsNotificationOpen(false)}
                  className="flex items-center gap-4 px-5 py-3.5 hover:bg-tertiary-fixed-dim/5 group transition-colors border-t border-slate-50 mt-1"
                >
                  <div className="w-10 h-10 rounded-full bg-tertiary-fixed-dim/10 flex items-center justify-center text-on-tertiary-fixed-variant group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[20px]">support_agent</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-800">Contact Us</p>
                    <p className="text-[11px] text-slate-500">Get direct assistance</p>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>

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
            <div className="absolute right-0 mt-3 w-56 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] z-50 overflow-hidden rounded-lg border border-slate-100">
              <div className="px-5 py-4 bg-gradient-to-r from-primary/5 to-transparent border-b border-slate-100">
                <p className="text-sm font-semibold text-slate-800">{userProfile?.display_name || 'User'}</p>
                <p className="text-xs text-slate-500 mt-0.5">{userProfile?.email || ''}</p>
              </div>
              <div className="py-1">
                <Link to="/my-notes" className="flex items-center gap-3 px-5 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors group">
                  <span className="material-symbols-outlined text-[18px] text-slate-400 group-hover:text-primary transition-colors">sticky_note_2</span>
                  My Notes
                </Link>
                <Link to="/my-gifts" className="flex items-center gap-3 px-5 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors group">
                  <span className="material-symbols-outlined text-[18px] text-slate-400 group-hover:text-primary transition-colors">redeem</span>
                  My Gifts
                </Link>
                <Link to="/my-vocabulary" className="flex items-center gap-3 px-5 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors group">
                  <span className="material-symbols-outlined text-[18px] text-slate-400 group-hover:text-primary transition-colors">book_2</span>
                  My Vocabulary
                </Link>
                <Link to="/profile" className="flex items-center gap-3 px-5 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors group">
                  <span className="material-symbols-outlined text-[18px] text-slate-400 group-hover:text-primary transition-colors">account_circle</span>
                  Profile
                </Link>
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
