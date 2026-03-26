import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const ResetPasswordPage = () => {
  return (
    <AuthLayout
      sidebarTag="Security First"
      sidebarTitle={<>Regain Access to Your <br/><span className="text-primary italic">Learning Sanctuary.</span></>}
      sidebarSubtitle="We take your linguistic progress seriously. Follow the steps to safely reset your credentials and continue your journey where you left off."
      sidebarImage="https://lh3.googleusercontent.com/aida-public/AB6AXuAZVtfMFcdLBh3bzTCR0d3KBPrCJqF0BvbbANEnBGxQ5o5vLrEzFcFxjDd0gGgo1i3WXTPtNE25ve0fYoV9ZWgGx4_wNFWGd4cY5vfi8pLu0YdpLW-A-WoPg56EHYymdhx9tEjKtEQbokvNRSl40yJSduk05DKfZlMi7BgBs-xQmsZob88t2pMcGzd5s9snTxppvy2L3C3yV9wkFWdwJgIiBA108NY-Gyrag9Eylru_F9Uq_nRSX7dsDp8eRpI9KZWYkinkScKtGWc5"
    >
      <div className="mb-10 text-center lg:text-left">
        <div className="w-16 h-16 bg-surface-container-low rounded-lg flex items-center justify-center mb-6 mx-auto lg:ml-0">
          <span className="material-symbols-outlined text-primary text-3xl">key</span>
        </div>
        <h2 className="font-headline font-extrabold text-3xl text-primary tracking-tight mb-2">
          Reset Password
        </h2>
        <p className="text-on-surface-variant text-sm">
          Enter your registered email and we'll send you instructions to reset your password.
        </p>
      </div>

      <form className="space-y-6">
        <Input
          id="email"
          name="email"
          type="email"
          label="Email Address"
          placeholder="name@example.com"
          icon="mail"
          required
        />
        <Button variant="gradient" type="submit">
          Send Reset Link
        </Button>
      </form>

      <div className="mt-10 pt-8 border-t border-surface-variant/30 text-center">
        <Link
          className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:opacity-70 transition-opacity"
          to="/"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Back to Login
        </Link>
      </div>
    </AuthLayout>
  );
};

export default ResetPasswordPage;
