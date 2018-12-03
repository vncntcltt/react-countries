import React from 'react';

import { COUNTRIES_DISPLAY_TYPES } from '../actions';

import CountryDisplayType from './CountryDisplayType';
import CountryGrid from './CountryGrid';
import CountryDatatable from './CountryDatatable';
import CountryMap from './CountryMap';
import CountryBreadcrumb from './CountryBreadcrumb';

const renderCountries = (filteredCountries, displayType, onCountrySelected) => {
  switch(displayType) {
    case COUNTRIES_DISPLAY_TYPES.GRID:
      return <CountryGrid 
        countries={filteredCountries} 
      />;
    case COUNTRIES_DISPLAY_TYPES.TABLE:
      return <CountryDatatable 
        countries={filteredCountries}
        onCountrySelected={onCountrySelected}
      />;
    case COUNTRIES_DISPLAY_TYPES.MAP:
      return <CountryMap 
        countries={filteredCountries} 
        onCountrySelected={onCountrySelected}
      />
    default:
      console.error('Unknown display type', displayType);
  }
}

const CountryMainView = ({ filteredCountries, sortAndFilters, setDisplayType, filterCountriesByRegion, filterCountriesBySubregion, displayType, onCountrySelected }) => {
  return (
    <>
      <CountryBreadcrumb 
        region={sortAndFilters.filterRegion} 
        subregion={sortAndFilters.filterSubregion} 
        onNavigateToWorld={() => filterCountriesByRegion('')}
        onNavigateToRegion={() => filterCountriesBySubregion('')}
      />
      <CountryDisplayType onChange={e => setDisplayType(e.target.value)} />
      {renderCountries(filteredCountries, displayType, onCountrySelected)}
    </>
  );
};

export default CountryMainView;
