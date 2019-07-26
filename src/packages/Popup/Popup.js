// @flow

import React, { Component } from 'react';
import cn from 'classnames';

type Props = {
  children: any,
  listPosition: 'top' | 'bottom',
  customClassName: string,
  customStyle: any,
}

class Popup extends Component<Props> {
  static defaultProps: {
    listPosition: 'bottom',
  };

  constructor(props) {
    super(props);

    this.el = React.createRef();
  }

  render() {
    const { children, classes, customClassName, customStyle, listPosition } = this.props;

    return <div
      ref={this.el}
      style={customStyle}
      className={cn(
        listPosition === 'top' ? classes.top : classes.bottom,
        customClassName,
      )}
    >
      {children}
    </div>;
  }
}

export default Popup;
