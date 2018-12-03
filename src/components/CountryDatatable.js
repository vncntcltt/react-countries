import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/lib/Table';
import { withNamespaces } from 'react-i18next';

import CountryDataRow from './CountryDataRow';
import Pagination from './Pagination';

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
    const { t, countries, onCountrySelected } = this.props;
    const pageCount = Math.ceil(countries.length / ITEMS_PER_PAGE);
    const countryStart = (this.state.currentPage - 1) * ITEMS_PER_PAGE;
    const currentPageCountries = countries.slice(countryStart, countryStart + ITEMS_PER_PAGE);
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>{t('country.label.name')}</th>
              <th>{t('country.label.code')}</th>
              <th>{t('country.label.capital')}</th>
              <th>{t('country.label.region')}</th>
              <th>{t('country.label.subregion')}</th>
              <th>{t('country.label.population')}</th>
              <th>{t('country.label.area')}</th>
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
        <Pagination
          pageCount={pageCount}
          activePage={this.state.currentPage}
          onPageChange={page => this.setState( {currentPage: page})}
        />
      </>
    );
  }

}

CountryDatatable.propTypes = {
  countries: PropTypes.array.isRequired,
  onCountrySelected: PropTypes.func.isRequired
}

export default withNamespaces()(CountryDatatable);