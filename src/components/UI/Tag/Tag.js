/** React core **/
import React from 'react';
import PropTypes from 'prop-types';

/** Styles **/
import styles from './Tag.module.scss';

export const Tag = props =>  {
  const type = props.featured ? styles['tag--featured'] : '';
  const className = props.className ? props.className : '';
  const classes = `${styles.tag} ${type} ${className}`.trim();

  return <span className={classes}>{props.text}</span>;
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  featured: PropTypes.bool,
};
