import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb'
import { withNamespaces } from 'react-i18next'

import { filterCountriesByRegion, filterCountriesBySubregion } from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    onNavigateToWorld: () => {
      dispatch(filterCountriesByRegion(''))
    },
    onNavigateToRegion: () => {
      dispatch(filterCountriesBySubregion(''))
    }
  }
}

class CountryBreadcrumb extends React.Component {
  static propTypes = {
    region: PropTypes.string,
    subregion: PropTypes.string
  }

  render() {
    const {
      t,
      region,
      subregion,
      onNavigateToWorld,
      onNavigateToRegion
    } = this.props
    return (
      <Breadcrumb>
        <Breadcrumb.Item
          active={!region && !subregion}
          onClick={onNavigateToWorld}
        >
          {t('navigation.label.world')}
        </Breadcrumb.Item>
        {region && (
          <Breadcrumb.Item active={!subregion} onClick={onNavigateToRegion}>
            {region}
          </Breadcrumb.Item>
        )}
        {region && subregion && (
          <Breadcrumb.Item active>{subregion}</Breadcrumb.Item>
        )}
      </Breadcrumb>
    )
  }
}

export default withNamespaces()(
  connect(
    null,
    mapDispatchToProps
  )(CountryBreadcrumb)
)
