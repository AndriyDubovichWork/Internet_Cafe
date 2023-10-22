import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import BookPC from '../BookPC';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('BookPC contains tags', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path='/' element={<BookPC />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText('Book PC')).toBeInTheDocument();

  expect(screen.getByText('Select Date')).toBeInTheDocument();
  expect(screen.getByText('GPU')).toBeInTheDocument();
  expect(screen.getByText('CPU')).toBeInTheDocument();
  expect(screen.getByText('From')).toBeInTheDocument();
  expect(screen.getByText('Until')).toBeInTheDocument();

  expect(screen.getByText('Book')).toBeInTheDocument();
});

test('input changing', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path='/' element={<BookPC />} />
      </Routes>
    </MemoryRouter>
  );

  const dateInput: HTMLInputElement = screen.getByPlaceholderText('DD/MM/YYYY');
  const GPUInput: HTMLInputElement = screen.getByDisplayValue('Rtx 4090');
  const CPUInput: HTMLInputElement = screen.getByDisplayValue('i9 13th 13900k');

  expect(dateInput).toBeInTheDocument();
  expect(GPUInput).toBeInTheDocument();
  expect(CPUInput).toBeInTheDocument();

  waitFor(() => {
    fireEvent.change(dateInput, { target: { value: '12/11/1099' } });
    fireEvent.change(GPUInput, { target: { value: 'Rtx 4080' } });
    fireEvent.change(CPUInput, { target: { value: 'i7 13th 13700k' } });
  });

  expect(dateInput.value).toBe('12/11/1099');
  expect(GPUInput.value).toBe('Rtx 4080');
  expect(CPUInput.value).toBe('i7 13th 13700k');
});
