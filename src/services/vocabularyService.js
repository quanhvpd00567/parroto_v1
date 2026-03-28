import apiClient from './apiClient';

const vocabularyService = {
  getAll: (params = {}) => {
    const query = new URLSearchParams();
    if (params.page) query.set('page', params.page);
    if (params.limit) query.set('limit', params.limit);
    if (params.search) query.set('search', params.search);
    if (params.level) query.set('level', params.level);
    if (params.part_of_speech) query.set('part_of_speech', params.part_of_speech);
    const qs = query.toString();
    return apiClient.get(`/api/vocabulary${qs ? `?${qs}` : ''}`);
  },

  getById: (id) => apiClient.get(`/api/vocabulary/${id}`),
};

export default vocabularyService;
