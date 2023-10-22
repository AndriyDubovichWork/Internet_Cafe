import React, { useContext } from 'react';
import style from './Login.module.scss';
import { Field, Form, Formik } from 'formik';
import LoginSchema from './Validation/LoginSchema';
import { TextField } from 'formik-mui';
import Button from '../../Styled/Button/Button';
import { Checkbox, FormControlLabel } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { IsAuthorisedContext } from '../../Context/IsAuthorisedContext';

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };
  const { setIsAuthorised } = useContext(IsAuthorisedContext);

  return (
    <main className={style.login}>
      <Formik
        initialValues={initialValues}
        onSubmit={() => {
          setIsAuthorised(true);
          navigate('/');
        }}
        validationSchema={LoginSchema}
      >
        <Form className={style.form}>
          <Field
            name='email'
            component={TextField}
            placeholder='Email'
            className={style.email}
          />
          <Field
            name='password'
            component={TextField}
            placeholder='Password'
            className={style.password}
          />
          <FormControlLabel control={<Checkbox />} label='remember me' />
          <NavLink to='/forgotPassword' className={style.Link}>
            Forgot Password?
          </NavLink>
          <Button type='submit'>Log In</Button>
        </Form>
      </Formik>
    </main>
  );
};

export default Login;
