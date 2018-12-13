import React from 'react'
import { Provider } from 'react-redux'
import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { store } from '../src/store'
import '../src/i18n'
import '../src/stories/stories.css'

addDecorator(withInfo)
addDecorator(story => <Provider store={store}>{story()}</Provider>)
addDecorator(story => <div style={{ margin: 20 }}>{story()}</div>)

const req = require.context('../src/stories', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}
configure(loadStories, module)
