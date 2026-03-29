import apiClient from './apiClient';

function buildQuery(params = {}) {
  const query = new URLSearchParams();
  if (params.page) query.set('page', params.page);
  if (params.limit) query.set('limit', params.limit);
  if (params.status) query.set('status', params.status);
  const qs = query.toString();
  return qs ? `?${qs}` : '';
}

const feedbackService = {
  // Contact Us
  submitContact: (data) => apiClient.post('/api/feedback/contact', data),

  // Vocabulary Feedback
  submitVocabFeedback: (data) => apiClient.post('/api/feedback/vocabulary', data),

  // My contacts (inbox)
  getMyContacts: (params) => apiClient.get(`/api/feedback/my-contacts${buildQuery(params)}`),

  // My vocabulary feedbacks
  getMyVocabFeedbacks: (params) => apiClient.get(`/api/feedback/my-vocabulary-feedbacks${buildQuery(params)}`),

  // Get single contact detail
  getContactDetail: (id) => apiClient.get(`/api/feedback/my-contacts/${id}`),

  // Reply to contact
  replyContact: (id, message) => apiClient.post(`/api/feedback/my-contacts/${id}/reply`, { message }),
};

export default feedbackService;
