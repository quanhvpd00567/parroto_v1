import React from 'react';

const ResetPassword = ({ onBackToLogin }) => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-[#F8F9FF]/70 backdrop-blur-lg">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight text-primary">
            Luminous
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            className="text-on-surface-variant hover:opacity-70 transition-opacity flex items-center gap-2 text-sm font-semibold"
            href="#"
          >
            <span className="material-symbols-outlined text-xl">
              help_outline
            </span>
            <span className="hidden md:inline">Support</span>
          </a>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center px-6 py-24 md:py-32">
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Editorial Context & Visual */}
        <div className="hidden lg:flex flex-col gap-8 pr-12">
          <div className="space-y-4">
            <span className="text-secondary font-semibold tracking-widest uppercase text-xs">Security First</span>
            <h1 className="text-5xl font-headline font-bold text-on-surface leading-tight tracking-tight">
              Regain Access to Your <br/>
              <span className="text-primary italic">Learning Sanctuary.</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-md leading-relaxed">
              We take your linguistic progress seriously. Follow the steps to safely reset your credentials and continue your journey where you left off.
            </p>
          </div>
          <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-2xl">
            <img
              alt="Reset access"
              className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZVtfMFcdLBh3bzTCR0d3KBPrCJqF0BvbbANEnBGxQ5o5vLrEzFcFxjDd0gGgo1i3WXTPtNE25ve0fYoV9ZWgGx4_wNFWGd4cY5vfi8pLu0YdpLW-A-WoPg56EHYymdhx9tEjKtEQbokvNRSl40yJSduk05DKfZlMi7BgBs-xQmsZob88t2pMcGzd5s9snTxppvy2L3C3yV9wkFWdwJgIiBA108NY-Gyrag9Eylru_F9Uq_nRSX7dsDp8eRpI9KZWYkinkScKtGWc5"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
        </div>

        {/* Right Side: Interaction Card */}
        <div className="flex justify-center">
          <div className="w-full max-w-md bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-[0_32px_64px_-12px_rgba(0,40,142,0.08)] relative overflow-hidden">
            {/* Form Header */}
            <div className="mb-10">
              <div className="w-16 h-16 bg-surface-container-low rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">key</span>
              </div>
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-2">Reset Password</h2>
              <p className="text-on-surface-variant text-sm">Enter your registered email and we'll send you instructions to reset your password.</p>
            </div>

            {/* Reset Form */}
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1" htmlFor="email">Email Address</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">mail</span>
                  <input
                    className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-lg text-on-surface placeholder:text-outline/60 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300 outline-none"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    type="email"
                  />
                </div>
              </div>
              <button
                className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold text-sm tracking-wide rounded-full shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase"
                type="submit"
              >
                Send Reset Link
              </button>
            </form>

            {/* Navigation Actions */}
            <div className="mt-10 pt-8 border-t border-surface-variant/30 text-center">
              <button
                onClick={onBackToLogin}
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:opacity-70 transition-opacity"
              >
                <span className="material-symbols-outlined text-lg">arrow_back</span>
                Back to Login
              </button>
            </div>

            {/* Decorative Background Element */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
};

export default ResetPassword;
