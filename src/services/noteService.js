import apiClient from './apiClient';

function buildQuery(params = {}) {
  const query = new URLSearchParams();
  if (params.page) query.set('page', params.page);
  if (params.limit) query.set('limit', params.limit);
  if (params.search) query.set('search', params.search);
  if (params.category) query.set('category', params.category);
  const qs = query.toString();
  return qs ? `?${qs}` : '';
}

const noteService = {
  getNotes: (params) => apiClient.get(`/api/notes${buildQuery(params)}`),
  getNote: (noteId) => apiClient.get(`/api/notes/${noteId}`),
  createNote: (data) => apiClient.post('/api/notes', data),
  updateNote: (noteId, data) => apiClient.patch(`/api/notes/${noteId}`, data),
  deleteNote: (noteId) => apiClient.delete(`/api/notes/${noteId}`),
};

export default noteService;
