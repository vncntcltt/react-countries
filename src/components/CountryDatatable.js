import React from 'react';
import { array } from 'prop-types';

import CountryDataRow from './CountryDataRow';

const CountryDatatable = props => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Code</th>
          <th>Capital</th>
          <th>Region</th>
          <th>Subregion</th>
          <th>Population</th>
          <th>Area</th>
        </tr>
      </thead>
      <tbody>
        {props.countries.map(country =>
          <CountryDataRow key={country.alpha3Code} country={country} />
        )}
      </tbody>
    </table>
  );
}

CountryDatatable.propTypes = {
  countries: array.isRequired
}

export default CountryDatatable;