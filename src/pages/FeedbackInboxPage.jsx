import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import feedbackService from '../services/feedbackService';

const statusStyle = {
  pending: { bg: 'bg-amber-100', text: 'text-amber-700', label: 'Pending' },
  in_progress: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'In Progress' },
  resolved: { bg: 'bg-green-100', text: 'text-green-700', label: 'Resolved' },
  dismissed: { bg: 'bg-gray-100', text: 'text-gray-500', label: 'Dismissed' },
};

const FeedbackInboxPage = () => {
  const [contacts, setContacts] = useState([]);
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetch = useCallback(async (p) => {
    setLoading(true);
    try {
      const res = await feedbackService.getMyContacts({ page: p, limit: 20 });
      if (p === 1) setContacts(res.data);
      else setContacts((prev) => [...prev, ...res.data.filter((c) => !prev.some((p2) => p2._id === c._id))]);
      setMeta(res.meta || {});
    } catch { /* silent */ }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { fetch(page); }, [page, fetch]);

  const counts = {
    pending: contacts.filter((c) => c.status === 'pending' || c.status === 'in_progress').length,
    resolved: contacts.filter((c) => c.status === 'resolved').length,
  };

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h3 className="text-4xl font-headline font-extrabold text-primary mb-2">Message Inbox</h3>
            <p className="text-on-surface-variant max-w-md">Manage your inquiries with our support team.</p>
          </div>
          <div className="flex gap-3">
            <div className="bg-surface-container-lowest px-6 py-4 rounded-2xl shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-tertiary-fixed-dim/20 flex items-center justify-center text-on-tertiary-fixed-variant">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant font-medium uppercase tracking-tighter leading-none mb-1">Resolved</p>
                <p className="text-xl font-bold font-headline leading-none text-primary">{counts.resolved}</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest px-6 py-4 rounded-2xl shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary-fixed/30 flex items-center justify-center text-on-secondary-fixed-variant">
                <span className="material-symbols-outlined">pending</span>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant font-medium uppercase tracking-tighter leading-none mb-1">Active</p>
                <p className="text-xl font-bold font-headline leading-none text-secondary">{counts.pending}</p>
              </div>
            </div>
          </div>
        </div>

        {loading && contacts.length === 0 ? (
          <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div></div>
        ) : contacts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant/30">inbox</span>
            <p className="text-on-surface-variant">No messages yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {contacts.map((c) => {
              const st = statusStyle[c.status] || statusStyle.pending;
              const lastReply = c.replies?.length > 0 ? c.replies[c.replies.length - 1] : null;
              const date = new Date(c.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
              return (
                <Link key={c._id} to={`/feedback/${c._id}`}
                  className="bg-surface-container-lowest hover:bg-surface-container-low transition-all p-6 rounded-lg flex flex-col md:flex-row items-start md:items-center gap-6 group cursor-pointer border-l-4 border-transparent hover:border-primary block">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">question_answer</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-headline font-bold text-lg text-on-background truncate">{c.subject}</h4>
                      <span className={`px-3 py-1 rounded-full ${st.bg} ${st.text} text-[10px] font-bold uppercase tracking-wider`}>{st.label}</span>
                    </div>
                    <p className="text-on-surface-variant text-sm truncate max-w-xl">
                      {lastReply ? `Admin: "${lastReply.message.slice(0, 80)}${lastReply.message.length > 80 ? '...' : ''}"` : c.message.slice(0, 80)}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-medium text-on-surface-variant/60">{date}</span>
                    {c.replies?.length > 0 && <p className="text-[10px] text-primary font-bold">{c.replies.length} replies</p>}
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {contacts.length < (meta.total || 0) && (
          <div className="flex justify-center pt-8">
            <button onClick={() => setPage((p) => p + 1)} disabled={loading}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-surface-container-low hover:bg-primary hover:text-white transition-all font-bold text-sm disabled:opacity-50">
              {loading ? <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" /> : null}
              Load more
            </button>
          </div>
        )}

        <div className="mt-8 text-center text-xs text-on-surface-variant/50">
          Showing {contacts.length} of {meta.total || 0} conversations
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FeedbackInboxPage;
