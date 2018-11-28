import React from 'react';
import { string, number } from 'prop-types'

import UnitDisplay from './UnitDisplay';

const CountryDataRow = props => {
  const { name, alpha3Code, capital, region, subregion, population, area } = props.country;
  return (
    <tr>
      <td>{name}</td>
      <td>{alpha3Code}</td>
      <td>{capital}</td>
      <td>{region}</td>
      <td>{subregion}</td>
      <td>{population}</td>
      <td><UnitDisplay value={area} /></td>
    </tr>
  );
}

CountryDataRow.propTypes = {
  name: string,
  alpha3Code: string,
  capital: string,
  region: string,
  subregion: string,
  population: number,
  area: number
};

export default CountryDataRow;