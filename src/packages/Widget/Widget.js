// @flow

import React, { Component } from 'react';
import { change } from 'redux-form';
import cn from 'classnames';
import isEmpty from 'lodash/isEmpty';
import cloneDeep from 'lodash/cloneDeep';
import List from '../List';
import Popup from '../Popup';
import BaseInput from '../BaseInput';
import {
  createTitle, findItemInArrayById, setOriginId, toggleIteminArrayById, toSimpleArray,
} from '../../utils/utils';

type Props = {
  classes: any,
  label?: string,
  type?: 'text' | 'email' | 'number' | 'password' | 'tel',
  placeholder?: string,
  customClassNameInput?: string,
  customClassNameLabel?: string,
  customClassNameWrap?: string,
  componentType?: string,
  checking?: boolean,
  selecting?: boolean,
  multipleSelect?: boolean,
  multipleCheck?: boolean,
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
  activeItems: Array<any>,
  checkedItems: Array<any>,
}

class Widget extends Component<Props, State> {
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
    this.getListClientRect = this.getListClientRect.bind(this);
    this.renderButtonCombo = this.renderButtonCombo.bind(this);
    this.renderButtonList = this.renderButtonList.bind(this);
    this.renderButtonClear = this.renderButtonClear.bind(this);
    this.renderInputBox = this.renderInputBox.bind(this);

    this.refList = React.createRef();

    this.state = {
      openList: false,
      activeItems: [],
      checkedItems: [],
    };
  }

  componentDidMount() {
    // document.addEventListener('click', this.closeList, false);
  }

  componentWillUnmount() {
    // document.removeEventListener('click', this.closeList);
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
    const { openList } = this.state;
    // e.stopPropagation();

    if (openList) {
      this.setState({
        openList: false,
      });
    }
  }

  clear(e) {
    const { cbActions } = this.props;
    const dataset = e.currentTarget.dataset;
    if (!dataset || !dataset.field || !dataset.action) return;

    if (cbActions) cbActions(dataset.field, dataset.action, this.props);
  }

  addActiveItem(iId) {
    const { activeItems } = this.state;
    const { data, multipleSelect, valueField, input, meta } = this.props;
    const { dispatch, form } = meta;
    const itemId = setOriginId(data, iId, valueField);

    if (multipleSelect) {
      const currentNew = toggleIteminArrayById(data, itemId, valueField, activeItems);

      dispatch(change(form, input.name, toSimpleArray(currentNew)));
      this.setState({
        activeItems: currentNew,
      });
    }
    else {
      const currentOne = findItemInArrayById(data, itemId, valueField);

      if (currentOne) {
        this.setState({
          activeItems: currentOne,
        });
        dispatch(change(form, input.name, currentOne[valueField]));
      }
    }
  }

  addCheckedItem(itemId) {
    const { checkedItems } = this.state;
    // eslint-disable-next-line no-unused-vars
    const { data, checking, multipleCheck, valueField, input, meta } = this.props;
    // eslint-disable-next-line no-unused-vars
    const { dispatch, form } = meta;
    if (!itemId || isEmpty(itemId) || !checking) return;

    const currentId = !!checkedItems[itemId];
    let currentAll = cloneDeep(checkedItems);

    if (!multipleCheck) {
      currentAll = {
        [itemId]: !currentId,
      };
    }
    else {
      currentAll = {
        ...currentAll,
        [itemId]: !currentId,
      };
    }
    // TODO
    // dispatch(change(form, input.name, itemId));
    this.setState({
      checkedItems: currentAll,
    });
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
    const { role } = params;

    switch (role) {
      case 'list-item-title':
        this.addActiveItem(params.value);
        break;

      case 'list-item-check':
        this.addCheckedItem(params.value);
        break;

      default:
        break;
    }
  }

  renderInputBox() {
    const {
      componentType, classes, input, type, placeholder, customClassNameInput, textField,
    } = this.props;
    const { activeItems } = this.state;
    const selectItemsTitle = createTitle(activeItems, textField);

    switch (componentType) {
      case 'select':
      case 'combobox':
        return (
          <div className={classes.itemBlock}>
            {selectItemsTitle}
          </div>
        );

      default:
        return (
          <div className={classes.itemInput}>
            <BaseInput
              input={{
                ...input,
                onBlur: () => {
                },
              }}
              type={type}
              placeholder={placeholder}
              customClassNameInput={customClassNameInput}
            />
          </div>
        );
    }
  }

  renderButtonCombo() {
    const { openList, activeItems, checkedItems } = this.state;
    const {
      classes, data, textField, valueField, input, checking,
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
        customPaneWrap={classes.popupWrap}
      >
        <List
          actionKey={input.name}
          data={data}
          activeItems={activeItems}
          checkedItems={checkedItems}
          textField={textField}
          valueField={valueField}
          checking={checking}
          cbClickItem={this.onClickItem}
          cbCheckItemBox={this.onClickItem}
        />
      </Popup>}
    </div>;
  }

  renderButtonList() {
    const { openList, activeItems } = this.state;
    const {
      classes, data, textField, valueField, input, checking,
    } = this.props;

    return <div
      key={`openList-${input.name}`}
      className={classes.threeDots}
      onClick={this.toggleList}
      data-action="openList"
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
          checking={checking}
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
      data-action="clear"
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

export default Widget;
