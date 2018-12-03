import React from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/lib/Form';

import { setSettingsUnit, SETTINGS_UNIT_TYPES } from "../actions";

const mapStateToProps = state => ({
  selectedUnit: state.settings.unit
});

const mapDispatchToProps = dispatch => ({
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
      <Form className="p-3">
        <Form.Group>
          <Form.Label>Units</Form.Label>
          <Form.Control as="select" onChange={this.onUnitChange} value={this.props.selectedUnit}>
            <option value={SETTINGS_UNIT_TYPES.METRIC}>Metric</option>
            <option value={SETTINGS_UNIT_TYPES.IMPERIAL}>Imperial</option>
          </Form.Control>
        </Form.Group>
      </Form>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);