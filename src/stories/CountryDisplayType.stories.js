import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import CountryDisplayType from '../components/country/CountryDisplayType'

storiesOf('Country/CountryDisplayType', module)
  .add('with map selected', () => <CountryDisplayType displayType="map" setDisplayType={action('set display type')} />)
  .add('with table selected', () => (
    <CountryDisplayType displayType="table" setDisplayType={action('set display type')} />
  ))
