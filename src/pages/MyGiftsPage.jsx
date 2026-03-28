import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import profileService from '../services/profileService';

const MyGiftsPage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    profileService.getProfile()
      .then(setUserProfile)
      .catch(() => {});
  }, []);

  const gifts = [
    {
      id: 1,
      name: 'Scholar Parrot Avatar',
      status: 'Approved',
      diamonds: 500,
      date: 'Oct 12',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSQPdxPLg4GXIBDRBXtI9-4lffEFldqjiK3if5uwpxgGG107BeY3k2XE6HucBXMG9rBlnuZWsN9HYvdSYtiEQeDrAj3SBdG02kAGl9yJmkd5B7j1FBf-6gQJfPAnJsCHl4qMY2fXMcryXmIkBo6wtxsCVISev_Kowb-ZVeWRs-PyPpYmqi4rz-bP-amLBArQ75YbtkpXw8Y2BLmpWqF0OfLdJde8ZcTegztk5MDS_Xm8MYtUZm6S4jelVET2lBEG6AdsXXCCp61hjm'
    },
    {
      id: 2,
      name: '100-Day Fire Badge',
      status: 'Pending',
      diamonds: 250,
      date: '2h ago',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjclGO6sdPYb_oWisXDAK-mIaynVMnmE7sYg6qENUeg-45Ac6wVtZULTyXQpgcSt8DYibrVMzcZQQ0x19r8UCNQ8VHgfBRMmCtmg4nda0wqceiikE-kyonig8bVJOHR3fKW8tWtu14nJKoezmmcadiXdlBbiqdEo8KPJwx3-AyAf2MqlbIfWnXEDTyMYg1SD6IBYzwRdefB4m8GaPN8hFasE-kSlfdzquZHAvNexwOrFmYCNnIA-kifNyf5Nyx3bFvn7vNLDHGNNpq'
    },
    {
      id: 3,
      name: 'Sunset Editorial UI',
      status: 'Approved',
      diamonds: 1200,
      date: 'Sep 28',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFDopdTHxYgOCeS0iZ7uHKR1_77KRsGNxVG_A3418dgC-wzVngbehrBm9KoMkCV0lBDJQz6WMigvZwe6RjPOcknvzI5TVe3qjNDq9db7Zwygx6vos_OfObjff99QdRaKXvnMK4gK9-WkyHwgb4fuF7m9LDh-fpxVmik323JzJnlwcotsP0jxx67laLSYqeQdbK2arib1NrVzpfUx708EVq9C4kJHGibaOtfFKVIsc1xSLkgmvJtgEnamRbnu7Nk5hqjAi4dSunvKUV'
    },
    {
      id: 4,
      name: 'Golden Pass Voucher',
      status: 'Rejected',
      diamonds: 50,
      date: 'Sep 20',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrNFOGKjlgdUKkQCdsTgiRNM4YgR2HclBKUZGT0CqEAwEGKuPMWcc3AnGi2ENvoRXUrzDIi_Vu330y-1hoKMk9l2cGCT8kDd1Knv8oCUuEjlMwC9HhxWMffYpMJkcGcSPBFdqOPCZn6CZg7BnbizLPU-etKJFO9dOYjMX7BvDzcBN4pAl3X3BkgObBgLNcV_0ry67x-95Rdx0U9LZqD2h6ndEeyXXke2uzmj37QXtuilLQzhsvI7mFgaT86jbd9YTTWy4dNiLpGOmQ'
    }
  ];

  const filteredGifts = gifts.filter(gift =>
    gift.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const stats = [
    { label: 'Approved', value: 12, icon: 'check_circle', color: 'text-tertiary-fixed-dim', bgColor: 'bg-tertiary-fixed-dim/20' },
    { label: 'Pending', value: 3, icon: 'pending', color: 'text-on-secondary-container', bgColor: 'bg-secondary-fixed/50' },
    { label: 'Rejected', value: 1, icon: 'cancel', color: 'text-error', bgColor: 'bg-error-container/50' },
    { label: 'Total Diamonds', value: (userProfile?.xp || 0).toLocaleString(), icon: 'diamond', color: 'text-white', bgColor: 'bg-gradient-to-br from-primary to-primary-container', isGradient: true },
  ];

  return (
    <DashboardLayout>
      <div className="pb-12">
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-extrabold text-primary mb-2 tracking-tight font-headline">My Gifts</h1>
            <p className="text-on-surface-variant max-w-md">Manage your redeemed language rewards and profile customizations.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative flex-grow md:w-80">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input
                type="text"
                placeholder="Search gifts..."
                className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border-none rounded-xl focus:ring-2 focus:ring-primary shadow-sm text-on-surface"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Link to="/shop" className="bg-surface-container-low text-on-primary-fixed-variant px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-sm">shopping_bag</span>
              Back to Shop
            </Link>
          </div>
        </div>

        {/* Summary Stats Bento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.isGradient ? stat.bgColor : 'bg-surface-container-lowest'} p-6 rounded-xl shadow-[0_8px_32px_rgba(21,28,37,0.04)] flex items-center gap-5 ${stat.isGradient ? 'text-white' : ''}`}>
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

        {/* Gifts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredGifts.map((gift) => (
            <div key={gift.id} className={`bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(21,28,37,0.04)] flex flex-col group transition-transform hover:-translate-y-1 ${gift.status === 'Rejected' ? 'opacity-80' : ''}`}>
              <div className={`aspect-square relative overflow-hidden bg-surface-container-low ${gift.status === 'Rejected' ? 'grayscale' : ''}`}>
                <img src={gift.image} alt={gift.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 text-white text-xs font-bold">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span> {gift.diamonds}
                </div>
                <div className={`absolute top-4 right-4 ${gift.status === 'Rejected' ? 'bg-error-container' : 'bg-white/90'} backdrop-blur px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm`}>
                  <span className={`w-2 h-2 rounded-full ${gift.status === 'Approved' ? 'bg-tertiary-fixed-dim' : gift.status === 'Pending' ? 'bg-secondary' : 'bg-error'}`}></span>
                  <span className={`text-[10px] font-bold uppercase tracking-tighter ${gift.status === 'Rejected' ? 'text-error' : 'text-on-surface'}`}>{gift.status}</span>
                </div>
              </div>
              <div className="p-5 flex flex-col grow">
                <h3 className={`font-bold text-lg mb-4 ${gift.status === 'Rejected' ? 'text-on-surface-variant line-through' : ''}`}>{gift.name}</h3>
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-xs font-medium text-outline">Redeemed {gift.date}</span>
                  {gift.status === 'Pending' && (
                    <button className="w-10 h-10 rounded-full bg-error-container text-error flex items-center justify-center hover:bg-error hover:text-white transition-colors cursor-pointer" title="Cancel Redemption">
                      <span className="material-symbols-outlined text-xl">delete</span>
                    </button>
                  )}
                  {gift.status === 'Rejected' && (
                    <button className="text-error font-bold text-sm flex items-center gap-1 hover:underline cursor-pointer">
                      View Note <span className="material-symbols-outlined text-sm">info</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MyGiftsPage;
