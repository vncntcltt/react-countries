import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/lib/Card'
import ListGroup from 'react-bootstrap/lib/ListGroup'
import Media from 'react-bootstrap/lib/Media'
import { withNamespaces } from 'react-i18next'

import UnitDisplayContainer from '../common/UnitDisplayContainer'
import { countryPropType } from '../common/propTypes'

const CountryCard = ({ t, country, cardWidth }) => {
  const {
    name,
    alpha3Code,
    region,
    subregion,
    capital,
    population,
    area,
    languages,
    currencies,
    regionalBlocs,
    flag
  } = country
  const countryLanguages = languages.map(l => l.name).join(', ')
  const countryCurrencies = currencies.map(c => `${c.name} (${c.code})`).join(', ')
  const countryRegionalBlocs = regionalBlocs.map(rb => rb.name).join(', ')
  const cardStyles = cardWidth ? { width: cardWidth } : {}
  return (
    <Card style={cardStyles}>
      <Card.Header>
        <Media>
          <img height={64} className="mr-3" src={flag} alt="Country flag" />
          <Media.Body>
            <Card.Title>
              {name} ({alpha3Code})
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {region} {subregion && '/ ' + subregion}
            </Card.Subtitle>
          </Media.Body>
        </Media>
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item className="text-truncate">
            <span className="text-muted pr-2">{t('country.label.capital')}</span>
            {capital}
          </ListGroup.Item>
          <ListGroup.Item className="text-truncate">
            <span className="text-muted pr-2">
              {t('country.label.regionalBlocs', {
                count: regionalBlocs.length
              })}
            </span>
            {countryRegionalBlocs}
          </ListGroup.Item>
          <ListGroup.Item className="text-truncate">
            <span className="text-muted pr-2">{t('country.label.population')}</span>
            {population}
          </ListGroup.Item>
          <ListGroup.Item className="text-truncate">
            <span className="text-muted pr-2">{t('country.label.area')}</span>
            <UnitDisplayContainer value={area} />
          </ListGroup.Item>
          <ListGroup.Item className="text-truncate">
            <span className="text-muted pr-2">{t('country.label.languages', { count: languages.length })}</span>
            {countryLanguages}
          </ListGroup.Item>
          <ListGroup.Item className="text-truncate">
            <span className="text-muted pr-2">{t('country.label.currencies', { count: currencies.length })}</span>
            {countryCurrencies}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

CountryCard.propTypes = {
  t: PropTypes.func.isRequired,
  country: countryPropType.isRequired,
  cardWidth: PropTypes.number
}

export default withNamespaces()(CountryCard)
