/** React core **/
import React from 'react';
import PropTypes from 'prop-types';

/** Components **/
import { Card } from '../UI/Card';
import { Chip } from '../UI/Chip';
import { Tag } from '../UI/Tag';

/** Styles **/
import styles from './Job.module.scss';

export const Job = props => {
  const tags = [props.job.role, props.job.level, ...props.job.languages];
  const content = tags.map((tag, index) => <Chip key={index} className={styles['job__tag']} text={tag} />);

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
    role: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    postedAt: PropTypes.string.isRequired,
    contract: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
