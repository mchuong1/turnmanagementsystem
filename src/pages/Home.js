import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import {
  Button, TextField, Select, 
  InputLabel, MenuItem, Checkbox,
  ListItemText, FormControl
} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#fcefee',
    height: '100vh',
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
  body: {
    display: 'grid',
    gridGap: '2em',
    marginTop: '2em',
    padding: '0px 20px'
  },
})

export default function Home() {
  const classes = useStyles()

  const [handService, setHandService] = useState([]);
  const [footService, setFootService] = useState([]);
  const [waxService, setWaxService] = useState([]);

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

  const listValues = (data, type) => data.map((service) => (
      <MenuItem key={service} value={service}>
        <Checkbox checked={type.indexOf(service) > -1} />
        <ListItemText primary={service} />
      </MenuItem>
    ));

  return (
    <>
      <TextField className={classes.input} id="standard-basic" label="Name" />
      <TextField className={classes.input} id="standard-basic" label="Phone Number" />
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
      <Button 
        className={classes.primary} 
        variant="contained"
        onClick={() => window.location.href = '/confirm'}
      >Check-in!</Button>
    </>
  )
}