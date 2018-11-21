import React from 'react';
import { connect } from 'react-redux';

import { COUNTRIES_DISPLAY_TYPES, setCountryDisplayType } from '../actions';
import countryApi from '../api/countryApi';
import CountryGrid from './CountryGrid';
import CountryDatatable from './CountryDatatable';
import CountryMap from './CountryMap';
import CountrySearch from './CountrySearch';
import CountrySelectFilter from './CountrySelectFilter';
import CountryDisplayType from './CountryDisplayType';

const mapStateToProps = state => {
  return {
    displayType: state.countriesDisplayType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setDisplayType: displayType => {
      dispatch(setCountryDisplayType(displayType))
    }
  };
};

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
  };

  filterCountriesBySubregion = filterSubregion => {
    this.setState({ filterSubregion });
  };

  filterCountriesByLanguage = filterLanguages => {
    this.setState({ filterLanguages });    
  };

  filterCountriesByRegionalBloc = filterRegionalBloc => {
    this.setState({ filterRegionalBloc });
  };
  
  setDisplayType = e => {
    this.props.setDisplayType(e.target.value);
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
    switch(this.props.displayType) {
      case COUNTRIES_DISPLAY_TYPES.GRID:
        return <CountryGrid countries={this.state.filteredCountries} />;
      case COUNTRIES_DISPLAY_TYPES.TABLE:
        return <CountryDatatable countries={this.state.filteredCountries} />;
      case COUNTRIES_DISPLAY_TYPES.MAP:
        return <CountryMap countries={this.state.filteredCountries} />
      default:
        console.error('Unknownw display type', this.props.displayType);
    }
  }

  render() {
    return (      
      <section>
        <header>Countries</header>
        <CountryDisplayType onChange={this.setDisplayType} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Countries);