import React from 'react';

import countryApi from '../api/countryApi';
import CountryGrid from './CountryGrid';
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

  render() {
    const countryDisplay = this.state.displayType === "map" ? <CountryMap countries={this.state.filteredCountries} /> : <CountryGrid countries={this.state.filteredCountries} />;
    return (      
      <section>
        <header>Countries</header>
        <button onClick={() => this.setDisplayType('map')}>Map</button>
        <button onClick={() => this.setDisplayType('grid')}>Grid</button>
        <CountrySearch onSearch={this.searchCountries} />
        {countryDisplay}
      </section>
    );
  }
}

export default Countries;