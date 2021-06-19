import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import Header from './components/Header'
import Confirmation from './pages/Check-in/Confirmation';
import Checkin from './pages/Check-in/Checkin'
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
import Login from './components/Login';
import Admin from './pages/Admin/Admin';

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
  body: {
    display: 'grid',
    gridGap: '2em',
    padding: '2em 20px',
    backgroundColor: '#fcefee'
  },
  footer: {
    backgroundColor: '#fc5c9c',
    color: '#fcefee',
    width: '100%',
    textAlign: 'center',
    padding: '10px 0px',
    bottom: 0,
  },
  adminBody: {
    height: '100%',
    backgroundColor: '#e2f3f5'
  }
})

function App() {
  const classes = useStyles();

  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      {!isAuthenticated && (
        <>
          <Header />
          <div className={classes.body}>
            <Switch>
              <Route exact path='/' component={Checkin} />
              <Route path='/confirm' component={Confirmation} />
              <Route path='/login' component={Login} />
            </Switch>
          </div>
          <div className={classes.footer}>
              <span>Copyright © 2021, Polish Nail, Inc. "Polish Nail" and logo are registered trademarks of Polish Nail, Inc</span>
          </div>
        </>
      )}
      <div className={classes.adminBody}>
        <Switch>
          <PrivateRoute path='/private' component={Admin}/>
        </Switch>
      </div>
    </>
  );
}

export default App;
