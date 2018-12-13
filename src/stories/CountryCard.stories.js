import React from 'react'
import { storiesOf } from '@storybook/react'

import CountryCard from '../components/country/CountryCard'
import { countryAfghanistan, countryMalawi } from './countries'

storiesOf('Country/CountryCard', module)
  .add('Afghanistan country card', () => <CountryCard country={countryAfghanistan} />)
  .add('Malawi country card', () => <CountryCard country={countryMalawi} />)
