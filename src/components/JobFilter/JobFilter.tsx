/** Components **/
import { Card } from '../UI/Card';
import { Chip } from '../UI/Chip';

/** Styles **/
import styles from './JobFilter.module.scss';

/** Actions **/
import { removeFilter, removeFilters } from '../../store/filter/filter.reducer';

/** Hooks **/
import { useAppDispatch, useAppSelector } from '../../hooks/react-redux';

export const JobFilter = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(state => state.filter.filters);

  const removeTag = (index: number) => {
    dispatch(removeFilter(index));
  };

  const clearFilters = () => {
    dispatch(removeFilters());
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
