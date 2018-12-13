import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import CountryDatatable from '../components/country/CountryDatatable'
import { countryAfghanistan, countryMalawi } from './countries'

storiesOf('Country/CountryDatatable', module)
  .add('Afghanistan table', () => (
    <CountryDatatable countries={[countryAfghanistan]} onCountrySelected={action('country selected')} />
  ))
  .add('Afghanistan and Malawi table', () => (
    <CountryDatatable countries={[countryAfghanistan, countryMalawi]} onCountrySelected={action('country selected')} />
  ))
