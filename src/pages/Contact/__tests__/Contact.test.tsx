import { render, screen, cleanup, getByText } from '@testing-library/react';
import Contact from '../Contact';
import renderer from 'react-test-renderer';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('Contact contains main tag', () => {
  const { getByRole } = render(
    <MemoryRouter initialEntries={['/contact']}>
      <Routes>
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </MemoryRouter>
  );

  expect(getByRole('main')).toBeInTheDocument();
});
test('Contact contains form components', () => {
  render(
    <MemoryRouter initialEntries={['/contact']}>
      <Routes>
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByPlaceholderText('write there...')).toBeInTheDocument();
  expect(screen.getByText('Tell us about it')).toBeInTheDocument();

  expect(screen.getByText('send message')).toBeInTheDocument();
});
