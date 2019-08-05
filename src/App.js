import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Redirect, NavLink, Switch } from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Properties from './components/Properties'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
