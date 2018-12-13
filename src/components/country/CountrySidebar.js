import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/lib/Form'
import Button from 'react-bootstrap/lib/Button'
import Navbar from 'react-bootstrap/lib/Navbar'
import { withNamespaces } from 'react-i18next'

import CountrySearch from './CountrySearch'
import SelectFilter from '../common/SelectFilter'

class CountrySidebar extends React.Component {
  static propTypes = {
    countries: PropTypes.array.isRequired,
    regions: PropTypes.arrayOf(PropTypes.string).isRequired,
    subregions: PropTypes.arrayOf(PropTypes.string).isRequired,
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    regionalBlocs: PropTypes.arrayOf(PropTypes.string).isRequired,
    sortAndFilters: PropTypes.object.isRequired,
    filterAndSortCountries: PropTypes.func.isRequired,
    filterCountriesByRegion: PropTypes.func.isRequired,
    filterCountriesBySubregion: PropTypes.func.isRequired,
    filterCountriesByRegionalBloc: PropTypes.func.isRequired,
    filterCountriesByLanguages: PropTypes.func.isRequired,
    filterCountriesByName: PropTypes.func.isRequired,
    resetFilters: PropTypes.func.isRequired
  }

  componentDidUpdate(prevProps) {
    if (prevProps.sortAndFilters !== this.props.sortAndFilters) {
      this.props.filterAndSortCountries(this.props.countries, this.props.sortAndFilters)
    }
  }

  render() {
    const { t } = this.props
    return (
      <aside>
        <Navbar expand="md" className="px-0">
          <Navbar.Toggle aria-controls="responsive-sidebar">
            <span class="navbar-toggler-icon" />
            <span className="px-2">{t('filters.header')}</span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-sidebar">
            <Form className="py-3">
              <CountrySearch
                value={this.props.sortAndFilters.filterName}
                onSearch={name => this.props.filterCountriesByName(name)}
              />

              <SelectFilter
                label={t('filters.label.region')}
                values={this.props.regions}
                selectedValue={this.props.sortAndFilters.filterRegion}
                onFilterChange={region => this.props.filterCountriesByRegion(region)}
                addAll
              />

              <SelectFilter
                label={t('filters.label.subregion')}
                values={this.props.subregions}
                selectedValue={this.props.sortAndFilters.filterSubregion}
                onFilterChange={subregion => this.props.filterCountriesBySubregion(subregion)}
                addAll
              />

              <SelectFilter
                label={t('filters.label.languages')}
                values={this.props.languages}
                selectedValue={this.props.sortAndFilters.filterLanguages}
                onFilterChange={languages => this.props.filterCountriesByLanguages(languages)}
                addAll
              />

              <SelectFilter
                label={t('filters.label.regionalBloc')}
                values={this.props.regionalBlocs}
                selectedValue={this.props.sortAndFilters.filterRegionalBloc}
                onFilterChange={regionalBloc => this.props.filterCountriesByRegionalBloc(regionalBloc)}
                addAll
              />

              <Button variant="primary" onClick={this.props.resetFilters} className="my-2">
                {t('filters.button.reset')}
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </aside>
    )
  }
}

export default withNamespaces()(CountrySidebar)
