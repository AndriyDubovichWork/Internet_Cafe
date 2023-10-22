import { render, screen, cleanup } from '@testing-library/react';
import About from '../About';
import renderer from 'react-test-renderer';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('About match snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter initialEntries={['/about']}>
        <Routes>
          <Route path='/about' element={<About />} />
        </Routes>
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('About contains main tag', () => {
  const { getByRole } = render(
    <MemoryRouter initialEntries={['/about']}>
      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>
    </MemoryRouter>
  );

  expect(getByRole('main')).toBeInTheDocument();
});
