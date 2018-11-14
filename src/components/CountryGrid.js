import React from 'react';

import CountryCard from './CountryCard';

class CountryGrid extends React.Component {

  render() {
    return (
      <ul>
      {this.props.countries.map(country => 
        <li key={country.alpha3Code}><CountryCard country={country} /></li> 
      )}
      </ul>
    );
  }
}

export default CountryGrid;