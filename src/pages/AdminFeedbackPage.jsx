import React from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../components/layout/AdminLayout';

const AdminFeedbackPage = () => {
  return (
    <AdminLayout>
      <div className="p-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h3 className="text-4xl font-headline font-extrabold text-[#00288E] mb-2">Message Inbox</h3>
            <p className="text-on-surface-variant max-w-md">Manage user inquiries and feedback with our curated editorial support interface.</p>
          </div>
          <div className="flex gap-3">
            <div className="bg-surface-container-lowest px-6 py-4 rounded-2xl shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-tertiary-fixed-dim/20 flex items-center justify-center text-on-tertiary-fixed-variant">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant font-medium uppercase tracking-tighter leading-none mb-1">Solved</p>
                <p className="text-xl font-bold font-headline leading-none">128</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest px-6 py-4 rounded-2xl shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary-fixed/30 flex items-center justify-center text-on-secondary-fixed-variant">
                <span className="material-symbols-outlined">pending</span>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant font-medium uppercase tracking-tighter leading-none mb-1">Pending</p>
                <p className="text-xl font-bold font-headline leading-none">12</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {/* Conversation Card 1 */}
          <Link to="/admin/feedback/1" className="bg-surface-container-lowest hover:bg-surface-container-low transition-all p-6 rounded-lg flex flex-col md:flex-row items-start md:items-center gap-6 group cursor-pointer border-l-4 border-transparent hover:border-primary block">
            <div className="relative">
              <img alt="User Avatar" className="w-14 h-14 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsICfMelO7yUYcBdFZgYTrvwicCfffAjwX21H5gTvktO6Q3OjJoJlI9c2zFnYp9qEVLP9NB2OgCgV7vEjyIvuSgpBORY0rkUWi07eJk_FLR4bboN_yietWNwXygpRtk3tO3geMNOCMgEI4FVJqE3SibOT1SenyG-HJf5b7JZ_43GkLYFCjgkzESV24OykFbP_RPXWxndnN-HeCj0Uyr9DL4i7q9rFkJkxnNopoFzrfYQSX9U2AER-m1mjokjTmxLTLklW5xmm-vDHl"/>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-tertiary-fixed-dim rounded-full border-2 border-white"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="font-headline font-bold text-lg text-on-background">Julian Marc</h4>
                <span className="px-3 py-1 bg-surface-container-high text-on-primary-fixed-variant text-[10px] font-bold uppercase tracking-wider rounded-full">Replied</span>
              </div>
              <p className="text-on-surface-variant text-sm truncate max-w-xl">I was wondering if the new Portuguese module includes regional accents from São Paulo specifically...</p>
            </div>
            <div className="flex md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-2">
              <span className="text-xs font-medium text-on-surface-variant/60">24 mins ago</span>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] text-white font-bold">EA</div>
              </div>
            </div>
          </Link>

          {/* Conversation Card 2 */}
          <Link to="/admin/feedback/2" className="bg-surface-container-lowest hover:bg-surface-container-low transition-all p-6 rounded-lg flex flex-col md:flex-row items-start md:items-center gap-6 group cursor-pointer border-l-4 border-secondary shadow-md shadow-secondary/5 block">
            <div className="relative">
              <img alt="User Avatar" className="w-14 h-14 rounded-2xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK6_4xtTcmR49gycCt5xGFhXJ71GnWljHleeROoUTjys9SO64lWGKLmFgK8bkokopfFA4MycIpBko3Q0Acqvd_TFAPtUKJLOe_rj4oii3RbnIRoGAK0o4giBOOBIiAC1jHxixEHqVQFlWFrEKd9J8rE6b-bFBtg-eJmrlTWUHU1QLyzxMikkpU37PGBaMlRcx7FwIC6zi6eT-Lgs-3HvyTLwJht9aEN6ti3hglk1j7EbCdTxu-TpJ2cSklaV878J-pJEpyx-V_iBpB"/>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="font-headline font-bold text-lg text-on-background">Elena Rostova</h4>
                <span className="px-3 py-1 bg-secondary-container/10 text-secondary text-[10px] font-bold uppercase tracking-wider rounded-full">Pending</span>
              </div>
              <p className="text-on-surface font-semibold text-sm truncate max-w-xl">The billing for my annual subscription seems to have double-charged. Can you look into this immediately?</p>
            </div>
            <div className="flex md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-2">
              <span className="text-xs font-bold text-secondary">Just now</span>
              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center">
                <span className="material-symbols-outlined text-sm text-on-surface-variant">more_horiz</span>
              </div>
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
    </AdminLayout>
  );
};

export default AdminFeedbackPage;
