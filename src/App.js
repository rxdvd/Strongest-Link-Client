import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';
import { Navbar } from './layout'
import { Home } from './pages'


function App() {
  return (
    <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/create-lobby">
            <Create />
          </Route>
          <Route path="/join-lobby">
            <Join />
          </Route>
          <Route path="/leaderboard">
            <Leaderboard />
          </Route> */}
        </Switch>
    </div>
  );
}

export default App;
