/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

/** Components **/
import { Job } from './Job';

/** Redux **/
import store from '../../store';

describe('Job', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    const JOB = {
      id: 1,
      company: 'Photosnap',
      logo: './images/photosnap.svg',
      new: true,
      featured: true,
      position: 'Senior Frontend Developer',
      postedAt: '1d ago',
      contract: 'Full Time',
      location: 'USA Only',
      tags: ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript'],
      tools: [],
    };

    ReactDOM.render(
      <Provider store={store}>
        <Job job={JOB} />
      </Provider>,
      div,
    );
  });
});
