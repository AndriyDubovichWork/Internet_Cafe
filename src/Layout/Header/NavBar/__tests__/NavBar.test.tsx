import { render, screen, cleanup } from '@testing-library/react';
import NavBar from '../NavBar';
import renderer from 'react-test-renderer';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('NavBar contains links', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route
          path='/'
          element={<NavBar isNavBarOpen={true} setIsNavBarOpen={() => {}} />}
        />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText('Log In')).toBeInTheDocument();
});
