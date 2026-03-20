import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio core sections', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /who am i\?/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /education/i })).toBeInTheDocument();
});
