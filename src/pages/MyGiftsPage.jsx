import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import profileService from '../services/profileService';
import redeemService from '../services/redeemService';

const DEFAULT_GIFT_IMAGE = 'https://img.icons8.com/3d-fluency/256/gift.png';

const statusDot = {
  approved: 'bg-tertiary-fixed-dim',
  pending: 'bg-secondary',
  rejected: 'bg-error',
};

const statusBadgeBg = {
  approved: 'bg-white/90',
  pending: 'bg-white/90',
  rejected: 'bg-error-container',
};

const MyGiftsPage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [requests, setRequests] = useState([]);
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [noteModal, setNoteModal] = useState(null);

  useEffect(() => {
    profileService.getProfile().then(setUserProfile).catch(() => {});
  }, []);

  const fetchRequests = useCallback(async (targetPage) => {
    setLoading(true);
    try {
      const res = await redeemService.getMyRequests({ page: targetPage, limit: 20 });
      if (targetPage === 1) {
        setRequests(res.data);
      } else {
        setRequests((prev) => {
          const ids = new Set(prev.map((r) => r._id));
          return [...prev, ...res.data.filter((r) => !ids.has(r._id))];
        });
      }
      setMeta(res.meta || {});
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchRequests(page); }, [page, fetchRequests]);

  const filtered = requests.filter((r) => {
    if (!searchQuery) return true;
    const name = r.gift_id?.name || '';
    return name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const counts = {
    approved: requests.filter((r) => r.status === 'approved').length,
    pending: requests.filter((r) => r.status === 'pending').length,
    rejected: requests.filter((r) => r.status === 'rejected').length,
  };

  const hasMore = requests.length < (meta.total || 0);

  const stats = [
    { label: 'Approved', value: counts.approved, icon: 'check_circle', color: 'text-tertiary-fixed-dim', bgColor: 'bg-tertiary-fixed-dim/20' },
    { label: 'Pending', value: counts.pending, icon: 'pending', color: 'text-on-secondary-container', bgColor: 'bg-secondary-fixed/50' },
    { label: 'Rejected', value: counts.rejected, icon: 'cancel', color: 'text-error', bgColor: 'bg-error-container/50' },
    { label: 'Total Diamonds', value: (userProfile?.xp || 0).toLocaleString(), icon: 'diamond', color: 'text-white', bgColor: 'bg-gradient-to-br from-primary to-primary-container', isGradient: true },
  ];

  return (
    <DashboardLayout>
      <div className="pb-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-extrabold text-primary mb-2 tracking-tight font-headline">My Gifts</h1>
            <p className="text-on-surface-variant max-w-md">Manage your redeemed language rewards and profile customizations.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative flex-grow md:w-80">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input type="text" placeholder="Search gifts..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border-none rounded-xl focus:ring-2 focus:ring-primary shadow-sm text-on-surface" />
            </div>
            <Link to="/shop" className="bg-surface-container-low text-on-primary-fixed-variant px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-sm">shopping_bag</span>
              Back to Shop
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className={`${stat.isGradient ? stat.bgColor : 'bg-surface-container-lowest'} p-6 rounded-xl shadow-[0_8px_32px_rgba(21,28,37,0.04)] flex items-center gap-5 ${stat.isGradient ? 'text-white' : ''}`}>
              <div className={`w-14 h-14 rounded-full ${stat.isGradient ? 'bg-white/20' : stat.bgColor} flex items-center justify-center ${stat.isGradient ? '' : stat.color}`}>
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{stat.icon}</span>
              </div>
              <div>
                <div className={`text-3xl font-bold ${stat.isGradient ? '' : 'text-on-surface'}`}>{stat.value}</div>
                <div className={`text-sm font-semibold uppercase tracking-wider ${stat.isGradient ? 'opacity-80' : 'text-on-surface-variant'}`}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Grid */}
        {loading && requests.length === 0 ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant/30">redeem</span>
            <p className="text-on-surface-variant">No gifts found. Visit the shop to redeem rewards.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filtered.map((req) => {
                const gift = req.gift_id || {};
                const st = req.status;
                const imgUrl = gift.image_url || DEFAULT_GIFT_IMAGE;
                const date = req.created_at ? new Date(req.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : '';

                return (
                  <div key={req._id} className={`bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(21,28,37,0.04)] flex flex-col group transition-transform hover:-translate-y-1 ${st === 'rejected' ? 'opacity-80' : ''}`}>
                    <div className={`aspect-square relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 ${st === 'rejected' ? 'grayscale' : ''}`}>
                      <img src={imgUrl} alt={gift.name} className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 text-white text-xs font-bold">
                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span> {req.xp_spent}
                      </div>
                      <div className={`absolute top-4 right-4 ${statusBadgeBg[st] || 'bg-white/90'} backdrop-blur px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm`}>
                        <span className={`w-2 h-2 rounded-full ${statusDot[st] || 'bg-gray-400'}`}></span>
                        <span className={`text-[10px] font-bold uppercase tracking-tighter ${st === 'rejected' ? 'text-error' : 'text-on-surface'}`}>{st}</span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col grow">
                      <h3 className={`font-bold text-lg mb-4 ${st === 'rejected' ? 'text-on-surface-variant line-through' : ''}`}>{gift.name || 'Gift'}</h3>
                      <div className="mt-auto flex justify-between items-center">
                        <span className="text-xs font-medium text-outline">Redeemed {date}</span>
                        {st === 'rejected' && req.reject_note && (
                          <button onClick={() => setNoteModal(req.reject_note)} className="text-error font-bold text-sm flex items-center gap-1 hover:underline cursor-pointer">
                            View Note <span className="material-symbols-outlined text-sm">info</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {hasMore && (
              <div className="flex justify-center pt-8">
                <button onClick={() => setPage((p) => p + 1)} disabled={loading}
                  className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-surface-container-low hover:bg-primary hover:text-white transition-all duration-300 font-bold text-sm shadow-sm hover:shadow-xl hover:shadow-primary/20 disabled:opacity-50">
                  {loading ? <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" /> : <span className="material-symbols-outlined text-xl">expand_more</span>}
                  <span>Load more</span>
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Reject Note Modal */}
      {noteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" onClick={() => setNoteModal(null)}>
          <div className="bg-white rounded-2xl w-full max-w-md p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-error text-2xl">info</span>
              <h3 className="text-xl font-bold text-on-surface font-headline">Rejection Note</h3>
            </div>
            <p className="text-on-surface-variant leading-relaxed mb-6">{noteModal}</p>
            <button onClick={() => setNoteModal(null)} className="w-full py-3 bg-surface-container-low rounded-xl font-bold text-sm hover:bg-surface-container-high transition-colors">
              Close
            </button>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default MyGiftsPage;
