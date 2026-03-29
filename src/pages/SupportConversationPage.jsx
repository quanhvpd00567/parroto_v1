import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';

const SupportConversationPage = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto w-full flex flex-col">
        {/* Conversation Header */}
        <div className="mb-10 flex justify-between items-end">
          <div className="flex flex-col gap-2">
            <button onClick={() => navigate('/feedback')} className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group mb-4 w-fit">
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
              <span className="font-label font-medium text-sm">Back to Inbox</span>
            </button>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-tertiary-container/10 text-on-tertiary-fixed-variant text-[10px] font-bold tracking-widest uppercase rounded-full">Active Ticket #8291</span>
              <span className="text-on-surface-variant/40 text-xs">Started 2 days ago</span>
            </div>
            <h1 className="text-3xl font-headline font-bold text-on-surface tracking-tight leading-tight">Inquiry regarding advanced linguistics module</h1>
            <p className="text-on-surface-variant max-w-2xl">Conversation with <span className="font-semibold text-primary">Support Curator</span></p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-container-low text-on-surface-variant font-label text-sm font-semibold hover:bg-surface-container-high transition-all active:scale-[0.98]">
              <span className="material-symbols-outlined text-[18px]">archive</span>
              Archive
            </button>
          </div>
        </div>

        {/* Message Thread */}
        <div className="space-y-8 pr-4 custom-scrollbar mb-8">
          {/* Support Curator Message */}
          <div className="flex gap-4 items-start max-w-[85%]">
            <div className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden bg-primary/10 flex items-center justify-center border border-primary/20">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            </div>
            <div className="space-y-2">
              <div className="bg-surface-container-lowest p-6 rounded-tr-xl rounded-b-xl shadow-[0_4px_20px_rgba(21,28,37,0.03)] border border-outline-variant/10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest font-headline text-primary">Support Curator</span>
                </div>
                <p className="text-on-surface leading-relaxed">Hi there! I've looked into your profile. It seems the placement test results didn't sync correctly with the module unlocks. I have manually unlocked the 'Idiomatic French' module for you now. Could you please refresh your app and try again?</p>
              </div>
              <span className="text-[11px] font-label text-on-surface-variant/60 ml-1">Yesterday, 11:15 AM</span>
            </div>
          </div>

          {/* User Message */}
          <div className="flex gap-4 items-start flex-row-reverse max-w-[85%] ml-auto">
            <div className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden bg-surface-container-highest">
              <img alt="Your Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNJXr-lf8Qgb5pxPwSfvEBkq5p-KNAO3U63g9zFwJi3XoTlTAiemE1FI3jWFWR1bfISUdeaKLVDyRGE7jFbCQkL-Puj-VDg9PqMgk4bTaYZjkhs4pVWtxjdzf_P62iK3xLfHxV36jHnI1Jl2oMCYP-cKUI8m9mSssJiKs8tsWmTJ2HUSuGFSGIhO9HKZTQkVw-uFyvtv-hiEIjYVg0mIGf3w17vTU33mdj9yh0p949K531E0JTLKh5QsTw8VGXMu6buPzjphDjhsoz"/>
            </div>
            <div className="space-y-2 text-right">
              <div className="bg-primary text-white p-6 rounded-tl-xl rounded-b-xl shadow-[0_8px_24px_rgba(0,40,142,0.15)] text-left">
                <p className="leading-relaxed">Hello support team, I'm having some trouble accessing the 'Idiomatic French' advanced module. It says I need to complete the basics first, but I've already passed the placement test. Can you check my account?</p>
              </div>
              <span className="text-[11px] font-label text-on-surface-variant/60 mr-1">Yesterday, 10:42 AM</span>
            </div>
          </div>
        </div>

        {/* Compose Area */}
        <div className="mt-auto pt-8 border-t border-surface-container-low">
          <div className="bg-surface-container-lowest rounded-[2rem] p-4 shadow-[0_20px_50px_rgba(21,28,37,0.08)] ring-1 ring-outline-variant/10">
            <div className="flex items-center gap-4 px-4 pb-3 border-b border-surface-container-low mb-3">
              <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">format_bold</span>
              </button>
              <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">format_italic</span>
              </button>
              <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">link</span>
              </button>
            </div>
            <textarea className="w-full min-h-[140px] bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-on-surface-variant/40 resize-none font-body text-lg p-4" placeholder="Type your message here..."></textarea>
            <div className="flex justify-between items-center p-2">
              <div className="flex items-center gap-2 text-on-surface-variant/60 text-xs px-4">
                <span className="material-symbols-outlined text-[16px]">info</span>
                Your message will be sent to the support team.
              </div>
              <button className="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-4 rounded-xl font-headline font-bold text-sm tracking-wide flex items-center gap-3 shadow-[0_10px_20px_rgba(0,40,142,0.2)] hover:shadow-[0_15px_30px_rgba(0,40,142,0.3)] transition-all active:scale-[0.98]">
                Send Message
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SupportConversationPage;
