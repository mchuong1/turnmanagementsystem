import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button, TextField, Select, 
  InputLabel, MenuItem, Checkbox,
  ListItemText, FormControl, Typography, 
  Card, CardContent,
  CircularProgress, Radio, RadioGroup, FormControlLabel
} from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { withRouter, useRouteMatch } from 'react-router-dom';

import { saveClient } from  '../../service/clientService';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridGap: '2em',
    marginTop: '2em',
    padding: '0px 20px',
  },
  container: {
    height: '100vh'
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
    width: '100%'
  },
  radio: {
    display: 'flex'
  }
});

const validationSchema = yup.object({
  name: yup
    .string('Enter your Name.')
    .required('Name is required.'),
  phoneNumber: yup
    .string('Enter your Phone Number.')
    .required('Phone Number is required.'),
  appointmentType: yup
    .string()
    .oneOf(["appointment", "walk-in"])
    .required('Please select one.'),
});

function Checkin(props) {
  const classes = useStyles()
  const { history } = props;
  const { url } = useRouteMatch();

  const [isCheckingIn, setCheckingIn] = useState(false);

  //Mock Data
  //TODO: Fetch the data from somewhere
  const hands = [
    'Manicure',
    'Nails',
    'Basic'
  ];
  const foot = [
    'Pedicure',
    'Massage',
    'Item',
    'Service'
  ]
  const wax = [
    'Service 1',
    'Service 2',
    'Service 3',
    'Service 4'
  ]

  const handleCheckInButton = async (values) => {
    const { 
      name, phoneNumber, appointmentType,
      handService, footService, waxService
    } = values
    const services = [...handService, ...footService, ...waxService]
    setCheckingIn(true)
    try {
      await saveClient({name, phoneNumber, appointmentType, services});
      history.push(`${url}/confirm`);
      setCheckingIn(false);
    }
    catch (e) {
      console.log(e)
      setCheckingIn(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      phoneNumber: '',
      handService: [],
      footService: [],
      waxService: [],
      appointmentType: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => handleCheckInButton(values),
  });

  const listValues = (data, type) => data.map((service) => (
      <MenuItem key={service} value={service}>
        <Checkbox checked={type.indexOf(service) > -1} />
        <ListItemText primary={service} />
      </MenuItem>
    ));

  return (
    <Card>
      <CardContent classes={{root: classes.root}}>
        <Typography variant="h4" style={{textAlign: 'center'}}>Welcome!</Typography>
        <form className={classes.root} onSubmit={formik.handleSubmit}>
          <TextField 
            className={classes.input} 
            id="name"
            name="name" 
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField 
            className={classes.input} 
            id="phoneNumber" 
            name="phoneNumber"
            label="Phone Number"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            inputProps={{ inputMode: 'numeric', pattern: "[0-9]*" }}
          />
          <Typography variant="h6" style={{marginBottom: '-50px'}}>Services</Typography>
          <FormControl>
            <InputLabel id="handservice">Hand Services</InputLabel>
            <Select
              labelId="handservice"
              name="handService"
              multiple
              value={formik.values.handService}
              renderValue={(selected) => selected.join(', ')}
              onChange={formik.handleChange}
              >
              {listValues(hands, formik.values.handService)}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="footservice">Foot Services</InputLabel>
            <Select
              labelId="footservice"
              name="footService"
              multiple
              value={formik.values.footService}
              renderValue={(selected) => selected.join(', ')}
              onChange={formik.handleChange}
            >
              {listValues(foot, formik.values.footService)}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="waxservice">Wax Services</InputLabel>
            <Select
              labelId="waxservice"
              name="waxService"
              multiple
              value={formik.values.waxService}
              renderValue={(selected) => selected.join(', ')}
              onChange={formik.handleChange}
            >
              {listValues(wax, formik.values.waxService)}
            </Select>
          </FormControl>
          <RadioGroup
            classes={{root: classes.radio}}
            aria-label="type" 
            name="appointmentType" 
            value={formik.values.appointmentType} 
            onChange={formik.handleChange}
          >
            <FormControlLabel value="appointment" control={<Radio />} label="Appointment" />
            <FormControlLabel value="walk-in" control={<Radio />} label="Walk-in" />
            <InputLabel
              error={formik.touched.appointmentType && Boolean(formik.errors.appointmentType)}
            >
              {formik.touched.appointmentType && formik.errors.appointmentType}
            </InputLabel>
          </RadioGroup>
          <Button 
            className={classes.primary} 
            variant="contained"
            type="submit"
            >
            {isCheckingIn ? <CircularProgress size={24} /> : 'Check in!'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default withRouter(Checkin)