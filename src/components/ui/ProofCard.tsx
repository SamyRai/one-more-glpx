import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface ProofCardProps {
  title: string;
  items: string[];
  icon: React.ReactNode;
}

function ProofCard({ title, items, icon }: ProofCardProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      whileHover={{ y: prefersReduced ? 0 : -2 }}
      transition={{ duration: prefersReduced ? 0 : 0.18 }}
      className="rounded-[var(--radius,14px)] ring-1 ring-[var(--ring)] bg-[var(--surface)] p-5"
    >
      <div className="flex items-center gap-2 font-medium mb-2">{icon}{title}</div>
      <ul className="text-sm text-[var(--muted)] list-disc list-inside space-y-1">
        {items.map((it, i) => <li key={i}>{it}</li>)}
      </ul>
    </motion.div>
  );
}

export default ProofCard;