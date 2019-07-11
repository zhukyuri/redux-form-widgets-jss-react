import React, { Component } from 'react';
import { WidgetProvider } from 'redux-form-widgets-jss-react';
import Example from './Example';
import themeBlue from '../data/themeBlue';

export default class Theming extends Component {
  constructor(props) {
    super(props);

    this.cbChangeStyle = this.cbChangeStyle.bind(this);
  }

  cbChangeStyle(property, value) {
    const { theme } = this.state;
    let res = theme;

    res.formWidget[property] = value;

    this.setState(res);
  }

  render() {
    return (
      <WidgetProvider
        customTheme={themeBlue}
      >
        <Example
          cbChange={this.cbChangeStyle}
        />
      </WidgetProvider>
    );
  }
}
