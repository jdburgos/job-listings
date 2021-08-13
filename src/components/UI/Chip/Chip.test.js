/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import { Chip } from './Chip';

describe('Chip', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Chip text="Test" />, div);
  });
});
