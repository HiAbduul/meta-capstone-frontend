import React from 'react';

// Mock react-router to avoid ESM parsing issues in Jest environment
jest.mock('react-router', () => ({
  createBrowserRouter: () => ({}),
  RouterProvider: ({ children }) => <div>RouterProviderMock</div>,
}));

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RouterProvider mock', () => {
  render(<App />);
  const el = screen.getByText(/RouterProviderMock/i);
  expect(el).toBeInTheDocument();
});
