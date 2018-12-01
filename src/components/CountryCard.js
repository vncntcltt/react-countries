import React from 'react';
import Card from 'react-bootstrap/lib/Card';
import ListGroup from 'react-bootstrap/lib/ListGroup'

import UnitDisplay from './UnitDisplay';

const CountryCard = ({ country }) => {
  const { name, alpha3Code, region, subregion, capital, population, area } = country;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name} ({alpha3Code})</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{region} {subregion && '/ ' + subregion}</Card.Subtitle>
        <ListGroup variant="flush">
          <ListGroup.Item>Capital: {capital}</ListGroup.Item>
          <ListGroup.Item>Population: {population}</ListGroup.Item>
          <ListGroup.Item>Area: <UnitDisplay value={area} /></ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default CountryCard;