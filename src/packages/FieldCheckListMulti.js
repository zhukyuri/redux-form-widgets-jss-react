// @flow

import React, { Component } from 'react';
import Widget from './Widget';

type Props = {
  data?: Array<any>,
  valueField: string,
  textField: string,
  btClear?: boolean,
  required?: boolean,
  label: string,
  placeholder?: string,
  validate: Array<any>,
  cbActions: any,
}

class FieldCheckListMulti extends Component<Props> {
  static defaultProps = {
    data: [],
  };

  render() {
    const { data } = this.props;

    return (
      <Widget
        {...this.props}
        componentType="checkListMulti"
        data={data}
        btComboBox
        selecting={false}
        multipleSelect={false}
        checking={true}
        multipleCheck={true}
      />
    );
  }
}

export default FieldCheckListMulti;
