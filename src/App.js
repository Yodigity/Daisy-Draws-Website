import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import { Gallery } from "./Pages/Gallery";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { Resume } from "./Pages/Resume";

function App() {
  return (
    <div className='App'>
      <div className='main'>
        <Router>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/about' component={About}></Route>

            <Route path='/Gallery' component={Gallery}></Route>

            <Route path='/Resume' component={Resume}></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
