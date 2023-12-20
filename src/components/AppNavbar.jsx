import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Link to="/">
        <Navbar.Brand>
          <i className="bi bi-file-earmark-person"></i> Resumaker
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Link to="/"> Home</Link>
        <Link to="/form"> Create</Link>
        <Link to="/login"> Login</Link>
        <Link to="/signup"> Sign Up</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar
