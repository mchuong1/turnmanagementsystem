import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Auth0Provider
    domain='mc-manage.us.auth0.com'
    clientId={process.env.REACT_APP_AUTH0_CLIENTID}
    redirectUri={`${window.location.origin}/dashboard`}
  >
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <App />
      </LocalizationProvider>
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
