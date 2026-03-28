import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileNav = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white/70 backdrop-blur-xl border-t border-slate-100 flex items-center justify-around z-50 px-4">
      <NavLink to="/dashboard" className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-primary' : 'text-slate-500'}`}>
        {({ isActive: isHomeActive }) => (
          <>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: isHomeActive ? "'FILL' 1" : "'FILL' 0" }}>dashboard</span>
            <span className={`text-[10px] ${isHomeActive ? 'font-bold' : ''}`}>Home</span>
          </>
        )}
      </NavLink>
      <NavLink to="/lessons" className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-primary' : 'text-slate-500'}`}>
        {({ isActive: isLessonsActive }) => (
          <>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: isLessonsActive ? "'FILL' 1" : "'FILL' 0" }}>menu_book</span>
            <span className={`text-[10px] ${isLessonsActive ? 'font-bold' : ''}`}>Lessons</span>
          </>
        )}
      </NavLink>
      <NavLink to="/shop" className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-primary' : 'text-slate-500'}`}>
        {({ isActive: isShopActive }) => (
          <>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: isShopActive ? "'FILL' 1" : "'FILL' 0" }}>shopping_bag</span>
            <span className={`text-[10px] ${isShopActive ? 'font-bold' : ''}`}>Shop</span>
          </>
        )}
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-primary' : 'text-slate-500'}`}>
        {({ isActive: isProfileActive }) => (
          <>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: isProfileActive ? "'FILL' 1" : "'FILL' 0" }}>person</span>
            <span className={`text-[10px] ${isProfileActive ? 'font-bold' : ''}`}>Profile</span>
          </>
        )}
      </NavLink>
    </nav>
  );
};

export default MobileNav;
