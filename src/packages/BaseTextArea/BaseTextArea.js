// @flow

import React, { Component } from 'react';
import cn from 'classnames';
import { eName } from '../../utils/utils';

type Props = {
  classes: any,
  placeholder?: string,
  customClassNameInput?: string,
  customStyle?: string,
  input: any,
}

class BaseTextArea extends Component<Props> {
  static defaultProps = {
    placeholder: 'Text area example',
  };

  render() {
    const {
      classes, placeholder, customClassNameInput, input, customStyle,
    } = this.props;

    return (
      <textarea
        className={cn(
          customClassNameInput,
          !customClassNameInput && classes.inputDefault,
        )}
        style={customStyle}
        {...input}
        placeholder={placeholder}
        data-event={eName(input.name)}
      />

    );
  }
}

export default BaseTextArea;
