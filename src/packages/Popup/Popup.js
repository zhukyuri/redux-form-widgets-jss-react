// @flow

import { Component } from 'react';
import ReactDom from 'react-dom';

let modalRoot = document.getElementById('modal-root');

type Props = {
  children: any,
  position: { top: number, left: number, width: number },
  customPaneWrap?: string,
}

class Popup extends Component<Props> {
  constructor(props) {
    super(props);

    this.el = document.createElement('div');
    this.el.classList.add(props.classes.modal);
    if (props.customPaneWrap) this.el.classList.add(props.customPaneWrap);
  }

  componentDidMount() {
    const { position } = this.props;

    modalRoot.appendChild(this.el);
    this.el.style.top = `${position.top + position.height + 5}px`;
    this.el.style.left = `${position.left}px`;
    this.el.style.width = `${position.width}px`;
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    const { children } = this.props;

    return ReactDom.createPortal(children, this.el);
  }
}

export default Popup;
