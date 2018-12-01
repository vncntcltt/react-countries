import React from 'react';
import { array } from 'prop-types';
import Table from 'react-bootstrap/lib/Table';

import CountryDataRow from './CountryDataRow';

const CountryDatatable = ({ countries }) => {
  return (
    <Table striped bordered hover>
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
        {countries.map(country =>
          <CountryDataRow key={country.alpha3Code} country={country} />
        )}
      </tbody>
    </Table>
  );
}

CountryDatatable.propTypes = {
  countries: array.isRequired
}

export default CountryDatatable;