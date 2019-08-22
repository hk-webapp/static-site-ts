import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.scss';
import logo from './logo.svg'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home';
import ContactUs from './components/ContactUs/ContactUs';
import Partnerships from './components/partnerships/Partnerships';

const App: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>

      <div className="App">
        <div className="ss-home-menubar">
          <Navbar className="navbar navbar-inverse" expand="md" bg="drak" variant="dark">
            <Navbar.Brand className="navbar-brand" href="/"><img src={logo} alt="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="myNavbar" />
            <Navbar.Collapse className="navbar-right" id="myNavbar">
              <Nav className="mr-auto">
                <Nav.Item ><NavLink to="/Home" activeClassName="active-page" className="nav-link ">Home</NavLink></Nav.Item>
                <Nav.Item ><NavLink to="/ContactUs" activeClassName="active-page" className="nav-link">Contact Us</NavLink></Nav.Item>
                <Nav.Item ><NavLink to="/Partnerships" activeClassName="active-page" className="nav-link">Gallery</NavLink></Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div className="main-container">
          <Route exact={true} path="/" component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route path="/Partnerships" component={Partnerships} />
        </div>
        <footer>
          @copyright 2019 (version 1.1)
      </footer>
      </div>
    </Router>
  );
}

export default App;
