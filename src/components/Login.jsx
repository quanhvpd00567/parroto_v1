import React from 'react';

const Login = ({ onForgotPassword, onJoin }) => {
  return (
    <main className="flex-grow flex items-center justify-center px-6 py-12 lg:py-24">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <section className="hidden lg:flex flex-col space-y-8 pr-12">
          <div className="space-y-4">
            <span className="text-secondary font-headline font-bold tracking-widest text-sm uppercase">The Luminous Path</span>
            <h1 className="text-primary font-headline font-extrabold text-5xl xl:text-6xl leading-[1.1] tracking-tight">
              Master the world’s <br/> tongues with ease.
            </h1>
            <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
              Experience an editorial approach to language learning. Quiet, focused, and designed for deep retention.
            </p>
          </div>
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-[0_32px_64px_rgba(0,40,142,0.08)]">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTRQcSyU9UYN2RatxmoT1mdLOV01WJ8HybYjRFwW3zJJTm6K-yWL5GBnGTYF4ccLsuqBYqEVfI6Y_Gb10sHW8i7J5WvpjOPhGcQsbOpxMjXejWaoOK6jOAEgBjkwNFKyXeTMb-pHRSEWP-mXBEGBCVKaGBS3wg7oe1xZGqOa9QOzsG2tW4z1j9-mIVaIffaluCOIyS-2xdjmTr2yG6qU6MakdMGWZrAy3vd10MlWKo3wIJ0sgJYV8m8uHMR-zpE5pxmcDMJkaE_6yh"
              alt="A focused young student in a sunlit modern library surrounded by curated books and soft minimalist furniture"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
          </div>
        </section>
        <section className="flex flex-col w-full max-w-md mx-auto">
          <div className="bg-surface-container-lowest rounded-xl p-8 lg:p-12 shadow-[0_8px_32px_rgba(21,28,37,0.04)] border border-outline-variant/10">
            <div className="mb-10 text-center lg:text-left">
              <h2 className="font-headline font-extrabold text-3xl text-primary tracking-tight mb-2">Welcome Back</h2>
              <p className="text-on-surface-variant text-sm">Continue your journey where you left off.</p>
            </div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider ml-1" htmlFor="email">Email Address</label>
                <input
                  className="w-full bg-surface-container-low border-none rounded-lg px-6 py-4 text-on-surface placeholder-outline focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider" htmlFor="password">Password</label>
                  <button
                    type="button"
                    onClick={onForgotPassword}
                    className="text-xs font-semibold text-primary hover:opacity-70 transition-opacity"
                  >
                    Forgot Password?
                  </button>
                </div>
                <input
                  className="w-full bg-surface-container-low border-none rounded-lg px-6 py-4 text-on-surface placeholder-outline focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
              <button
                className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold py-4 rounded-xl shadow-[0_8px_20px_rgba(0,40,142,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                type="submit"
              >
                Sign In
              </button>
            </form>
            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-surface-container-highest"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-4 bg-surface-container-lowest text-on-surface-variant font-semibold uppercase tracking-widest">Or continue with</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center space-x-3 bg-surface-container-low hover:bg-surface-container-high py-3.5 rounded-lg transition-colors group">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                </svg>
                <span className="text-sm font-semibold text-on-surface-variant group-hover:text-on-surface">Google</span>
              </button>
              <button className="flex items-center justify-center space-x-3 bg-surface-container-low hover:bg-surface-container-high py-3.5 rounded-lg transition-colors group">
                <svg className="w-5 h-5 fill-[#1877F2]" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                </svg>
                <span className="text-sm font-semibold text-on-surface-variant group-hover:text-on-surface">Facebook</span>
              </button>
            </div>
            <p className="mt-10 text-center text-sm text-on-surface-variant">
              Don’t have an account?
              <button
                onClick={onJoin}
                className="text-primary font-bold hover:underline underline-offset-4 ml-1"
              >
                Join Parroto
              </button>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
