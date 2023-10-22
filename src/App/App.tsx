import React, { useRef, useState } from 'react';
import style from './App.module.scss';
import Home from '../pages/Home/Home';
import Header from '../Layout/Header/Header';
import Fotter from '../Layout/Fotter/Fotter';
import ScrollTop from '../Layout/ScrollTop/ScrollTop';
import { RefContext } from '../Context/RefContext';
import { IsAuthorisedContext } from '../Context/IsAuthorisedContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from '../pages/About/About';
import Computers from '../pages/Computers/Computers';
import Reviews from '../pages/Reviews/Reviews';
import Team from '../pages/Team/Team';
import Contact from '../pages/Contact/Contact';
import { Box } from '@mui/material';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <Header />
        <About />
      </>
    ),
  },
  {
    path: '/computers',
    element: (
      <>
        <Header />
        <Computers />
      </>
    ),
  },
  {
    path: '/reviews',
    element: (
      <>
        <Header />
        <Reviews />
      </>
    ),
  },
  {
    path: '/team',
    element: (
      <>
        <Header />
        <Team />
      </>
    ),
  },
  {
    path: '/contact',
    element: (
      <>
        <Header />
        <Contact />
      </>
    ),
  },
  {
    path: '/login',
    element: (
      <>
        <Header />
        <Login />
      </>
    ),
  },
  {
    path: '/register',
    element: (
      <>
        <Header />
        <Register />
      </>
    ),
  },
  {
    path: '/forgotPassword',
    element: (
      <>
        <Header />
        <ForgotPassword />
      </>
    ),
  },
]);

function App() {
  const HeaderRef = useRef(null);
  const BookRef = useRef(null);
  const scrollToElement = (ref: any) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
    });
  };
  const [isAuthorised, setIsAuthorised] = useState(false);
  return (
    <IsAuthorisedContext.Provider value={{ isAuthorised, setIsAuthorised }}>
      <RefContext.Provider value={{ HeaderRef, BookRef, scrollToElement }}>
        <Box className={style.App}>
          <RouterProvider router={router} />
          <Fotter />
          <ScrollTop />
        </Box>
      </RefContext.Provider>
    </IsAuthorisedContext.Provider>
  );
}

export default App;
