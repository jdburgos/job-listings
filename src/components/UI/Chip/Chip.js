/** React core **/
import React from 'react';
import PropTypes from 'prop-types';

/** Styles **/
import styles from './Chip.module.scss';

export const Chip = props => {
  const className = props.className ? props.className : '';
  const classes = `${styles.chip} ${className} ${className}`.trim();

  return <span className={classes}>{props.text}</span>;
};

Chip.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};
