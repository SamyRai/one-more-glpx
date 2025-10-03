import React, { useEffect } from 'react';
import { Container } from '@/components/ui/Container';

function Privacy() {
  useEffect(() => {
    document.title = "Privacy • Week‑to‑Ready";
  }, []);

  return (
    <main>
      <section className="py-16 md:py-24">
        <Container>
          <h1 className="text-3xl font-semibold">Privacy</h1>
          <p className="mt-2 text-[var(--text)]">We collect minimal details to deliver the Starter Pack and book a call. You can request deletion any time by emailing hi@example.com.</p>
        </Container>
      </section>
    </main>
  );
}

export default Privacy;