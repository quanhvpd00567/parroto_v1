import apiClient from './apiClient';

function buildQuery(params = {}) {
  const query = new URLSearchParams();
  if (params.page) query.set('page', params.page);
  if (params.limit) query.set('limit', params.limit);
  if (params.search) query.set('search', params.search);
  if (params.level) query.set('level', params.level);
  if (params.part_of_speech) query.set('part_of_speech', params.part_of_speech);
  const qs = query.toString();
  return qs ? `?${qs}` : '';
}

const vocabularyService = {
  getMyVocabulary: (params) => apiClient.get(`/api/vocabulary/my${buildQuery(params)}`),
  saveWord: (vocabularyId) => apiClient.post(`/api/vocabulary/${vocabularyId}/save`),
  toggleFavorite: (vocabularyId) => apiClient.patch(`/api/vocabulary/${vocabularyId}/favorite`),
  markLearned: (vocabularyId) => apiClient.patch(`/api/vocabulary/${vocabularyId}/learned`),
  removeWord: (vocabularyId) => apiClient.delete(`/api/vocabulary/${vocabularyId}`),
  checkAnswer: (vocabularyId, answer) => apiClient.post('/api/vocabulary/check-answer', { vocabulary_id: vocabularyId, answer }),
};

export default vocabularyService;
