import React, { useContext } from 'react';
import style from './Greeting.module.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '../../Styled/Button/Button';
import ButtonMUI from '@mui/material/Button';
import { RefContext } from '../../Context/RefContext';
import { useLocation } from 'react-router-dom';
import useIsPCScreen from '../../Hooks/useIsPCScreen';

const Greeting = () => {
  const { BookRef, scrollToElement } = useContext(RefContext);

  const { isPC, textAlign } = useIsPCScreen();
  const location = useLocation();

  const contentWidth = isPC ? '50%' : '100%';

  return (
    <>
      {isPC && (location.pathname === '/' || location.pathname === '/') ? (
        <img
          loading='lazy'
          src={require('./assets/backGround.png')}
          className={style.BackGround}
        />
      ) : (
        ''
      )}
      <div className={style.Greeting} style={{ textAlign }}>
        <div className={style.Content} style={{ width: contentWidth }}>
          <h2 className={style.preTitle}>Plan Your day now</h2>
          <div className={style.title}>
            Save <span className={style.HighLighted}>big</span> with our PC
            Clubs
          </div>
          <p className={style.subtitle}>
            Best and cheapest PC Clubs in country
          </p>
          <Button
            onClick={() => {
              scrollToElement(BookRef);
            }}
          >
            Book PC
            <CheckCircleIcon sx={{ marginLeft: '1vw' }} />
          </Button>
          <ButtonMUI
            onClick={() => {
              scrollToElement(BookRef);
            }}
            variant='outlined'
            className={style.MoreButton}
            sx={{
              padding: '2vh 2vw',
              backgroundColor: '#000',
              color: '#fff',
              borderColor: '#000',
              '&:hover': {
                borderColor: '#000',
                backgroundColor: '#fff',
                color: '#000',
              },
            }}
          >
            Learn More
            <ArrowForwardIosIcon />
          </ButtonMUI>
        </div>
        {isPC && (
          <img
            loading='lazy'
            src={require('./assets/pcImg.png')}
            className={style.PCImage}
          />
        )}
      </div>
    </>
  );
};

export default Greeting;
