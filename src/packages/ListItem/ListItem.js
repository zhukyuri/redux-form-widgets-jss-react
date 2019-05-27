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
  isActive: boolean,
  isCheck: boolean,
  checking?: boolean,
  selecting?: boolean,
}

function ListItem(props: Props) {
  const {
    classes, onClickItem, onCheckItemBox, item,
    textField, valueField, nameFieldDisable,
    isActive, isCheck, checking, selecting,
  } = props;
  const titleItem = item[textField];

  return (
    <li
      className={cn(
        classes.option,
        { [classes.cursor]: !item[nameFieldDisable] },
        { [classes.activeColor]: isActive },
      )}
      data-role="list-item-title"
      data-text={item[textField]}
      data-value={item[valueField]}
      data-active={isActive}
      data-check={isCheck}
      data-checking={!!checking}
      data-selecting={!!selecting}
      data-disable={!!item[nameFieldDisable]}
      onClick={onClickItem}
    >
      {titleItem}
      {!!checking && <div
        className={cn({
          [classes.checkbox]: checking && isCheck,
          [classes.unCheckbox]: checking && !isCheck,
          [classes.disable]: item[nameFieldDisable],
          [classes.cursor]: !item[nameFieldDisable],
        })}
        data-role="list-item-check"
        data-text={item[textField]}
        data-value={item[valueField]}
        data-active={isActive}
        data-check={isCheck}
        data-checking={!!checking}
        data-selecting={!!selecting}
        data-disable={!!item[nameFieldDisable]}
        onClick={onCheckItemBox}
      />}
    </li>
  );
}

export default ListItem;
