import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import { Gallery } from "./Pages/Gallery";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { Navigation } from "./Components/Navigation";
import { Contact } from "./Pages/Contact";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className='App'>
      <div className='main'>
        <Router>
          <Navigation />

          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/Gallery' component={Gallery}></Route>
            <Route path='/Contact' component={Contact}></Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
