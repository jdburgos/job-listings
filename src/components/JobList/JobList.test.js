/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import { JobList } from './JobList';

describe('JobList', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<JobList />, div);
  });
});
