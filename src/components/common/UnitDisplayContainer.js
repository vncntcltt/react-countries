import { connect } from 'react-redux'

import UnitDisplay from './UnitDisplay'

const mapStateToProps = state => ({
  selectedUnit: state.settings.unit
})

export default connect(mapStateToProps)(UnitDisplay)
