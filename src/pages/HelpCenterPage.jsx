import React from 'react';
import LandingNavbar from '../components/landing/LandingNavbar';
import PublicFooter from '../components/landing/PublicFooter';

const HelpCenterPage = () => {
  const faqItems = [
    { question: "Can I learn multiple languages at once?", icon: "expand_more" },
    { question: "How does the voice recognition work?", icon: "expand_more" },
    { question: "What happens to my progress if I cancel?", icon: "expand_more" },
    { question: "Is there an offline mode for travel?", icon: "expand_more" },
  ];

  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      <LandingNavbar />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 mb-20 text-center">
          <h1 className="font-headline text-5xl md:text-6xl font-extrabold text-primary mb-6 tracking-tight">How can we help?</h1>
          <p className="text-on-surface-variant text-lg mb-12 max-w-2xl mx-auto">Welcome to the Parroto Support Sanctuary. Find guides, tutorials, and answers from our language experts.</p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto relative group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-outline text-2xl">search</span>
            </div>
            <input
              className="w-full h-18 pl-16 pr-8 rounded-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest text-on-surface text-lg ambient-shadow transition-all duration-300"
              placeholder="Search for articles, topics, or keywords..."
              type="text"
            />
          </div>
        </section>

        {/* Category Bento Grid */}
        <section className="max-w-7xl mx-auto px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            {/* Main Category 1 */}
            <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-10 flex flex-col justify-between ambient-shadow group cursor-pointer hover:bg-white transition-colors duration-500 overflow-hidden relative">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">auto_awesome</span>
                <h3 className="font-headline text-3xl font-bold text-on-surface mb-4">Getting Started</h3>
                <p className="text-on-surface-variant max-w-md text-lg">New to Parroto? Learn the basics of our immersive platform and start your first lesson in minutes.</p>
              </div>
              <div className="mt-8 flex gap-4 flex-wrap z-10">
                <span className="bg-surface-container px-4 py-2 rounded-full text-sm font-medium text-primary">Setup Guide</span>
                <span className="bg-surface-container px-4 py-2 rounded-full text-sm font-medium text-primary">App Tour</span>
                <span className="bg-surface-container px-4 py-2 rounded-full text-sm font-medium text-primary">Placement Test</span>
              </div>
              <div className="absolute bottom-0 right-0 w-64 h-64 opacity-5 group-hover:opacity-10 transition-opacity">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc4SJ9zR5CR7fw8puHTsCAVsebMSA4Mu0vdumzlwGccuwyYWCENkKQvMHuaqBQBWIXfYQDi2axHxho9XNGgxsutFr0tQ5nC_NuXhucSjYL1nxGcRT129A3ZXPUFoNpGwt7EiFt7kNFxCUN2atdC95k4euR8HQlS5pkqIHvfRWqktZV7O0loSGO2bE599wr9Da35TfwnjHFfdKgSfGlCXyn5ii3E1fkQJLlRnt5WY4nXFvCOxtc-zQ83XOMHQf0UrOiW1DttlP9lSmH" alt="Growth and new beginnings" />
              </div>
            </div>

            {/* Secondary Category 1 */}
            <div className="md:col-span-4 bg-surface-container-low rounded-xl p-8 flex flex-col justify-center ambient-shadow group cursor-pointer hover:bg-surface-container-high transition-colors duration-300">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">account_circle</span>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">My Account</h3>
              <p className="text-on-surface-variant">Manage your profile, security settings, and language preferences.</p>
            </div>

            {/* Secondary Category 2 */}
            <div className="md:col-span-4 bg-surface-container-low rounded-xl p-8 flex flex-col justify-center ambient-shadow group cursor-pointer hover:bg-surface-container-high transition-colors duration-300">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">school</span>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Learning Methods</h3>
              <p className="text-on-surface-variant">Deep dive into our pedagogical approach and spaced repetition system.</p>
            </div>

            {/* Main Category 2 */}
            <div className="md:col-span-5 bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between ambient-shadow group cursor-pointer hover:bg-white transition-colors duration-500 overflow-hidden relative">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4">payments</span>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Subscription & Billing</h3>
                <p className="text-on-surface-variant">Details about plans, renewals, and secure payment methods.</p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 opacity-5 group-hover:opacity-10 transition-opacity">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr00NJocDLpipfY47tV-MfBSr-uoKg5t3zxjx-HvDDijS6y6wf9lGF4lMszfZT4M35yZwnQgp0aRY3UsTrK_ve6TMN0ORUnsjvQFLS7-GKM1aDI5VR03CU8ba8LZxDXsMWXRU46MUsDbTUrEddJS7Na_HPfNRQYxeCDRq7wefjXpXrl0ib5QVZO9_13jZ9qXOwr_LKtycIwK0Lgm5DfAJXNdnuwZFh9stMMxcv9LZUar36aB-1BYdA4DhE7v3wLR_eKIAbu3elOlDG" alt="Premium workspace" />
              </div>
            </div>

            {/* Secondary Category 3 */}
            <div className="md:col-span-3 bg-primary text-white rounded-xl p-8 flex flex-col justify-center ambient-shadow group cursor-pointer hover:bg-primary-container transition-colors duration-300">
              <span className="material-symbols-outlined text-white text-4xl mb-4">settings_suggest</span>
              <h3 className="font-headline text-2xl font-bold mb-2">Technical Support</h3>
              <p className="text-on-primary-container opacity-90">Troubleshooting connectivity and device issues.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-8 mb-32">
          <h2 className="font-headline text-4xl font-bold text-center mb-16 text-on-surface">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-surface-container-lowest rounded-xl p-6 ambient-shadow hover:scale-[1.01] transition-transform cursor-pointer">
                <div className="flex justify-between items-center">
                  <h4 className="font-headline text-xl font-semibold text-on-surface">{item.question}</h4>
                  <span className="material-symbols-outlined text-primary">{item.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Support CTA */}
        <section className="max-w-7xl mx-auto px-8">
          <div className="bg-surface-container-high rounded-xl py-20 px-8 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-4">Still need assistance?</h2>
              <p className="text-on-surface-variant text-lg mb-10 max-w-xl mx-auto">Our dedicated support team is here to help you achieve your language learning goals. We typically respond within 2 hours.</p>
              <button
                onClick={() => window.location.href = '/contact-support'}
                className="bg-secondary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-secondary-container transition-all duration-300 ambient-shadow transform hover:-translate-y-1"
              >
                Contact Support
              </button>
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
              <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-secondary blur-3xl"></div>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
};

export default HelpCenterPage;
