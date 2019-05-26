// @flow

import React, { Component } from 'react';
import LabelWrap from './LabelWrap';

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
    const { data } = this.props;

    return (
      <LabelWrap
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

export default FieldSelect;
