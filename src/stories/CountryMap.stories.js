import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import CountryMap from '../components/country/CountryMap'
import { countryAfghanistan, countryMalawi } from './countries'

storiesOf('Country/CountryMap', module)
  .add('Afghanistan map', () => (
    <CountryMap countries={[countryAfghanistan]} onCountrySelected={action('country selected')} />
  ))
  .add('Afghanistan and Malawi map', () => (
    <CountryMap countries={[countryAfghanistan, countryMalawi]} onCountrySelected={action('country selected')} />
  ))
