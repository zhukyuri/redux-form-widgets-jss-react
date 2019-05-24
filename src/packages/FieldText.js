// @flow

import React, { Component } from 'react';
import { Field } from 'redux-form';
import LabelWrap from './LabelWrap';

type Props = {
  valueField: string,
  textField: string,
  checked: boolean,
  multiple: boolean,
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
      <Field
        {...this.props}
        component={LabelWrap}
        componentType="text"
        type="text"
      />
    );
  }
}

export default FieldText;
