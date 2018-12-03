import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import { withNamespaces } from 'react-i18next';

const MainNavbar = ({ t }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <LinkContainer to="/countries">      
        <Navbar.Brand>{t('countries.title')}</Navbar.Brand>
      </LinkContainer>
      <Nav className="mr-auto">
        <LinkContainer to="/settings">   
          <Nav.Link>{t('settings.title')}</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/about">
          <Nav.Link>{t('about.title')}</Nav.Link>
        </LinkContainer>
      </Nav>    
    </Navbar>
  );
};

export default withNamespaces()(MainNavbar);