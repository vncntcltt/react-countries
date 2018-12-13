import React from 'react'
import PropTypes from 'prop-types'
import Table from 'react-bootstrap/lib/Table'
import { withNamespaces } from 'react-i18next'

import CountryDataRow from './CountryDataRow'

class CountryDatatable extends React.Component {
  render() {
    const { t, countries, onCountrySelected } = this.props
    return (
      <>
        <Table striped bordered hover responsive>
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
            {countries.map(country => (
              <CountryDataRow
                key={country.alpha3Code}
                country={country}
                onCountrySelected={country => onCountrySelected(country)}
              />
            ))}
          </tbody>
        </Table>
      </>
    )
  }
}

CountryDatatable.propTypes = {
  countries: PropTypes.array.isRequired,
  onCountrySelected: PropTypes.func.isRequired
}

export default withNamespaces()(CountryDatatable)
