import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  CheckCircle2,
  Download,
  Calendar,
  FileText,
  Lock,
  ShieldCheck,
  Server,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { badgeVariants } from '@/components/ui/Badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { useTranslation } from '@/hooks/useTranslation';
import { cn } from '@/lib/utils';

interface ProofPointProps {
  title: string;
  items: string[];
  icon: React.ReactNode;
}

function ProofPoint({ title, items, icon }: ProofPointProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-2 pb-2">
        {icon}
        <CardTitle className="text-base font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
          {items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function Hero() {
  const prefersReduced = useReducedMotion();
  const { t } = useTranslation();

  const proofPoints: ProofPointProps[] = [
    {
      title: 'TLS correctly terminated',
      icon: <Lock className="h-5 w-5" />,
      items: ['Gateway API Terminate', 'mTLS passthrough option', 'Cert rotation checks'],
    },
    {
      title: 'Admission guardrails',
      icon: <ShieldCheck className="h-5 w-5" />,
      items: ['VAP/CEL invariants', 'Kyverno defaults', 'No dueling webhooks'],
    },
    {
      title: 'Runtime & secrets',
      icon: <Server className="h-5 w-5" />,
      items: ['Falco eBPF minimal', 'KMS v2/Vault', 'RBAC review'],
    },
    {
      title: 'Evidence',
      icon: <FileText className="h-5 w-5" />,
      items: ['Before/after tests', 'Retention templates', 'Runbooks'],
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: prefersReduced ? 0 : 0.35 }}
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-secondary/10 opacity-40 blur-3xl" />
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReduced ? 0 : 0.32, delay: 0.02 }}
              className={cn(badgeVariants({ variant: 'outline' }), 'mb-4')}
            >
              <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
              5 working days to baseline
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReduced ? 0 : 0.38, delay: 0.06 }}
              className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl"
            >
              {t('hero.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReduced ? 0 : 0.38, delay: 0.12 }}
              className="mt-4 text-muted-foreground"
            >
              Gateway API TLS configured correctly, admission policies live
              (VAP/CEL + Kyverno where needed), secrets at rest, minimal Falco
              eBPF alerts, and logging/retention templates that map to
              PCI/DORA/NIS2.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReduced ? 0 : 0.38, delay: 0.18 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <Button size="lg" asChild>
                <Link to="/starter-pack">
                  <Download className="mr-2 h-4 w-4" />
                  Get Starter Pack
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/book">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book a free call
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReduced ? 0 : 0.38, delay: 0.22 }}
              className="mt-4 text-sm text-muted-foreground"
            >
              Fixed-scope. Typical price €7.5–9.5k.
              <span className="ml-2 inline-flex items-center gap-1">
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
            className="md:col-span-6"
          >
            <Card className="p-6">
              <div className="grid grid-cols-2 gap-4">
                {proofPoints.map((point) => (
                  <ProofPoint key={point.title} {...point} />
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}

export { Hero };