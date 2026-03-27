const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

let isRefreshing = false;
let refreshQueue = [];

function processQueue(error, token) {
  refreshQueue.forEach(({ resolve, reject }) => {
    if (error) reject(error);
    else resolve(token);
  });
  refreshQueue = [];
}

function getTokens() {
  return {
    accessToken: localStorage.getItem('access_token'),
    refreshToken: localStorage.getItem('refresh_token'),
  };
}

function setTokens(accessToken, refreshToken) {
  localStorage.setItem('access_token', accessToken);
  if (refreshToken) localStorage.setItem('refresh_token', refreshToken);
}

function clearTokens() {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('user');
}

async function refreshAccessToken() {
  const { refreshToken } = getTokens();
  if (!refreshToken) throw new Error('No refresh token');

  const res = await fetch(`${BASE_URL}/api/auth/refresh`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refresh_token: refreshToken }),
  });

  if (!res.ok) throw new Error('Refresh failed');

  const data = await res.json();
  setTokens(data.access_token, data.refresh_token);
  return data.access_token;
}

async function request(url, options = {}) {
  const { accessToken } = getTokens();
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  }

  // Remove Content-Type for FormData (browser sets it with boundary)
  if (options.body instanceof FormData) {
    delete headers['Content-Type'];
  }

  let res;
  try {
    res = await fetch(`${BASE_URL}${url}`, { ...options, headers });
  } catch {
    throw { message: 'Không thể kết nối server. Vui lòng thử lại.', isNetworkError: true };
  }

  // Handle 401 — attempt token refresh (skip for auth endpoints)
  const isAuthEndpoint = url.startsWith('/api/auth/');
  if (res.status === 401 && !options._isRetry && !isAuthEndpoint) {
    if (isRefreshing) {
      // Wait for ongoing refresh
      return new Promise((resolve, reject) => {
        refreshQueue.push({
          resolve: () => resolve(request(url, { ...options, _isRetry: true })),
          reject,
        });
      });
    }

    isRefreshing = true;
    try {
      await refreshAccessToken();
      isRefreshing = false;
      processQueue(null);
      return request(url, { ...options, _isRetry: true });
    } catch (err) {
      isRefreshing = false;
      processQueue(err);
      clearTokens();
      window.location.href = '/login';
      throw { message: 'Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.', status: 401 };
    }
  }

  if (!res.ok) {
    let errorData;
    try {
      errorData = await res.json();
    } catch {
      errorData = { message: 'Đã xảy ra lỗi. Vui lòng thử lại sau.' };
    }
    throw {
      message: errorData.message || 'Đã xảy ra lỗi. Vui lòng thử lại sau.',
      status: res.status,
      data: errorData,
    };
  }

  // 204 No Content
  if (res.status === 204) return null;

  return res.json();
}

const apiClient = {
  get: (url, options) => request(url, { ...options, method: 'GET' }),
  post: (url, data, options) =>
    request(url, { ...options, method: 'POST', body: JSON.stringify(data) }),
  patch: (url, data, options) =>
    request(url, { ...options, method: 'PATCH', body: JSON.stringify(data) }),
  delete: (url, options) => request(url, { ...options, method: 'DELETE' }),
  upload: (url, formData, options) =>
    request(url, { ...options, method: 'POST', body: formData }),
};

export default apiClient;
export { getTokens, setTokens, clearTokens };
