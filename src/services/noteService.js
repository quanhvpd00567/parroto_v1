import apiClient from './apiClient';

function buildQuery(params = {}) {
  const query = new URLSearchParams();
  if (params.page) query.set('page', params.page);
  if (params.limit) query.set('limit', params.limit);
  if (params.search) query.set('search', params.search);
  if (params.topic) query.set('topic', params.topic);
  const qs = query.toString();
  return qs ? `?${qs}` : '';
}

const noteService = {
  getNotes: (params) => apiClient.get(`/api/notes${buildQuery(params)}`),
  deleteNote: (noteId) => apiClient.delete(`/api/notes/${noteId}`),
};

export default noteService;
