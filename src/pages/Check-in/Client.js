import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import Header from '../../components/Header'
import Confirmation from './Confirmation';
import Checkin from './Checkin'


const useStyles = makeStyles({
  root: {
    height: '100%',
  },
  body: {
    display: 'grid',
    gridGap: '2em',
    padding: '2em 20px',
    backgroundColor: '#fcefee',
    height: '100%',
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
    backgroundColor: '#FDFDFD'
  }
})

function Client() {
  const classes = useStyles();

  return (
    <div data-test="component-app" style={{ height: '100%' }}>
      <Header />
      <div className={classes.body}>
        <Switch>
          <Route exact path="/" component={Checkin} />
          <Route path="/confirm" component={Confirmation} />
        </Switch>
      </div>
      <div className={classes.footer}>
          <span>Copyright © 2022, VieConnex `&quot;`VieConnex`&quot;` and logo are registered trademarks of VTek</span>
      </div>
    </div>
  );
}

export default Client;
