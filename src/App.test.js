import { render, screen } from '@testing-library/react';
import App from './App';

test('title contains correct text', () => {
  render(<App />);
  const titleElement = screen.getByRole("heading");
  expect(titleElement).toHaveTextContent("Hello, World!");
});