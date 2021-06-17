import React from 'react';
import { Redirect, Route } from 'react-router';
import { useAuth0 } from "@auth0/auth0-react";

export default function PrivateRoute({ component:Component, ...rest }) {

  const { isAuthenticated, isLoading } = useAuth0();

  return(
    <Route {...rest} render={(props) => {
      return (isAuthenticated || isLoading) 
        ? <Component {...props} />
        : <Redirect to="/login" />
    }} />
  )
}