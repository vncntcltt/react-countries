import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/lib/Card';
import ListGroup from 'react-bootstrap/lib/ListGroup'
import { withNamespaces } from 'react-i18next';

import UnitDisplay from './UnitDisplay';

const CountryCard = ({ t, country }) => {
  const { name, alpha3Code, region, subregion, capital, population, area } = country;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name} ({alpha3Code})</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{region} {subregion && '/ ' + subregion}</Card.Subtitle>
        <ListGroup variant="flush">
          <ListGroup.Item>{t('country.label.capital')}: {capital}</ListGroup.Item>
          <ListGroup.Item>{t('country.label.population')}: {population}</ListGroup.Item>
          <ListGroup.Item>{t('country.label.area')}: <UnitDisplay value={area} /></ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

CountryCard.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    alpha3Code: PropTypes.string.isRequired,
    capital: PropTypes.string,
    region: PropTypes.string,
    subregion: PropTypes.string,
    population: PropTypes.number,
    area: PropTypes.number
  })
};

export default withNamespaces()(CountryCard);