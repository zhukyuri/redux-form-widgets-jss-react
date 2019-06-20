// @flow

import React, { Component } from 'react';
import cn from 'classnames';
import withStyles from '../../utils/withStyles';
import styles from './Pane.jss';

type Props = {
  classes?: any,
  customClassName?: string,
  customStyle?: any,
  customOther?: any,
};

type State = {}

class Pane extends Component<Props, State> {
  render() {
    const {
      classes, customClassName, customStyle, customOther, children,
    } = this.props;

    return (
      <div
        className={cn({
          [classes.paneWrap]: !customClassName,
          [customClassName]: !!customClassName,
        })}
        style={customStyle}
        {...customOther}
      >

        {children}

      </div>
    );
  }
}

export default withStyles(styles)(Pane);
