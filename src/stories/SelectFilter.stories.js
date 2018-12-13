import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import SelectFilter from '../components/common/SelectFilter'

const SelectFilterDecorator = story => <div style={{ width: 400 }}>{story()}</div>

storiesOf('Common/SelectFilter', module)
  .addDecorator(SelectFilterDecorator)
  .add('by region', () => (
    <SelectFilter
      label="Region"
      values={['Asia', 'Europe', 'Africa', 'Americas']}
      selectedValue={'Europe'}
      onFilterChange={action('filter-change')}
      addAll
    />
  ))
