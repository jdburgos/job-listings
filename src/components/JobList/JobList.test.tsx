/** React core **/
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

/** Components **/
import { JobList } from './JobList';

/** Redux **/
import store from '../../store';

describe('JobList', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <Provider store={store}>
        <JobList />
      </Provider>,
      div,
    );
  });
});
