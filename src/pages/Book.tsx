import React, { useEffect } from 'react';
import { Container } from '@/components/ui/Container';

function Book() {
  useEffect(() => {
    document.title = "Book a call • Week‑to‑Ready";
  }, []);

  return (
    <main>
      <section className="py-16 md:py-24">
        <Container>
          <h1 className="text-3xl font-semibold">Book a Baseline Fit call</h1>
          <p className="mt-2 text-[var(--text)]">30 minutes to confirm fit, scope, and slot dates. Bring one question and one cluster fact.</p>
          <div className="mt-6 aspect-video w-full ring-1 ring-[var(--ring)] rounded-2xl bg-[var(--bg-soft)] flex items-center justify-center text-[var(--muted-2)]">
            Calendly embed placeholder
          </div>
          <p className="text-xs text-[var(--muted-2)] mt-3">We recommend using a work email for calendar invites.</p>
        </Container>
      </section>
    </main>
  );
}

export default Book;