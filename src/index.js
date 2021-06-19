import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';

import Admin from './pages/Admin/Admin';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

ReactDOM.render(
  <Auth0Provider
    domain="mc-manage.us.auth0.com"
    clientId={process.env.REACT_APP_AUTH0_CLIENTID}
    redirectUri={`${window.location.origin}/private`}
  >
    <BrowserRouter>
      <Switch>
        <Route path="/checkin" component={App} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/private" component={Admin} />
      </Switch>
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
