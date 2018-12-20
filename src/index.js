import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { ToastContainer, toast } from 'react-toastify'

import i18n from './i18n'
import { store, history } from './store'
import App from './components/App'
import './index.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <App />
        <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register({
  onUpdate: () => {
    toast.warn(i18n.t('serviceWorker.msg.cacheUpdate'))
  },
  onSuccess: () => {
    toast.info(i18n.t('serviceWorker.msg.cacheSuccess'))
  }
})
