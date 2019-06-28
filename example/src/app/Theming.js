import React, { Component } from 'react';
import { defaultStyle, EventProvider } from 'redux-form-widgets-jss-react';
import { ThemeProvider } from 'react-jss';
import Example from './Example';

export default class Theming extends Component {
  constructor(props) {
    super(props);

    this.cbChangeStyle = this.cbChangeStyle.bind(this);
    this.state = {
      style: defaultStyle,
    };
  }

  cbChangeStyle(property, value) {
    const { style } = this.state;
    let res = style;

    // console.log(res);
    // eslint-disable-next-line no-eval
    res.formWidget[property] = value;

    this.setState(res, a => (console.log(this.state.style.formWidget.borderColor)));
  }

  render() {
    const { style } = this.state;

    return (
      <ThemeProvider theme={style}>
        <EventProvider>
          <Example
            cbChange={this.cbChangeStyle}
            style={style}
          />
        </EventProvider>
      </ThemeProvider>
    );
  }
}
