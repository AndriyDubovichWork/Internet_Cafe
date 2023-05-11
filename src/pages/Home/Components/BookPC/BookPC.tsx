import React, { useContext, useState } from 'react';
import { MenuItem, Paper } from '@mui/material';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import style from './BookPC.module.scss';
import { RefContext } from '../../../../Context/RefContext';
import BookDialog from './BookDialog/BookDialog';
import { Formik, Form, Field } from 'formik';
import BookSchema from './Validation/BookPCValidation';
import dayjs from 'dayjs';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { FieldProps, FormikProps } from 'formik';

import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import Button from '../../../../Styled/Button/Button';
import { Select } from 'formik-mui';
import { CPUs, GPUs } from './PCParts/PCParts';
import Required from '../../../../Styled/Required/Required';
interface TimePickerFieldProps extends FieldProps {
  form: FormikProps<any>;
}

const BookPC = () => {
  const { BookRef } = useContext(RefContext);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const initialValues = {
    date: dayjs(Date.now()),
    GPU: GPUs[0].value,
    CPU: CPUs[0].value,
    From: dayjs(Date.now()),
    Until: dayjs(Date.now()),
  };

  return (
    <>
      <Paper
        ref={BookRef}
        sx={{
          margin: '5vh auto',
          width: '80%',
          padding: '2vw 3vw',
        }}
        elevation={3}
      >
        <h1>Book PC</h1>

        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={BookSchema}
        >
          <Form className={style.Grid}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <div className={style.Element}>
                <h3 className={style.Title}>
                  <CalendarMonthIcon
                    sx={{ color: 'red', paddingRight: '0.5vw' }}
                  />
                  <Required text={'Select Date'} />
                </h3>

                <Field name='date'>
                  {({ field, form }: TimePickerFieldProps) => (
                    <DatePicker
                      {...field}
                      format='DD/MM/YYYY'
                      value={field.value || null}
                      onChange={(date) => form.setFieldValue(field.name, date)}
                    />
                  )}
                </Field>
              </div>
              <div className={style.Element}>
                <h3 className={style.Title}>
                  <SelectAllIcon sx={{ color: 'red', paddingRight: '0.5vw' }} />
                  <Required text={'GPU'} />
                </h3>
                <Field name='GPU' component={Select} disabled={false}>
                  {GPUs.map((GPU) => (
                    <MenuItem key={GPU.value} value={GPU.value}>
                      {GPU.label}
                    </MenuItem>
                  ))}
                </Field>
              </div>
              <div className={style.Element}>
                <h3 className={style.Title}>
                  <SelectAllIcon sx={{ color: 'red', paddingRight: '0.5vw' }} />
                  <Required text={'CPU'} />
                </h3>
                <Field name='CPU' id='CPU' component={Select} disabled={false}>
                  {CPUs.map((CPU) => (
                    <MenuItem key={CPU.value} value={CPU.value}>
                      {CPU.label}
                    </MenuItem>
                  ))}
                </Field>
              </div>
              <div className={style.Element}>
                <h3 className={style.Title}>
                  <AccessTimeIcon
                    sx={{ color: 'red', paddingRight: '0.5vw' }}
                  />
                  <Required text={'From'} />
                </h3>

                <Field name='From'>
                  {({ field, form }: TimePickerFieldProps) => (
                    <TimePicker
                      {...field}
                      value={field.value || null}
                      onChange={(date) => form.setFieldValue(field.name, date)}
                    />
                  )}
                </Field>
              </div>
              <div className={style.Element}>
                <h3 className={style.Title}>
                  <AccessTimeIcon
                    sx={{ color: 'red', paddingRight: '0.5vw' }}
                  />
                  <Required text={'Until'} />
                </h3>
                <Field name='Until'>
                  {({ field, form }: TimePickerFieldProps) => (
                    <TimePicker
                      {...field}
                      value={field.value || null}
                      onChange={(date) => form.setFieldValue(field.name, date)}
                    />
                  )}
                </Field>
              </div>
              <div className={style.Element}>
                <Button
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    // e.preventDefault();

                    setIsDialogOpen(true);
                  }}
                  className={style.Button}
                  type='submit'
                >
                  Book
                </Button>
              </div>
            </LocalizationProvider>
          </Form>
        </Formik>
      </Paper>

      <BookDialog
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </>
  );
};

export default BookPC;
