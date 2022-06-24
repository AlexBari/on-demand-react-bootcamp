import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app and find Store Name', () => {
  render(<App />);
  const linkElement = screen.getByText(/BlueFox/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders app and find Logo', () => {
  const result = render(<App />);
  const linkElement = result.container.querySelector('#logo');
  expect(linkElement).toBeInTheDocument();
});