import apiClient from './apiClient';

function buildQuery(params = {}) {
  const query = new URLSearchParams();
  if (params.page) query.set('page', params.page);
  if (params.limit) query.set('limit', params.limit);
  if (params.search) query.set('search', params.search);
  const qs = query.toString();
  return qs ? `?${qs}` : '';
}

const giftService = {
  getActiveGifts: (params) => apiClient.get(`/api/gifts${buildQuery(params)}`),
};

export default giftService;
