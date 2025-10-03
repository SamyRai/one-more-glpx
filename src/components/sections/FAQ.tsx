import * as React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { faqs } from '@/data/faq';

function FAQ() {
  return (
    <Section>
      <Container>
        <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {faqs.map(({ question, answer }) => (
            <Card key={question}>
              <CardHeader>
                <CardTitle>{question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export { FAQ };