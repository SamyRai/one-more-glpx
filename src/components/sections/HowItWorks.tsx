import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Container from '@/components/ui/Container';

function HowItWorks() {
  const steps = [
    { title: "Preflight", text: "Cluster checks & scope — confirm baseline path; eBPF switch optional." },
    { title: "Install", text: "Gateway API TLS, admission policies, secrets at rest, runtime minimal." },
    { title: "Evidence", text: "Policy tests green, log/retention mapped to PCI/DORA/NIS2." },
    { title: "Handover", text: "Runbooks, rollback plans, and Q&A window." },
  ];
  const prefersReduced = useReducedMotion();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: prefersReduced ? 0 : 0.3 }}
      className="py-16 md:py-24"
    >
      <Container>
        <h2 className="text-2xl md:text-3xl font-semibold">How it works</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-12">
          <div className="relative">
            <motion.ol
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: prefersReduced ? 0 : 0.08 } } }}
              className="space-y-8"
            >
              {steps.map((s, i) => (
                <motion.li
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: prefersReduced ? 0 : 0.28 }}
                  className="relative pl-10"
                >
                  <span className="absolute left-0 top-0 h-7 w-7 rounded-full bg-[var(--accent-50)] ring-1 ring-[var(--accent-100)] flex items-center justify-center text-xs font-medium text-[var(--accent-700)]">
                    {i + 1}
                  </span>
                  <div className="font-medium">{s.title}</div>
                  <p className="text-sm text-[var(--muted)] mt-1">{s.text}</p>
                </motion.li>
              ))}
            </motion.ol>
            <div className="absolute left-3 top-3 bottom-3 w-px bg-[var(--divider)]" aria-hidden="true" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReduced ? 0 : 0.32 }}
            className="rounded-[var(--radius,14px)] ring-1 ring-[var(--ring)] bg-[var(--surface)] p-6"
          >
            <div className="text-sm text-[var(--muted)]">What you get</div>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-sm">
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[var(--accent-700)] mt-0.5" /> Gateway API TLS configured correctly</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[var(--accent-700)] mt-0.5" /> VAP/CEL invariants; Kyverno for defaults</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[var(--accent-700)] mt-0.5" /> Secrets at rest; minimal Falco eBPF alerts</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[var(--accent-700)] mt-0.5" /> Logging/retention templates aligned to PCI/DORA/NIS2</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[var(--accent-700)] mt-0.5" /> Policy test suite green + runbooks</li>
            </ul>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}

export default HowItWorks;