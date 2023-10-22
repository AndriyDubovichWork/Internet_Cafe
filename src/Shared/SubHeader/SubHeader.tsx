import React from 'react';
import { Breadcrumbs } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import style from './SubHeader.module.scss';

type SubHeaderPropsT = {
  title: string;
};

const SubHeader = ({ title }: SubHeaderPropsT) => {
  const location = useLocation();

  return (
    <>
      <img className={style.backGroundPC} loading='lazy' />

      <div className={style.Text}>
        <h1 className={style.Title}>{title}</h1>

        <Breadcrumbs aria-label='breadcrumb'>
          <NavLink to='/' className={style.Link}>
            Home
          </NavLink>
          <NavLink to={location.pathname} className={style.Link}>
            {title}
          </NavLink>
        </Breadcrumbs>
      </div>
    </>
  );
};

export default SubHeader;
