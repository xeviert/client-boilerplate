import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from './Components/NavBar'
import About from './Components/About'
import Home from './Components/Home'
import Users from './Components/Users'
import Footer from './Components/Footer'


import './App.css';

function App() {
  return (
    <>
          <NavBar />
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/users" component={Users} />
              <Route path="/" exact component={Home} />
            </Switch>
          <Footer />
    </>
  );
}

export default App;
