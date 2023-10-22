import { render, screen, cleanup } from '@testing-library/react';
import SubHeader from '../SubHeader';
import renderer from 'react-test-renderer';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('SubHeader match snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter initialEntries={['/about']}>
        <Routes>
          <Route path='/about' element={<SubHeader title='hello' />} />
        </Routes>
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('SubHeader contains text', () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <Routes>
        <Route path='/about' element={<SubHeader title='hello' />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('/')).toBeInTheDocument();
});
