import React from 'react';
import { string, func } from 'prop-types';
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';

class CountryBreadcrumb extends React.Component {

  static propTypes = {
    region: string,
    subregion: string,
    onNavigateToWorld: func.isRequired,
    onNavigateToRegion: func.isRequired
  };

  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item active={!this.props.region && !this.props.subregion} onClick={this.props.onNavigateToWorld}>
          World
        </Breadcrumb.Item>
        {this.props.region && <Breadcrumb.Item active={!this.props.subregion} onClick={this.props.onNavigateToRegion}>
          {this.props.region}
        </Breadcrumb.Item>}
        {this.props.region && this.props.subregion && <Breadcrumb.Item active>
          {this.props.subregion}
        </Breadcrumb.Item>}
      </Breadcrumb>
    );
  }

}

export default CountryBreadcrumb;