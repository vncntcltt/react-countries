import React from 'react';
import { connect } from 'react-redux';

import { 
  COUNTRIES_DISPLAY_TYPES,
  fetchCountries
} from '../actions';
import CountryToolbar from './CountryToolbar';
import CountryGrid from './CountryGrid';
import CountryDatatable from './CountryDatatable';
import CountryMap from './CountryMap';


const mapStateToProps = state => {
  return {
    filteredCountries: state.countries.filtered,
    displayType: state.countries.displayType
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCountries: () => {
      dispatch(fetchCountries())
    }
  };
};

class Countries extends React.Component {

  componentDidMount() {
    this.props.fetchCountries();
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
        <CountryToolbar />
        {this.props.loading ? <span>Loading....</span> : this.renderCountries()}
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries);