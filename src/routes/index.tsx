import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '@/pages/Home';
import Posts from '@/pages/Posts';
import Post from '@/pages/Post';
import StarterPack from '@/pages/StarterPack';
import Book from '@/pages/Book';
import Privacy from '@/pages/Privacy';
import NotFound from '@/pages/NotFound';
import { Page } from '@/components/ui/Page';

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Page><Home /></Page>} />
        <Route path="/posts" element={<Page><Posts /></Page>} />
        <Route path="/posts/:slug" element={<Page><Post /></Page>} />
        <Route path="/starter-pack" element={<Page><StarterPack /></Page>} />
        <Route path="/book" element={<Page><Book /></Page>} />
        <Route path="/privacy" element={<Page><Privacy /></Page>} />
        <Route path="*" element={<Page><NotFound /></Page>} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;