/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import { Wrapper } from './Wrapper';

describe('Wrapper', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <Wrapper>
        <div>Wrapper</div>
      </Wrapper>,
      div,
    );
  });
});
