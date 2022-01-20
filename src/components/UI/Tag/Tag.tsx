/** React core **/
import React from 'react';

/** Styles **/
import styles from './Tag.module.scss';

type TagProps = {
  featured?: boolean;
  className: string;
  text: string;
};

export const Tag: React.FC<TagProps> = ({ featured, className, text }) => {
  const type = featured ? styles['tag--featured'] : '';
  const clssName = className || '';
  const classes = `${styles.tag} ${type} ${clssName}`.trim();

  return <span className={classes}>{text}</span>;
};
