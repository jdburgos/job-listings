/** React core **/
import React from 'react';
import PropTypes from 'prop-types';

/** Styles **/
import styles from './Container.module.scss';

export const Container = props => {
  const classes = `${styles.container} ${props.className ? props.className : ''}`.trim();

  return <div className={classes}>{props.children}</div>;
};

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node]),
  className: PropTypes.string,
};
