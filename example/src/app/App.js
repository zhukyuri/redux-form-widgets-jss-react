import React, { Component } from 'react';

import { Provider } from 'react-redux';
// import normalize from 'normalize-jss';
// import { jss } from 'react-jss';
import store from '../common/store';
import Example from './Example';


// jss.createStyleSheet(normalize)
//   .attach();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Example />
      </Provider>
    );
  }
}
