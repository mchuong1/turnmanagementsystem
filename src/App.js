import './App.css';
import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import Client from './pages/Check-in/Client';
import PrivateRoute from './components/PrivateRoute';
import Admin from './pages/Admin/Admin';

function App() {

  const { loginWithRedirect } = useAuth0();

  return (
    <div data-test="component-app" style={{height: '100%'}}>
      <Switch>
        <Route exact path="/" component={Client} />
        {/* <Route path="/login" component={() => loginWithRedirect()} />
        <Route path='/checkin' component={Client} />
        <PrivateRoute path="/dashboard" component={Admin} /> */}
      </Switch>
    </div>
  );
}

export default App;
