import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { TranslationProvider } from "@/contexts/TranslationContext";
import { AnnouncementBanner } from "@/components/marketing/AnnouncementBanner";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import AnimatedRoutes from "@/routes";
import ThemeModal from "@/components/theme/ThemeModal";
import { useScrollOnMount } from "@/hooks/useScrollOnMount";

function Layout({ children }: { children: React.ReactNode }) {
  useScrollOnMount();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBanner
        text="New Features Are Here!"
        actionText="Learn More"
        onActionClick={() => window.location.hash = '#/product'}
      />
      <Header />
      {children}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <TranslationProvider>
        <Router
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          <Layout>
            <AnimatedRoutes />
          </Layout>
          <ThemeModal />
        </Router>
      </TranslationProvider>
    </ThemeProvider>
  );
}

export default App;
