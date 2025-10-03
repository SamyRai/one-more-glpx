import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders the main app component', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});