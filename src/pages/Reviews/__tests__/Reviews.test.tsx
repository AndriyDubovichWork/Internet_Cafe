import { render, screen, cleanup } from '@testing-library/react';
import Reviews from '../Reviews';
import renderer from 'react-test-renderer';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('Reviews match snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter initialEntries={['/reviews']}>
        <Routes>
          <Route path='/reviews' element={<Reviews />} />
        </Routes>
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Reviews contains main tag', () => {
  const { getByRole } = render(
    <MemoryRouter initialEntries={['/reviews']}>
      <Routes>
        <Route path='/reviews' element={<Reviews />} />
      </Routes>
    </MemoryRouter>
  );

  expect(getByRole('main')).toBeInTheDocument();
});
