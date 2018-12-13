import React from 'react'
import { storiesOf } from '@storybook/react'

import UnitDisplay from '../components/common/UnitDisplay'

storiesOf('Common/UnitDisplay', module)
  .add('with metric unit', () => <UnitDisplay value={45000} selectedUnit="metric" />)
  .add('with imperial unit', () => <UnitDisplay value={45000} selectedUnit="imperial" />)
