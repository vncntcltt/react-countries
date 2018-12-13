import { connect } from 'react-redux'

import { fetchCountries, setSelectedCountry } from '../../actions'
import Countries from './Countries'

const mapStateToProps = state => {
  return {
    countries: state.countries.all,
    filteredCountries: state.countries.filtered,
    displayType: state.countries.displayType,
    selectedCountry: state.countries.selectedCountry,
    loading: state.countries.loading,
    error: state.countries.error,
    sortAndFilters: state.sortAndFilters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCountries: () => {
      dispatch(fetchCountries())
    },
    setSelectedCountry: country => {
      dispatch(setSelectedCountry(country))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Countries)
