import * as React from 'react';
import { Page } from '@/components/ui/Page';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Label } from '@/components/ui/Label';

function Contact() {
  React.useEffect(() => {
    document.title = 'Contact • Week-to-Ready';
  }, []);

  return (
    <Page>
      <Container>
        <Page.Header>
          <Page.Title>Contact Us</Page.Title>
          <Page.Description>
            Have a question or want to work together? Fill out the form below,
            and we'll get back to you as soon as possible.
          </Page.Description>
        </Page.Header>

        <form className="mx-auto max-w-lg">
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
                />
              </div>
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <div className="mt-1">
                <Textarea id="message" name="message" rows={4} required />
              </div>
            </div>
            <div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </div>
          </div>
        </form>
      </Container>
    </Page>
  );
}

export default Contact;