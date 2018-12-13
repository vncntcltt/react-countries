import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import CountryGrid from '../components/country/CountryGrid'
import { countryAfghanistan, countryMalawi } from './countries'

storiesOf('Country/CountryGrid', module)
  .add('Afghanistan grid', () => (
    <CountryGrid countries={[countryAfghanistan]} onCountrySelected={action('country selected')} />
  ))
  .add('Afghanistan and Malawi grid', () => (
    <CountryGrid countries={[countryAfghanistan, countryMalawi]} onCountrySelected={action('country selected')} />
  ))
