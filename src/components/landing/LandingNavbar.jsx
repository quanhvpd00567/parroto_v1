import React from 'react';
import { Link } from 'react-router-dom';

const LandingNavbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm font-headline">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center h-16 px-6 md:px-12">
        <div className="text-2xl font-bold tracking-tight text-primary">Parroto</div>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-primary font-semibold border-b-2 border-primary pb-1" href="/lessons">Lessons</a>
          <a className="text-slate-600 hover:text-primary transition-colors" href="/practice">Practice</a>
          <a className="text-slate-600 hover:text-primary transition-colors" href="/vocabulary">Vocabulary</a>
          <a className="text-slate-600 hover:text-primary transition-colors" href="#">Community</a>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="hidden md:block text-primary font-semibold px-4 py-2 hover:bg-surface-container-low transition-all duration-300 rounded-lg">Log In</Link>
          <Link to="/register" className="btn-gradient text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:opacity-90 active:scale-95 transition-all">Sign Up</Link>
        </div>
      </div>
      <div className="bg-slate-100/50 h-[1px] w-full absolute bottom-0"></div>
    </nav>
  );
};

export default LandingNavbar;
