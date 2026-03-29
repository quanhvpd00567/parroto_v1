import React, { useState, useEffect, useCallback } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import feedbackService from '../services/feedbackService';

const statusStyle = {
  pending: { bg: 'bg-amber-100', text: 'text-amber-700', label: 'Awaiting Review', border: 'border-amber-300' },
  in_progress: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'In Progress', border: 'border-blue-400' },
  resolved: { bg: 'bg-green-100', text: 'text-green-700', label: 'Approved', border: 'border-green-400' },
  dismissed: { bg: 'bg-gray-100', text: 'text-gray-500', label: 'Dismissed', border: 'border-gray-300' },
};

const VocabularyFeedbackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetch = useCallback(async (p) => {
    setLoading(true);
    try {
      const res = await feedbackService.getMyVocabFeedbacks({ page: p, limit: 20 });
      if (p === 1) setFeedbacks(res.data);
      else setFeedbacks((prev) => [...prev, ...res.data.filter((f) => !prev.some((p2) => p2._id === f._id))]);
      setMeta(res.meta || {});
    } catch { /* silent */ }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { fetch(page); }, [page, fetch]);

  const counts = {
    pending: feedbacks.filter((f) => f.status === 'pending' || f.status === 'in_progress').length,
    resolved: feedbacks.filter((f) => f.status === 'resolved').length,
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-surface-container-low p-8 rounded-lg relative overflow-hidden group">
            <p className="text-on-surface-variant font-medium text-sm mb-2">Pending</p>
            <h3 className="font-headline text-4xl text-primary">{counts.pending}</h3>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-lg relative overflow-hidden group">
            <p className="text-on-surface-variant font-medium text-sm mb-2">Approved</p>
            <h3 className="font-headline text-4xl text-green-600">{counts.resolved}</h3>
          </div>
          <div className="bg-surface-container-low p-8 rounded-lg relative overflow-hidden group">
            <p className="text-on-surface-variant font-medium text-sm mb-2">Total</p>
            <h3 className="font-headline text-4xl text-secondary">{meta.total || 0}</h3>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-end mb-4">
            <div>
              <h4 className="font-headline text-2xl text-on-surface mb-1">Contribution History</h4>
              <p className="text-on-surface-variant text-sm">Track your vocabulary corrections and suggestions.</p>
            </div>
          </div>

          {loading && feedbacks.length === 0 ? (
            <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div></div>
          ) : feedbacks.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <span className="material-symbols-outlined text-5xl text-on-surface-variant/30">spellcheck</span>
              <p className="text-on-surface-variant">No vocabulary feedback submitted yet.</p>
            </div>
          ) : (
            feedbacks.map((item) => {
              const st = statusStyle[item.status] || statusStyle.pending;
              return (
                <div key={item._id} className={`bg-surface-container-lowest p-8 rounded-lg border-l-4 ${st.border} shadow-sm ${item.status === 'dismissed' ? 'opacity-60' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full ${st.bg} ${st.text} text-xs font-bold uppercase tracking-widest`}>{st.label}</span>
                    <span className="text-on-surface-variant/40 text-xs">{new Date(item.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <h5 className="text-3xl font-headline text-primary mb-2">{item.vocabulary_word}</h5>
                  <p className="text-on-surface-variant mb-6 text-lg italic leading-relaxed">"{item.message}"</p>
                  {item.admin_note && (
                    <div className="bg-surface-container-low p-6 rounded-lg border-l-2 border-primary/20">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-sm text-primary">forum</span>
                        <span className="font-bold text-xs uppercase tracking-tighter text-primary">Admin Response</span>
                      </div>
                      <p className="text-on-surface text-sm">{item.admin_note}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {feedbacks.length < (meta.total || 0) && (
          <div className="flex justify-center pt-8">
            <button onClick={() => setPage((p) => p + 1)} disabled={loading}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-surface-container-low hover:bg-primary hover:text-white transition-all font-bold text-sm disabled:opacity-50">
              Load more
            </button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default VocabularyFeedbackPage;
