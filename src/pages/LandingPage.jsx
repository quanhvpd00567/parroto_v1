import React from 'react';
import LandingNavbar from '../components/landing/LandingNavbar';
import LandingHero from '../components/landing/LandingHero';
import MethodologyBento from '../components/landing/MethodologyBento';
import SocialProof from '../components/landing/SocialProof';
import DownloadApp from '../components/landing/DownloadApp';
import PublicFooter from '../components/landing/PublicFooter';

const LandingPage = () => {
  return (
    <div className="text-on-surface antialiased bg-background min-h-screen">
      <LandingNavbar />
      <main className="pt-16">
        <LandingHero />
        <MethodologyBento />
        <SocialProof />
        <DownloadApp />
      </main>
      <PublicFooter />
    </div>
  );
};

export default LandingPage;
