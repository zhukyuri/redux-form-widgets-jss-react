// @flow

import React, { Component } from 'react';
import { change } from 'redux-form';
import cn from 'classnames';
import isEmpty from 'lodash/isEmpty';
import cloneDeep from 'lodash/cloneDeep';
import List from '../List';
import Popup from '../Popup';
import BaseInput from '../BaseInput';
import { getItemFromArrayByItemId, objectToArray, valueToObject } from '../../utils/utils';

type Props = {
  classes: any,
  label?: string,
  type?: 'text' | 'email' | 'number' | 'password' | 'tel',
  placeholder?: string,
  customClassNameInput?: string,
  customClassNameLabel?: string,
  customClassNameWrap?: string,
  componentType?: string,
  checked?: boolean,
  multiple?: boolean,
  required?: boolean,
  clear?: boolean,
  comboBox?: boolean,
  toggleList?: boolean,
  data: Array<any>,
  input: any,
  meta: any,
  valueField: string,
  textField: string,
  cbActions?: any,
  cbLabelFormat?: any,
  cbErrorFormat?: any,
  cbPlaceholderFormat?: any,
}

type State = {
  openList: boolean,
  activeItems: { [id: string]: any },
}

class LabelWrap extends Component<Props, State> {
  static defaultProps = {
    label: 'Main label',
    type: 'text',
    placeholder: 'Input example',
  };

  constructor(props) {
    super(props);

    this.onClickItem = this.onClickItem.bind(this);
    this.cbFormatLabel = this.cbFormatLabel.bind(this);
    this.cbFormatError = this.cbFormatError.bind(this);
    this.cbFormatPlaceholder = this.cbFormatPlaceholder.bind(this);
    this.toggleList = this.toggleList.bind(this);
    this.closeList = this.closeList.bind(this);
    this.clear = this.clear.bind(this);
    this.addActiveItem = this.addActiveItem.bind(this);
    this.removeActiveItem = this.removeActiveItem.bind(this);
    this.getListClientRect = this.getListClientRect.bind(this);
    this.renderButtonCombo = this.renderButtonCombo.bind(this);
    this.renderButtonList = this.renderButtonList.bind(this);
    this.renderButtonClear = this.renderButtonClear.bind(this);
    this.renderInputBox = this.renderInputBox.bind(this);

    this.refList = React.createRef();

    this.state = {
      openList: false,
      activeItems: null,
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { input, data, valueField } = props;
    const { value } = input;

    return {
      ...state,
      activeItems: valueToObject(value, data, valueField),
    };
  }

  cbFormatLabel(name: string): string {
    const { cbLabelFormat } = this.props;

    return !cbLabelFormat ? name : cbLabelFormat(name);
  }

  cbFormatError(name: string): string {
    const { cbErrorFormat } = this.props;

    return !cbErrorFormat ? name : cbErrorFormat(name);
  }

  cbFormatPlaceholder(name: string): string {
    const { cbPlaceholderFormat } = this.props;

    return !cbPlaceholderFormat ? name : cbPlaceholderFormat(name);
  }

  toggleList(e) {
    const { cbActions } = this.props;
    const { openList } = this.state;
    const dataset = e.currentTarget.dataset;
    if (!dataset || !dataset.field || !dataset.action) return;

    this.setState({
      openList: !openList,
    });
    if (cbActions) cbActions(dataset.field, dataset.action, this.props);
  }

  closeList() {
    // this.setState({
    //   openList: false,
    // });
  }

  clear(e) {
    const { cbActions } = this.props;
    const dataset = e.currentTarget.dataset;
    if (!dataset || !dataset.field || !dataset.action) return;

    if (cbActions) cbActions(dataset.field, dataset.action, this.props);
  }

  addActiveItem(itemId) {
    const { activeItems } = this.state;
    const { data, multiple, valueField, input, meta } = this.props;
    const { dispatch, form } = meta;
    if (!itemId || isEmpty(itemId)) return;
    const itemData = getItemFromArrayByItemId(data, valueField, itemId);

    if (!itemData) return;
    if (multiple) {
      dispatch(change(form, input.name, itemId));
      this.setState({
        activeItems: {
          ...activeItems,
          [itemId]: getItemFromArrayByItemId(data, valueField, itemId),
        },
      });
    }
    else {
      dispatch(change(form, input.name, itemId));
      this.setState({
        activeItems: {
          [itemId]: getItemFromArrayByItemId(data, valueField, itemId),
        },
      });
    }
  }

  removeActiveItem(itemId) {
    const { activeItems } = this.state;
    const { valueField } = this.props;
    if (!itemId || typeof itemId !== 'string' || isEmpty(itemId)) return;
    if (!activeItems) return;
    if (Object.prototype.hasOwnProperty.call(activeItems, activeItems[valueField])) {
      const res = cloneDeep(activeItems);

      delete res[valueField];
      this.setState({
        activeItems: res,
      });
    }
  }

  getListClientRect() {
    return this.refList && this.refList.current
      ? this.refList.current.getBoundingClientRect()
      : {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: 0,
        height: 0,
      };
  }

  onClickItem(actionKey, params) {
    this.addActiveItem(params.value);
  }

  renderInputBox() {
    const {
      componentType, classes, input, type, placeholder, customClassNameInput, textField,
    } = this.props;
    const { activeItems } = this.state;
    const selectData = objectToArray(activeItems);
    const selectItemTitle = !selectData || !selectData.length ? '' : selectData[0][textField];

    switch (componentType) {
      case 'select':
      case 'combobox':
        return (
          <div className={classes.itemBlock}>
            {selectItemTitle}
            <BaseInput
              input={input}
              type={type}
              placeholder={this.cbFormatPlaceholder(placeholder)}
              customStyle={{
                height: 1,
                width: 1,
                margin: -1,
                flex: 'none',
              }}
            />
          </div>
        );

      default:
        return (
          <div className={classes.itemInput}>
            <BaseInput
              input={input}
              type={type}
              placeholder={placeholder}
              customClassNameInput={customClassNameInput}
            />
          </div>
        );
    }
  }

  renderButtonCombo() {
    const { openList, activeItems } = this.state;
    const {
      classes, data, textField, valueField, input, checked,
    } = this.props;

    return <div
      key={`comboBox-${input.name}`}
      className={classes.comboBox}
      onClick={this.toggleList}
      data-action="comboBox"
      data-field={input.name}
    >
      {openList && <Popup
        position={this.getListClientRect()}
        customPaneWrap={classes.paneWrap}
      >
        <List
          actionKey={input.name}
          data={data}
          activeItems={activeItems}
          textField={textField}
          valueField={valueField}
          checked={checked}
          cbClickItem={this.onClickItem}
        />
      </Popup>}
    </div>;
  }

  renderButtonList() {
    const { openList, activeItems } = this.state;
    const {
      classes, data, textField, valueField, input, checked,
    } = this.props;

    return <div
      key={`openList-${input.name}`}
      className={classes.threeDots}
      onClick={this.toggleList}
      data-action='openList'
      data-field={input.name}
    >
      {openList && <Popup
        cus
        position={this.getListClientRect()}
      >
        <List
          actionKey={input.name}
          data={data}
          activeItems={activeItems}
          textField={textField}
          valueField={valueField}
          checked={checked}
          cbClickItem={this.onClickItem}
        />
      </Popup>}
    </div>;
  }

  renderButtonClear() {
    const { classes, input } = this.props;

    return <div
      key={`clear-${input.name}`}
      className={classes.clearRed}
      onClick={this.clear}
      data-action='clear'
      data-field={input.name}
    />;
  }

  render() {
    const {
      classes, label, meta, clear, toggleList, comboBox, required,
      customClassNameWrap, customClassNameLabel,
    } = this.props;
    const { touched, error, warning } = meta;
    const message = touched && ((error && <span>{this.cbFormatError(error)}</span>)
      || (warning && <span>{this.cbFormatError(warning)}</span>));
    const red = touched && (error || warning);

    return (
      <label
        className={cn(
          {
            [classes.labelWrap]: !customClassNameLabel,
            [customClassNameLabel]: customClassNameLabel,
          },
        )}
        onBlur={this.closeList}
      >
        <div className={cn(classes.labelInfo)}>
          {!!required && <span style={{
            color: 'red',
            font: 'bold 16px Roboto',
          }}
          >*</span>}
          &nbsp;{this.cbFormatLabel(label)}</div>
        <div
          className={cn(
            customClassNameWrap,
            classes.wrapDefault,
            { [classes.redBorder]: red },
          )}
          ref={this.refList}
        >
          {this.renderInputBox()}
          {comboBox && this.renderButtonCombo()}
          {toggleList && this.renderButtonList()}
          {clear && this.renderButtonClear()}
        </div>
        <div className={cn(classes.errorInfo)}>
          &nbsp;{message}
        </div>
      </label>
    );
  }
}

export default LabelWrap;
