import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/header'

import Index from './routers/index'
import Chat from './routers/chat'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Router>
          <Switch>
            <Route path="/chat">
              <Chat></Chat>
            </Route>
            <Route path="/">
              <Index></Index>
            </Route>
          </Switch>
        </Router>
      </div>

    </div>
  );
}

export default App;
