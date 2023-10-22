import React, { useContext } from 'react';
import style from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import useIsPCScreen from '../../../Hooks/useIsPCScreen';
import { Dialog, ListItem } from '@mui/material';
import { IsAuthorisedContext } from '../../../Context/IsAuthorisedContext';
import ButtonMUI from '@mui/material/Button';

type NavBarPropsT = {
  isNavBarOpen: boolean;
  setIsNavBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar = ({ isNavBarOpen, setIsNavBarOpen }: NavBarPropsT) => {
  const { isPC } = useIsPCScreen();
  const urls = [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'About',
      link: '/about',
    },
    {
      text: 'Computers',
      link: '/computers',
    },
    {
      text: 'Reviews',
      link: '/reviews',
    },
    {
      text: 'Our Team',
      link: '/team',
    },
    {
      text: 'Contact',
      link: '/contact',
    },
  ];
  const { isAuthorised, setIsAuthorised } = useContext(IsAuthorisedContext);
  const PhoneUrls = isAuthorised
    ? urls
    : [
        ...urls,
        {
          text: 'Log In',
          link: '/login',
        },
        {
          text: 'Register',
          link: '/register',
        },
      ];
  return (
    <nav className={style.NavBar}>
      {isPC &&
        urls.map((url) => {
          return (
            <NavLink to={url.link} key={url.text} className={style.Link}>
              {url.text}
            </NavLink>
          );
        })}
      {isNavBarOpen && (
        <Dialog
          open={isNavBarOpen}
          onClose={() => setIsNavBarOpen(false)}
          fullScreen
        >
          <div className={style.comtemt}>
            {PhoneUrls.map((url) => {
              return (
                <ListItem key={url.text}>
                  <NavLink
                    to={url.link}
                    className={style.Link}
                    onClick={() => setIsNavBarOpen(false)}
                  >
                    {url.text}
                  </NavLink>
                </ListItem>
              );
            })}
            {isAuthorised && (
              <ListItem>
                <ButtonMUI
                  variant='text'
                  sx={{
                    marginRight: '2vw',
                    color: '#000',
                    '&:hover': {
                      color: '#ff4d30',
                    },
                  }}
                  onClick={() => {
                    setIsNavBarOpen(false);
                    setIsAuthorised(false);
                  }}
                >
                  Log out
                </ButtonMUI>
              </ListItem>
            )}
          </div>
        </Dialog>
      )}
    </nav>
  );
};

export default NavBar;
