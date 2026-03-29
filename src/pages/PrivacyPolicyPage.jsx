import React from 'react';
import LandingNavbar from '../components/landing/LandingNavbar';
import PublicFooter from '../components/landing/PublicFooter';

const PrivacyPolicyPage = () => {
  const tableOfContents = [
    { id: "data-collection", label: "Data Collection" },
    { id: "use-information", label: "Use of Information" },
    { id: "cookies", label: "Cookies Policy" },
    { id: "third-party", label: "Third-Party Sharing" },
    { id: "your-rights", label: "Your Rights" },
    { id: "security", label: "Security" },
  ];

  return (
    <div className="bg-surface selection:bg-primary-fixed selection:text-primary min-h-screen">
      <LandingNavbar />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8">
          {/* Header Section */}
          <header className="mb-20 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-low text-primary font-medium text-sm mb-6 font-body">
              <span className="material-symbols-outlined text-sm">shield</span>
              Privacy Center
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface tracking-tight leading-tight mb-8 font-headline">
              Your Privacy <br/><span className="text-primary-container">is our Priority.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl font-body leading-relaxed">
              Last updated: May 24, 2024. At Vocera, we believe language learning should be safe, transparent, and focused on your personal growth.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Table of Contents Sidebar */}
            <aside className="lg:col-span-3 sticky top-32 hidden lg:block">
              <div className="bg-surface-container-low p-8 rounded-xl font-body">
                <h4 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-6">Table of Contents</h4>
                <ul className="space-y-4">
                  {tableOfContents.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="block text-on-surface-variant hover:text-primary transition-colors pl-4 border-l-2 border-transparent hover:border-primary"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 p-6 bg-primary-container rounded-xl text-on-primary-container font-body">
                <p className="text-sm leading-relaxed mb-4">Have questions about your data?</p>
                <a className="inline-flex items-center gap-2 font-bold hover:underline" href="mailto:privacy@Vocera.io">
                  Contact Support
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </aside>

            {/* Policy Content */}
            <div className="lg:col-span-9 space-y-24 font-body">
              {/* Section: Data Collection */}
              <section id="data-collection" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-on-primary">
                    <span className="material-symbols-outlined">database</span>
                  </div>
                  <h2 className="text-3xl font-bold font-headline">Data Collection</h2>
                </div>
                <div className="bg-surface-container-lowest p-10 rounded-xl ambient-shadow">
                  <p className="text-on-surface-variant leading-loose mb-6">
                    We collect information that you provide directly to us when you create an account, participate in learning modules, or communicate with our support team.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-surface-container-low p-6 rounded-lg">
                      <h4 className="font-bold mb-3 text-primary font-headline">Personal Data</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">Name, email address, password, and profile picture provided during registration.</p>
                    </div>
                    <div className="bg-surface-container-low p-6 rounded-lg">
                      <h4 className="font-bold mb-3 text-primary font-headline">Learning Progress</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">Language proficiency levels, quiz scores, lesson completion rates, and practice frequency.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section: Use of Information */}
              <section id="use-information" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
                    <span className="material-symbols-outlined">insights</span>
                  </div>
                  <h2 className="text-3xl font-bold font-headline">Use of Information</h2>
                </div>
                <div className="text-on-surface-variant leading-loose">
                  <p className="mb-6">The information we collect is used to personalize your learning journey and improve the overall Vocera experience. Our primary goal is to provide a seamless linguistic path for every user.</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                    <li className="flex items-start gap-3 bg-surface p-4 rounded-lg">
                      <span className="material-symbols-outlined text-secondary">check_circle</span>
                      <span>To curate adaptive lesson plans based on your performance.</span>
                    </li>
                    <li className="flex items-start gap-3 bg-surface p-4 rounded-lg">
                      <span className="material-symbols-outlined text-secondary">check_circle</span>
                      <span>To send daily reminders and achievement notifications.</span>
                    </li>
                    <li className="flex items-start gap-3 bg-surface p-4 rounded-lg">
                      <span className="material-symbols-outlined text-secondary">check_circle</span>
                      <span>To analyze app performance and fix technical bugs.</span>
                    </li>
                    <li className="flex items-start gap-3 bg-surface p-4 rounded-lg">
                      <span className="material-symbols-outlined text-secondary">check_circle</span>
                      <span>To ensure the security and integrity of our community.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Decorative Break */}
              <div className="relative h-64 w-full rounded-xl overflow-hidden my-16">
                <img
                  alt="Professional Workspace"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmtQDUPD-cJimB6Cgl6QJqWu_FZ3HExRy22Yr0HT9MzPG7jKn84sYPnWB00jsymbXWPRn2tpcajKhPf6j5ODxsLCmwKJH5gpy-G3Qedbwl3LTf1dhf3L9ETNBbA4CR8YQchKhBd7_kfiN2707ARGsMmhrZ7zw-_ILCWAd_QXH2CR4rphrnUitaOJQAuLyQ_Ive3WP9CnngJ5hzNr_DPGEeM3uPTmkVE2f_UL1YmovQMMeo80GX_vSOF4kcFg8Qggjf3KHr4Rbeng8Z"
                />
                <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                  <p className="text-white text-2xl font-headline font-bold text-center px-8">"Trust is the foundation of every global conversation."</p>
                </div>
              </div>

              {/* Section: Cookies */}
              <section id="cookies" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-tertiary-fixed-dim flex items-center justify-center text-on-tertiary-fixed-variant">
                    <span className="material-symbols-outlined">cookie</span>
                  </div>
                  <h2 className="text-3xl font-bold font-headline">Cookies Policy</h2>
                </div>
                <div className="bg-surface-container-low p-10 rounded-xl">
                  <p className="text-on-surface-variant leading-loose">
                    We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.
                  </p>
                  <div className="mt-8 space-y-4 font-body">
                    <div className="flex justify-between items-center p-4 bg-surface-container-lowest rounded-lg">
                      <div>
                        <p className="font-bold">Essential Cookies</p>
                        <p className="text-sm text-on-surface-variant">Required for system login and security.</p>
                      </div>
                      <span className="text-tertiary font-bold text-sm">Always Active</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-surface-container-lowest rounded-lg">
                      <div>
                        <p className="font-bold">Analytics Cookies</p>
                        <p className="text-sm text-on-surface-variant">Helps us understand how you interact with lessons.</p>
                      </div>
                      <button className="text-primary text-sm font-bold hover:underline">Manage</button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section: Third-Party Sharing */}
              <section id="third-party" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-surface-variant flex items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined">share</span>
                  </div>
                  <h2 className="text-3xl font-bold font-headline">Third-Party Sharing</h2>
                </div>
                <div className="bg-surface-container-lowest p-10 rounded-xl border border-outline-variant/15 ambient-shadow">
                  <p className="text-on-surface-variant leading-loose">
                    Vocera does not sell your personal information. We only share data with third-party vendors who assist us in operating our platform, such as payment processors (Stripe) and cloud hosting services (AWS).
                  </p>
                  <p className="mt-4 text-on-surface-variant leading-loose italic">
                    *All third-party partners are strictly vetted for GDPR and CCPA compliance.
                  </p>
                </div>
              </section>

              {/* Section: Your Rights */}
              <section id="your-rights" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">gavel</span>
                  </div>
                  <h2 className="text-3xl font-bold font-headline">Your Rights</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-8 bg-surface-container-low rounded-xl">
                    <h4 className="font-bold mb-4 font-headline">Access & Export</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">Request a copy of all personal data we hold about you at any time.</p>
                  </div>
                  <div className="p-8 bg-surface-container-low rounded-xl">
                    <h4 className="font-bold mb-4 font-headline">Rectification</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">Update or correct your personal information through your account settings.</p>
                  </div>
                  <div className="p-8 bg-surface-container-low rounded-xl">
                    <h4 className="font-bold mb-4 font-headline">The Right to Forget</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">Request the permanent deletion of your account and all associated data.</p>
                  </div>
                </div>
              </section>

              {/* Section: Security */}
              <section id="security" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-tertiary flex items-center justify-center text-on-tertiary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                  </div>
                  <h2 className="text-3xl font-bold font-headline">Security</h2>
                </div>
                <div className="bg-primary text-on-primary p-12 rounded-xl relative overflow-hidden">
                  <div className="relative z-10">
                    <p className="text-xl leading-relaxed mb-6">
                      We implement industry-standard AES-256 encryption for all data at rest and TLS for data in transit. Your security is not just a feature; it's our core architecture.
                    </p>
                    <div className="flex flex-wrap gap-4 font-body">
                      <div className="bg-white/10 px-4 py-2 rounded-lg text-sm backdrop-blur-md">End-to-End Encryption</div>
                      <div className="bg-white/10 px-4 py-2 rounded-lg text-sm backdrop-blur-md">2FA Support</div>
                      <div className="bg-white/10 px-4 py-2 rounded-lg text-sm backdrop-blur-md">SOC2 Compliant Infrastructure</div>
                    </div>
                  </div>
                  <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary-container rounded-full blur-3xl opacity-50"></div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
};

export default PrivacyPolicyPage;
