import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button, TextField, Select, 
  InputLabel, MenuItem, Checkbox,
  ListItemText, FormControl, Typography, 
  Card, CardContent, CardActions,
  CircularProgress
} from '@material-ui/core';

import { saveClient } from  '../service/clientService';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridGap: '2em',
    marginTop: '2em',
    padding: '0px 20px'
  },
  container: {
    height: '100vh'
  },
  primary: {
    backgroundColor: '#fc5c9c',
    color: '#fcefee',
    width: '100%',
    marginTop: '2em'
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
})

export default function Home() {
  const classes = useStyles()

  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [handService, setHandService] = useState([]);
  const [footService, setFootService] = useState([]);
  const [waxService, setWaxService] = useState([]);
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

  const handleCheckInButton = async () => {
    setCheckingIn(true)

    try {
      await saveClient({name, phoneNumber});
      window.location.href = '/confirm';
      setCheckingIn(false);
    }
    catch (e) {
      console.log(e)
      setCheckingIn(false);
    }
  }

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
        <FormControl required>
          <TextField 
            className={classes.input} 
            id="standard-basic" 
            label="Name"
            onChange={event => setName(event.target.value)}
            />
        </FormControl>
        <FormControl required>
          <TextField 
            className={classes.input} 
            id="standard-basic" 
            label="Phone Number"
            onChange={event => setPhoneNumber(event.target.value)}
            />
        </FormControl>
        <Typography variant="h6" style={{marginBottom: '-50px'}}>Services</Typography>
        <FormControl>
          <InputLabel id="handservice">Hand Services</InputLabel>
          <Select
            labelId="handservice"
            multiple
            value={handService}
            renderValue={(selected) => selected.join(', ')}
            onChange={(event) => setHandService(event.target.value)}
          >
            {listValues(hands, handService)}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="footservice">Foot Services</InputLabel>
          <Select
            labelId="footservice"
            multiple
            value={footService}
            renderValue={(selected) => selected.join(', ')}
            onChange={(event) => setFootService(event.target.value)}
          >
            {listValues(foot, footService)}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="waxservice">Wax Services</InputLabel>
          <Select
            labelId="waxservice"
            multiple
            value={waxService}
            renderValue={(selected) => selected.join(', ')}
            onChange={(event) => setWaxService(event.target.value)}
          >
            {listValues(wax, waxService)}
          </Select>
        </FormControl>
      </CardContent>
      <CardActions>
        <Button 
          className={classes.primary} 
          variant="contained"
          onClick={handleCheckInButton}
        >
          {isCheckingIn ? <CircularProgress /> : 'Check in!'}
        </Button>
      </CardActions>
    </Card>
  )
}