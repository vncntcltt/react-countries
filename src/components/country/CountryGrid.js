import React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/lib/Container'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

import CountryCard from './CountryCard'
import { countryPropType } from '../common/propTypes'

const CountryGrid = ({ countries }) => (
  <Container fluid>
    <Row>
      {countries.map(country => (
        <Col key={country.alpha3Code} xs="auto" className="mb-3">
          <CountryCard country={country} cardWidth={400} />
        </Col>
      ))}
    </Row>
  </Container>
)

CountryGrid.propTypes = {
  countries: PropTypes.arrayOf(countryPropType)
}

export default CountryGrid
