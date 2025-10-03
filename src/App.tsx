import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedRoutes from '@/routes';
import ThemeModal from '@/components/theme/ThemeModal';
import { useScrollOnMount } from '@/hooks/useScrollOnMount';

function Layout({ children }: { children: React.ReactNode }) {
  useScrollOnMount();
  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--bg-soft)] to-[var(--bg)] text-[var(--text)]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Layout>
            <AnimatedRoutes />
          </Layout>
          <ThemeModal />
        </Router>
    </ThemeProvider>
  );
}

export default App;