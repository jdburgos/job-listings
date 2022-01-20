/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import { Tag } from './Tag';

describe('Tag', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Tag className="tag" text="Test" />, div);
  });
});
