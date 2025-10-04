import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { steps, deliverables } from "@/data/how-it-works";

function HowItWorks() {
  const prefersReduced = useReducedMotion();

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: prefersReduced ? 0 : 0.3 }}
      className="py-16 lg:py-24"
    >
      <Container>
        <h2 className="text-2xl font-semibold md:text-3xl">How it works</h2>
        <div className="mt-8 grid gap-12 md:grid-cols-2">
          <div className="relative">
            <motion.ol
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {steps.map((step, i) => (
                <motion.li
                  key={step.title}
                  variants={itemVariants}
                  transition={{ duration: prefersReduced ? 0 : 0.28 }}
                  className="relative pl-10"
                >
                  <Badge
                    variant="outline"
                    className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full"
                  >
                    {i + 1}
                  </Badge>
                  <div className="font-medium">{step.title}</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {step.text}
                  </p>
                </motion.li>
              ))}
            </motion.ol>
            <div
              className="absolute bottom-3 left-3 top-3 w-px bg-border"
              aria-hidden="true"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReduced ? 0 : 0.32 }}
          >
            <Card className="p-6">
              <p className="text-sm text-muted-foreground">What you get</p>
              <ul className="mt-3 grid grid-cols-1 gap-2 text-sm">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}

export { HowItWorks };
