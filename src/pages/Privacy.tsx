import React, { useEffect } from "react";
import { Container } from "@/components/ui/Container";

function Privacy() {
  useEffect(() => {
    document.title = "Privacy • Week‑to‑Ready";
  }, []);

  return (
    <main>
      <section className="py-16 md:py-24">
        <Container>
          <h1 className="text-3xl font-semibold">Privacy Policy</h1>
          <p className="mt-2 text-muted-foreground">
            We collect minimal details to deliver the Starter Pack and book a
            call. You can request deletion any time by emailing{" "}
            <a
              href="mailto:privacy@week-to-ready.com"
              className="font-medium text-primary underline"
            >
              privacy@week-to-ready.com
            </a>
            .
          </p>
        </Container>
      </section>
    </main>
  );
}

export default Privacy;
