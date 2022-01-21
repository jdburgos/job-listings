/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import { Container } from './Container';

describe('Container', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <Container>
        <div>Container</div>
      </Container>,
      div,
    );
  });
});
