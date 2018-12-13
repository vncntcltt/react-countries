import React from 'react'
import PropTypes from 'prop-types'
import { NamespacesConsumer } from 'react-i18next'

import { countryPropType } from '../common/propTypes'

const displayPct = function(val) {
  if (Number.isInteger(val)) {
    return val + '%'
  } else {
    return val.toFixed(2) + '%'
  }
}

const CountryStatistics = ({ countries, filteredCountries }) => {
  const countriesCount = filteredCountries.length
  const totalCountriesCount = countries.length
  const countriesPct = displayPct((countriesCount / totalCountriesCount) * 100)
  return (
    <NamespacesConsumer>
      {t => (
        <div className="float-lg-right py-2">
          <span>
            {countriesCount} {t('statistics.text.countries', { count: countriesCount })}
          </span>
          <span className="text-muted px-1">
            {' '}
            ({countriesPct} {t('statistics.subtext.worldCountries')})
          </span>
        </div>
      )}
    </NamespacesConsumer>
  )
}

CountryStatistics.propTypes = {
  countries: PropTypes.arrayOf(countryPropType).isRequired,
  filteredCountries: PropTypes.arrayOf(countryPropType).isRequired
}

export default CountryStatistics
