import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

const MainNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <LinkContainer to="/countries">      
        <Navbar.Brand>
          Countries
        </Navbar.Brand>
      </LinkContainer>
      <Nav className="mr-auto">
        <LinkContainer to="/settings">   
          <Nav.Link>
            Settings
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/about">
          <Nav.Link>
            About
          </Nav.Link>
        </LinkContainer>
      </Nav>    
    </Navbar>
  );
};

export default MainNavbar;