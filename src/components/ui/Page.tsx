import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface PageProps {
  children: React.ReactNode;
}

function Page({ children }: PageProps) {
  const prefers = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: prefers ? 0 : 0.22, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default Page;