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

class FieldCheckMulti extends Component<Props> {
  static defaultProps = {
    data: [],
  };

  render() {
    const { data } = this.props;

    return (
      <Widget
        {...this.props}
        componentType="combobox"
        data={data}
        comboBox
        selecting={false}
        multipleSelect={false}
        checking={true}
        multipleCheck={true}
      />
    );
  }
}

export default FieldCheckMulti;
