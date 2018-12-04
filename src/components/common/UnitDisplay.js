import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { SETTINGS_UNIT_TYPES } from '../../actions';

const mapStateToProps = state => ({
  selectedUnit: state.settings.unit
});

const UnitDisplay = ({ value, selectedUnit }) => {
  let val = value;
  if (selectedUnit === SETTINGS_UNIT_TYPES.IMPERIAL) {
    val = Math.round(val / 2,59) + ' sq mi';
  } else {
    val = val + ' km²';
  }
  return val;
};

UnitDisplay.propTypes = {
  value: PropTypes.number
};

export default connect(mapStateToProps)(UnitDisplay);