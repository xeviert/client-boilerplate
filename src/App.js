import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './Components/NavBar'
import About from './Components/About'
import Home from './Components/Home'
import Users from './Components/Users'
import Footer from './Components/Footer'

import AppProvider from './AppContext'

import './App.css';

function App() {
  return (
    <AppProvider>
        <Router>
          <NavBar />
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/users" component={Users} />
              <Route path="/" exact component={Home} />
            </Switch>
          <Footer />
        </Router>
    </AppProvider>
  );
}

export default App;
