import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import feedbackService from '../services/feedbackService';

const statusStyle = {
  pending: { bg: 'bg-amber-100', text: 'text-amber-700', label: 'Pending' },
  in_progress: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'In Progress' },
  resolved: { bg: 'bg-green-100', text: 'text-green-700', label: 'Resolved' },
  dismissed: { bg: 'bg-gray-100', text: 'text-gray-500', label: 'Dismissed' },
};

const SupportConversationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [replyText, setReplyText] = useState('');
  const [sending, setSending] = useState(false);

  const fetchContact = () => {
    if (!id) return;
    feedbackService.getContactDetail(id)
      .then((res) => setContact(res.data || res))
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchContact(); }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleReply = async () => {
    if (!replyText.trim() || sending) return;
    setSending(true);
    try {
      const res = await feedbackService.replyContact(id, replyText);
      setContact(res.data || res);
      setReplyText('');
    } catch { /* silent */ }
    finally { setSending(false); }
  };

  if (loading) return <DashboardLayout><div className="flex justify-center py-20"><div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div></div></DashboardLayout>;
  if (!contact) return <DashboardLayout><div className="text-center py-20 text-on-surface-variant">Conversation not found</div></DashboardLayout>;

  const st = statusStyle[contact.status] || statusStyle.pending;
  const isClosed = contact.status === 'resolved' || contact.status === 'dismissed';

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        <button onClick={() => navigate('/feedback')} className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-6">
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          <span className="font-medium text-sm">Back to Inbox</span>
        </button>

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold font-headline text-on-surface">{contact.subject}</h2>
          <span className={`px-4 py-1.5 rounded-full ${st.bg} ${st.text} text-xs font-bold uppercase`}>{st.label}</span>
        </div>

        {/* Original message */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 mb-4 shadow-sm border border-outline-variant/10">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">You</div>
            <span className="font-medium text-sm">You</span>
            <span className="text-xs text-on-surface-variant/60 ml-auto">{new Date(contact.created_at).toLocaleString()}</span>
          </div>
          <p className="text-on-surface whitespace-pre-wrap">{contact.message}</p>
        </div>

        {/* Replies thread */}
        {contact.replies?.map((reply, idx) => {
          const isAdmin = reply.replied_by_type === 'admin';
          return (
            <div key={idx} className={`rounded-2xl p-6 mb-4 shadow-sm border border-outline-variant/10 ${isAdmin ? 'bg-blue-50/50 border-l-4 border-l-blue-400' : 'bg-surface-container-lowest'}`}>
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${isAdmin ? 'bg-blue-500 text-white' : 'bg-primary/10 text-primary'}`}>
                  {(reply.replied_by_name || 'U')[0]}
                </div>
                <span className={`font-medium text-sm ${isAdmin ? 'text-blue-700' : 'text-on-surface'}`}>
                  {isAdmin ? reply.replied_by_name : 'You'}
                </span>
                {isAdmin && <span className="px-2 py-0.5 bg-blue-100 text-blue-600 text-[10px] font-bold rounded-full">ADMIN</span>}
                <span className="text-xs text-on-surface-variant/60 ml-auto">{new Date(reply.replied_at).toLocaleString()}</span>
              </div>
              <p className="text-on-surface whitespace-pre-wrap">{reply.message}</p>
            </div>
          );
        })}

        {/* Reply input or closed message */}
        {isClosed ? (
          <div className="text-center py-6 text-on-surface-variant/50 text-sm">
            <span className="material-symbols-outlined text-green-500 align-middle mr-1">check_circle</span>
            This conversation has been {contact.status === 'resolved' ? 'resolved' : 'dismissed'}.
          </div>
        ) : (
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/10 mt-2">
            <textarea
              rows={3}
              placeholder="Type your reply..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && e.ctrlKey) handleReply(); }}
              className="w-full bg-surface-container-low rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder:text-outline-variant resize-none"
            />
            <div className="flex items-center justify-between mt-3">
              <span className="text-xs text-on-surface-variant/40">Ctrl+Enter to send</span>
              <button
                onClick={handleReply}
                disabled={!replyText.trim() || sending}
                className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl font-bold text-sm hover:opacity-90 active:scale-95 transition-all disabled:opacity-50"
              >
                <span className="material-symbols-outlined text-lg">send</span>
                {sending ? 'Sending...' : 'Send Reply'}
              </button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default SupportConversationPage;
