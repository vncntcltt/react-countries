import { connect } from 'react-redux'

import CountrySidebar from './CountrySidebar'

import {
  filterAndSortCountries,
  filterCountriesByRegion,
  filterCountriesBySubregion,
  filterCountriesByRegionalBloc,
  filterCountriesByLanguages,
  filterCountriesByName,
  resetFilters
} from '../../actions'

const mapStateToProps = state => {
  return {
    countries: state.countries.all,
    regions: state.countries.regions,
    subregions: state.countries.subregions,
    languages: state.countries.languages,
    regionalBlocs: state.countries.regionalBlocs,
    sortAndFilters: state.sortAndFilters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterAndSortCountries: (countries, sortAndFilters) => {
      dispatch(filterAndSortCountries(countries, sortAndFilters))
    },
    filterCountriesByRegion: region => {
      dispatch(filterCountriesByRegion(region))
    },
    filterCountriesBySubregion: subregion => {
      dispatch(filterCountriesBySubregion(subregion))
    },
    filterCountriesByRegionalBloc: regionalBloc => {
      dispatch(filterCountriesByRegionalBloc(regionalBloc))
    },
    filterCountriesByLanguages: languages => {
      dispatch(filterCountriesByLanguages(languages))
    },
    filterCountriesByName: name => {
      dispatch(filterCountriesByName(name))
    },
    resetFilters: () => {
      dispatch(resetFilters())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountrySidebar)
