import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import Header from './components/Header'
import Confirmation from './pages/Check-in/Confirmation';
import Home from './pages/Check-in/Home'
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
import Login from './components/Login';

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
  body: {
    display: 'grid',
    gridGap: '2em',
    marginTop: '2em',
    padding: '0px 20px 20px 20px',
  },
  footer: {
    backgroundColor: '#fc5c9c',
    color: '#fcefee',
    width: '100%',
    textAlign: 'center',
    padding: '10px 0px',
    bottom: 0,
  }
})

function App() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <div className={classes.body}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/confirm' component={Confirmation} />
          <Route path='/login' component={Login} />
          <PrivateRoute path='/private' component={Profile}/>
        </Switch>
      </div>
      <div className={classes.footer}>
          <span>Copyright © 2021, Polish Nail, Inc. "Polish Nail" and logo are registered trademarks of Polish Nail, Inc</span>
      </div>
    </>
  );
}

export default App;
