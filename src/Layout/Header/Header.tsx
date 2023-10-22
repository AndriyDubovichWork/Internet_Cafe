import React, { useContext, useState } from 'react';
import style from './Header.module.scss';
import NavBar from './NavBar/NavBar';
import ButtonMUI from '@mui/material/Button';
import { RefContext } from '../../Context/RefContext';
import { NavLink } from 'react-router-dom';
import useIsPCScreen from '../../Hooks/useIsPCScreen';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '../../Styled/Button/Button';
import { IsAuthorisedContext } from '../../Context/IsAuthorisedContext';
const Header = () => {
  const { HeaderRef } = useContext(RefContext);
  const { isPC } = useIsPCScreen();

  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const { isAuthorised, setIsAuthorised } = useContext(IsAuthorisedContext);

  return (
    <header className={style.Header} ref={HeaderRef}>
      <NavLink to='/' className={style.Logo}>
        <img
          loading='lazy'
          src={require('./assets/PCIcon.png')}
          alt='logo'
          className={style.Img}
        />
        <div className={style.Name}>
          <h1>Internet</h1>
          <h2>Cafe</h2>
        </div>
      </NavLink>
      <NavBar isNavBarOpen={isNavBarOpen} setIsNavBarOpen={setIsNavBarOpen} />

      {isPC ? (
        <>
          <div className={style.LoginRegister}>
            {!isAuthorised ? (
              <>
                <NavLink to='/login'>
                  <ButtonMUI
                    variant='text'
                    sx={{
                      marginRight: '2vw',
                      color: '#000',
                      '&:hover': {
                        color: '#ff4d30',
                      },
                    }}
                  >
                    Log In
                  </ButtonMUI>
                </NavLink>
                <NavLink to='/register'>
                  <Button>Register</Button>
                </NavLink>
              </>
            ) : (
              <ButtonMUI
                variant='text'
                sx={{
                  marginRight: '2vw',
                  color: '#000',
                  '&:hover': {
                    color: '#ff4d30',
                  },
                }}
                onClick={() => setIsAuthorised(false)}
              >
                Log Out
              </ButtonMUI>
            )}
          </div>
        </>
      ) : (
        <ButtonMUI onClick={() => setIsNavBarOpen(true)}>
          <MenuIcon sx={{ color: '#ff4d30' }} />
        </ButtonMUI>
      )}
    </header>
  );
};

export default Header;
