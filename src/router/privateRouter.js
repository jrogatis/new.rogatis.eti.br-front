import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NoMatch from '../pages/404';

const PrivateRouter = () => (
  <Switch>
    <Route>
      <NoMatch />
    </Route>
  </Switch>
);

export default PrivateRouter;
