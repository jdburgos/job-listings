/** React core **/
import React from 'react';

/** Dependencies **/
import { useDispatch, useSelector } from 'react-redux';

/** Components **/
import { Card } from '../UI/Card';
import { Chip } from '../UI/Chip';
import { Tag } from '../UI/Tag';

/** Interfaces **/
import { IJobMapped } from '../../interfaces/job.interface';

/** Actions **/
import { setFilters } from '../../store/filter/filter.reducer';

/** Styles **/
import styles from './Job.module.scss';

/** Store **/
import { AppDispatch, RootState } from '../../store';

type JobProps = {
  job: IJobMapped;
};

export const Job: React.FC<JobProps> = ({ job }) => {
  const filters = useSelector((state: RootState) => state.filter.filters);
  const dispatch = useDispatch<AppDispatch>();

  const tagHandler = (tag: string) => {
    !filters.map(({ name }) => name).includes(tag) && dispatch(setFilters(tag));
  };

  const content = job.tags.map((tag, index) => (
    <Chip key={index} className={styles.job__tag} text={tag} onClick={tagHandler.bind(null, tag)} />
  ));

  return (
    <Card className={styles.job}>
      <img
        className={styles.job__logo}
        src={`${process.env.PUBLIC_URL}/images/${job.logo}`}
        alt={job.company}
      />
      <div className={styles.job__container}>
        <div className={styles.job__data}>
          <div className={styles.job__header}>
            <span className={styles.job__subtitle}>{job.company}</span>
            <div className={styles.job__labels}>
              {job.new && <Tag className={styles.job__label} text="NEW!" />}
              {job.featured && <Tag className={styles.job__label} text="FEATURED" featured />}
            </div>
          </div>
          <h3 className={styles.job__title}>{job.position}</h3>
          <div className={styles.job__description}>
            <span>{job.postedAt}</span> &nbsp; • &nbsp; <span>{job.contract}</span> &nbsp; • &nbsp;{' '}
            <span>{job.location}</span>
          </div>
        </div>
      </div>
      <div className={styles.job__tags}>{content}</div>
    </Card>
  );
};
