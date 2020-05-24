import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Landing from './components/landing/Landing';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
    <div className="root">
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={Landing} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
