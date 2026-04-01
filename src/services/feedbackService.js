import apiClient from './apiClient';
import { buildQuery } from '../utils/apiParams';

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
