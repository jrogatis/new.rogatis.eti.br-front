import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from 'containers/LandPage';
import About from 'containers/About';
import Portfolio from 'containers/Porfolio';
import Blog from 'containers/Blog';
import Contact from 'containers/Contact';
import NoMatch from '../pages/404';

const PrivateRouter = () => (
  <Switch>
    <Route exact={true} path="/">
      <LandingPage />
    </Route>
    <Route exact={true} path="/about">
      <About />
    </Route>
    <Route exact={true} path="/portfolio">
      <Portfolio />
    </Route>
    <Route exact={true} path="/blog">
      <Blog />
    </Route>
    <Route exact={true} path="/contact">
      <Contact />
    </Route>
    <Route>
      <NoMatch />
    </Route>
  </Switch>
);

export default PrivateRouter;
