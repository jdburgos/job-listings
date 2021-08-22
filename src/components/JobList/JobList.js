/** React core **/
import React from 'react';

/** Components **/
import { Container } from '../Layout/Container';
import { Job } from '../Job';

/** Data **/
import JOB_LIST from '../../data/jobs.js';

export const JobList = () => {
  const content = JOB_LIST.map(job => <Job key={job.id} job={job} />);

  return <Container>{content}</Container>;
};
