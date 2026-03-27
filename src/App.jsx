import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import DashboardPage from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';
import LessonLibraryPage from './pages/LessonLibraryPage';
import PracticeSessionPage from './pages/PracticeSessionPage';
import EditProfilePage from './pages/EditProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/lessons" element={<LessonLibraryPage />} />
        <Route path="/practice" element={<PracticeSessionPage />} />
        <Route path="/profile" element={<EditProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
