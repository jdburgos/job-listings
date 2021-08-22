/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

/** Components **/
import App from './App';

/** Redux **/
import store from './store';

describe('App', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div
    );
  });
});
