import React from 'react';
import CountryGrid from './CountryGrid';
import CountryMap from './CountryMap';

const COUNTRIES_API_URL = 'https://restcountries.eu/rest/v2/all';

class Countries extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      countries: [],
      displayType: 'map'
    };
  }

  componentDidMount() {
    fetch(COUNTRIES_API_URL)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            countries: result
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

  render() {
    const countryDisplay = this.state.displayType === "map" ? <CountryMap countries={this.state.countries} /> : <CountryGrid countries={this.state.countries} />;
    return (      
      <section>
        <header>Countries</header>
        <button onClick={() => this.setDisplayType('map')}>Map</button>
        <button onClick={() => this.setDisplayType('grid')}>Grid</button>
        {countryDisplay}
      </section>
    );
  }
}

export default Countries;