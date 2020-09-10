import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Main from '../containers/Main';

const Router = ({ history, actions, ...rest }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route strict path="/">
          <Main {...rest} />
        </Route>
      </Switch>
    </ConnectedRouter>
  );
};

export default Router;
