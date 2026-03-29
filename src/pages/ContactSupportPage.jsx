import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LandingNavbar from '../components/landing/LandingNavbar';
import PublicFooter from '../components/landing/PublicFooter';
import feedbackService from '../services/feedbackService';
import apiClient, { getTokens } from '../services/apiClient';

const ContactSupportPage = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', topic: 'Account & Billing', message: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const { accessToken } = getTokens();
    if (accessToken) {
      setIsLoggedIn(true);
      apiClient.get('/api/profile')
        .then((res) => {
          const d = res.data || res;
          setForm((f) => ({ ...f, name: d.display_name || '', email: d.email || '' }));
        })
        .catch(() => {});
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { accessToken } = getTokens();
    if (!accessToken) {
      setShowLoginPopup(true);
      return;
    }
    setSending(true);
    setErrorMsg(null);
    try {
      await feedbackService.submitContact({
        subject: `[${form.topic}] from ${form.name}`,
        message: form.message,
        email: form.email,
      });
      setSubmitted(true);
      setForm((f) => ({ ...f, topic: 'Account & Billing', message: '' }));
    } catch (err) {
      setErrorMsg(err.message || 'Failed to send message');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="bg-background text-on-surface min-h-screen">
      <LandingNavbar />

      <main className="max-w-screen-xl mx-auto px-6 py-12 md:py-20 pt-32">
        {/* Hero Section */}
        <section className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <span className="text-secondary font-semibold tracking-widest text-xs uppercase mb-4 block font-label">Vocera Support</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-primary mb-6 tracking-tight font-headline">How can we help?</h1>
          <p className="text-on-surface-variant text-lg leading-relaxed font-body">Whether you're mastering a new tense or navigating your account, our team is here to ensure your learning path remains luminous and clear.</p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Contact Form Section */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-[0_8px_32px_rgba(21,28,37,0.04)]">
              <h2 className="text-2xl font-bold mb-8 text-on-surface font-headline">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-body">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-on-surface-variant ml-1">Name</label>
                    <input
                      className="w-full bg-surface-container-low border-none rounded-lg px-4 py-4 focus:ring-2 focus:ring-primary transition-all placeholder:text-outline-variant"
                      placeholder="Alex Rivera"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-on-surface-variant ml-1">Email</label>
                    <input
                      className={`w-full bg-surface-container-low border-none rounded-lg px-4 py-4 focus:ring-2 focus:ring-primary transition-all placeholder:text-outline-variant ${isLoggedIn ? 'opacity-60 cursor-not-allowed' : ''}`}
                      placeholder="alex@example.com"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      disabled={isLoggedIn}
                    />
                  </div>
                </div>
                <div className="space-y-2 font-body">
                  <label className="text-sm font-semibold text-on-surface-variant ml-1">Topic</label>
                  <div className="relative">
                    <select className="w-full bg-surface-container-low border-none rounded-lg px-4 py-4 focus:ring-2 focus:ring-primary appearance-none transition-all"
                      value={form.topic} onChange={(e) => setForm((f) => ({ ...f, topic: e.target.value }))}>
                      <option>Account & Billing</option>
                      <option>Learning Content</option>
                      <option>Technical Issue</option>
                      <option>Partnerships</option>
                      <option>Other</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
                  </div>
                </div>
                <div className="space-y-2 font-body">
                  <label className="text-sm font-semibold text-on-surface-variant ml-1">Message</label>
                  <textarea
                    className="w-full bg-surface-container-low border-none rounded-lg px-4 py-4 focus:ring-2 focus:ring-primary transition-all placeholder:text-outline-variant"
                    placeholder="Tell us how we can assist you..."
                    rows="5"
                    required
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  ></textarea>
                </div>
                <button
                  className="w-full bg-gradient-to-br from-primary to-primary-container text-white py-5 rounded-xl font-bold text-lg hover:shadow-lg active:scale-[0.98] transition-all font-headline disabled:opacity-50"
                  type="submit"
                  disabled={sending}
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>

              {/* Error Feedback */}
              {errorMsg && (
                <div className="mt-8 p-6 bg-red-50 rounded-lg border border-red-200 flex items-start gap-4">
                  <span className="material-symbols-outlined text-red-500">error</span>
                  <div>
                    <p className="font-bold text-red-700 font-headline">Error</p>
                    <p className="text-sm text-red-600 font-body">{errorMsg}</p>
                  </div>
                </div>
              )}

              {/* Success Feedback */}
              {submitted && (
                <div className="mt-8 p-6 bg-tertiary-fixed-dim/10 rounded-lg border border-tertiary-fixed-dim/20 flex items-start gap-4 animate-slide-in">
                  <span className="material-symbols-outlined text-on-tertiary-fixed-variant" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <div>
                    <p className="font-bold text-on-tertiary-fixed-variant font-headline">Message Sent!</p>
                    <p className="text-sm text-on-tertiary-fixed-variant opacity-80 font-body">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar / Common Topics */}
          <div className="lg:col-span-5 space-y-12">
            {/* Common Topics */}
            <section>
              <h3 className="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-6 font-label">Common Support Topics</h3>
              <div className="space-y-4 font-body">
                <a className="group flex items-center justify-between p-5 bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-colors" href="/help-center">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary bg-white p-2 rounded-md shadow-sm">payments</span>
                    <span className="font-semibold text-on-surface">Subscription & Billing</span>
                  </div>
                  <span className="material-symbols-outlined text-outline-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
                </a>
                <a className="group flex items-center justify-between p-5 bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-colors" href="/help-center">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary bg-white p-2 rounded-md shadow-sm">school</span>
                    <span className="font-semibold text-on-surface">Curriculum & Methodology</span>
                  </div>
                  <span className="material-symbols-outlined text-outline-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
                </a>
                <a className="group flex items-center justify-between p-5 bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-colors" href="/help-center">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary bg-white p-2 rounded-md shadow-sm">devices</span>
                    <span className="font-semibold text-on-surface">App Sync & Troubleshooting</span>
                  </div>
                  <span className="material-symbols-outlined text-outline-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
                </a>
              </div>
            </section>

            {/* Other Ways to Connect */}
            <section>
              <h3 className="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-6 font-label">Other ways to connect</h3>
              <div className="grid grid-cols-1 gap-4 font-body">
                <div className="relative overflow-hidden group p-6 rounded-lg bg-primary text-white flex items-center gap-6 cursor-pointer active:scale-95 duration-200 transition-all">
                  <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[120px]">forum</span>
                  </div>
                  <div className="bg-white/20 p-3 rounded-full">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg font-headline">Live Chat</h4>
                    <p className="text-primary-fixed text-sm opacity-90">Average wait: 2 mins</p>
                  </div>
                </div>
                <div className="p-6 rounded-lg bg-surface-container-lowest border border-outline-variant/15 flex items-center gap-6 hover:bg-surface-container-high transition-colors cursor-pointer active:scale-95 duration-200">
                  <div className="bg-surface-container-low p-3 rounded-full">
                    <span className="material-symbols-outlined text-primary">groups</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-on-surface font-headline">Community Forum</h4>
                    <p className="text-on-surface-variant text-sm">Join 50k+ other learners</p>
                  </div>
                </div>
                <div className="p-6 rounded-lg bg-surface-container-lowest border border-outline-variant/15 flex items-center gap-6 hover:bg-surface-container-high transition-colors cursor-pointer active:scale-95 duration-200">
                  <div className="bg-surface-container-low p-3 rounded-full">
                    <span className="material-symbols-outlined text-primary">alternate_email</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-on-surface font-headline">Email Support</h4>
                    <p className="text-on-surface-variant text-sm">hello@Vocera.io</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Featured Help Center Card */}
        <section className="mt-24 mb-12">
          <div className="relative rounded-xl overflow-hidden bg-surface-container-high p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary leading-tight font-headline">Explore our self-service Help Center</h2>
              <p className="text-on-surface-variant text-lg font-body leading-relaxed">Prefer to find answers yourself? Our comprehensive library contains over 200 articles covering every aspect of the Vocera experience.</p>
              <a className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:underline transition-all font-headline" href="/help-center">
                Visit Knowledge Base
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
            <div className="w-full md:w-1/3 aspect-square rounded-lg overflow-hidden relative">
              <img
                alt="Team collaborating"
                className="object-cover w-full h-full grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbIf_BgiWcda84I21DunEDJg32rPaMMT1J2yIGAEL6NLQv4eTQG8bIYwwLew0ahAFmyvXeO3fKQLP22duLOrUcChlwHV2Gu3e5dXkWQJ5uPzs6d1QcSlBa-WKIjEXiBhetTrR5-3HgEkLBQyCarV_hKJ_lPBwafLI4sXga3aI7Kku5-VJaOrbu-BWHhJ2NSgJwZJ9KJWHfsbzfZtTC-79MTjhtOCE745Qr0KUWVU7UgDZtycqDxgPwB2RrKjB84iz-PU_0Dcdtpts-"
              />
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />

      {/* Login Required Popup */}
      {showLoginPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" onClick={() => setShowLoginPopup(false)}>
          <div className="bg-white rounded-2xl w-full max-w-sm p-8 shadow-2xl text-center" onClick={(e) => e.stopPropagation()}>
            <span className="material-symbols-outlined text-5xl text-primary mb-4">lock</span>
            <h3 className="text-xl font-bold text-on-surface font-headline mb-2">Login Required</h3>
            <p className="text-on-surface-variant text-sm mb-6">You need to log in to submit a contact request.</p>
            <div className="flex gap-3">
              <button onClick={() => setShowLoginPopup(false)} className="flex-1 py-3 rounded-xl bg-surface-container-low font-bold text-sm hover:bg-surface-container-high transition-colors">Cancel</button>
              <button onClick={() => navigate('/login')} className="flex-1 py-3 rounded-xl bg-primary text-white font-bold text-sm hover:opacity-90 transition-opacity">Log In</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSupportPage;
