import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import profileService from '../services/profileService';
import giftService from '../services/giftService';
import redeemService from '../services/redeemService';

const DEFAULT_GIFT_IMAGE = 'https://img.icons8.com/3d-fluency/256/gift.png';

const ShopPage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [gifts, setGifts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [redeemingId, setRedeemingId] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchProfile = useCallback(() => {
    profileService.getProfile().then(setUserProfile).catch(() => {});
  }, []);

  useEffect(() => {
    fetchProfile();
    giftService.getActiveGifts({ limit: 100 })
      .then((res) => setGifts(res.data || []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [fetchProfile]);

  const handleRedeem = async (gift) => {
    if (redeemingId) return;
    const userXp = userProfile?.xp ?? 0;
    if (userXp < gift.xp_cost) {
      setErrorMsg(`Not enough diamonds. You have ${userXp}, need ${gift.xp_cost}.`);
      setTimeout(() => setErrorMsg(null), 3000);
      return;
    }
    setRedeemingId(gift._id);
    setErrorMsg(null);
    try {
      await redeemService.createRequest(gift._id);
      setSuccessMsg(`"${gift.name}" redeemed! Your request is pending approval.`);
      fetchProfile();
      setTimeout(() => setSuccessMsg(null), 4000);
      window.dispatchEvent(new CustomEvent('xp-update', { detail: { total_xp: (userProfile?.xp ?? 0) - gift.xp_cost } }));
    } catch (err) {
      setErrorMsg(err.message || 'Failed to redeem');
      setTimeout(() => setErrorMsg(null), 3000);
    } finally {
      setRedeemingId(null);
    }
  };

  return (
    <DashboardLayout>
      <div className="pb-24">
        {/* Hero Balance */}
        <section className="mb-12 relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-container p-8 md:p-12 text-on-primary">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h1 className="font-headline text-3xl md:text-4xl font-extrabold mb-2 tracking-tight">The Parroto Treasury</h1>
              <p className="text-blue-100 opacity-90 max-w-md">Redeem your hard-earned diamonds for exclusive gifts and rewards.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 min-w-[140px]">
                <p className="text-[11px] font-bold uppercase tracking-wider opacity-70 mb-1">Diamond Balance</p>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-amber-400" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
                  <span className="text-2xl font-black">{userProfile?.xp ?? 0}</span>
                </div>
              </div>
              <Link to="/my-gifts" className="bg-white/10 backdrop-blur-md rounded-lg p-4 min-w-[140px] hover:bg-white/20 transition-colors flex flex-col justify-center">
                <p className="text-[11px] font-bold uppercase tracking-wider opacity-70 mb-1">My Gifts</p>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-blue-200">redeem</span>
                  <span className="text-sm font-bold">View History →</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="absolute -right-12 -top-12 w-64 h-64 bg-tertiary-fixed-dim/20 rounded-full blur-3xl"></div>
        </section>

        {/* Toast Messages */}
        {successMsg && (
          <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 font-medium flex items-center gap-2">
            <span className="material-symbols-outlined">check_circle</span> {successMsg}
          </div>
        )}
        {errorMsg && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 font-medium flex items-center gap-2">
            <span className="material-symbols-outlined">error</span> {errorMsg}
          </div>
        )}

        {/* Gifts Grid */}
        <section>
          <div className="mb-8">
            <h2 className="font-headline text-2xl font-extrabold text-blue-900 tracking-tight">Gift Shop</h2>
            <p className="text-on-surface-variant text-sm mt-1">Exchange your diamonds for exclusive rewards.</p>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
            </div>
          ) : gifts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <span className="material-symbols-outlined text-5xl text-on-surface-variant/30">storefront</span>
              <p className="text-on-surface-variant">No gifts available at the moment. Check back later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {gifts.map((gift) => {
                const imgUrl = gift.image_url || DEFAULT_GIFT_IMAGE;
                const canAfford = (userProfile?.xp ?? 0) >= gift.xp_cost;
                const isRedeeming = redeemingId === gift._id;
                const outOfStock = gift.quantity !== null && gift.quantity <= 0;

                return (
                  <div key={gift._id} className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(21,28,37,0.04)] flex flex-col group transition-transform hover:-translate-y-1">
                    <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                      <img src={imgUrl} alt={gift.name} className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500" />
                      {gift.quantity !== null && (
                        <div className="absolute top-3 left-3 bg-black/50 backdrop-blur px-2 py-1 rounded-lg text-white text-[10px] font-bold">
                          {gift.quantity > 0 ? `${gift.quantity} left` : 'Sold out'}
                        </div>
                      )}
                    </div>
                    <div className="p-5 flex flex-col grow">
                      <h4 className="font-bold text-on-surface text-lg mb-1">{gift.name}</h4>
                      <p className="text-on-surface-variant text-sm mb-4 line-clamp-2 flex-grow">{gift.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-1.5 rounded-full">
                          <span className="material-symbols-outlined text-amber-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
                          <span className="text-sm font-bold text-amber-700">{gift.xp_cost}</span>
                        </div>
                        <button
                          onClick={() => handleRedeem(gift)}
                          disabled={isRedeeming || outOfStock || !canAfford}
                          className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                            outOfStock
                              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                              : canAfford
                                ? 'bg-primary text-white hover:opacity-90 active:scale-95 cursor-pointer'
                                : 'bg-surface-container-low text-on-surface-variant cursor-not-allowed'
                          } disabled:opacity-60`}
                        >
                          {isRedeeming ? 'Redeeming...' : outOfStock ? 'Sold Out' : !canAfford ? 'Not Enough 💎' : 'Redeem'}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </DashboardLayout>
  );
};

export default ShopPage;
