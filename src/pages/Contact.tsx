import * as React from 'react';
import { Page } from '@/components/ui/Page';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Label } from '@/components/ui/Label';
import { Seo } from '@/components/ui/Seo';

function Contact() {
  const [status, setStatus] = React.useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");
    // Fake a delay to simulate a network request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("Message sent! We will get back to you shortly.");
  }

  return (
    <Page>
      <Seo
        title="Contact"
        description="Have a question or want to work together? Fill out our contact form, and we'll get back to you as soon as possible."
        canonical="/contact"
      />
      <Container>
        <Page.Header>
          <Page.Title>Contact Us</Page.Title>
          <Page.Description>
            Have a question or want to work together? Fill out the form below,
            and we&apos;ll get back to you as soon as possible.
          </Page.Description>
        </Page.Header>

        <form onSubmit={handleSubmit} className="mx-auto max-w-lg">
          <div className="grid grid-cols-1 gap-y-6">
            <div>
              <Label htmlFor="name">Full name</Label>
              <div className="mt-1">
                <Input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  required
                  aria-required="true"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <div className="mt-1">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  aria-required="true"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <div className="mt-1">
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  aria-required="true"
                />
              </div>
            </div>
            <div>
              <Button
                type="submit"
                className="w-full"
                disabled={status.includes("Message sent")}
              >
                Send Message
              </Button>
            </div>
          </div>
          {status && (
            <p className="mt-4 text-center text-sm font-medium">{status}</p>
          )}
          <div role="status" className="sr-only">
            {status}
          </div>
        </form>
      </Container>
    </Page>
  );
}

export default Contact;
