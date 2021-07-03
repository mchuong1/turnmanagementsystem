import './App.css';
import React from 'react';
import { BrowserRouter as Switch, Route, Redirect } from 'react-router-dom';

import Client from './pages/Check-in/Client';
import PrivateRoute from './components/PrivateRoute';
import Admin from './pages/Admin/Admin';
import Login from './pages/Login/Login';

function App() {

  return (
    <div data-test="component-app" style={{height: '100%', overflowY: 'hidden'}}>
      <Switch>
        <Route exact path="/"><Redirect to="/login" /></Route>
        <Route path='/checkin' component={Client} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Admin} />
      </Switch>
    </div>
  );
}

export default App;
