import { connect } from 'react-redux'

import { setCountryDisplayType } from '../../actions'
import CountryDisplayType from './CountryDisplayType'

const mapStateToProps = state => {
  return {
    displayType: state.countries.displayType
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setDisplayType: e => {
      dispatch(setCountryDisplayType(e.target.value))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryDisplayType)
