
import injectSheet from 'react-jss';

function withStyles(styles, options = {}) {
  return injectSheet(styles, {
    inject: ['classes'],
    ...options,
  });
}

export default withStyles;
