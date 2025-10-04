import * as React from 'react';
import { Page } from '@/components/ui/Page';
import { Container } from '@/components/ui/Container';
import { BookingForm } from '@/components/sections/BookingForm';
import { Seo } from '@/components/ui/Seo';

function Book() {
  return (
    <Page>
      <Seo
        title="Book a call"
        description="Book a 30-minute call to discuss your Kubernetes security needs and see how we can help you achieve a security baseline in just one week."
        canonical="/book"
      />
      <Container>
        <Page.Header>
          <Page.Title>Schedule Your Free Security Consultation</Page.Title>
          <Page.Description>
            This free, 30-minute call is a no-pressure opportunity for us to
            understand your needs, confirm the scope, and reserve your slot.
            Choose a time that works for you below.
          </Page.Description>
        </Page.Header>
        <BookingForm />
      </Container>
    </Page>
  );
}

export default Book;
