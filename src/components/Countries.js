import React from 'react';

import countryApi from '../api/countryApi';
import CountryGrid from './CountryGrid';
import CountryDatatable from './CountryDatatable';
import CountryMap from './CountryMap';
import CountrySearch from './CountrySearch';
import CountrySelectFilter from './CountrySelectFilter';

class Countries extends React.Component {

  state = {
    error: null,
    isLoaded: false,
    countries: [],
    filteredCountries: [],
    regions: [],
    subregions: [],
    languages: [],
    regionalBlocs: [],
    displayType: 'map',
    filterRegion: null,
    filterSubregion: null,
    filterRegionalBloc: null,
    filterLanguages: null,
    filterName: null
  };

  searchCountries = filterName => {
    this.setState({ filterName });
  };

  filterCountriesByRegion = filterRegion => {
    this.setState({ filterRegion });
  }

  filterCountriesBySubregion = filterSubregion => {
    this.setState({ filterSubregion });
  }

  filterCountriesByLanguage = filterLanguages => {
    this.setState({ filterLanguages });    
  }

  filterCountriesByRegionalBloc = filterRegionalBloc => {
    this.setState({ filterRegionalBloc });
  }

  setDisplayType = (displayType) => {
    this.setState({ displayType });
  };

  getFilterAndSorts() {
    return {
      filterRegion: this.state.filterRegion,
      filterSubregion: this.state.filterSubregion,
      filterLanguages: this.state.filterLanguages,
      filterRegionalBloc: this.state.filterRegionalBloc,
      filterName: this.state.filterName
    };
  }

  componentDidMount() {
    countryApi.getCountries()
      .then(res => res.json())
      .then(
        (result) => {
          const regionData = countryApi.buildRegionData(result)
          this.setState({
            isLoaded: true,
            countries: result,
            filteredCountries: result,
            regions: regionData.regions,
            subregions: regionData.subregions,
            regionalBlocs: regionData.regionalBlocs, 
            languages: regionData.languages
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filterName !== this.state.filterName
      || prevState.filterRegion !== this.state.filterRegion
      || prevState.filterSubregion !== this.state.filterSubregion
      || prevState.filterRegionalBloc !== this.state.filterRegionalBloc      
      || prevState.filterLanguages !== this.state.filterLanguages) { 
      const filteredCountries = countryApi.filterAndSortCountries(this.state.countries, this.getFilterAndSorts())
      this.setState({ filteredCountries });    
    }
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
        <CountrySelectFilter label="Region" values={this.state.regions} onFilterChange={this.filterCountriesByRegion} addAll />
        <CountrySelectFilter label="Region" values={this.state.subregions} onFilterChange={this.filterCountriesBySubregion} addAll />
        <CountrySelectFilter label="Language" values={this.state.languages} onFilterChange={this.filterCountriesByLanguage} addAll />
        <CountrySelectFilter label="Regional bloc" values={this.state.regionalBlocs} onFilterChange={this.filterCountriesByRegionalBloc} addAll />        
        {this.renderCountries()}
      </section>
    );
  }
}

export default Countries;