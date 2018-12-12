import React from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/lib/Container'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Alert from 'react-bootstrap/lib/Alert'
import { NamespacesConsumer } from 'react-i18next'

import { fetchCountries, setSelectedCountry } from '../actions'
import CountrySidebar from './CountrySidebar'
import CountryMainView from './CountryMainView'
import CountryDetailsModal from './CountryDetailsModal'

const mapStateToProps = state => {
  return {
    countries: state.countries.all,
    filteredCountries: state.countries.filtered,
    displayType: state.countries.displayType,
    selectedCountry: state.countries.selectedCountry,
    loading: state.countries.loading,
    error: state.countries.error,
    sortAndFilters: state.sortAndFilters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCountries: () => {
      dispatch(fetchCountries())
    },
    setSelectedCountry: country => {
      dispatch(setSelectedCountry(country))
    }
  }
}

class Countries extends React.Component {
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
                <Col xs xl="2" md="3" className="bg-light">
                  <CountrySidebar />
                </Col>
                <Col>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Countries)
