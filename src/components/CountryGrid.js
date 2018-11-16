import React from 'react';
import { array } from 'prop-types';

import CountryCard from './CountryCard';

const CountryGrid = props => {
  return (
    <ul>
    {props.countries.map(country => 
      <li key={country.alpha3Code}>
        <CountryCard country={country} />
      </li> 
    )}
    </ul>
  );
}

CountryGrid.propTypes = {
  countries: array.isRequired
}

export default CountryGrid;