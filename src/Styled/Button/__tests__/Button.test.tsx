import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Button from '../Button';
import renderer from 'react-test-renderer';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('Button match snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<Button>hi</Button>} />
        </Routes>
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('Button works', () => {
  let isCalled = false;
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route
          path='/'
          element={
            <Button
              onClick={() => {
                isCalled = true;
              }}
            >
              hi
            </Button>
          }
        />
      </Routes>
    </MemoryRouter>
  );

  const button = screen.getByText('hi');

  fireEvent.click(button);

  expect(button).toBeInTheDocument();
  expect(isCalled).toBe(true);
});
