/** Dependencies **/
import _ from 'lodash';

/** Components **/
import { Container } from '../Layout/Container';
import { Job } from '../Job';

/** Hooks **/
import { useAppSelector } from '../../hooks/react-redux';

/** Interfaces **/
import { IJobMapped } from '../../interfaces/job.interface';

export const JobList = () => {
  const filters = useAppSelector(state => state.filter.filters);
  const jobList = useAppSelector(state => state.job.jobs);
  const filtersMapped = filters.map(({ name }) => name);
  const jobsMapped = jobList.map(job => ({
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
  const jobIntersection = (job: IJobMapped) =>
    filtersMapped.length
      ? _.intersection(filtersMapped, job.tags).length === filtersMapped.length
      : true;
  const content = jobsMapped
    .filter(job => jobIntersection(job))
    .map(job => <Job key={job.id} job={job} />);

  return <Container>{content}</Container>;
};
