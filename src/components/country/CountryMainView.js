import React from 'react'
import PropTypes from 'prop-types'

import { COUNTRIES_DISPLAY_TYPES } from '../../actions'
import CountryDisplayTypeContainer from './CountryDisplayTypeContainer'
import CountryStatistics from './CountryStatistics'
import CountryGrid from './CountryGrid'
import CountryDatatable from './CountryDatatable'
import CountryMap from './CountryMap'
import CountryBreadcrumbContainer from './CountryBreadcrumbContainer'
import Paginated from '../common/Paginated'
import { countryPropType, sortAndFilterPropType } from '../common/propTypes'

const ITEMS_PER_TABLE_PAGE = 12
const ITEMS_PER_GRID_PAGE = 8

const renderCountries = (filteredCountries, displayType, onCountrySelected) => {
  switch (displayType) {
    case COUNTRIES_DISPLAY_TYPES.GRID:
      return (
        <Paginated items={filteredCountries} itemsPropName="countries" itemsPerPage={ITEMS_PER_GRID_PAGE}>
          <CountryGrid />
        </Paginated>
      )
    case COUNTRIES_DISPLAY_TYPES.TABLE:
      return (
        <Paginated items={filteredCountries} itemsPropName="countries" itemsPerPage={ITEMS_PER_TABLE_PAGE}>
          <CountryDatatable onCountrySelected={onCountrySelected} />
        </Paginated>
      )
    case COUNTRIES_DISPLAY_TYPES.MAP:
      return <CountryMap countries={filteredCountries} onCountrySelected={onCountrySelected} />
    default:
      console.error('Unknown display type', displayType)
  }
}

const CountryMainView = ({ countries, filteredCountries, sortAndFilters, displayType, onCountrySelected }) => (
  <main>
    <CountryBreadcrumbContainer region={sortAndFilters.filterRegion} subregion={sortAndFilters.filterSubregion} />
    <CountryDisplayTypeContainer />
    <CountryStatistics countries={countries} filteredCountries={filteredCountries} />
    {renderCountries(filteredCountries, displayType, onCountrySelected)}
  </main>
)

CountryMainView.propTypes = {
  countries: PropTypes.arrayOf(countryPropType).isRequired,
  filteredCountries: PropTypes.arrayOf(countryPropType).isRequired,
  sortAndFilters: sortAndFilterPropType.isRequired,
  displayType: PropTypes.string.isRequired,
  onCountrySelected: PropTypes.func.isRequired
}

export default CountryMainView
