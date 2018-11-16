import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Countries from './Countries';
import Footer from './Footer';
import Navbar from './Navbar';
import About from './About';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Navbar />

        <Route exact path="/">
          <Redirect to="/countries" />
        </Route>
        
        <Route exact path="/countries" component={Countries} />

        <Route exact path="/about" component={About} />

        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
