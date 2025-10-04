import React, { useEffect } from 'react';
import { Page } from '@/components/ui/Page';
import { Container } from '@/components/ui/Container';
import { BookingForm } from '@/components/sections/BookingForm';

function Book() {
  useEffect(() => {
    document.title = 'Book a call • Week-to-Ready';
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