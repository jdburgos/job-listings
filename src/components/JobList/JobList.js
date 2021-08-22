/** React core **/
import React from 'react';

/** Dependencies **/
import { useSelector } from 'react-redux';
import _ from "lodash";

/** Components **/
import { Container } from '../Layout/Container';
import { Job } from '../Job';

export const JobList = () => {
  const filters = useSelector(state => state.filter.filters);
  const jobList = useSelector(state => state.job.jobs);
  const filtersMapped = filters.map(({ name }) => name);
  const  jobsMapped = jobList.map(job => ({
    id: job.id,
    company: job.company,
    logo: job.logo,
    new: job.new,
    featured: job.featured,
    position: job.position,
    postedAt: job.postedAt,
    contract: job.contract,
    location: job.location,
    tags: [job.role, job.level, ...job.languages],
    tools: job.tools,
  }));
  const jobIntersection = job => filtersMapped.length ? _.intersection(filtersMapped, job.tags).length === filtersMapped.length : true;
  const content = jobsMapped.filter(job => jobIntersection(job)).map(job => <Job key={job.id} job={job} />);

  return <Container>{content}</Container>;
};
