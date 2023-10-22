import { render, screen, cleanup } from '@testing-library/react';
import PlanElem from '../PlanElem';
import renderer from 'react-test-renderer';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('PlanElem match snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route
            path='/'
            element={
              <PlanElem
                title='Contact Us'
                subTitle='Our knowledgeable and friendly operators are always ready to help with any questions or concerns'
              >
                <div />
              </PlanElem>
            }
          />
        </Routes>
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('PlanElem contains text', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route
          path='/'
          element={
            <PlanElem title='Contact Us' subTitle='Our knowledgeable'>
              <div />
            </PlanElem>
          }
        />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText('Contact Us')).toBeInTheDocument();
  expect(screen.getByText('Our knowledgeable')).toBeInTheDocument();
});
