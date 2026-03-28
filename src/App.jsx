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
import ShopPage from './pages/ShopPage';
import MyGiftsPage from './pages/MyGiftsPage';
import HelpCenterPage from './pages/HelpCenterPage';
import ContactSupportPage from './pages/ContactSupportPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import LuckyWheelPage from './pages/LuckyWheelPage';
import AdminFeedbackPage from './pages/AdminFeedbackPage';
import AdminConversationPage from './pages/AdminConversationPage';
import AdminVocabularyFeedbackPage from './pages/AdminVocabularyFeedbackPage';

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
          <Route path="/my-gifts" element={<ProtectedRoute><MyGiftsPage /></ProtectedRoute>} />
          <Route path="/shop" element={<ProtectedRoute><ShopPage /></ProtectedRoute>} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
          <Route path="/lessons" element={<ProtectedRoute><LessonLibraryPage /></ProtectedRoute>} />
          <Route path="/practice" element={<ProtectedRoute><PracticeSessionPage /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path="/profile/edit" element={<ProtectedRoute><EditProfilePage /></ProtectedRoute>} />
          <Route path="/my-vocabulary" element={<ProtectedRoute><VocabularyPage /></ProtectedRoute>} />
          <Route path="/lucky-wheel" element={<ProtectedRoute><LuckyWheelPage /></ProtectedRoute>} />
          <Route path="/help-center" element={<HelpCenterPage />} />
          <Route path="/contact-support" element={<ContactSupportPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/admin/feedback" element={<ProtectedRoute><AdminFeedbackPage /></ProtectedRoute>} />
          <Route path="/admin/feedback/:id" element={<ProtectedRoute><AdminConversationPage /></ProtectedRoute>} />
          <Route path="/admin/vocabulary-feedback" element={<ProtectedRoute><AdminVocabularyFeedbackPage /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
    </ToastProvider>
  );
}

export default App;
