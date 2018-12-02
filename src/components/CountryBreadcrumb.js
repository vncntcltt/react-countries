import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';

class CountryBreadcrumb extends React.Component {

  static propTypes = {
    region: PropTypes.string,
    subregion: PropTypes.string,
    onNavigateToWorld: PropTypes.func.isRequired,
    onNavigateToRegion: PropTypes.func.isRequired
  };

  render() {
    const { region, subregion, onNavigateToWorld, onNavigateToRegion } = this.props;
    return (
      <Breadcrumb>
        <Breadcrumb.Item active={!region && !subregion} onClick={onNavigateToWorld}>
          World
        </Breadcrumb.Item>
        {region && <Breadcrumb.Item active={!subregion} onClick={onNavigateToRegion}>
          {region}
        </Breadcrumb.Item>}
        {region && subregion && <Breadcrumb.Item active>
          {subregion}
        </Breadcrumb.Item>}
      </Breadcrumb>
    );
  }

}

export default CountryBreadcrumb;