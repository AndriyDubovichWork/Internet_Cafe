import React, { useContext } from 'react';
import style from './Register.module.scss';
import { Field, Form, Formik } from 'formik';
import LoginSchema from './Validation/RegisterSchema';
import { TextField } from 'formik-mui';
import Button from '../../Styled/Button/Button';
import { useNavigate } from 'react-router-dom';
import { IsAuthorisedContext } from '../../Context/IsAuthorisedContext';

const Register = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    passwordOne: '',
    passwordTwo: '',
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
            className={style.field}
          />
          <Field
            name='passwordOne'
            component={TextField}
            placeholder='Password'
            className={style.field}
          />
          <Field
            name='passwordTwo'
            component={TextField}
            placeholder='Confirm Password'
            className={style.field}
          />

          <Button type='submit'>Register</Button>
        </Form>
      </Formik>
    </main>
  );
};

export default Register;
