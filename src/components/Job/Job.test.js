/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import { Job } from './Job';

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
      role: 'Frontend',
      level: 'Senior',
      postedAt: '1d ago',
      contract: 'Full Time',
      location: 'USA Only',
      languages: ['HTML', 'CSS', 'JavaScript'],
      tools: [],
    };

    ReactDOM.render(<Job job={JOB} />, div);
  });
});
