import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';

const FeedbackInboxPage = () => {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h3 className="text-4xl font-headline font-extrabold text-[#00288E] mb-2 text-display-sm">Message Inbox</h3>
            <p className="text-on-surface-variant max-w-md">Manage your inquiries and feedback with our support team.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/vocabulary-feedback" className="bg-surface-container-lowest px-6 py-4 rounded-2xl shadow-sm flex items-center gap-4 hover:bg-surface-container-low transition-all group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">auto_awesome</span>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant font-medium uppercase tracking-tighter leading-none mb-1">Contributions</p>
                <p className="text-xl font-bold font-headline leading-none text-primary">14</p>
              </div>
            </Link>
            <div className="bg-surface-container-lowest px-6 py-4 rounded-2xl shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-tertiary-fixed-dim/20 flex items-center justify-center text-on-tertiary-fixed-variant">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant font-medium uppercase tracking-tighter leading-none mb-1">Solved</p>
                <p className="text-xl font-bold font-headline leading-none text-primary">128</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest px-6 py-4 rounded-2xl shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary-fixed/30 flex items-center justify-center text-on-secondary-fixed-variant">
                <span className="material-symbols-outlined">pending</span>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant font-medium uppercase tracking-tighter leading-none mb-1">Pending</p>
                <p className="text-xl font-bold font-headline leading-none text-secondary">12</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {/* Conversation Card 1 */}
          <Link to="/feedback/1" className="bg-surface-container-lowest hover:bg-surface-container-low transition-all p-6 rounded-lg flex flex-col md:flex-row items-start md:items-center gap-6 group cursor-pointer border-l-4 border-transparent hover:border-primary block">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">question_answer</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="font-headline font-bold text-lg text-on-background">Portuguese regional accents inquiry</h4>
                <span className="px-3 py-1 bg-surface-container-high text-on-primary-fixed-variant text-[10px] font-bold uppercase tracking-wider rounded-full">New Reply</span>
              </div>
              <p className="text-on-surface-variant text-sm truncate max-w-xl">Support: "I have manually unlocked the 'Idiomatic French' module for you now..."</p>
            </div>
            <div className="flex md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-2 text-right">
              <span className="text-xs font-medium text-on-surface-variant/60">24 mins ago</span>
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Active Ticket #8291</span>
            </div>
          </Link>

          {/* Conversation Card 2 */}
          <Link to="/feedback/2" className="bg-surface-container-lowest hover:bg-surface-container-low transition-all p-6 rounded-lg flex flex-col md:flex-row items-start md:items-center gap-6 group cursor-pointer border-l-4 border-secondary shadow-md shadow-secondary/5 block">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">payments</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="font-headline font-bold text-lg text-on-background">Billing discrepancy: Annual Subscription</h4>
                <span className="px-3 py-1 bg-secondary-container/10 text-secondary text-[10px] font-bold uppercase tracking-wider rounded-full">Pending</span>
              </div>
              <p className="text-on-surface font-semibold text-sm truncate max-w-xl">You: "The billing for my annual subscription seems to have double-charged..."</p>
            </div>
            <div className="flex md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-2 text-right">
              <span className="text-xs font-bold text-secondary">Just now</span>
              <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Active Ticket #9012</span>
            </div>
          </Link>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-outline-variant/20 pt-8">
          <button className="flex items-center gap-2 text-sm font-bold text-primary hover:opacity-70 transition-opacity">
            <span className="material-symbols-outlined text-lg">chevron_left</span>
            Older Conversations
          </button>
          <div className="flex items-center gap-4 text-xs font-bold text-on-surface-variant tracking-widest uppercase">
            <span>Page 01</span>
            <span className="w-12 h-[1px] bg-outline-variant/30"></span>
            <span className="text-outline">12</span>
          </div>
          <button className="flex items-center gap-2 text-sm font-bold text-outline cursor-not-allowed">
            Next
            <span className="material-symbols-outlined text-lg">chevron_right</span>
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FeedbackInboxPage;
