import React from 'react'

import { COUNTRIES_DISPLAY_TYPES } from '../../actions'
import CountryDisplayTypeContainer from './CountryDisplayTypeContainer'
import CountryStatistics from './CountryStatistics'
import CountryGrid from './CountryGrid'
import CountryDatatable from './CountryDatatable'
import CountryMap from './CountryMap'
import CountryBreadcrumbContainer from './CountryBreadcrumbContainer'
import { withPagination } from '../common/pagination'

const PaginatedCountryTable = withPagination(CountryDatatable)
const PaginatedCountryGrid = withPagination(CountryGrid)

const ITEMS_PER_TABLE_PAGE = 12
const ITEMS_PER_GRID_PAGE = 8

const renderCountries = (filteredCountries, displayType, onCountrySelected) => {
  switch (displayType) {
    case COUNTRIES_DISPLAY_TYPES.GRID:
      return (
        <PaginatedCountryGrid items={filteredCountries} itemsPropName="countries" itemsPerPage={ITEMS_PER_GRID_PAGE} />
      )
    case COUNTRIES_DISPLAY_TYPES.TABLE:
      return (
        <PaginatedCountryTable
          items={filteredCountries}
          itemsPropName="countries"
          itemsPerPage={ITEMS_PER_TABLE_PAGE}
          onCountrySelected={onCountrySelected}
        />
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

export default CountryMainView
