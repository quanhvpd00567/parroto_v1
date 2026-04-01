import apiClient from './apiClient';
import { buildQuery } from '../utils/apiParams';

const giftService = {
  getActiveGifts: (params) => apiClient.get(`/api/gifts${buildQuery(params)}`),
};

export default giftService;
