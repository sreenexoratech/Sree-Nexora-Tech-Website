import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { PageTransition } from '../components/common/ScrollReveal';

export const RootLayout: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top upon navigating to a new route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-[#03050A] text-[#F8FAFC] relative selection:bg-[#258BFF] selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content View with Smooth Page Transition */}
      <main className="flex-grow pt-[80px] sm:pt-[92px]">
        <PageTransition key={pathname}>
          <Outlet />
        </PageTransition>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Speed Dial */}
      <WhatsAppButton />
    </div>
  );
};
