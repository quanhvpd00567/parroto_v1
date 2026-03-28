import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import SocialAuthButtons from '../components/auth/SocialAuthButtons';
import useAuth from '../hooks/useAuth';

const RegisterPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, isLoading, error, clearError } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();
    try {
      await register(email, password, fullName);
      navigate('/dashboard');
    } catch {
      // error is handled in context
    }
  };

  const sidebarContent = (
    <div className="flex flex-col gap-6 pt-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-tertiary-fixed-dim flex items-center justify-center">
          <span className="material-symbols-outlined text-primary">menu_book</span>
        </div>
        <div>
          <h4 className="font-bold font-headline text-on-surface">Curated Curriculum</h4>
          <p className="text-sm text-on-surface-variant">Handcrafted lessons for 32 languages.</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center">
          <span className="material-symbols-outlined text-secondary">analytics</span>
        </div>
        <div>
          <h4 className="font-bold font-headline text-on-surface">Deep Insights</h4>
          <p className="text-sm text-on-surface-variant">Visualise your cognitive growth over time.</p>
        </div>
      </div>
    </div>
  );

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join our global community of linguists."
      sidebarTag="The Luminous Path"
      sidebarTitle={<>Begin your <br/>curated journey.</>}
      sidebarSubtitle="Step into an editorial language sanctuary. No noise, just the beauty of linguistics and the path to mastery."
      sidebarContent={sidebarContent}
    >
      <div className="space-y-8">
        {/* Social login logic temporarily hidden
        <SocialAuthButtons />

        <div className="relative flex items-center gap-4">
          <div className="flex-grow h-px bg-outline-variant/30"></div>
          <span className="text-xs font-bold text-outline uppercase tracking-widest font-label">Or Email</span>
          <div className="flex-grow h-px bg-outline-variant/30"></div>
        </div>
        */}

        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm" role="alert">
              {error}
            </div>
          )}

          <Input
            id="fullName"
            name="fullName"
            type="text"
            label="Full Name"
            placeholder="Julianne Moore"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <Input
            id="email"
            name="email"
            type="email"
            label="Email Address"
            placeholder="julianne@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="space-y-2">
            <Input
              id="password"
              name="password"
              type="password"
              label="Password"
              placeholder="••••••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-[10px] text-outline mt-2 px-1 uppercase tracking-wider font-bold">Must be at least 8 characters with one special symbol.</p>
          </div>

          <Button variant="gradient" type="submit" disabled={isLoading}>
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </Button>
        </form>

        <div className="text-center">
          <p className="text-sm text-on-surface-variant">
            Already have an account?
            <Link className="text-primary font-bold hover:underline ml-1" to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
