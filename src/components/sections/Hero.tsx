import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, Download, Calendar, FileText, Lock, ShieldCheck, Server } from 'lucide-react';
import Container from '@/components/ui/Container';
import ProofCard from '@/components/ui/ProofCard';
import { useTranslation } from '@/contexts/TranslationContext';

function Hero() {
  const navigate = useNavigate();
  const prefersReduced = useReducedMotion();
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: prefersReduced ? 0 : 0.35 }}
      className="relative overflow-hidden py-24 md:py-32 bg-[var(--surface)]"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--accent-200)] opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[var(--accent-100)] opacity-40 blur-3xl" />
      <Container>
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReduced ? 0 : 0.32, delay: 0.02 }}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-50)] text-[var(--accent-700)] px-3 py-1 text-xs font-medium mb-4 shadow-sm ring-1 ring-[var(--accent-100)]"
            >
              <CheckCircle2 className="h-4 w-4" /> 5 working days to baseline
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReduced ? 0 : 0.38, delay: 0.06 }}
              className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight"
            >
              {t('home.headline')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReduced ? 0 : 0.38, delay: 0.12 }}
              className="mt-4 text-[var(--muted)]"
            >
              Gateway API TLS configured correctly, admission policies live (VAP/CEL + Kyverno where needed), secrets at rest, minimal Falco eBPF alerts, and logging/retention templates that map to PCI/DORA/NIS2.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReduced ? 0 : 0.38, delay: 0.18 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <button onClick={() => navigate("/starter-pack")} className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-600)] hover:bg-[var(--accent-700)] text-white px-5 py-2.5 shadow-md active:translate-y-px">
                <Download className="h-4 w-4" />
                Get Starter Pack
              </button>
              <button onClick={() => navigate("/book")} className="inline-flex items-center gap-2 rounded-full ring-1 ring-[var(--ring)] px-5 py-2.5 active:translate-y-px">
                <Calendar className="h-4 w-4" />
                Book a 30‑min fit call
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReduced ? 0 : 0.38, delay: 0.22 }}
              className="mt-4 text-sm text-[var(--muted-2)]"
            >
              Fixed‑scope. Typical price €7.5–9.5k.
              <span className="inline-flex items-center gap-1 ml-2">
                <FileText className="h-4 w-4" />
                Policy test suite included.
              </span>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReduced ? 0 : 0.4, delay: 0.12 }}
            className="md:col-span-6 rounded-[var(--radius,14px)] ring-1 ring-[var(--ring)] bg-[var(--surface)] p-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <ProofCard title="TLS correctly terminated" icon={<Lock className="h-5 w-5" />} items={["Gateway API Terminate", "mTLS passthrough option", "Cert rotation checks"]} />
              <ProofCard title="Admission guardrails" icon={<ShieldCheck className="h-5 w-5" />} items={["VAP/CEL invariants", "Kyverno defaults", "No dueling webhooks"]} />
              <ProofCard title="Runtime & secrets" icon={<Server className="h-5 w-5" />} items={["Falco eBPF minimal", "KMS v2/Vault", "RBAC review"]} />
              <ProofCard title="Evidence" icon={<FileText className="h-5 w-5" />} items={["Before/after tests", "Retention templates", "Runbooks"]} />
            </div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}

export default Hero;