import _ from 'lodash';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button, TextField, Typography,
  Card, CardContent, CircularProgress, Select, MenuItem, FormControl, InputLabel, FormHelperText,
} from '@material-ui/core';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { withRouter } from 'react-router-dom';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { sendEmail } from '../../service/clientService';
import { states } from '../../service/utils';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridGap: '2em',
    marginTop: '2em',
    padding: '0px 20px',
  },
  container: {
    height: '100vh',
  },
  primary: {
    backgroundColor: '#fc5c9c',
    color: '#fcefee',
    width: '100%',
  },
  input: {
    width: '100%',
  },
  header: {
    backgroundColor: '#fc5c9c',
    color: '#fcefee',
    width: '100%',
  },
  dropDown: {
    width: '100%',
  },
  radio: {
    display: 'flex',
  },
});

const validationSchema = yup.object({
  first_name: yup.string('Enter your First Name.').required('Required.'),
  last_name: yup.string('Enter your Last Number.').required('Required.'),
  phoneNumber: yup.string('Enter your Phone Number.').required('Required.'),
  address_line_1: yup.string('Enter your Address Line 1.').required('Required.'),
  address_line_2: yup.string('Enter your Address Line 2.'),
  city: yup.string('Enter your City.').required('Required.'),
  state: yup.string('Enter your State.').required('Required.'),
  zip: yup.string('Enter your Zip Code.').required('Required.'),
  license_number: yup.string('Enter your license number.').matches(/[A-Z]{2}[0-9]{7}/, 'License Number need to start with 2 letters followed by 7 numbers').required('Required.'),
  expiration_date: yup.date().required('Required')
});

function Checkin(props) {
  const classes = useStyles();
  const { history } = props;

  const [isCheckingIn, setCheckingIn] = useState(false);

  const handleCheckInButton = async (values) => {
    setCheckingIn(true);
    try {
      await sendEmail(values);
      history.push(`/confirm`);
      setCheckingIn(false);
    } catch (e) {
      throw new Error(e);
    }
    setCheckingIn(false);
  };

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      phoneNumber: '',
      address_line_1: '',
      address_line_2: '',
      city: '',
      state: '',
      zip: '',
      license_number: '',
      expiration_date: '',
    },
    validationSchema,
    onSubmit: (values) => handleCheckInButton(values),
  });

  return (
    <Card>
      <CardContent classes={{ root: classes.root }}>
        <Typography variant='h4' style={{ textAlign: 'center' }}>
          Welcome!
        </Typography>
        <form className={classes.root} onSubmit={formik.handleSubmit}>
          <TextField
            className={classes.input}
            id='first_name'
            name='first_name'
            label='First Name'
            value={formik.values.first_name}
            onChange={formik.handleChange}
            error={formik.touched.first_name && Boolean(formik.errors.first_name)}
            helperText={formik.touched.first_name && formik.errors.first_name}
          />
          <TextField
            className={classes.input}
            id='last_name'
            name='last_name'
            label='Last Name'
            value={formik.values.last_name}
            onChange={formik.handleChange}
            error={formik.touched.last_name && Boolean(formik.errors.last_name)}
            helperText={formik.touched.last_name && formik.errors.last_name}
          />
          <TextField
            className={classes.input}
            id='phoneNumber'
            name='phoneNumber'
            label='Phone Number'
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          />
          <TextField
            className={classes.input}
            id='address_line_1'
            name='address_line_1'
            label='Address Line 1'
            value={formik.values.address_line_1}
            onChange={formik.handleChange}
            error={formik.touched.address_line_1 && Boolean(formik.errors.address_line_1)}
            helperText={formik.touched.address_line_1 && formik.errors.address_line_1}
          />
          <TextField
            className={classes.input}
            id='address_line_2'
            name='address_line_2'
            label='Address Line 2'
            value={formik.values.address_line_2}
            onChange={formik.handleChange}
            error={formik.touched.address_line_2 && Boolean(formik.errors.address_line_2)}
            helperText={formik.touched.address_line_2 && formik.errors.address_line_2}
          />
          <TextField
            className={classes.input}
            id='city'
            name='city'
            label='City'
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
          />
          <FormControl
            error={formik.touched.state && Boolean(formik.errors.state)}
          >
            <InputLabel>States</InputLabel>
            <Select
              id="states"
              name="states"
              label="States"
              value={formik.values.state}
              onChange={(event) => formik.setFieldValue('state', event.target.value)}
            >
              {
                _.map(states, state => (
                  <MenuItem value={state.value}>{state.label}</MenuItem>
                ))
              }
            </Select>
            <FormHelperText>{formik.touched.state && formik.errors.state }</FormHelperText>
          </FormControl>
          <TextField
            className={classes.input}
            id='zip'
            name='zip'
            label='Zip'
            value={formik.values.zip}
            onChange={formik.handleChange}
            error={formik.touched.zip && Boolean(formik.errors.zip)}
            helperText={formik.touched.zip && formik.errors.zip}
          />
          <TextField
            className={classes.input}
            id='license_number'
            name='license_number'
            label='License Number'
            value={formik.values.license_number}
            onChange={formik.handleChange}
            error={formik.touched.license_number && Boolean(formik.errors.license_number)}
            helperText={formik.touched.license_number && formik.errors.license_number}
          />
          <DesktopDatePicker
            id="expiration_date"
            name="expiration_date"
            label="Expiration Date"
            inputFormat="MM/dd/yyyy"
            value={formik.values.expiration_date}
            onChange={event => formik.setFieldValue('expiration_date', event)}
            renderInput={(params) => <TextField {...params} />}
            disablePast
          />
          <Button className={classes.primary} variant='contained' type='submit'>
            {isCheckingIn ? <CircularProgress size={24} /> : 'Submit'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

Checkin.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Checkin);
