import { useState } from 'react';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';

function App() {
  const [currentScreen, setCurrentScreen] = useState('login');

  const navigateToLogin = () => setCurrentScreen('login');
  const navigateToReset = () => setCurrentScreen('reset');
  const navigateToJoin = () => {
    console.log('Navigate to join screen');
    // Implement sign up navigation if needed
  };

  return (
    <div className="bg-background font-body text-on-surface antialiased min-h-screen flex flex-col">
      {currentScreen === 'login' && (
        <Login onForgotPassword={navigateToReset} onJoin={navigateToJoin} />
      )}
      {currentScreen === 'reset' && (
        <ResetPassword onBackToLogin={navigateToLogin} />
      )}

      {currentScreen === 'login' ? (
        <footer className="py-12 px-8 flex flex-col items-center space-y-6 text-on-surface-variant/60 text-xs font-semibold uppercase tracking-widest">
          <div className="flex space-x-8">
            <a className="hover:text-primary transition-colors" href="#">Privacy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms</a>
            <a className="hover:text-primary transition-colors" href="#">Help</a>
          </div>
          <span>© 2024 Parroto Luminous. All rights reserved.</span>
        </footer>
      ) : (
        <footer className="py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-outline">
          <div className="flex gap-6">
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
          </div>
          <div>
            © 2024 Luminous Language Learning. All rights reserved.
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;
