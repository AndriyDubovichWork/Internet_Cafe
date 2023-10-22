import {
  render,
  screen,
  cleanup,
  waitFor,
  fireEvent,
} from '@testing-library/react';
import ForgotPassword from '../ForgotPassword';
import renderer from 'react-test-renderer';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('ForgotPassword match snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter initialEntries={['/forgotPassword']}>
        <Routes>
          <Route path='/forgotPassword' element={<ForgotPassword />} />
        </Routes>
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('ForgotPassword contains fields', () => {
  const { getByRole } = render(
    <MemoryRouter initialEntries={['/forgotPassword']}>
      <Routes>
        <Route path='/forgotPassword' element={<ForgotPassword />} />
      </Routes>
    </MemoryRouter>
  );

  expect(getByRole('main')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
});

test('Register input cnahges', () => {
  render(
    <MemoryRouter initialEntries={['/forgotPassword']}>
      <Routes>
        <Route path='/forgotPassword' element={<ForgotPassword />} />
      </Routes>
    </MemoryRouter>
  );

  const email: HTMLInputElement = screen.getByPlaceholderText('Email');

  expect(email).toBeInTheDocument();

  waitFor(() => {
    fireEvent.change(email, { target: { value: 'invalid' } });
  });

  expect(email.value).toBe('invalid');
});
