import React from 'react'
import { storiesOf } from '@storybook/react'
import { actions } from '@storybook/addon-actions'

import CountryBreadcrumb from '../components/country/CountryBreadcrumb'

const actionObjects = actions({ onNavigateToWorld: 'navigate to world', onNavigateToRegion: 'navigate to region' })

storiesOf('Country/CountryBreadcrumb', module)
  .add('World', () => <CountryBreadcrumb region="" subregion="" {...actionObjects} />)
  .add('Africa', () => <CountryBreadcrumb region="Africa" subregion="" {...actionObjects} />)
  .add('Asia / South-Eastern Asia', () => (
    <CountryBreadcrumb region="Asia" subregion="South-Eastern Asia" {...actionObjects} />
  ))
