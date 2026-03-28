import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import SocialAuthButtons from '../components/auth/SocialAuthButtons';
import useAuth from '../hooks/useAuth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error, clearError } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch {
      // error is set in AuthContext
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Continue your journey where you left off."
      sidebarTag="The Luminous Path"
      sidebarTitle={<>Master the world's <br/> tongues with ease.</>}
      sidebarSubtitle="Experience an editorial approach to language learning. Quiet, focused, and designed for deep retention."
      sidebarImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDTRQcSyU9UYN2RatxmoT1mdLOV01WJ8HybYjRFwW3zJJTm6K-yWL5GBnGTYF4ccLsuqBYqEVfI6Y_Gb10sHW8i7J5WvpjOPhGcQsbOpxMjXejWaoOK6jOAEgBjkwNFKyXeTMb-pHRSEWP-mXBEGBCVKaGBS3wg7oe1xZGqOa9QOzsG2tW4z1j9-mIVaIffaluCOIyS-2xdjmTr2yG6qU6MakdMGWZrAy3vd10MlWKo3wIJ0sgJYV8m8uHMR-zpE5pxmcDMJkaE_6yh"
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm" role="alert">
            {error}
          </div>
        )}
        <Input
          id="email"
          name="email"
          type="email"
          label="Email Address"
          placeholder="name@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="space-y-2">
          <div className="flex justify-between items-center ml-1">
            <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider" htmlFor="password">
              Password
            </label>
            <Link className="text-xs font-semibold text-primary hover:opacity-70 transition-opacity" to="/reset-password">
              Forgot Password?
            </Link>
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button variant="gradient" type="submit" disabled={isLoading}>
          {isLoading ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>

      {/* Social login logic temporarily hidden
      <div className="relative my-10">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-surface-container-highest"></div>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="px-4 bg-surface-container-lowest text-on-surface-variant font-semibold uppercase tracking-widest">
            Or continue with
          </span>
        </div>
      </div>

      <SocialAuthButtons />
      */}

      <p className="mt-10 text-center text-sm text-on-surface-variant">
        Don't have an account?
        <Link className="text-primary font-bold hover:underline underline-offset-4 ml-1" to="/register">Join Parroto</Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
