import React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/lib/Container'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Alert from 'react-bootstrap/lib/Alert'
import { NamespacesConsumer } from 'react-i18next'

import CountrySidebarContainer from './CountrySidebarContainer'
import CountryMainView from './CountryMainView'
import CountryDetailsModal from './CountryDetailsModal'
import { countryPropType, sortAndFilterPropType } from '../common/propTypes'

class Countries extends React.Component {
  static propTypes = {
    countries: PropTypes.arrayOf(countryPropType),
    filteredCountries: PropTypes.arrayOf(countryPropType),
    fetchCountries: PropTypes.func.isRequired,
    displayType: PropTypes.string.isRequired,
    sortAndFilters: sortAndFilterPropType,
    selectedCountry: countryPropType,
    loading: PropTypes.bool,
    error: PropTypes.string,
    setSelectedCountry: PropTypes.func
  }

  static defaultProps = {
    setSelectedCountry: () => {}
  }

  componentDidMount() {
    this.props.fetchCountries()
  }

  render() {
    const {
      countries,
      filteredCountries,
      displayType,
      selectedCountry,
      loading,
      error,
      sortAndFilters,
      setSelectedCountry
    } = this.props
    return (
      <NamespacesConsumer>
        {t => (
          <Container fluid as="section" className="py-2">
            {error ? (
              <Alert variant="danger">{error}</Alert>
            ) : loading ? (
              <Alert variant="info">{t('content.message.dataLoading')}</Alert>
            ) : (
              <Row>
                <Col sm={3} lg={2} className="bg-light">
                  <CountrySidebarContainer />
                </Col>
                <Col sm={9} lg={10}>
                  <CountryMainView
                    countries={countries}
                    filteredCountries={filteredCountries}
                    displayType={displayType}
                    sortAndFilters={sortAndFilters}
                    onCountrySelected={country => setSelectedCountry(country)}
                  />
                </Col>
                <CountryDetailsModal
                  show={!!selectedCountry}
                  onHide={() => setSelectedCountry(null)}
                  country={selectedCountry}
                />
              </Row>
            )}
          </Container>
        )}
      </NamespacesConsumer>
    )
  }
}

export default Countries
