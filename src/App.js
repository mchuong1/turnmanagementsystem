import './App.css';
import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import Client from './pages/Check-in/Client';

function App() {

  return (
    <div data-test="component-app" style={{height: '100%'}}>
      <Switch>
        <Route exact path="/" component={Client} />
      </Switch>
    </div>
  );
}

export default App;
