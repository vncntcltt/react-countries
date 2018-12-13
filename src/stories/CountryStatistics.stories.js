import React from 'react'
import { storiesOf } from '@storybook/react'

import CountryStatistics from '../components/country/CountryStatistics'
import { countryAfghanistan, countryMalawi } from './countries'

storiesOf('Country/CountryStatistics', module)
  .add('1/2 countries', () => (
    <CountryStatistics countries={[countryAfghanistan, countryMalawi]} filteredCountries={[countryAfghanistan]} />
  ))
  .add('2/2 countries', () => (
    <CountryStatistics
      countries={[countryAfghanistan, countryMalawi]}
      filteredCountries={[countryAfghanistan, countryMalawi]}
    />
  ))
