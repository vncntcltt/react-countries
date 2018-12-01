import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import { 
  fetchCountries,
  COUNTRIES_DISPLAY_TYPES,
  setCountryDisplayType  ,
  filterCountriesByRegion,
  filterCountriesBySubregion
} from '../actions';
import CountrySidebar from './CountrySidebar';
import CountryDisplayType from './CountryDisplayType';
import CountryGrid from './CountryGrid';
import CountryDatatable from './CountryDatatable';
import CountryMap from './CountryMap';
import CountryBreadcrumb from './CountryBreadcrumb';
import CountryDetailsModal from './CountryDetailsModal';

const mapStateToProps = state => {
  return {
    filteredCountries: state.countries.filtered,
    displayType: state.countries.displayType,
    sortAndFilters: state.sortAndFilters
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCountries: () => {
      dispatch(fetchCountries())
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
  };
};

class Countries extends React.Component {

  state = {
    selectedCountryDetails: null
  };

  componentDidMount() {
    this.props.fetchCountries();
  }

  renderCountries() {
    switch(this.props.displayType) {
      case COUNTRIES_DISPLAY_TYPES.GRID:
        return <CountryGrid 
          countries={this.props.filteredCountries} 
        />;
      case COUNTRIES_DISPLAY_TYPES.TABLE:
        return <CountryDatatable 
          countries={this.props.filteredCountries}
          onCountrySelected={country => this.setState({ selectedCountryDetails: country })}
        />;
      case COUNTRIES_DISPLAY_TYPES.MAP:
        return <CountryMap 
          countries={this.props.filteredCountries} 
          onCountrySelected={country => this.setState({ selectedCountryDetails: country })}
        />
      default:
        console.error('Unknown display type', this.props.displayType);
    }
  }

  render() {
    return (
      <Container fluid as="section">
        <Row>
          <Col xs xl="2" md="3" className="bg-light">
            <CountrySidebar/>
          </Col>
          <Col>
            <CountryBreadcrumb 
              region={this.props.sortAndFilters.filterRegion} 
              subregion={this.props.sortAndFilters.filterSubregion} 
              onNavigateToWorld={() => this.props.filterCountriesByRegion('')}
              onNavigateToRegion={() => this.props.filterCountriesBySubregion('')}
            />   
            <CountryDisplayType onChange={e => this.props.setDisplayType(e.target.value)} />
            {this.props.loading ? <span>Loading....</span> : this.renderCountries()}
            <CountryDetailsModal
              show={!!this.state.selectedCountryDetails}
              onHide={() => this.setState({ selectedCountryDetails: null })}
              country={this.state.selectedCountryDetails}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries);