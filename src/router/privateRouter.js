import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from 'containers/LandPage';
import About from 'containers/About';
import Portfolio from 'containers/Porfolio';
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
    <Route>
      <NoMatch />
    </Route>
  </Switch>
);

export default PrivateRouter;
