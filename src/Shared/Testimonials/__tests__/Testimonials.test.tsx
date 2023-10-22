import { render, screen, cleanup } from '@testing-library/react';
import Testimonials from '../Testimonials';
import renderer from 'react-test-renderer';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('Testimonials match snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<Testimonials />} />
        </Routes>
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('Testimonials contains text', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path='/' element={<Testimonials />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText('Reviewed by People')).toBeInTheDocument();
  expect(screen.getByText("Client's Testimonials")).toBeInTheDocument();
});
