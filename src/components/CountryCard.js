import React from 'react';

class CountryCard extends React.Component {

  render() {
    return (
      <article>
        <header>{this.props.country.name} ({this.props.country.alpha3Code})</header>
        <div>Capital: {this.props.country.capital}</div>
        <div>Population: {this.props.country.population}</div>
        <div>Area: {this.props.country.area}</div>
      </article>
    );
  }

}

export default CountryCard;