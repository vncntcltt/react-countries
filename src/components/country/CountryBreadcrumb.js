import React from 'react'
import PropTypes from 'prop-types'
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb'
import { withNamespaces } from 'react-i18next'

class CountryBreadcrumb extends React.Component {
  static propTypes = {
    region: PropTypes.string,
    subregion: PropTypes.string,
    onNavigateToWorld: PropTypes.func,
    onNavigateToRegion: PropTypes.func
  }

  static defaultProps = {
    onNavigateToWorld: () => {},
    onNavigateToRegion: () => {}
  }

  render() {
    const { t, region, subregion, onNavigateToWorld, onNavigateToRegion } = this.props
    return (
      <Breadcrumb>
        <Breadcrumb.Item active={!region && !subregion} onClick={onNavigateToWorld}>
          {t('navigation.label.world')}
        </Breadcrumb.Item>
        {region && (
          <Breadcrumb.Item active={!subregion} onClick={onNavigateToRegion}>
            {region}
          </Breadcrumb.Item>
        )}
        {region && subregion && <Breadcrumb.Item active>{subregion}</Breadcrumb.Item>}
      </Breadcrumb>
    )
  }
}

export default withNamespaces()(CountryBreadcrumb)
