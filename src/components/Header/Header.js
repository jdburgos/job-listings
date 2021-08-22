/** React core **/
import React from 'react';

/** Styles **/
import styles from './Header.module.scss';

export const Header = () => (
  <div className={styles.header}>
    <picture>
      <source
        media="(min-width: 768px)"
        srcSet={`${process.env.PUBLIC_URL}/images/bg-header-desktop.svg`}
      />
      <img src={`${process.env.PUBLIC_URL}/images/bg-header-mobile.svg`} alt="Job listings" />
    </picture>
  </div>
);
