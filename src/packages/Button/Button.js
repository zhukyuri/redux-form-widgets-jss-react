// @flow

import React, { Component } from 'react';
import cn from 'classnames';
import styles from './Button.jss';

type Props = {
  classes: typeof styles,
  customClassName?: string,
  title?: string,
  typeStyle?: | 'disable' | 'primary' | 'accent',
  typeButton?: string,
  actionKey?: string,
  cbOnClick: any,
};

type State = {}

class Button extends Component<Props, State> {
  static defaultProps = {
    typeStyle: 'primary',
    typeButton: 'button',
    title: 'Button',
    actionKey: 'defaultButtonActionKey',
  };

  constructor(props) {
    super(props);

    this.getClassName = this.getClassName.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  /**
   * Select style button
   * @returns {*}
   */
  getClassName() {
    const { classes, typeStyle } = this.props;

    switch (typeStyle) {
      case 'accent':
        return classes.accentButton;
      case 'disable':
        return classes.disableButton;
      default:
        return classes.primaryButton;
    }
  }

  /**
   * Handle on click button
   * @param {SyntheticEvent<*>} e
   */
  handleOnClick(e: SyntheticEvent<*>) {
    const { cbOnClick, actionKey } = this.props;

    if (cbOnClick) cbOnClick(actionKey, e);
  }

  render() {
    const { title, typeButton, typeStyle, customClassName } = this.props;

    return (
      <input
        type={typeButton}
        value={title}
        className={cn(
          this.getClassName(),
          customClassName,
        )}
        onClick={typeStyle !== 'disable' ? this.handleOnClick : null}
      />

    );
  }
}

export default Button;
