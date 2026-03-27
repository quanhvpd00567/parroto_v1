import apiClient from './apiClient';

const authService = {
  login(email, password) {
    return apiClient.post('/api/auth/login', { email, password });
  },

  register(email, password, display_name) {
    return apiClient.post('/api/auth/register', { email, password, display_name });
  },

  refreshToken(refresh_token) {
    return apiClient.post('/api/auth/refresh', { refresh_token });
  },

  requestPasswordReset(email) {
    return apiClient.post('/api/auth/request-password-reset', { email });
  },
};

export default authService;
