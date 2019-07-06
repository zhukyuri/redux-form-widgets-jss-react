// @flow

import React, { Component } from 'react';
import Widget from './Widget';

type Props = {
  data?: Array<any>,
  valueField: string,
  textField: string,
  clear?: boolean,
  required?: boolean,
  label: string,
  placeholder?: string,
  validate: Array<any>,
  cbActions: any,
}

class FieldSelect extends Component<Props> {
  static defaultProps = {
    data: [],
  };

  render() {
    return (
      <Widget
        {...this.props}
        componentType="select"
        comboBox
        selecting
        multipleSelect={false}
        multipleCheck={false}
        checking={false}
      />
    );
  }
}

export default FieldSelect;
