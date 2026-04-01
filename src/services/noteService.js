import apiClient from './apiClient';
import { buildQuery } from '../utils/apiParams';

const noteService = {
  getNotes: (params) => apiClient.get(`/api/notes${buildQuery(params)}`),
  getNote: (noteId) => apiClient.get(`/api/notes/${noteId}`),
  createNote: (data) => apiClient.post('/api/notes', data),
  updateNote: (noteId, data) => apiClient.patch(`/api/notes/${noteId}`, data),
  deleteNote: (noteId) => apiClient.delete(`/api/notes/${noteId}`),
};

export default noteService;
