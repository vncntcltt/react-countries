import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/lib/Form';
import { withNamespaces } from 'react-i18next';

class CountrySelectFilter extends React.Component {

  static propTypes = {    
    values: PropTypes.array.isRequired,
    selectedValue: PropTypes.string.isRequired,
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
    const { t, values, selectedValue, label, addAll } = this.props;
    return (
      <Form.Group>
        <Form.Label>{label}</Form.Label>
        <Form.Control as="select" value={selectedValue} onChange={this.onFilterChange}>
        {addAll ? <option value="">{t('filters.placeholder.all')}</option> : ''}
        {values.map(val => 
          <option key={val} value={val}>{val}</option>
        )}
        </Form.Control>
      </Form.Group>
    );
  }

}

export default withNamespaces()(CountrySelectFilter);