import React from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';

import CountrySearch from './CountrySearch';
import CountrySelectFilter from './CountrySelectFilter';


import {   
  filterAndSortCountries,
  filterCountriesByRegion,
  filterCountriesBySubregion,
  filterCountriesByRegionalBloc,
  filterCountriesByLanguages,
  filterCountriesByName,
  resetFilters
} from '../actions';

const mapStateToProps = state => {
  return {
    countries: state.countries.all,
    regions: state.countries.regions,
    subregions: state.countries.subregions,
    languages: state.countries.languages,
    regionalBlocs: state.countries.regionalBlocs,    
    sortAndFilters: state.sortAndFilters
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterAndSortCountries: (countries, sortAndFilters) => {
      dispatch(filterAndSortCountries(countries, sortAndFilters))
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

class CountrySidebar extends React.Component {

  formRef = React.createRef()

  resetFilters = () => {
    this.formRef.current.reset();
    this.props.resetFilters();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.sortAndFilters !== this.props.sortAndFilters) {
      this.props.filterAndSortCountries(this.props.countries, this.props.sortAndFilters);
    }
  }  
  
  render() {
    return (
      <>    
        <Form ref={this.formRef} className="py-3">
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
          <Button variant="primary" onClick={this.resetFilters}>Reset filters</Button>
        </Form>        
      </>
    );   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountrySidebar);