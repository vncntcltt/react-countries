import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import { NamespacesConsumer } from 'react-i18next';

const MainNavbar = () => {
  return (
    <NamespacesConsumer>
      {
        t => (
          <Navbar bg="dark" variant="dark" expand="md" sticky="top">
            <LinkContainer to="/countries">      
              <Navbar.Brand>{t('countries.title')}</Navbar.Brand>
            </LinkContainer>          
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <LinkContainer to="/settings">   
                  <Nav.Link>{t('settings.title')}</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                  <Nav.Link>{t('about.title')}</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
    </NamespacesConsumer>
  );
};

export default MainNavbar;