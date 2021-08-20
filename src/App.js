/** React core **/
import React from 'react';

/** Styles **/
import './styles/styles.scss';
import styles from './App.module.scss';

/** Component **/
import { Header } from './components/Header';
import { JobList } from './components/JobList';
import { JobFilter } from './components/JobFilter';
import { Container } from './components/Layout/Container';

const App = () => {
  return (
    <main className={styles['job-listings']}>
      <Header />
      <Container className={styles['job-listings__container']}>
        <JobFilter />
        <JobList />
      </Container>
    </main>
  );
};

export default App;
