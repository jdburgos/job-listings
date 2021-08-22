/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

/** Components **/
import { JobFilter } from './JobFilter';

/** Redux **/
import store from '../../store';

describe('JobFilter', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <Provider store={store}>
        <JobFilter />
      </Provider>,
      div,
    );
  });
});
