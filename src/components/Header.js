import React from 'react'
import {
  AppBar, Toolbar, Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';

const useStyles = makeStyles({
  primary: {
    backgroundColor: '#fc5c9c',
    color: '#fcefee',
    width: '100%',
  },
})

export default function Header() {

  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar variant="dense" classes={{root: classes.primary}}>
        <Typography variant="h6" color="inherit">
          Polish Nail Salon
        </Typography>
      </Toolbar>
    </AppBar>
  )
}