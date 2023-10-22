import { render, screen, cleanup } from '@testing-library/react';
import Greeting from '../Greeting';
import renderer from 'react-test-renderer';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('Greeting match snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<Greeting />} />
        </Routes>
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('Greeting contains text', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path='/' element={<Greeting />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText('Plan Your day now')).toBeInTheDocument();
  expect(
    screen.getByText('Best and cheapest PC Clubs in country')
  ).toBeInTheDocument();
  expect(screen.getByText('Book PC')).toBeInTheDocument();
  expect(screen.getByText('Learn More')).toBeInTheDocument();
});
