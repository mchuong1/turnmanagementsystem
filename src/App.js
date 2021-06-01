import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom'

import Header from './components/Header'
import Confirmation from './pages/Confirmation';
import Home from './pages/Home'

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
  footer: {
    backgroundColor: '#fc5c9c',
    color: '#fcefee',
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    padding: '10px'
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
        </Switch>
      </div>
      <div className={classes.footer}>
          <span>Copyright © 2021, Polish Nail, Inc. "Polish Nail" and logo are registered trademarks of Polish Nail, Inc</span>
      </div>
    </>
  );
}

export default App;
