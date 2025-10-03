import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/hooks/ThemeProvider';
import { useScrollOnMount } from '@/hooks/useScrollOnMount';
import { TranslationProvider } from '@/hooks/TranslationProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';

/**
 * Root application. Wraps routes with Theme and Translation providers and
 * includes persistent header and footer. Scrolls to top on route change.
 */
const App: React.FC = () => {
  useScrollOnMount();

  return (
    <ThemeProvider>
      <TranslationProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </TranslationProvider>
    </ThemeProvider>
  );
};

export default App;
