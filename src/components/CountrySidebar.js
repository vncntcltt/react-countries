import React from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';
import { withNamespaces } from 'react-i18next';

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
    const { t } = this.props;
    return (
      <>    
        <Form ref={this.formRef} className="py-3">
          <CountrySearch
            value={this.props.sortAndFilters.filterName}
            onSearch={name => this.props.filterCountriesByName(name)} 
          />
          <CountrySelectFilter 
            label={t('filters.label.region')}
            values={this.props.regions}
            selectedValue={this.props.sortAndFilters.filterRegion}
            onFilterChange={region => this.props.filterCountriesByRegion(region)} 
            addAll 
          />
          <CountrySelectFilter 
            label={t('filters.label.subregion')}
            values={this.props.subregions}
            selectedValue={this.props.sortAndFilters.filterSubregion}
            onFilterChange={subregion => this.props.filterCountriesBySubregion(subregion)} 
            addAll 
          />
          <CountrySelectFilter 
            label={t('filters.label.languages')}
            values={this.props.languages}
            selectedValue={this.props.sortAndFilters.filterLanguages}
            onFilterChange={languages => this.props.filterCountriesByLanguages(languages)} 
            addAll 
          />
          <CountrySelectFilter 
            label={t('filters.label.regionalBloc')} 
            values={this.props.regionalBlocs}
            selectedValue={this.props.sortAndFilters.filterRegionalBloc}
            onFilterChange={regionalBloc => this.props.filterCountriesByRegionalBloc(regionalBloc)} 
            addAll 
          />
          <Button 
            variant="primary" 
            onClick={this.resetFilters}
            className="my-2">
            {t('filters.button.reset')}
          </Button>
        </Form>        
      </>
    );   
  }
}

export default withNamespaces()(connect(mapStateToProps, mapDispatchToProps)(CountrySidebar));