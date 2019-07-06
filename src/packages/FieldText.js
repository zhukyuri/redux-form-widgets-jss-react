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
  clear: boolean,
  change: any,
  name: string,
  value: any,
  label: string,
  placeholder: string,
  validate: Array<any>,
  cbActions: any,
}

class FieldText extends Component<Props> {
  render() {
    return (
      <Widget
        {...this.props}
        componentType="text"
        type="text"
      />
    );
  }
}

export default FieldText;
