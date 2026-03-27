import apiClient from './apiClient';

const profileService = {
  getProfile() {
    return apiClient.get('/api/profile').then((res) => res.data);
  },

  updateProfile(data) {
    return apiClient.patch('/api/profile', data).then((res) => res.data);
  },

  changePassword(current_password, new_password) {
    return apiClient.post('/api/profile/change-password', { current_password, new_password });
  },

  uploadAvatar(file) {
    const formData = new FormData();
    formData.append('avatar', file);
    return apiClient.upload('/api/profile/avatar', formData);
  },
};

export default profileService;
