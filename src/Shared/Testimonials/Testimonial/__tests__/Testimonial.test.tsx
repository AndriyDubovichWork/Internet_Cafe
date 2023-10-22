import { render, screen, cleanup } from '@testing-library/react';
import Testimonial from '../Testimonial';
import renderer from 'react-test-renderer';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('Testimonial match snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route
            path='/'
            element={
              <Testimonial
                name='Harry Potter'
                text='I had a great experience at PC Club! The staff was friendly and helpful. I highly recommend this store.'
                img={require('../../assets/harry.jpg')}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('Testimonial contains text', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route
          path='/'
          element={
            <Testimonial
              name='Harry Potter'
              text='I had a great experience at PC Club!'
              img={require('../../assets/harry.jpg')}
            />
          }
        />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText('Harry Potter')).toBeInTheDocument();
});
