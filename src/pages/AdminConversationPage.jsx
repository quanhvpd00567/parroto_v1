import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminConversationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-surface font-body text-on-surface antialiased overflow-hidden h-screen flex flex-col">
      {/* TopAppBar */}
      <header className="flex justify-between items-center px-8 h-20 w-full sticky top-0 z-50 bg-[#F8F9FF]/70 backdrop-blur-[20px] shadow-[0_8px_32px_rgba(21,28,37,0.06)]">
        <div className="flex items-center gap-6">
          <span className="text-xl font-black text-[#00288E] tracking-tighter font-headline">Editorial Admin</span>
          <div className="h-8 w-[1px] bg-outline-variant/30"></div>
          <button onClick={() => navigate('/admin/feedback')} className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            <span className="font-label font-medium text-sm">Back to List</span>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button className="p-2.5 rounded-full hover:bg-[#EEF4FF] transition-colors duration-300">
              <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
            </button>
            <button className="p-2.5 rounded-full hover:bg-[#EEF4FF] transition-colors duration-300">
              <span className="material-symbols-outlined text-on-surface-variant">settings</span>
            </button>
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden border-2 border-surface-container-highest">
            <img alt="Admin Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgkrbuyZVRrufxpdfDiDslulUTDu-4nr2iWChPIeU3npWTelyPt_xMjRF5He_a3VQUJyBrfRJukYbM2U6EMFxa43yeL9ZxzxtBDAJPoL71KvyqIET5aToGnL9Sf3UX8Fe9wOFoiTi2VRgIPe2ZBLQt5DKaq9I9ZRK0psOMC9dkEudvqM2fOdz1X77LHqIBGA6Ea19P8Lcevr-b33uRU9AW8adM-AOB6PiAYTnZrkQp2Z8fdJR13XOpUj4lXpSz34M2bjOR26z-W0LT"/>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col max-w-5xl mx-auto w-full px-6 py-8 overflow-hidden">
        {/* Conversation Header */}
        <div className="mb-10 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-tertiary-container/10 text-on-tertiary-fixed-variant text-[10px] font-bold tracking-widest uppercase rounded-full">Active Ticket #8291</span>
              <span className="text-on-surface-variant/40 text-xs">Started 2 days ago</span>
            </div>
            <h1 className="text-3xl font-headline font-bold text-on-surface tracking-tight leading-tight">Inquiry regarding advanced linguistics module</h1>
            <p className="text-on-surface-variant mt-2 max-w-2xl">Conversation with <span className="font-semibold text-primary">Julianne V.</span> — Premium Tier User</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-container-low text-on-surface-variant font-label text-sm font-semibold hover:bg-surface-container-high transition-all active:scale-[0.98]">
              <span className="material-symbols-outlined text-[18px]">archive</span>
              Archive
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-container-low text-on-surface-variant font-label text-sm font-semibold hover:bg-surface-container-high transition-all active:scale-[0.98]">
              <span className="material-symbols-outlined text-[18px]">more_horiz</span>
            </button>
          </div>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto space-y-8 pr-4 custom-scrollbar">
          {/* User Message */}
          <div className="flex gap-4 items-start max-w-[85%]">
            <div className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden bg-surface-container-highest">
              <img alt="Julianne V." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9OEvAZrkcH4RUeXUUoRRgtFNXg3K7bv81Hf66MdZaO_Oc3ZWW-ZFcTNcQTX2zRvRk0sSCK5ITN2ltzMPG4W3tJmVbA_N1-pvLPcM5e4c2ST2nuxRuZWj9c9Dy47Xb_H5r9Ml0vLWwg2kq9DchmP0fyFbdFdlB-ba0FL_cC1BuPBH6VtH1fmKpqq17gMq9Qg_VOo-xXqXzm9sOkTeBhhlOdcFi6pMu-zM5uPthsWoo3JjCS2Npbol8li2CjoXASrAZQn0tney6Klww"/>
            </div>
            <div className="space-y-2">
              <div className="bg-surface-container-lowest p-6 rounded-tr-xl rounded-b-xl shadow-[0_4px_20px_rgba(21,28,37,0.03)] border border-outline-variant/10">
                <p className="text-on-surface leading-relaxed">Hello support team, I'm having some trouble accessing the 'Idiomatic French' advanced module. It says I need to complete the basics first, but I've already passed the placement test. Can you check my account?</p>
              </div>
              <span className="text-[11px] font-label text-on-surface-variant/60 ml-1">Yesterday, 10:42 AM</span>
            </div>
          </div>

          {/* Support Curator Message */}
          <div className="flex gap-4 items-start flex-row-reverse max-w-[85%] ml-auto">
            <div className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden bg-primary/10 flex items-center justify-center border border-primary/20">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            </div>
            <div className="space-y-2 text-right">
              <div className="bg-primary text-white p-6 rounded-tl-xl rounded-b-xl shadow-[0_8px_24px_rgba(0,40,142,0.15)] text-left">
                <div className="flex items-center gap-2 mb-2 opacity-80">
                  <span className="text-[10px] font-bold uppercase tracking-widest font-headline">Support Curator</span>
                </div>
                <p className="leading-relaxed">Hi Julianne! I've looked into your profile. It seems the placement test results didn't sync correctly with the module unlocks. I have manually unlocked the 'Idiomatic French' module for you now. Could you please refresh your app and try again?</p>
              </div>
              <span className="text-[11px] font-label text-on-surface-variant/60 mr-1">Yesterday, 11:15 AM</span>
            </div>
          </div>
        </div>

        {/* Compose Area */}
        <div className="mt-8 pt-8">
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
              <div className="h-5 w-[1px] bg-outline-variant/30"></div>
              <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">image</span>
              </button>
              <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">attach_file</span>
              </button>
            </div>
            <textarea className="w-full min-h-[140px] bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-on-surface-variant/40 resize-none font-body text-lg p-4" placeholder="Compose your response as Support Curator..."></textarea>
            <div className="flex justify-between items-center p-2">
              <div className="flex items-center gap-2 text-on-surface-variant/60 text-xs px-4">
                <span className="material-symbols-outlined text-[16px]">info</span>
                User will be notified via Push and Email
              </div>
              <button className="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-4 rounded-xl font-headline font-bold text-sm tracking-wide flex items-center gap-3 shadow-[0_10px_20px_rgba(0,40,142,0.2)] hover:shadow-[0_15px_30px_rgba(0,40,142,0.3)] transition-all active:scale-[0.98]">
                Send Message
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminConversationPage;
