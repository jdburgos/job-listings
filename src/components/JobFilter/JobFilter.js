/** React core **/
import React from 'react';

/** Components **/
import { Card } from '../UI/Card';
import { Chip } from '../UI/Chip';

/** Styles **/
import styles from './JobFilter.module.scss';

export const JobFilter = () => {
  const JOBS = [{ name: 'Frontend' }, { name: 'CSS' }, { name: 'Javascript' }];
  const content = JOBS.map(({ name }, index) => (
    <Chip key={index} className={styles['job-filter__tag']} text={name} closable />
  ));

  return (
    <Card className={styles['job-filter']}>
      <div className={styles['job-filter__container']}>{content}</div>
      <span className={styles['job-filter__clear']}>clear</span>
    </Card>
  );
};
