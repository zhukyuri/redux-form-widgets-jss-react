// @flow

import React, { PureComponent } from 'react';
import { ThemeProvider } from 'react-jss';
import merge from 'lodash/merge';
import defaultTheme from '../utils/defaultTheme';

type Props = {
  customStyle?: any,
  customClassName?: string,
  eventName?: string,
  customTheme?: any
}

class WidgetProvider extends PureComponent<Props> {
  static defaultProps = {
    customStyle: {},
    eventName: 'widget-out-side',
    customTheme: null,
  };

  constructor(props) {
    super(props);

    this.handleOutSide = this.handleOutSide.bind(this);
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

    document.dispatchEvent(event);
  }

  render() {
    const { children, customStyle, customClassName, customTheme } = this.props;
    const theme = !customTheme ? defaultTheme : merge(defaultTheme, customTheme);

    return (
      <div
        className={customClassName}
        style={customStyle}
        onClickCapture={this.handleOutSide}
      >
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </div>
    );
  }
}

export default WidgetProvider;
