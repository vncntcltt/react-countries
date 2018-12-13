import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import SearchControl from '../components/common/SearchControl'

storiesOf('Common/SearchControl', module)
  .add('with empty search', () => <SearchControl value={''} onSearch={action('search')} />)
  .add('with afg search', () => <SearchControl value={'afg'} onSearch={action('search')} />)
