/** React core **/
import React from 'react';

/** Dependencies **/
import { useSelector } from 'react-redux';

/** Styles **/
import './styles/styles.scss';
import styles from './App.module.scss';

/** Component **/
import { Header } from './components/Header';
import { JobList } from './components/JobList';
import { JobFilter } from './components/JobFilter';
import { Container } from './components/Layout/Container';

const App = () => {
  const filters = useSelector(state => state.filter.filters);
  const hasFilters = !!filters.length;
  const hasFiltersClass = hasFilters ? `${styles['job-listings--has-filters']}` : '';
  const classes = `${styles['job-listings__container']} ${hasFiltersClass}`.trim();

  return (
    <main className={styles['job-listings']}>
      <Header />
      <Container className={classes}>
        {hasFilters && <JobFilter />}
        <JobList />
      </Container>
    </main>
  );
};

export default App;
