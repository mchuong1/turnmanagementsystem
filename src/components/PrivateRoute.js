import React from 'react';
import { Redirect, Route } from 'react-router';
import { useAuth0 } from "@auth0/auth0-react";
import { CircularProgress } from '@material-ui/core';

export default function PrivateRoute({ component:Component, ...rest }) {

  const { isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) {
    return (
      <div>
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