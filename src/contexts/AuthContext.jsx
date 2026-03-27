import React, { createContext, useReducer, useEffect } from 'react';
import authService from '../services/authService';
import { setTokens, clearTokens } from '../services/apiClient';

const AuthContext = createContext(null);

const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { ...state, isLoading: true, error: null };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.access_token,
        refreshToken: action.payload.refresh_token,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return { ...state, isLoading: false, error: action.payload };
    case 'LOGOUT':
      return { ...initialState, isLoading: false };
    case 'TOKEN_REFRESHED':
      return {
        ...state,
        accessToken: action.payload.access_token,
        refreshToken: action.payload.refresh_token,
      };
    case 'RESTORE_SESSION':
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        isAuthenticated: true,
        isLoading: false,
      };
    case 'RESTORE_FAILED':
      return { ...initialState, isLoading: false };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Restore session from localStorage on mount
  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');
    const userStr = localStorage.getItem('user');

    if (accessToken && userStr) {
      try {
        const user = JSON.parse(userStr);
        dispatch({ type: 'RESTORE_SESSION', payload: { user, accessToken, refreshToken } });
      } catch {
        dispatch({ type: 'RESTORE_FAILED' });
      }
    } else {
      dispatch({ type: 'RESTORE_FAILED' });
    }
  }, []);

  const login = async (email, password) => {
    dispatch({ type: 'LOGIN_REQUEST' });
    try {
      const data = await authService.login(email, password);
      setTokens(data.access_token, data.refresh_token);
      localStorage.setItem('user', JSON.stringify(data.user));
      dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      return data;
    } catch (err) {
      const message = err.message || 'Đăng nhập thất bại';
      dispatch({ type: 'LOGIN_FAILURE', payload: message });
      throw err;
    }
  };

  const register = async (email, password, display_name) => {
    dispatch({ type: 'LOGIN_REQUEST' });
    try {
      const data = await authService.register(email, password, display_name);
      setTokens(data.access_token, data.refresh_token);
      localStorage.setItem('user', JSON.stringify(data.user));
      dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      return data;
    } catch (err) {
      const message = err.message || 'Đăng ký thất bại';
      dispatch({ type: 'LOGIN_FAILURE', payload: message });
      throw err;
    }
  };

  const logout = () => {
    clearTokens();
    dispatch({ type: 'LOGOUT' });
  };

  const clearError = () => dispatch({ type: 'CLEAR_ERROR' });

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout, clearError }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
