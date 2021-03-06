// @flow

import React, { Component } from 'react';
import cn from 'classnames';
import { eName } from '../../utils/utils';

type Props = {
  classes: any,
  type?: 'text' | 'email' | 'number' | 'password',
  placeholder?: string,
  customClassNameInput?: string,
  customStyle?: string,
  input: any,
}

class BaseInput extends Component<Props> {
  static defaultProps = {
    type: 'text',
    placeholder: 'Input example',
  };

  render() {
    const {
      classes, type, placeholder, customClassNameInput, input, customStyle,
    } = this.props;

    return (
      <input
        className={cn(
          customClassNameInput,
          !customClassNameInput && classes.inputDefault,
        )}
        style={customStyle}
        {...input}
        type={type}
        placeholder={placeholder}
        data-event={eName(input.name)}
      />

    );
  }
}

export default BaseInput;
