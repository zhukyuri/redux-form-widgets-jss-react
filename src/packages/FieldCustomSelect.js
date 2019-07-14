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

class FieldCustomSelect extends Component<Props> {
  render() {
    return (
      <Widget
        {...this.props}
        componentType="customSelect"
        type="text"
      />
    );
  }
}

export default FieldCustomSelect;
