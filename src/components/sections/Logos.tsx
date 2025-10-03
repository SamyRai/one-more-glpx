import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Container from '@/components/ui/Container';

function Logos() {
  const items = ["Gateway API", "Kyverno", "CEL/VAP", "Falco", "Calico eBPF", "KMS v2/Vault"];
  const prefersReduced = useReducedMotion();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: prefersReduced ? 0 : 0.25 }}
      className="py-8 border-y bg-[var(--bg-soft)]/50"
    >
      <Container>
        <div className="text-xs uppercase tracking-wider text-[var(--muted-2)] mb-3">We standardize</div>
        <div className="flex flex-wrap items-center gap-4 md:gap-8 text-[var(--text)]">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReduced ? 0 : 0.24, delay: i * 0.03 }}
              className="inline-flex items-center gap-2"
            >
              <CheckCircle2 className="h-4 w-4" />
              {it}
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
}

export default Logos;