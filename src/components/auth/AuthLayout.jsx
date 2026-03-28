import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AuthLayout = ({ children, title, subtitle, sidebarImage, sidebarTitle, sidebarSubtitle, sidebarTag, sidebarContent }) => {
  const location = useLocation();

  return (
    <div className="bg-background font-body text-on-surface selection:bg-primary-fixed selection:text-primary min-h-screen flex flex-col">
      {/* TopAppBar Shell */}
      <header className="bg-slate-50/70 dark:bg-slate-950/70 backdrop-blur-xl fixed top-0 w-full z-50">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tight text-blue-900 dark:text-blue-400 font-headline">Parroto</span>
          </Link>
          <div className="flex items-center gap-6">
            {location.pathname === '/login' ? (
              <Link className="text-slate-500 dark:text-slate-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-headline" to="/register">Sign Up</Link>
            ) : (
              <Link className="text-slate-500 dark:text-slate-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-headline" to="/login">Log In</Link>
            )}
          </div>
        </div>
      </header>

      <main className="flex-grow pt-24 pb-12 flex items-center justify-center px-6 relative overflow-hidden">
        {/* Luminous Path Background Effects */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(221,225,255,0.4)_0%,transparent_50%),radial-gradient(circle_at_100%_100%,rgba(255,219,202,0.3)_0%,transparent_50%)]"></div>
        </div>

        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Editorial Content Section */}
          <section className="hidden lg:block space-y-8">
            {sidebarTag && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-full">
                <span className="material-symbols-outlined text-secondary text-sm">auto_awesome</span>
                <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-label">{sidebarTag}</span>
              </div>
            )}

            <h1 className="text-6xl font-extrabold font-headline leading-tight text-primary">
              {sidebarTitle}
            </h1>

            {sidebarSubtitle && (
              <p className="text-xl text-on-surface-variant max-w-md leading-relaxed">
                {sidebarSubtitle}
              </p>
            )}

            {sidebarContent}

            {sidebarImage && !sidebarContent && (
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-[0_32px_64px_rgba(0,40,142,0.08)]">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  src={sidebarImage}
                  alt="Editorial content"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
              </div>
            )}
          </section>

          {/* Registration/Login Card */}
          <section className="w-full max-w-md mx-auto lg:mx-0">
            <div className="bg-surface-container-lowest rounded-xl p-8 lg:p-12 shadow-[0_32px_64px_-12px_rgba(21,28,37,0.06)] border border-outline-variant/15 relative overflow-hidden">
              <div className="mb-10 text-center lg:text-left">
                {title && <h2 className="text-3xl font-bold font-headline mb-2">{title}</h2>}
                {subtitle && <p className="text-on-surface-variant">{subtitle}</p>}
              </div>

              {children}

              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            {/* Terms Disclaimer or additional footer info */}
            <p className="mt-8 text-[11px] text-center text-outline leading-relaxed px-4">
              By continuing, you agree to Parroto's <a className="underline" href="#">Terms of Service</a> and <a className="underline" href="#">Privacy Policy</a>. We promise to keep your data as secure as our translations.
            </p>
          </section>
        </div>
      </main>

      {/* Footer Shell */}
      <footer className="bg-slate-100 dark:bg-slate-900 w-full py-12 px-6 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 max-w-7xl mx-auto">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-headline font-bold text-blue-900 dark:text-blue-400">Parroto</span>
            <p className="font-body text-sm tracking-wide text-slate-500 dark:text-slate-400">© 2024 Parroto. The Guided Luminous Path.</p>
          </div>
          <div className="flex gap-8">
            <a className="font-body text-sm tracking-wide text-slate-500 dark:text-slate-400 hover:text-secondary transition-all" href="#">Privacy Policy</a>
            <a className="font-body text-sm tracking-wide text-slate-500 dark:text-slate-400 hover:text-secondary transition-all" href="#">Terms of Service</a>
            <a className="font-body text-sm tracking-wide text-slate-500 dark:text-slate-400 hover:text-secondary transition-all" href="#">Help Center</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuthLayout;
