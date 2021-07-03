import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles, Button } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  body: {
    height: '100%',
    display: 'grid',
    placeItems: 'center',
  },
});

export default function Login() {
  const classes = useStyles();

  const { loginWithRedirect } = useAuth0();

  return (
    <div className={classes.body} data-test='component-login'>
      <Button
        variant='contained'
        color='primary'
        onClick={() => loginWithRedirect()}
      >
        Login
      </Button>
    </div>
  );
}
