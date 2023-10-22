import { render, screen, cleanup } from '@testing-library/react';
import Team from '../Team';
import renderer from 'react-test-renderer';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('Team match snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter initialEntries={['/team']}>
        <Routes>
          <Route path='/team' element={<Team />} />
        </Routes>
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('Team contains main tag', () => {
  const { getByRole } = render(
    <MemoryRouter initialEntries={['/team']}>
      <Routes>
        <Route path='/team' element={<Team />} />
      </Routes>
    </MemoryRouter>
  );

  expect(getByRole('main')).toBeInTheDocument();
});
