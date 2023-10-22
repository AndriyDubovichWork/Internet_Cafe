import {
  render,
  screen,
  cleanup,
  waitFor,
  fireEvent,
} from '@testing-library/react';
import Register from '../Register';
import renderer from 'react-test-renderer';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('Register match snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter initialEntries={['/register']}>
        <Routes>
          <Route path='/register' element={<Register />} />
        </Routes>
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('Register contains fields', () => {
  const { getByRole } = render(
    <MemoryRouter initialEntries={['/register']}>
      <Routes>
        <Route path='/register' element={<Register />} />
      </Routes>
    </MemoryRouter>
  );

  expect(getByRole('main')).toBeInTheDocument();

  expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument();
});
test('Register input cnahges', () => {
  render(
    <MemoryRouter initialEntries={['/register']}>
      <Routes>
        <Route path='/register' element={<Register />} />
      </Routes>
    </MemoryRouter>
  );

  const email: HTMLInputElement = screen.getByPlaceholderText('Email');
  const password: HTMLInputElement = screen.getByPlaceholderText('Password');

  expect(email).toBeInTheDocument();
  expect(password).toBeInTheDocument();

  waitFor(() => {
    fireEvent.change(email, { target: { value: 'invalid' } });
    fireEvent.change(password, { target: { value: 'Rtx 4080' } });
  });

  expect(email.value).toBe('invalid');
  expect(password.value).toBe('Rtx 4080');
});
