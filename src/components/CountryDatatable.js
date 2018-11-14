import React from 'react';

class CountryDatatable extends React.Component {

  render() {
    return (
      <table>
      <tr>
        <th>Name</th>
        <th>Code</th>
        <th>Region</th>
        <th>Subregion</th>
        <th>Population</th>
        <th>Area</th>
      </tr>
      {this.props.countries.map(country => 
        <tr key={country.alpha3Code}>
          <td>{country.name}</td>
          <td>{country.alpha3Code}</td>
          <td>{country.region}</td>
          <td>{country.subregion}</td>
          <td>{country.population}</td>
          <td>{country.area}</td>
        </tr>
      )}
      </table>
    );
  }
}

export default CountryDatatable;