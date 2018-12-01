import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';

const MainNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="/countries">Countries</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/settings">Settings</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav>    
    </Navbar>
  );
};

export default MainNavbar;