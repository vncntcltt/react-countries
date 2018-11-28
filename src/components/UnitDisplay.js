import React from 'react';
import { number } from 'prop-types';
import { connect } from "react-redux";

import { SETTINGS_UNIT_TYPES } from '../actions';

const mapStateToProps = state => ({
  selectedUnit: state.settings.unit
});

const UnitDisplay = props => {
  let value = props.value;
  if (props.selectedUnit === SETTINGS_UNIT_TYPES.IMPERIAL) {
    value = Math.round(value / 2,59);
  }
  return <>{value}</>;
};

UnitDisplay.propTypes = {
  value: number
};

export default connect(mapStateToProps)(UnitDisplay);