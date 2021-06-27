import React from 'react';
import { Redirect, Route } from 'react-router';
import { useAuth0 } from "@auth0/auth0-react";
import { CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    placeItems: 'center'
  }
})

export default function PrivateRoute({ component:Component, ...rest }) {

  const classes = useStyles();
  const { isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) {
    return (
      <div className={classes.root}>
        <CircularProgress />
        Loading...
      </div>
    )
  }

  return(
    <Route {...rest} render={(props) => {
      return (isAuthenticated) 
        ? <Component {...props} user={user} />
        : <Redirect to="/login" />
    }} />
  )
}