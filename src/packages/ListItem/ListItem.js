// @flow

import React from 'react';
import cn from 'classnames';
import { type Styles } from './ListItem.jss';

type Props = {
  classes: Styles,
  onClickItem: any,
  textField: string,
  valueField: string,
  nameFieldCheck: string,
  nameFieldDisable: string,
  activeItems: { [id: string]: any },
  checked?: boolean,
}

function ListItem(props: Props) {
  const {
    classes, onClickItem, item,
    textField, valueField, nameFieldCheck, nameFieldDisable,
    checked, activeItems,
  } = props;
  const titleItem = item[textField];
  const active = activeItems && Object.prototype.hasOwnProperty.call(activeItems, item[valueField]);

  return (
    <li
      className={cn(
        classes.option,
        { [classes.cursor]: !item[nameFieldDisable] },
        { [classes.activeColor]: active },
      )}
      data-role="list-item-title"
      data-text={item[textField]}
      data-value={item[valueField]}
      data-active={!!active}
      data-checked={!!checked}
      data-disable={!!item[nameFieldDisable]}
      onClick={onClickItem}
    >
      {titleItem}
      {!!checked && <div
        data-role="list-item-check"
        data-textfield={item[textField]}
        data-valuefield={item[valueField]}
        data-checked={!!checked}
        className={cn({
          [classes.checkbox]: item[nameFieldCheck] && !item[nameFieldDisable],
          [classes.unCheckbox]: !item[nameFieldCheck] && !item[nameFieldDisable],
          [classes.disable]: item[nameFieldDisable],
          [classes.cursor]: !item[nameFieldDisable],
        })}
      />}
    </li>
  );
}

export default ListItem;
