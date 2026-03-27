import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import authService from '../services/authService';

const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      await authService.requestPasswordReset(email);
      setSuccess(true);
    } catch (err) {
      setError(err.message || 'Failed to send reset link.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      sidebarTag="Security First"
      sidebarTitle={<>Regain Access to Your <br/><span className="text-primary italic">Learning Sanctuary.</span></>}
      sidebarSubtitle="Follow the steps to safely reset your credentials."
      sidebarImage="https://lh3.googleusercontent.com/aida-public/AB6AXuAZVtfMFcdLBh3bzTCR0d3KBPrCJqF0BvbbANEnBGxQ5o5vLrEzFcFxjDd0gGgo1i3WXTPtNE25ve0fYoV9ZWgGx4_wNFWGd4cY5vfi8pLu0YdpLW-A-WoPg56EHYymdhx9tEjKtEQbokvNRSl40yJSduk05DKfZlMi7BgBs-xQmsZob88t2pMcGzd5s9snTxppvy2L3C3yV9wkFWdwJgIiBA108NY-Gyrag9Eylru_F9Uq_nRSX7dsDp8eRpI9KZWYkinkScKtGWc5"
    >
      <div className="mb-10 text-center lg:text-left">
        <div className="w-16 h-16 bg-surface-container-low rounded-lg flex items-center justify-center mb-6 mx-auto lg:ml-0">
          <span className="material-symbols-outlined text-primary text-3xl">key</span>
        </div>
        <h2 className="font-headline font-extrabold text-3xl text-primary tracking-tight mb-2">Reset Password</h2>
        <p className="text-on-surface-variant text-sm">Enter your registered email and we will send you instructions to reset your password.</p>
      </div>

      {success ? (
        <div className="space-y-6">
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm" role="status">
            If the email exists, a reset link has been sent. Please check your inbox.
          </div>
          <div className="text-center">
            <Link className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:opacity-70 transition-opacity" to="/login">
              <span className="material-symbols-outlined text-lg">arrow_back</span>Back to Login
            </Link>
          </div>
        </div>
      ) : (
        <>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm" role="alert">{error}</div>
            )}
            <Input id="email" name="email" type="email" label="Email Address" placeholder="name@example.com" icon="mail" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <Button variant="gradient" type="submit" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Reset Link'}
            </Button>
          </form>
          <div className="mt-10 pt-8 border-t border-surface-variant/30 text-center">
            <Link className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:opacity-70 transition-opacity" to="/login">
              <span className="material-symbols-outlined text-lg">arrow_back</span>Back to Login
            </Link>
          </div>
        </>
      )}
    </AuthLayout>
  );
};

export default ResetPasswordPage;
