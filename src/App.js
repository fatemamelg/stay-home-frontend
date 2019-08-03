import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Redirect, NavLink } from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

function App() {
  return (
    <div className="App">
      <Header />

      <Router>

        <Route path="/" exact component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        
      </Router>

      <Footer />
    </div>
  );
}

export default App;
