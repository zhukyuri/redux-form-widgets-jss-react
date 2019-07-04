// @flow

import React, { Component } from 'react';
import cn from 'classnames';


type Props = {
  children: any,
  position: { top: number, left: number, width: number },
  customClassName: string,
  customStyle: any,
}

class Popup extends Component<Props> {
  constructor(props) {
    super(props);

    this.el = React.createRef();
  }

  render() {
    const { children, classes, customClassName, customStyle } = this.props;

    return <div
      ref={this.el}
      style={customStyle}
      className={cn(classes.modal, customClassName)}
    >
      {children}
    </div>;
  }
}

export default Popup;
