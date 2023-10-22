import { render, screen, cleanup } from '@testing-library/react';
import Plan from '../Plan';
import renderer from 'react-test-renderer';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('Plan match snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<Plan />} />
        </Routes>
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('Plan contains text', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path='/' element={<Plan />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText('Plan your day now')).toBeInTheDocument();
  expect(screen.getByText('Quick & easy with Our PC Club')).toBeInTheDocument();
});
