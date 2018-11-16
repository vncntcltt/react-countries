import React from 'react';

const CountryCard = props => {
  const { name, alpha3Code, capital, population, area } = props.country;
  return (
    <article>
      <header>{name} ({alpha3Code})</header>
      <div>Capital: {capital}</div>
      <div>Population: {population}</div>
      <div>Area: {area}</div>
    </article>
  );
}

export default CountryCard;