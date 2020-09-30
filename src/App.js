import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ThemeProvider } from '@material-ui/core/styles';
import Spinner from 'components/Spinner';
import CssBaseline from '@material-ui/core/CssBaseline';
import { history, store, persistor } from 'store';
import theme from 'theme';
import Router from 'router';

const newApp = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading Persist</div>} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

const App = () => (
  <Suspense fallback={<Spinner />}>
    <Router history={history} />
  </Suspense>
);

export default newApp;
