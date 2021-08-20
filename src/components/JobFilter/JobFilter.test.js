/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import { JobFilter } from './JobFilter';

describe('JobFilter', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<JobFilter />, div);
  });
});
