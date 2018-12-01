import { number } from 'prop-types';
import { connect } from "react-redux";

import { SETTINGS_UNIT_TYPES } from '../actions';

const mapStateToProps = state => ({
  selectedUnit: state.settings.unit
});

const UnitDisplay = ({ value, selectedUnit }) => {
  let val = value;
  if (selectedUnit === SETTINGS_UNIT_TYPES.IMPERIAL) {
    val = Math.round(val / 2,59);
  }
  return val;
};

UnitDisplay.propTypes = {
  value: number
};

export default connect(mapStateToProps)(UnitDisplay);