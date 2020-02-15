import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Home from './Pages/Home'

import './App.css';

function App() {
  return (
    <div id="app">
      <div className="Title">
        <h1>JUNEEZER</h1>
      </div>
      <div className="Body">
        <Router>
          <Switch>
            <Route path='/' render={Home} default/>
            {/* <Redirect to='/' /> */}
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
