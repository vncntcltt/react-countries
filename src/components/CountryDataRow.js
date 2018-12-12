import React from 'react'
import PropTypes from 'prop-types'

import UnitDisplay from './common/UnitDisplay'

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
        <UnitDisplay value={area} />
      </td>
    </tr>
  )
}

CountryDataRow.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    alpha3Code: PropTypes.string.isRequired,
    capital: PropTypes.string,
    region: PropTypes.string,
    subregion: PropTypes.string,
    population: PropTypes.number,
    area: PropTypes.number
  }),
  onCountrySelected: PropTypes.func.isRequired
}

export default CountryDataRow
