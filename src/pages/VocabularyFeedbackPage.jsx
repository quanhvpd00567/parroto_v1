import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';

const VocabularyFeedbackPage = () => {
  const feedbacks = [
    {
      id: 1,
      status: 'In Progress',
      module: 'French • Beginner Module',
      term: 'Flâner',
      suggestion: "I suggested adding 'aimless wandering' as a secondary translation. The current entry feels too literal.",
      adminNote: "Review in progress. Our editorial team is evaluating the addition of 'aimless wandering' to include the poetic Parisian connotation.",
      borderColor: 'border-secondary',
      statusBg: 'bg-secondary-fixed',
      statusText: 'text-on-secondary-fixed'
    },
    {
      id: 2,
      status: 'Approved',
      module: 'Japanese • Kanji III',
      term: '木漏れ日 (Komorebi)',
      suggestion: "Noticed the stroke order animation for the 4th stroke had an incorrect anchor point.",
      adminNote: "Animation data updated. The fix will be live in v2.4.1. Thank you for your keen observation!",
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
      suggestion: "The audio uses 'compañía' while the transcript says 'empresa'. Requesting consistency.",
      adminNote: "Thank you for your feedback. An administrator will review this shortly.",
      borderColor: 'border-outline-variant',
      statusBg: 'bg-surface-container-high',
      statusText: 'text-on-surface-variant'
    }
  ];

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-surface-container-low p-8 rounded-lg relative overflow-hidden group">
            <p className="text-on-surface-variant font-medium text-sm mb-2">My Pending Suggestions</p>
            <h3 className="font-headline text-4xl text-primary">2</h3>
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-8xl">pending_actions</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-lg relative overflow-hidden group">
            <p className="text-on-surface-variant font-medium text-sm mb-2">Approved Contributions</p>
            <h3 className="font-headline text-4xl text-tertiary-fixed-dim text-display-sm">12</h3>
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform text-tertiary-fixed-dim">
              <span className="material-symbols-outlined text-8xl">verified</span>
            </div>
          </div>
          <div className="bg-surface-container-low p-8 rounded-lg relative overflow-hidden group">
            <p className="text-on-surface-variant font-medium text-sm mb-2">Total Impact Score</p>
            <h3 className="font-headline text-4xl text-secondary">145</h3>
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform text-secondary">
              <span className="material-symbols-outlined text-8xl">auto_awesome</span>
            </div>
          </div>
        </div>

        {/* Feedback Grid */}
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-end mb-4">
            <div>
              <h4 className="font-headline text-2xl text-on-surface mb-1">Contribution History</h4>
              <p className="text-on-surface-variant text-sm">Track your suggested vocabulary corrections and linguistic improvements.</p>
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
                      {item.isRead ? 'done_all' : 'forum'}
                    </span>
                    <span className={`font-bold text-xs uppercase tracking-tighter ${item.isRead ? 'text-tertiary-fixed-dim' : 'text-primary'}`}>
                      {item.isRead ? 'Contribution Approved' : 'Support Feedback'}
                    </span>
                  </div>
                  <p className={`text-on-surface text-sm ${item.adminNote === 'No admin comments yet...' ? 'italic text-on-surface-variant' : ''}`}>
                    {item.adminNote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default VocabularyFeedbackPage;
