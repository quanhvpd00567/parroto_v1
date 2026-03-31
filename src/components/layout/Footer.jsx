import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-12 border-t border-slate-200 bg-slate-50 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <span className="text-lg font-bold text-primary">Vocera</span>
          <p className="text-sm font-inter text-slate-500">© 2024 Vocera. Language Learning Reimagined.</p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end items-center">
          <a className="text-sm font-inter text-slate-500 hover:text-blue-700 transition-colors" target='_blank' rel="noopener noreferrer" href="/privacy-policy">Privacy Policy</a>
          <a className="text-sm font-inter text-slate-500 hover:text-blue-700 transition-colors" target='_blank' rel="noopener noreferrer" href="/terms-of-service">Terms of Service</a>
          <a className="text-sm font-inter text-slate-500 hover:text-blue-700 transition-colors" target='_blank' rel="noopener noreferrer" href="/help-center">Help Center</a>
          <a className="text-sm font-inter text-slate-500 hover:text-blue-700 transition-colors" href="#">Methodology</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
