import PropTypes from 'prop-types';
import clsx from 'clsx';

function foo(props) {
  const x = clsx(props.position === 'top' && classes.x, props.position === 'bottom' && classes.y);
}

foo.propTypes = {
  position: PropTypes.oneOf(['top', 'bottom']),
};
