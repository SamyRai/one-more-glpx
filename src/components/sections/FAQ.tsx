import React from 'react';
import Container from '@/components/ui/Container';

function FAQ() {
  const qa = [
    { q: "Is eBPF mandatory?", a: "No. Baseline ships without kube-proxy removal. eBPF is a gated optional step with preflight + rollback." },
    { q: "Do you set retention periods?", a: "We include PCI's 12/3 months precisely; for DORA/NIS2 we ship templates + rationale to set periods with your regulator." },
    { q: "What does the fixed price include?", a: "Install, tests, templates, runbooks, and a 30‑day async Q&A window. Scope is clearly defined up-front." },
  ];

  return (
    <section className="py-16 md:py-24">
      <Container>
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {qa.map((i, idx) => (
            <div key={idx} className="rounded-[var(--radius,14px)] ring-1 ring-[var(--ring)] bg-[var(--surface)] p-5">
              <div className="font-medium">{i.q}</div>
              <p className="text-sm text-[var(--muted)] mt-2">{i.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FAQ;