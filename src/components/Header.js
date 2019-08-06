import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Link, Redirect, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Home from './Home'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Properties from './Properties'


class Header extends Component {

    render() {
        return (
            <Router>
                <div class="py-1 bg-black top">
                    <div class="container">
                        <div class="row no-gutters d-flex align-items-start align-items-center px-md-0">
                            <div class="col-lg-12 d-block">
                                <div class="row">
                                    <div class="col-md pr-4 d-flex topper align-items-center">
                                        <div class="icon mr-2 d-flex justify-content align-items-center"><span
                                            class="icon-phone2"></span></div>
                                        <span class="text">+ 1235 2355 98</span>
                                    </div>
                                    <div class="col-md pr-4 d-flex topper align-items-center">
                                        <div class="icon mr-2 d-flex justify-content align-items-center"><span
                                            class="icon-paper-plane"></span></div>
                                        <span class="text">youremail@email.com</span>
                                    </div>
                                    <div class="col-md-5 pr-4 d-flex topper align-items-center text-lg-right justify-content-end">
                                        <p class="mb-0 register-link"><Link to="signin" class="mr-3">Sign In</Link><Link to="signup">Sign Up</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Navbar className="nav" bg="light" expand="lg" >
                    <Navbar.Brand>Stay Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav justify-content-end">
                        <Nav className="ml-auto ">
                            <Nav.Link><Link to="/" className="nav-link">Home</Link></Nav.Link>
                            <Nav.Link><HashLink smooth to="/#services-section" className="nav-link">Services</HashLink></Nav.Link>
                            <Nav.Link><Link to="properties" className="nav-link">Listing</Link></Nav.Link>
                            <Nav.Link><HashLink smooth to="/#how-it-works" className="nav-link">How it works</HashLink></Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>

                <Route path="/" exact render={() => <Home />} />
                <Route path="/signin" render={() => <SignIn />} />
                <Route path="/signup" render={() => <SignUp />} />
                <Route path="/properties" render={() => <Properties />} />


                <style>{"\
                    .nav{\
                    margin-top:31px;\
                    }\
                    .mr-auto{\
                    text-align:right;\
                    }\
                "}</style>
            </Router>
        )
    }
}

export default Header
