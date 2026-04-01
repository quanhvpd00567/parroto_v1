import apiClient from './apiClient';
import { buildQuery } from '../utils/apiParams';

const vocabularyService = {
  getMyVocabulary: (params) => apiClient.get(`/api/vocabulary/my${buildQuery(params)}`),
  saveWord: (vocabularyId) => apiClient.post(`/api/vocabulary/${vocabularyId}/save`),
  toggleFavorite: (vocabularyId) => apiClient.patch(`/api/vocabulary/${vocabularyId}/favorite`),
  markLearned: (vocabularyId) => apiClient.patch(`/api/vocabulary/${vocabularyId}/learned`),
  removeWord: (vocabularyId) => apiClient.delete(`/api/vocabulary/${vocabularyId}`),
  checkAnswer: (vocabularyId, answer) => apiClient.post('/api/vocabulary/check-answer', { vocabulary_id: vocabularyId, answer }),
};

export default vocabularyService;
