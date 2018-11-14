import React from 'react';

import countryApi from '../api/countryApi';
import CountryGrid from './CountryGrid';
import CountryDatatable from './CountryDatatable';
import CountryMap from './CountryMap';
import CountrySearch from './CountrySearch';

class Countries extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      countries: [],
      filteredCountries: [],
      displayType: 'map'
    };
    this.searchCountries = this.searchCountries.bind(this);
  }

  componentDidMount() {
    countryApi.getCountries()
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            countries: result,
            filteredCountries: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  setDisplayType(displayType) {
    this.setState({ displayType });
  }

  searchCountries(filterName) {
    const filteredCountries = countryApi.filterAndSortCountries(this.state.countries, { filterName })
    this.setState({ filteredCountries });
  }

  renderCountries() {
    switch(this.state.displayType) {
      case 'grid':
        return <CountryGrid countries={this.state.filteredCountries} />;
      case 'table':
        return <CountryDatatable countries={this.state.filteredCountries} />;
      case 'map':
      default:
        return <CountryMap countries={this.state.filteredCountries} />
    }
  }

  render() {
    return (      
      <section>
        <header>Countries</header>
        <button onClick={() => this.setDisplayType('map')}>Map</button>
        <button onClick={() => this.setDisplayType('grid')}>Grid</button>
        <button onClick={() => this.setDisplayType('table')}>Table</button>
        <CountrySearch onSearch={this.searchCountries} />
        {this.renderCountries()}
      </section>
    );
  }
}

export default Countries;