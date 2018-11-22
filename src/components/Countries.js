import React from 'react';
import { connect } from 'react-redux';

import { 
  COUNTRIES_DISPLAY_TYPES,
  fetchCountries,
  setCountryDisplayType,
  filterAndSortCountries,
  filterCountriesByRegion,
  filterCountriesBySubregion,
  filterCountriesByRegionalBloc,
  filterCountriesByLanguages,
  filterCountriesByName,
  resetFilters
} from '../actions';
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
    loading: state.countries.loading,
    error: state.countries.error,
    filteredCountries: state.countries.filtered,
    displayType: state.countries.displayType,
    sortAndFilters: state.sortAndFilters
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCountries: () => {
      dispatch(fetchCountries())
    },
    filterAndSortCountries: (countries, sortAndFilters) => {
      dispatch(filterAndSortCountries(countries, sortAndFilters))
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

  formRef = React.createRef()

  resetFilters = () => {
    this.formRef.current.reset();
    this.props.resetFilters();
  }

  componentDidMount() {
    this.props.fetchCountries();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.sortAndFilters !== this.props.sortAndFilters) {
      this.props.filterAndSortCountries(this.props.countries, this.props.sortAndFilters);
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
        <form ref={this.formRef}>          
          <label>Filters:   </label>
          <CountrySearch onSearch={name => this.props.filterCountriesByName(name)} />
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
        {this.props.loading ? <span>Loading....</span> : this.renderCountries()}
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries);