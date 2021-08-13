/** React core **/
import React from 'react';

/** Styles **/
import styles from './styles/styles.scss';

/** Component **/
import { Header } from './components/Header';
import { JobList } from './components/JobList';

const App = () => {
  return (
    <main className={styles['job-listings']}>
      <Header />
      <JobList />
    </main>
  );
};

export default App;
