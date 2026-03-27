import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';
import Footer from './Footer';

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16 flex flex-1">
        <Sidebar />
        <div className="flex-1 flex flex-col md:ml-64">
          <main className="flex-1 p-6 md:p-12 max-w-7xl mx-auto w-full">
            {children}
          </main>
          <Footer />
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default DashboardLayout;
