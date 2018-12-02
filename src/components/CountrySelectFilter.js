import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/lib/Form';

class CountrySelectFilter extends React.Component {

  static propTypes = {    
    values: PropTypes.array.isRequired,    
    onFilterChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    addAll: PropTypes.bool
  }

  static defaultProps = {
    label: '',
    addAll: false
  }

  onFilterChange = e => {
    if (this.props.onFilterChange) {
      this.props.onFilterChange(e.target.value);
    }
  }

  render() {
    return (
      <Form.Group>
        <Form.Label>{this.props.label}</Form.Label>
        <Form.Control as="select" onChange={this.onFilterChange}>
        {this.props.addAll ? <option value="">All</option> : ''}
        {this.props.values.map(val => 
          <option key={val} value={val}>{val}</option>
        )}
        </Form.Control>
      </Form.Group>
    );
  }

}

export default CountrySelectFilter;