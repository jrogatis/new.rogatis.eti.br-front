import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './static/fonts/fonts.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const render = AppComponent => {
  ReactDOM.render(<AppComponent />, document.getElementById('root'));
};

render(App);
if (module.hot && process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  module.hot.accept('./App', () => {
    render(require('./App').default);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
