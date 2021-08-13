/** React core **/
import React from 'react';
import PropTypes from 'prop-types';

/** Styles **/
import styles from './Chip.module.scss';

export const Chip = props => <span className={styles.chip}>{props.text}</span>;

Chip.propTypes = {
  text: PropTypes.string.isRequired,
};
