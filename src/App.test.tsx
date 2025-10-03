import { render, screen } from '@testing-library/react';
import App from './App';
import { TranslationProvider } from './contexts/TranslationContext';

test('renders the main app component and displays the hero headline', async () => {
  render(
    <TranslationProvider>
      <App />
    </TranslationProvider>
  );

  // Find the h1 element by its role and level
  const headline = await screen.findByRole('heading', { level: 1 });

  // Assert that the h1 element contains the expected text content,
  // which is more flexible for text split across multiple child elements.
  expect(headline).toHaveTextContent(
    'Kubernetes security baseline in one week — with auditor‑ready evidence'
  );
});