// @flow

import React, { Component } from 'react';
import Widget from './Widget';

type Props = {
  clear?: boolean,
  required?: boolean,
  label: string,
  placeholder?: string,
  validate: Array<any>,
  cbActions: any,
}

class FieldDatePicker extends Component<Props> {
  render() {
    return (
      <Widget
        {...this.props}
        componentType="datepicker"
        datepicker
      />
    );
  }
}

export default FieldDatePicker;
