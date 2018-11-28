import React from 'react';
import { connect } from 'react-redux';

import { setSettingsUnit, SETTINGS_UNIT_TYPES } from "../actions";

const mapStateToProps = state => ({
  selectedUnit: state.settings.unit
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setSelectedUnit: unit => {
    dispatch(setSettingsUnit(unit));
  }
});

class Settings extends React.Component {

  onUnitChange = e => {
    const selectedUnit = e.target.value;
    this.props.setSelectedUnit(selectedUnit);
  };

  render() {
    return (
      <>
        <h3>Settings</h3>
        <label>Units</label>
        <select onChange={this.onUnitChange} value={this.props.selectedUnit}>
          <option value={SETTINGS_UNIT_TYPES.METRIC}>Metric</option>
          <option value={SETTINGS_UNIT_TYPES.IMPERIAL}>Imperial</option>
        </select>
      </>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);