import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { technologies } from "@/data/technologies";

function Logos() {
  const prefersReduced = useReducedMotion();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: prefersReduced ? 0 : 0.25 }}
      className="border-y bg-muted/40 py-8"
    >
      <Container>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
          We standardize
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-4 md:gap-8">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: prefersReduced ? 0 : 0.24,
                delay: i * 0.03,
              }}
              className="inline-flex items-center gap-2"
            >
              <CheckCircle2 className="h-4 w-4 text-primary" />
              {tech}
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
}

export { Logos };
