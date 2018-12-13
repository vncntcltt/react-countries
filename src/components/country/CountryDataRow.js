import React from 'react'
import PropTypes from 'prop-types'

import UnitDisplayContainer from '../common/UnitDisplayContainer'
import { countryPropType } from '../common/propTypes'

const CountryDataRow = ({ country, onCountrySelected }) => {
  const { name, alpha3Code, capital, region, subregion, population, area } = country
  return (
    <tr onClick={() => onCountrySelected(country)}>
      <td>{name}</td>
      <td>{alpha3Code}</td>
      <td>{capital}</td>
      <td>{region}</td>
      <td>{subregion}</td>
      <td>{population}</td>
      <td>
        <UnitDisplayContainer value={area} />
      </td>
    </tr>
  )
}

CountryDataRow.propTypes = {
  country: countryPropType.isRequired,
  onCountrySelected: PropTypes.func.isRequired
}

export default CountryDataRow
