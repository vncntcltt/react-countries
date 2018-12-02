import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import CountryCard from './CountryCard';

const CountryGrid = ({ countries }) => {
  return (
    <Container fluid>
      <Row>
        {countries.map(country => 
          <Col key={country.alpha3Code}>
            <CountryCard country={country} />
          </Col> 
        )}
      </Row>
    </Container>
  );
}

CountryGrid.propTypes = {
  countries: PropTypes.array.isRequired
}

export default CountryGrid;