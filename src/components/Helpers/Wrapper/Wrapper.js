/** React core **/
import PropTypes from 'prop-types';

export const Wrapper = props => props.children;

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};
