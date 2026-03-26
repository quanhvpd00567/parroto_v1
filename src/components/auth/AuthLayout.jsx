import React from 'react';

const AuthLayout = ({ children, title, subtitle, sidebarImage, sidebarTitle, sidebarSubtitle, sidebarTag }) => {
  return (
    <div className="bg-background font-body text-on-surface antialiased min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-[#F8F9FF]/70 backdrop-blur-lg">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight text-primary">Luminous</span>
        </div>
        <div className="flex items-center gap-4">
          <a className="text-on-surface-variant hover:opacity-70 transition-opacity flex items-center gap-2 text-sm font-semibold" href="#">
            <span className="material-symbols-outlined text-xl">help_outline</span>
            <span className="hidden md:inline">Support</span>
          </a>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-6 py-24 md:py-32">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Editorial Context & Visual */}
          <section className="hidden lg:flex flex-col space-y-8 pr-12">
            <div className="space-y-4">
              {sidebarTag && (
                <span className="text-secondary font-headline font-bold tracking-widest text-sm uppercase">
                  {sidebarTag}
                </span>
              )}
              <h1 className="text-primary font-headline font-extrabold text-5xl xl:text-6xl leading-[1.1] tracking-tight">
                {sidebarTitle}
              </h1>
              <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
                {sidebarSubtitle}
              </p>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-[0_32px_64px_rgba(0,40,142,0.08)]">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                src={sidebarImage}
                alt="Editorial content"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </section>

          {/* Right Side: Interaction Card */}
          <section className="flex flex-col w-full max-w-md mx-auto">
            <div className="bg-surface-container-lowest rounded-xl p-8 lg:p-12 shadow-[0_32px_64px_-12px_rgba(0,40,142,0.08)] relative overflow-hidden border border-outline-variant/10">
              <div className="mb-10 text-center lg:text-left">
                {title && (
                  <h2 className="font-headline font-extrabold text-3xl text-primary tracking-tight mb-2">
                    {title}
                  </h2>
                )}
                {subtitle && (
                  <p className="text-on-surface-variant text-sm">
                    {subtitle}
                  </p>
                )}
              </div>
              {children}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold uppercase tracking-widest text-on-surface-variant/60">
        <div className="flex space-x-8">
          <a className="hover:text-primary transition-colors" href="#">Privacy</a>
          <a className="hover:text-primary transition-colors" href="#">Terms</a>
          <a className="hover:text-primary transition-colors" href="#">Help</a>
        </div>
        <span>© 2024 Parroto Luminous. All rights reserved.</span>
      </footer>
    </div>
  );
};

export default AuthLayout;
