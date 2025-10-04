import React, { useEffect } from "react";
import { setMetaDescription } from "@/lib/meta";
import { Page } from "@/components/ui/Page";
import { Container } from "@/components/ui/Container";
import { BookingForm } from "@/components/sections/BookingForm";

function Book() {
  useEffect(() => {
    document.title = "Book a call • Week-to-Ready";
    setMetaDescription(
      "Book a 30-minute call to discuss your Kubernetes security needs and see how we can help you achieve a security baseline in just one week.",
    );
  }, []);

  return (
    <Page>
      <Container>
        <Page.Header>
          <Page.Title>Book a Baseline Fit call</Page.Title>
          <Page.Description>
            30 minutes to confirm fit, scope, and slot dates. Select a date and
            time that works for you.
          </Page.Description>
        </Page.Header>
        <BookingForm />
      </Container>
    </Page>
  );
}

export default Book;
