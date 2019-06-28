// @flow

import React, { PureComponent } from 'react';

type Props = {
  customStyle?: any,
  customClassName?: string,
  eventName?: string,
}

class EventProvider extends PureComponent<Props> {
  static defaultProps = {
    customStyle: {},
    eventName: 'widget-out-side',
  };

  constructor(props) {
    super(props);

    this.handleOutSide = this.handleOutSide.bind(this);

    this.refProv = React.createRef();
  }

  handleOutSide(e) {
    const { eventName } = this.props;
    let dataset = null;

    if (!e.target.dataset || !e.target.dataset.event) {
      dataset = null;
    }
    else {
      dataset = e.target.dataset.event;
    }

    // eslint-disable-next-line no-undef
    const event = new CustomEvent(eventName, { detail: dataset });

    // this.refProv.current.dispatchEvent(event);
    document.dispatchEvent(event);
  }

  render() {
    const { children, customStyle, customClassName } = this.props;

    return (
      <div
        className={customClassName}
        style={customStyle}
        onClickCapture={this.handleOutSide}
        ref={this.refProv}
      >
        {children}
      </div>
    );
  }
}

export default EventProvider;
