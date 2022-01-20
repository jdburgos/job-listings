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

/** Store **/
import { RootState } from './store';

const App = () => {
  const filters = useSelector((state: RootState) => state.filter.filters);
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
