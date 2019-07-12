import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import normalize from 'normalize-jss';
// import { jss } from 'react-jss';
import store from '../common/store';
import Example from './Example';


// jss.createStyleSheet(normalize)
//   .attach();

export default class App extends Component {
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
      <Provider store={store}>
        <Example
          cbChange={this.cbChangeStyle}
        />
      </Provider>
    );
  }
}
