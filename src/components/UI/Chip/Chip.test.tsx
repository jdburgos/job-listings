/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import { Chip } from './Chip';

describe('Chip', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Chip text="Test"  className='test-class'/>, div);
  });
});
