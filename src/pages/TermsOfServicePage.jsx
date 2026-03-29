import React from 'react';
import LandingNavbar from '../components/landing/LandingNavbar';
import PublicFooter from '../components/landing/PublicFooter';

const TermsOfServicePage = () => {
  const tableOfContents = [
    { id: "introduction", label: "Introduction" },
    { id: "accounts", label: "User Accounts" },
    { id: "content", label: "Content Rights" },
    { id: "termination", label: "Termination" },
    { id: "liability", label: "Liability" },
    { id: "changes", label: "Changes to Terms" },
  ];

  return (
    <div className="bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      <LandingNavbar />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Header Section */}
          <header className="mb-16 text-center md:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-surface-container-low rounded-full mb-6">
              <span className="text-xs font-semibold tracking-widest text-secondary uppercase font-label">Legal Documentation</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-primary mb-6 leading-tight font-headline">Terms of Service</h1>
            <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed font-body">
              Welcome to Vocera. These terms govern your use of our platform. By accessing our services, you agree to follow the guidelines that keep our learning community safe and effective.
            </p>
            <div className="mt-10 flex items-center gap-3 text-sm font-medium text-outline font-body">
              <span className="material-symbols-outlined text-base">calendar_today</span>
              <span>Last Updated: October 24, 2024</span>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Table of Contents / Sticky Navigation */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-32 space-y-4 font-body">
                <p className="text-xs font-bold text-outline uppercase tracking-widest mb-4">Contents</p>
                <nav className="flex flex-col gap-3">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="text-sm font-medium text-on-surface-variant hover:text-primary transition-all pl-4 border-l-2 border-transparent hover:border-primary"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Editorial Content Sections */}
            <div className="lg:col-span-9 space-y-20 font-body">
              {/* 1. Introduction */}
              <section id="introduction" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-on-surface font-headline">1. Introduction</h2>
                </div>
                <div className="max-w-none text-on-surface-variant leading-loose space-y-6">
                  <p>
                    These Terms of Service ("Terms") constitute a legally binding agreement between you and Vocera regarding your access to and use of the Vocera website, mobile application, and any related services.
                  </p>
                  <div className="bg-surface-container-low p-8 rounded-xl border-l-4 border-primary">
                    <p className="font-medium text-on-background">
                      By using Vocera, you confirm that you have read, understood, and agreed to be bound by these Terms. If you do not agree, please discontinue use of the platform immediately.
                    </p>
                  </div>
                </div>
              </section>

              {/* 2. User Accounts */}
              <section id="accounts" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>account_circle</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-on-surface font-headline">2. User Accounts</h2>
                </div>
                <div className="text-on-surface-variant leading-loose space-y-6">
                  <p>To access certain features of Vocera, you must register for an account. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                    <li className="bg-surface-container-lowest p-6 rounded-lg shadow-sm">
                      <span className="text-primary font-bold block mb-2 font-headline">Accuracy</span>
                      You must provide accurate and complete information during registration.
                    </li>
                    <li className="bg-surface-container-lowest p-6 rounded-lg shadow-sm">
                      <span className="text-primary font-bold block mb-2 font-headline">Security</span>
                      You must notify us immediately of any unauthorized use of your account.
                    </li>
                  </ul>
                </div>
              </section>

              {/* 3. Content */}
              <section id="content" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>menu_book</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-on-surface font-headline">3. Content</h2>
                </div>
                <div className="text-on-surface-variant leading-loose space-y-6">
                  <p>Our service allows you to learn through proprietary lessons, audio, and visual materials. All content provided by Vocera is protected by intellectual property laws.</p>
                  <div className="bg-primary text-on-primary p-8 rounded-xl shadow-lg">
                    <h4 className="font-headline text-xl font-bold mb-4">Your License to Use Vocera</h4>
                    <p className="opacity-90">We grant you a personal, non-exclusive, non-transferable, and limited license to access and use the platform for personal, non-commercial language learning purposes only.</p>
                  </div>
                </div>
              </section>

              {/* 4. Termination */}
              <section id="termination" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>cancel</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-on-surface font-headline">4. Termination</h2>
                </div>
                <div className="text-on-surface-variant leading-loose space-y-6">
                  <p>We reserve the right to suspend or terminate your account and access to Vocera at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.</p>
                </div>
              </section>

              {/* 5. Liability */}
              <section id="liability" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-on-surface font-headline">5. Liability</h2>
                </div>
                <div className="text-on-surface-variant leading-loose space-y-6">
                  <p>To the maximum extent permitted by law, Vocera and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.</p>
                </div>
              </section>

              {/* 6. Changes to Terms */}
              <section id="changes" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>update</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-on-surface font-headline">6. Changes to Terms</h2>
                </div>
                <div className="text-on-surface-variant leading-loose space-y-6">
                  <p>We may modify these Terms from time to time. If we make changes that are material, we will provide you with notice through our services, or by other means, to provide you the opportunity to review the changes before they become effective.</p>
                </div>
              </section>

              {/* Contact/Help Callout */}
              <div className="p-12 rounded-3xl bg-secondary text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold font-headline mb-4">Still have questions?</h3>
                  <p className="text-white/80 mb-8 max-w-lg">If you need clarification on any part of our Terms of Service, our legal team is here to help you understand your rights.</p>
                  <button
                    onClick={() => window.location.href = '/contact-support'}
                    className="px-8 py-3 bg-white text-secondary font-bold rounded-full hover:bg-secondary-fixed transition-colors font-headline"
                  >
                    Contact Legal Support
                  </button>
                </div>
                <div className="absolute -right-10 -bottom-10 opacity-10 transform group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
};

export default TermsOfServicePage;
