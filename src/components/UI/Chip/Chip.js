/** React core **/
import React from 'react';
import PropTypes from 'prop-types';

/** Styles **/
import styles from './Chip.module.scss';

export const Chip = props => {
  const className = props.className ? props.className : '';
  const classes = `${className}`.trim();
  const closable = props.closable ? styles['chip--closable'] : '';
  const chipClasses = `${styles.chip} ${closable}`.trim();

  return (
    <div className={classes}>
      <span className={chipClasses}>{props.text}</span>
      {props.closable && <span className={styles['chip__close']}>x</span>}
    </div>
  );
};

Chip.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  closable: PropTypes.bool,
};
