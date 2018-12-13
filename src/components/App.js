import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import CountriesContainer from './country/CountriesContainer'
import SettingsContainer from './settings/SettingsContainer'
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
        <Route exact path="/countries" component={CountriesContainer} />
        <Route exact path="/settings" component={SettingsContainer} />
        <Route exact path="/about" component={About} />
      </Switch>

      <Footer />
    </>
  )
}

export default App
