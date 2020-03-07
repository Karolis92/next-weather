import React from 'react';
import { render } from '@testing-library/react';
import App from './app';

test('renders image', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId('image');
  expect(linkElement).toBeInTheDocument();
});
