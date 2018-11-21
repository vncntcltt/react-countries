import React from 'react';

class CountrySelectFilter extends React.Component {

  onFilterChange = e => {
    if (this.props.onFilterChange) {
      this.props.onFilterChange(e.target.value);
    }
  }

  render() {
    return (
    <span>
      <label>{this.props.label} </label>
      <select onChange={this.onFilterChange}>
      {this.props.addAll ? <option value="">All</option> : ''}
      {this.props.values.map(val => 
        <option key={val} value={val}>{val}</option>
      )}
      </select>
    </span>
    );
  }

}

export default CountrySelectFilter;