import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apiClient, { getTokens, clearTokens } from '../../services/apiClient';

const LandingNavbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [xp, setXp] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const dropdownRef = useRef(null);
  const notificationRef = useRef(null);

  useEffect(() => {
    const { accessToken } = getTokens();
    if (accessToken) {
      apiClient.get('/api/profile')
        .then((res) => { const d = res.data || res; setUser(d); setXp(d.xp ?? 0); })
        .catch(() => {});
    }
  }, []);

  useEffect(() => {
    const handle = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setIsDropdownOpen(false);
      if (notificationRef.current && !notificationRef.current.contains(e.target)) setIsNotificationOpen(false);
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  const handleSignOut = () => {
    clearTokens();
    setUser(null);
    navigate('/login');
  };

  const isLoggedIn = !!user;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm font-headline">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center h-16 px-6 md:px-12">
        <Link to="/" className="text-2xl font-bold tracking-tight text-primary">Vocera</Link>
        <div className="hidden md:flex items-center gap-8">
          <Link className="text-primary font-semibold border-b-2 border-primary pb-1" to="/lessons">Lessons</Link>
          <Link className="text-slate-600 hover:text-primary transition-colors" to="/practice">Practice</Link>
          <Link className="text-slate-600 hover:text-primary transition-colors" to="/shop">Shop</Link>
          <a className="text-slate-600 hover:text-primary transition-colors" href="#">Community</a>
        </div>

        {isLoggedIn ? (
          <div className="flex items-center gap-4">
            {/* Diamond */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200/50">
              <span className="material-symbols-outlined text-amber-500 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
              <span className="font-bold text-sm text-amber-700">{xp}</span>
            </div>

            {/* Notification dropdown */}
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
                    <Link to="/feedback" onClick={() => setIsNotificationOpen(false)}
                      className="flex items-center gap-4 px-5 py-3.5 hover:bg-primary/5 group transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-[20px]">inbox</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-slate-800">Message Inbox</p>
                        <p className="text-[11px] text-slate-500">Track your active inquiries</p>
                      </div>
                    </Link>
                    <Link to="/vocabulary-feedback" onClick={() => setIsNotificationOpen(false)}
                      className="flex items-center gap-4 px-5 py-3.5 hover:bg-secondary/5 group transition-colors">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-slate-800">My Contributions</p>
                        <p className="text-[11px] text-slate-500">Linguistic feedback status</p>
                      </div>
                    </Link>
                    <Link to="/contact-support" onClick={() => setIsNotificationOpen(false)}
                      className="flex items-center gap-4 px-5 py-3.5 hover:bg-tertiary-fixed-dim/5 group transition-colors border-t border-slate-50 mt-1">
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

            {/* User avatar dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-white font-bold text-sm overflow-hidden border border-outline-variant/10 hover:ring-2 hover:ring-primary/20 transition-all cursor-pointer"
              >
                {(user.display_name || 'U')[0].toUpperCase()}
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] z-50 overflow-hidden rounded-lg border border-slate-100">
                  <div className="px-5 py-4 bg-gradient-to-r from-primary/5 to-transparent border-b border-slate-100">
                    <p className="text-sm font-semibold text-slate-800">{user.display_name || 'User'}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{user.email || ''}</p>
                  </div>
                  <div className="py-1">
                    <Link to="/my-notes" onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-5 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors group">
                      <span className="material-symbols-outlined text-[18px] text-slate-400 group-hover:text-primary transition-colors">sticky_note_2</span>
                      My Notes
                    </Link>
                    <Link to="/my-gifts" onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-5 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors group">
                      <span className="material-symbols-outlined text-[18px] text-slate-400 group-hover:text-primary transition-colors">redeem</span>
                      My Gifts
                    </Link>
                    <Link to="/my-vocabulary" onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-5 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors group">
                      <span className="material-symbols-outlined text-[18px] text-slate-400 group-hover:text-primary transition-colors">book_2</span>
                      My Vocabulary
                    </Link>
                    <Link to="/profile" onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-5 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors group">
                      <span className="material-symbols-outlined text-[18px] text-slate-400 group-hover:text-primary transition-colors">account_circle</span>
                      Profile
                    </Link>
                  </div>
                  <div className="border-t border-slate-100">
                    <button onClick={handleSignOut} className="flex items-center gap-3 px-5 py-3 text-sm text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors w-full text-left cursor-pointer group">
                      <span className="material-symbols-outlined text-[18px]">logout</span>
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link to="/login" className="hidden md:block text-primary font-semibold px-4 py-2 hover:bg-surface-container-low transition-all duration-300 rounded-lg">Log In</Link>
            <Link to="/register" className="btn-gradient text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:opacity-90 active:scale-95 transition-all">Sign Up</Link>
          </div>
        )}
      </div>
      <div className="bg-slate-100/50 h-[1px] w-full absolute bottom-0"></div>
    </nav>
  );
};

export default LandingNavbar;
