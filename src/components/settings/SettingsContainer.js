import { connect } from 'react-redux'

import { setSettingsUnit } from '../../actions'
import Settings from './Settings'

const mapStateToProps = state => ({
  selectedUnit: state.settings.unit
})

const mapDispatchToProps = dispatch => ({
  setSelectedUnit: unit => {
    dispatch(setSettingsUnit(unit))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)
