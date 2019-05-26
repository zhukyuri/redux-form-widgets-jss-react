// @flow

import React from 'react';
import cn from 'classnames';
import { type Styles } from './ListItem.jss';

type Props = {
  classes: Styles,
  onClickItem: any,
  onCheckItemBox: any,
  textField: string,
  valueField: string,
  nameFieldDisable: string,
  activeItem: { [id: string]: any },
  checkedItems: { [id: string]: boolean },
  checkItem?: boolean,
  checking?: boolean,
  selecting?: boolean,
}

function ListItem(props: Props) {
  const {
    classes, onClickItem, onCheckItemBox, item,
    textField, valueField, nameFieldDisable,
    activeItem, checkItem, checking, selecting,
  } = props;
  const titleItem = item[textField];

  return (
    <li
      className={cn(
        classes.option,
        { [classes.cursor]: !item[nameFieldDisable] },
        { [classes.activeColor]: activeItem },
      )}
      data-role="list-item-title"
      data-text={item[textField]}
      data-value={item[valueField]}
      data-active={!!activeItem}
      data-check={!!checkItem}
      data-checking={!!checking}
      data-selecting={!!selecting}
      data-disable={!!item[nameFieldDisable]}
      onClick={onClickItem}
    >
      {titleItem}
      {!!checking && <div
        className={cn({
          [classes.checkbox]: checking && checkItem,
          [classes.unCheckbox]: checking && !checkItem,
          [classes.disable]: item[nameFieldDisable],
          [classes.cursor]: !item[nameFieldDisable],
        })}
        data-role="list-item-check"
        data-text={item[textField]}
        data-value={item[valueField]}
        data-active={!!activeItem}
        data-check={!!checkItem}
        data-checking={!!checking}
        data-selecting={!!selecting}
        data-disable={!!item[nameFieldDisable]}
        onClick={onCheckItemBox}
      />}
    </li>
  );
}

export default ListItem;
