// @flow

import React, { Component } from 'react';
import { Field } from 'redux-form';
import LabelWrap from './LabelWrap';

type Props = {
  data: Array<any>,
  valueField: string,
  textField: string,
  checked?: boolean,
  multiple?: boolean,
  clear?: boolean,
  name: string,
  value: any,
  label: string,
  placeholder: string,
  validate: Array<any>,
  cbActions: any,
}

class FieldSelect extends Component<Props> {
  render() {
    return (
      <Field
        {...this.props}
        component={LabelWrap}
        componentType='select'
        type='text'
        toggleList
      />
    );
  }
}

export default FieldSelect;
