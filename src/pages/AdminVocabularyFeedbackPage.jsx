import React from 'react';
import AdminLayout from '../components/layout/AdminLayout';

const AdminVocabularyFeedbackPage = () => {
  const feedbacks = [
    {
      id: 1,
      status: 'In Progress',
      module: 'French • Beginner Module',
      term: 'Flâner',
      suggestion: "The user suggested adding 'aimless wandering' as a secondary translation. They noted the current entry is too literal.",
      adminNote: "Approved. Update the 'Usage Note' section to include the poetic connotation of the Parisian flâneur. Assigning to Editorial Team B.",
      borderColor: 'border-secondary',
      statusBg: 'bg-secondary-fixed',
      statusText: 'text-on-secondary-fixed'
    },
    {
      id: 2,
      status: 'Approved',
      module: 'Japanese • Kanji III',
      term: '木漏れ日 (Komorebi)',
      suggestion: "Suggested correcting the stroke order animation. The 4th stroke is currently displaying an incorrect anchor point.",
      adminNote: "Animation data updated. Correction will be live in v2.4.1. Thank you for the keen observation.",
      borderColor: 'border-tertiary-fixed-dim',
      statusBg: 'bg-tertiary-container',
      statusText: 'text-tertiary-fixed',
      opacity: 'opacity-80',
      isRead: true
    },
    {
      id: 3,
      status: 'Awaiting Review',
      module: 'Spanish • Business Context',
      term: 'Empresa',
      suggestion: "In the 'Meeting Room' dialogue, the speaker uses 'compañía' while the text says 'empresa'. Requesting consistency across audio and transcript.",
      adminNote: "No admin comments yet...",
      borderColor: 'border-outline-variant',
      statusBg: 'bg-surface-container-high',
      statusText: 'text-on-surface-variant'
    }
  ];

  return (
    <AdminLayout>
      <div className="p-12 max-w-7xl mx-auto">
        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-surface-container-low p-8 rounded-lg relative overflow-hidden group">
            <p className="text-on-surface-variant font-medium text-sm mb-2">Pending Review</p>
            <h3 className="font-headline text-4xl text-primary">24</h3>
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-8xl">pending_actions</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-lg relative overflow-hidden group">
            <p className="text-on-surface-variant font-medium text-sm mb-2">Approved This Week</p>
            <h3 className="font-headline text-4xl text-tertiary-fixed-dim">142</h3>
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform text-tertiary-fixed-dim">
              <span className="material-symbols-outlined text-8xl">verified</span>
            </div>
          </div>
          <div className="bg-surface-container-low p-8 rounded-lg relative overflow-hidden group">
            <p className="text-on-surface-variant font-medium text-sm mb-2">Total Insights</p>
            <h3 className="font-headline text-4xl text-secondary">892</h3>
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform text-secondary">
              <span className="material-symbols-outlined text-8xl">auto_awesome</span>
            </div>
          </div>
        </div>

        {/* Feedback Grid */}
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-end mb-4">
            <div>
              <h4 className="font-headline text-2xl text-on-surface mb-1">Recent Submissions</h4>
              <p className="text-on-surface-variant text-sm">Reviewing user-suggested vocabulary and context corrections.</p>
            </div>
            <div className="flex gap-2">
              <button className="px-6 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-md">Pending Only</button>
            </div>
          </div>

          {feedbacks.map((item) => (
            <div key={item.id} className={`bg-surface-container-lowest p-8 rounded-lg flex flex-col md:flex-row gap-8 items-start hover:shadow-xl transition-shadow duration-500 relative group border-l-4 ${item.borderColor} shadow-[0_8px_32px_rgba(21,28,37,0.03)] ${item.opacity || ''}`}>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full ${item.statusBg} ${item.statusText} text-xs font-bold font-label uppercase tracking-widest`}>
                    {item.status}
                  </span>
                  <span className="text-on-surface-variant/40 text-xs font-medium">{item.module}</span>
                </div>
                <h5 className="text-3xl font-headline text-primary mb-2">{item.term}</h5>
                <p className="text-on-surface-variant mb-6 text-lg italic leading-relaxed">"{item.suggestion}"</p>
                <div className="bg-surface-container-low p-6 rounded-lg mb-6 border-l-2 border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`material-symbols-outlined text-sm ${item.isRead ? 'text-tertiary-fixed-dim' : 'text-primary'}`}>
                      {item.isRead ? 'done_all' : 'edit_note'}
                    </span>
                    <span className={`font-bold text-xs uppercase tracking-tighter ${item.isRead ? 'text-tertiary-fixed-dim' : 'text-primary'}`}>
                      {item.isRead ? 'Correction Verified' : 'Admin Note'}
                    </span>
                  </div>
                  <p className={`text-on-surface text-sm ${item.adminNote === 'No admin comments yet...' ? 'italic text-on-surface-variant' : ''}`}>
                    {item.adminNote}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full md:w-48">
                {item.isRead ? (
                  <div className="flex items-center justify-center gap-2 py-3 opacity-40">
                    <span className="material-symbols-outlined text-on-surface-variant">check_circle</span>
                    <span className="text-sm font-medium">Read by Admin</span>
                  </div>
                ) : (
                  <button className="w-full bg-primary text-white py-3 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-md">
                    Mark as Read
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminVocabularyFeedbackPage;
