import * as React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Download } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

function EvidenceTeaser() {
  const prefersReduced = useReducedMotion();

  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: prefersReduced ? 0 : 0.3 }}
      className="py-16 lg:py-24"
    >
      <Container>
        <Card className="border-l-4 border-primary p-8 md:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold md:text-2xl">
                Compliance Evidence Starter Pack
              </h3>
              <p className="mt-2 text-muted-foreground">
                Installer + policy templates (VAP/CEL + Kyverno) + retention
                profiles + runbooks + policy tests. Gated to keep noise down.
              </p>
            </div>
            <Button asChild className="mt-4 shrink-0 md:mt-0">
              <Link to="/starter-pack">
                <Download className="mr-2 h-4 w-4" /> Get the pack
              </Link>
            </Button>
          </div>
        </Card>
      </Container>
    </motion.section>
  );
}

export { EvidenceTeaser };
