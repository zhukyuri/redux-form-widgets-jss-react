// @flow

import React, { Component } from 'react';
import Widget from './Widget';

type Props = {
  valueField: string,
  textField: string,
  checking: boolean,
  selecting: boolean,
  multipleSelect: boolean,
  multipleCheck: boolean,
  btClear: boolean,
  change: any,
  name: string,
  value: any,
  label: string,
  placeholder: string,
  validate: Array<any>,
  cbActions: any,
}

class FieldTextArea extends Component<Props> {
  render() {
    return (
      <Widget
        {...this.props}
        componentType="textArea"
      />
    );
  }
}

export default FieldTextArea;
