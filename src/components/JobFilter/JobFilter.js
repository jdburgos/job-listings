/** React core **/
import React from 'react';

/** Dependencies **/
import { useDispatch, useSelector } from 'react-redux';

/** Components **/
import { Card } from '../UI/Card';
import { Chip } from '../UI/Chip';

/** Styles **/
import styles from './JobFilter.module.scss';

/** Actions **/
import { filterActions } from '../../store/filter/filter.reducer';

export const JobFilter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filter.filters);

  const removeTag = index => {
    dispatch(filterActions.removeFilter(index));
  };

  const clearFilters = () => {
    dispatch(filterActions.removeFilters());
  };

  const content = filters.map(({ name }, index) => (
    <Chip
      key={index}
      className={styles['job-filter__tag']}
      text={name}
      closable
      onRemove={removeTag.bind(null, index)}
    />
  ));

  return (
    <Card className={styles['job-filter']}>
      <div className={styles['job-filter__container']}>{content}</div>
      <span className={styles['job-filter__clear']} onClick={clearFilters}>
        clear
      </span>
    </Card>
  );
};
