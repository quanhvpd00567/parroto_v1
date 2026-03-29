import React from 'react';

const PublicFooter = () => {
  return (
    <footer className="bg-slate-50 w-full py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="text-lg font-bold text-primary">Vocera</div>
          <p className="text-sm font-inter text-slate-500 max-w-xs">© 2024 Vocera. Language Learning Reimagined.</p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div className="flex flex-col gap-3">
            <p className="font-bold text-on-surface text-sm">Product</p>
            <a className="text-sm font-inter text-slate-500 hover:text-primary transition-colors" href="#">Lessons</a>
            <a className="text-sm font-inter text-slate-500 hover:text-primary transition-colors" href="#">Practice</a>
            <a className="text-sm font-inter text-slate-500 hover:text-primary transition-colors" href="#">Methodology</a>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-bold text-on-surface text-sm">Legal</p>
            <a className="text-sm font-inter text-slate-500 hover:text-primary transition-colors" target='blank' href="/privacy-policy">Privacy Policy</a>
            <a className="text-sm font-inter text-slate-500 hover:text-primary transition-colors"  target='blank'  href="/terms-of-service">Terms of Service</a>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-bold text-on-surface text-sm">Support</p>
            <a className="text-sm font-inter text-slate-500 hover:text-primary transition-colors"  target='blank'  href="/help-center">Help Center</a>
            <a className="text-sm font-inter text-slate-500 hover:text-primary transition-colors" href="#">Language Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;
