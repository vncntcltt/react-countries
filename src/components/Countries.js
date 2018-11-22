import React from 'react';
import { connect } from 'react-redux';

import { 
  COUNTRIES_DISPLAY_TYPES, 
  setCountryDisplayType,
  setAllCountries,
  filterAndSortCountries,
  filterCountriesByRegion,
  filterCountriesBySubregion,
  filterCountriesByRegionalBloc,
  filterCountriesByLanguages,
  filterCountriesByName,
  resetFilters
} from '../actions';
import countryApi from '../api/countryApi';
import CountryGrid from './CountryGrid';
import CountryDatatable from './CountryDatatable';
import CountryMap from './CountryMap';
import CountrySearch from './CountrySearch';
import CountrySelectFilter from './CountrySelectFilter';
import CountryDisplayType from './CountryDisplayType';

const mapStateToProps = state => {
  return {
    countries: state.countries.all,
    regions: state.countries.regions,
    subregions: state.countries.subregions,
    languages: state.countries.languages,
    regionalBlocs: state.countries.regionalBlocs,
    filteredCountries: state.countries.filtered,
    displayType: state.countries.displayType,
    sortAndFilters: state.sortAndFilters
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setAllCountries: countries => {
      dispatch(setAllCountries(countries))
    },
    filterAndSortCountries: filteredCountries => {
      dispatch(filterAndSortCountries(filteredCountries))
    },
    setDisplayType: displayType => {
      dispatch(setCountryDisplayType(displayType))
    },
    filterCountriesByRegion: region => {
      dispatch(filterCountriesByRegion(region))
    },
    filterCountriesBySubregion: subregion => {
      dispatch(filterCountriesBySubregion(subregion))
    },
    filterCountriesByRegionalBloc: regionalBloc => {
      dispatch(filterCountriesByRegionalBloc(regionalBloc))
    },
    filterCountriesByLanguages: languages => {
      dispatch(filterCountriesByLanguages(languages))
    },
    filterCountriesByName: name => {
      dispatch(filterCountriesByName(name))
    },
    resetFilters: () => {
      dispatch(resetFilters())
    }
  };
};

class Countries extends React.Component {

  state = {
    error: null,
    isLoaded: false
  };

  formRef = React.createRef()

  resetFilters = () => {
    this.formRef.current.reset();
    this.props.resetFilters();
  }

  componentDidMount() {
    countryApi.getCountries()
      .then(res => res.json())
      .then(
        (countries) => {
          const regionData = countryApi.buildRegionData(countries);          
          this.props.setAllCountries({ countries, ...regionData });
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
    if (prevProps.sortAndFilters !== this.props.sortAndFilters) {
      const filteredCountries = countryApi.filterAndSortCountries(this.props.countries, this.props.sortAndFilters);
      this.props.filterAndSortCountries(filteredCountries);
    }
  }

  renderCountries() {
    switch(this.props.displayType) {
      case COUNTRIES_DISPLAY_TYPES.GRID:
        return <CountryGrid countries={this.props.filteredCountries} />;
      case COUNTRIES_DISPLAY_TYPES.TABLE:
        return <CountryDatatable countries={this.props.filteredCountries} />;
      case COUNTRIES_DISPLAY_TYPES.MAP:
        return <CountryMap countries={this.props.filteredCountries} />
      default:
        console.error('Unknown display type', this.props.displayType);
    }
  }

  render() {
    return (      
      <section>
        <header>Countries</header>
        <CountryDisplayType onChange={e => this.props.setDisplayType(e.target.value)} />
        <CountrySearch onSearch={name => this.props.filterCountriesByName(name)} />
        <form ref={this.formRef}>
          <label>Filters:   </label>
          <CountrySelectFilter 
            label="Region" 
            values={this.props.regions} 
            onFilterChange={region => this.props.filterCountriesByRegion(region)} 
            addAll 
          />
          <CountrySelectFilter 
            label="Subregion" 
            values={this.props.subregions} 
            onFilterChange={subregion => this.props.filterCountriesBySubregion(subregion)} 
            addAll 
          />
          <CountrySelectFilter 
            label="Language" 
            values={this.props.languages} 
            onFilterChange={languages => this.props.filterCountriesByLanguages(languages)} 
            addAll 
          />
          <CountrySelectFilter 
            label="Regional bloc" 
            values={this.props.regionalBlocs} 
            onFilterChange={regionalBloc => this.props.filterCountriesByRegionalBloc(regionalBloc)} 
            addAll 
          />
          <button type="button" onClick={this.resetFilters}>Reset</button>
        </form>
        {this.renderCountries()}
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries);