import apiClient from './apiClient';
import { buildQuery } from '../utils/apiParams';

const redeemService = {
  getMyRequests: (params) => apiClient.get(`/api/redeem/my${buildQuery(params)}`),
  createRequest: (giftId) => apiClient.post('/api/redeem', { gift_id: giftId }),
};

export default redeemService;
