/** React core **/
import React from 'react';

/** Dependencies **/
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

/** Components **/
import { Card } from '../UI/Card';
import { Chip } from '../UI/Chip';
import { Tag } from '../UI/Tag';

/** Styles **/
import styles from './Job.module.scss';

/** Actions **/
import { filterActions } from '../../store/filter/filter.reducer';

export const Job = props => {
  const filters = useSelector(state => state.filter.filters);
  const dispatch = useDispatch();

  const tagHandler = tag => {
    !filters.map(({ name }) => name).includes(tag) && dispatch(filterActions.setFilters(tag));
  };

  const content = props.job.tags.map((tag, index) => (
    <Chip
      key={index}
      className={styles['job__tag']}
      text={tag}
      onClick={tagHandler.bind(null, tag)}
    />
  ));

  return (
    <Card className={styles['job']}>
      <img
        className={styles['job__logo']}
        src={`${process.env.PUBLIC_URL}/images/${props.job.logo}`}
        alt={props.job.company}
      />
      <div className={styles['job__container']}>
        <div className={styles['job__data']}>
          <div className={styles['job__header']}>
            <span className={styles['job__subtitle']}>{props.job.company}</span>
            <div className={styles['job__labels']}>
              {props.job.new && <Tag className={styles['job__label']} text="NEW!" />}
              {props.job.featured && (
                <Tag className={styles['job__label']} text="FEATURED" featured />
              )}
            </div>
          </div>
          <h3 className={styles['job__title']}>{props.job.position}</h3>
          <div className={styles['job__description']}>
            <span>{props.job.postedAt}</span> &nbsp; • &nbsp; <span>{props.job.contract}</span>{' '}
            &nbsp; • &nbsp; <span>{props.job.location}</span>
          </div>
        </div>
      </div>
      <div className={styles['job__tags']}>{content}</div>
    </Card>
  );
};

Job.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.number.isRequired,
    company: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    new: PropTypes.bool.isRequired,
    featured: PropTypes.bool.isRequired,
    position: PropTypes.string.isRequired,
    postedAt: PropTypes.string.isRequired,
    contract: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
