import { connect } from 'react-redux'

import { filterCountriesByRegion, filterCountriesBySubregion } from '../../actions'
import CountryBreadcrumb from './CountryBreadcrumb'

const mapDispatchToProps = dispatch => {
  return {
    onNavigateToWorld: () => {
      dispatch(filterCountriesByRegion(''))
    },
    onNavigateToRegion: () => {
      dispatch(filterCountriesBySubregion(''))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CountryBreadcrumb)
