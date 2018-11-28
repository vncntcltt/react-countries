import React from 'react';

import UnitDisplay from './UnitDisplay';

const CountryCard = props => {
  const { name, alpha3Code, capital, population, area } = props.country;
  return (
    <article>
      <header>{name} ({alpha3Code})</header>
      <div>Capital: {capital}</div>
      <div>Population: {population}</div>
      <div>Area: <UnitDisplay value={area} /></div>
    </article>
  );
}

export default CountryCard;