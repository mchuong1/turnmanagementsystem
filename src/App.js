import './App.css';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button, TextField, AppBar, 
  Toolbar, Typography, Select, 
  InputLabel, Input, MenuItem, Checkbox,
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
    
    // width: '90%',
    // height: '100vh',
    // justifyContent: 'space-between'
  },
  footer: {
    backgroundColor: '#fc5c9c',
    color: '#fcefee',
    width: '100%',
    textAlign: 'center'
  }
})

function App() {
  const classes = useStyles();

  const [handService, setHandService] = useState([]);

  const hands = [
    'Manicure',
    'Nails',
    'Basic'
  ];
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleChange = (event) => {
    setHandService(event.target.value)
  }

  const handValues = hands.map((service) => (
    <MenuItem key={service} value={service}>
      <Checkbox checked={handService.indexOf(service) > -1} />
      <ListItemText primary={service} />
    </MenuItem>
  ))

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" classes={{root: classes.primary}}>
        <Typography variant="h6" color="inherit">
          Welcome
        </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.body}>
        <TextField className={classes.input} id="standard-basic" label="Name" />
        <TextField className={classes.input} id="standard-basic" label="Phone Number" />
        <FormControl>
          <InputLabel id="handservice">Hand Services</InputLabel>
          <Select
            labelId="handservice"
            multiple
            value={handService}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
            onChange={handleChange}
            >
              {handValues}
          </Select>
        </FormControl>
        <Button className={classes.primary} variant="contained">Check-in!</Button>
      </div>
      {/* <div className={classes.footer}>
          <span>Copyright © 2021, Polish Nail, Inc. "Polish Nail" and logo are registered trademarks of Polish Nail, Inc</span>
      </div> */}
    </>
  );
}

export default App;
