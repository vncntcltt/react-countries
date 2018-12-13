import PropTypes from 'prop-types'

import { SETTINGS_UNIT_TYPES } from '../../actions'

const UnitDisplay = ({ value, selectedUnit }) => {
  let val = value
  if (selectedUnit === SETTINGS_UNIT_TYPES.IMPERIAL) {
    val = Math.round(val / 2, 59) + ' sq mi'
  } else {
    val = val + ' km²'
  }
  return val
}

UnitDisplay.propTypes = {
  value: PropTypes.number.isRequired,
  selectedUnit: PropTypes.string.isRequired
}

export default UnitDisplay
