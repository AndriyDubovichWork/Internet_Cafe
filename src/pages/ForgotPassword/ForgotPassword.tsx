import React, { useContext } from 'react';
import style from './ForgotPassword.module.scss';
import { Field, Form, Formik } from 'formik';
import LoginSchema from './Validation/ForgotPasswordSchema';
import { TextField } from 'formik-mui';
import Button from '../../Styled/Button/Button';
import { useNavigate } from 'react-router-dom';
import { IsAuthorisedContext } from '../../Context/IsAuthorisedContext';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
  };
  return (
    <main className={style.login}>
      <Formik
        initialValues={initialValues}
        onSubmit={() => {
          navigate('/');
        }}
        validationSchema={LoginSchema}
      >
        <Form className={style.form}>
          <Field
            name='email'
            component={TextField}
            placeholder='Email'
            className={style.field}
          />

          <Button type='submit'>Request Reset Link</Button>
        </Form>
      </Formik>
    </main>
  );
};

export default ForgotPassword;
