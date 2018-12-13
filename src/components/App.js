import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Countries from './country/Countries'
import Settings from './settings/Settings'
import About from './about/About'
import Footer from './Footer'
import Navbar from './Navbar'

const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Redirect to="/countries" />
        </Route>
        <Route exact path="/countries" component={Countries} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/about" component={About} />
      </Switch>

      <Footer />
    </>
  )
}

export default App
