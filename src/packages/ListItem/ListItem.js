// @flow

import React from 'react';
import cn from 'classnames';
import { eName } from '../../utils/utils';
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
  eventOuSideName: string,
}


function ListItem(props: Props) {
  const {
    classes, onClickItem, onCheckItemBox, item,
    textField, valueField, nameFieldDisable,
    isActive, isCheck, checking, selecting, eventOuSideName,
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
      data-action="list-item-title"
      data-event={eName(eventOuSideName)}
      data-text={item[textField]}
      data-value={item[valueField]}
      data-active={isActive}
      data-check={isCheck}
      data-checking={!!checking}
      data-selecting={!!selecting}
      data-disable={!!item[nameFieldDisable]}
      onClick={onClickItem}
    >
      <div
        className={cn(classes.optionTitle)}
        data-role="list-item-title-text"
        data-action="list-item-title-text"
        data-event={eName(eventOuSideName)}
        data-text={item[textField]}
        data-value={item[valueField]}
        data-active={isActive}
        data-check={isCheck}
        data-checking={!!checking}
        data-selecting={!!selecting}
        data-disable={!!item[nameFieldDisable]}
      >
        {titleItem}
      </div>
      {!!checking && <div
        className={cn({
          [classes.checkbox]: checking && isCheck,
          [classes.unCheckbox]: checking && !isCheck,
          [classes.disable]: item[nameFieldDisable],
          [classes.cursor]: !item[nameFieldDisable],
        })}
        data-role="list-item-check"
        data-action="list-item-check"
        data-event={eName(eventOuSideName)}
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
