import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AdminLayout = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { label: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
    { label: 'Feedback Hub', path: '/admin/feedback', icon: 'forum', fill: true },
    { label: 'Vocab Feedback', path: '/admin/vocabulary-feedback', icon: 'translate' },
    { label: 'Support Contacts', path: '#', icon: 'contact_support' },
  ];

  return (
    <div className="bg-background font-body text-on-background selection:bg-primary-fixed min-h-screen">
      {/* Side Navigation Bar */}
      <aside className="fixed left-0 top-0 h-full border-r-0 flex flex-col p-6 bg-[#F8F9FF] dark:bg-slate-950 w-72 hidden md:flex z-50">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
            <span className="material-symbols-outlined">forum</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-[#00288E] dark:text-blue-400 font-headline leading-tight">Feedback Hub</h1>
            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-semibold">Management Portal</p>
          </div>
        </div>
        <nav className="flex flex-col gap-2 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-4 px-6 py-3 rounded-[3rem] transition-all group ${
                location.pathname === item.path
                  ? 'bg-[#EEF4FF] dark:bg-blue-900/30 text-[#00288E] dark:text-blue-200 font-semibold shadow-sm'
                  : 'text-[#444653] dark:text-slate-400 hover:bg-[#DCE3F0] dark:hover:bg-slate-800'
              }`}
            >
              <span
                className={`material-symbols-outlined group-hover:text-primary transition-colors`}
                style={item.fill || location.pathname === item.path ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {item.icon}
              </span>
              <span className="font-['Inter'] font-medium text-sm">{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="md:ml-72 min-h-screen flex flex-col">
        {/* Top App Bar */}
        <header className="flex justify-between items-center px-8 h-20 w-full sticky top-0 z-40 bg-[#F8F9FF]/70 dark:bg-slate-950/70 backdrop-blur-[20px] shadow-[0_8px_32px_rgba(21,28,37,0.06)]">
          <div className="flex items-center gap-4">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-lg tracking-tight text-[#00288E] dark:text-blue-400">Editorial Admin</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-transparent focus-within:border-primary/20 transition-all">
              <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm w-64 placeholder:text-on-surface-variant/60" placeholder="Search..." type="text"/>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#EEF4FF] transition-colors relative">
                <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full"></span>
              </button>
              <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden border-2 border-white">
                <img alt="Admin Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBij7AmqeYnMZOHo7VoX9cwVYk6pZoaTeNl6RklFRrrYvcTuc7odlA-fmfygqmFwcTH9rBu_RK_m1B8x1SB2CJqK91vs6BJSaKoGaYQomYU_X8L3tcxWynni1vGRBuJGo68mXfeiIj1OGSExPcHicbW1044woEkEBE2aX3enXGZqlo6Ej69wq4-ih95D-BwymIHiTstZfzemx7NhQOIHWWpzjg0Cp5_8eZwJxHlPRutYttIWHrA7t9_KI6mNmyzLbZobv5Y9-knrvkX"/>
              </div>
            </div>
          </div>
        </header>
        <div className="flex-1">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
