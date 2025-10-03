import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Download } from 'lucide-react';
import Container from '@/components/ui/Container';

function EvidenceTeaser() {
  const prefersReduced = useReducedMotion();
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: prefersReduced ? 0 : 0.3 }}
      className="py-16 md:py-24"
    >
      <Container>
        <div className="rounded-[var(--radius,14px)] ring-1 ring-[var(--ring)] bg-[var(--surface)] p-8 md:p-10 border-l-4 border-[var(--accent-600)]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Compliance Evidence Starter Pack</h3>
              <p className="text-[var(--text)] mt-2">Installer + policy templates (VAP/CEL + Kyverno) + retention profiles + runbooks + policy tests. Gated to keep noise down.</p>
            </div>
            <button
              onClick={() => navigate("/starter-pack")}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-600)] hover:bg-[var(--accent-700)] text-white px-5 py-2.5 active:translate-y-px"
            >
              <Download className="h-4 w-4" /> Get the pack
            </button>
          </div>
        </div>
      </Container>
    </motion.section>
  );
}

export default EvidenceTeaser;