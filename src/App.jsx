import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ToastProvider } from './contexts/ToastContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import DashboardPage from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';
import LessonLibraryPage from './pages/LessonLibraryPage';
import PracticeSessionPage from './pages/PracticeSessionPage';
import EditProfilePage from './pages/EditProfilePage';
import ProfilePage from './pages/ProfilePage';
import VocabularyPage from './pages/VocabularyPage';
import RegisterPage from './pages/RegisterPage';
import MyNotesPage from './pages/MyNotesPage';

function App() {
  return (
    <ToastProvider>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/my-notes" element={<ProtectedRoute><MyNotesPage /></ProtectedRoute>} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
          <Route path="/lessons" element={<ProtectedRoute><LessonLibraryPage /></ProtectedRoute>} />
          <Route path="/practice" element={<ProtectedRoute><PracticeSessionPage /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path="/profile/edit" element={<ProtectedRoute><EditProfilePage /></ProtectedRoute>} />
          <Route path="/my-vocabulary" element={<ProtectedRoute><VocabularyPage /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
    </ToastProvider>
  );
}

export default App;
