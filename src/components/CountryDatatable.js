import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/lib/Table';
import Pagination from 'react-bootstrap/lib/Pagination';

import CountryDataRow from './CountryDataRow';

const ITEMS_PER_PAGE = 10;

class CountryDatatable extends React.Component {

  state = {
    currentPage: 1
  };

  componentDidUpdate(prevProps) {
    if (prevProps.countries !== this.props.countries) {
      this.setState({currentPage: 1});
    }
  }

  render() {
    const { countries, onCountrySelected } = this.props;
    const pageCount = Math.floor(countries.length / ITEMS_PER_PAGE);
    const countryStart = (this.state.currentPage - 1) * ITEMS_PER_PAGE;
    const currentPageCountries = countries.slice(countryStart, countryStart + ITEMS_PER_PAGE);
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Code</th>
              <th>Capital</th>
              <th>Region</th>
              <th>Subregion</th>
              <th>Population</th>
              <th>Area</th>
            </tr>
          </thead>
          <tbody>
            {currentPageCountries.map(country =>
              <CountryDataRow 
                key={country.alpha3Code} 
                country={country} 
                onCountrySelected={country => onCountrySelected(country)}
              />
            )}
          </tbody>
        </Table>
        {this.renderPagination(pageCount)}
      </>
    );
  }

  renderPagination(pageCount) {
    const pages = [];
    for (let page = 1; page <= pageCount; page++) {
      pages.push((
        <Pagination.Item 
          key={page} 
          active={this.state.currentPage === page}
          onClick={() => this.setState({currentPage: page})}
        >
          {page}
        </Pagination.Item>
      ));
    }
    return (
      <Pagination>
        <Pagination.First onClick={() => this.setState({currentPage: 1})} />
        <Pagination.Prev onClick={() => this.setState({currentPage: this.state.currentPage > 1 ? this.state.currentPage - 1 : 1})} />
        {pages}
        <Pagination.Next onClick={() => this.setState({currentPage: this.state.currentPage < pageCount ?  this.state.currentPage + 1 : pageCount})}/>
        <Pagination.Last onClick={() => this.setState({currentPage: pageCount})} />
      </Pagination>
    );
  }  

}

CountryDatatable.propTypes = {
  countries: PropTypes.array.isRequired,
  onCountrySelected: PropTypes.func.isRequired
}

export default CountryDatatable;