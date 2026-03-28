import apiClient from './apiClient';

function buildQuery(params = {}) {
  const query = new URLSearchParams();
  if (params.page) query.set('page', params.page);
  if (params.limit) query.set('limit', params.limit);
  if (params.status) query.set('status', params.status);
  const qs = query.toString();
  return qs ? `?${qs}` : '';
}

const redeemService = {
  getMyRequests: (params) => apiClient.get(`/api/redeem/my${buildQuery(params)}`),
  createRequest: (giftId) => apiClient.post('/api/redeem', { gift_id: giftId }),
};

export default redeemService;
