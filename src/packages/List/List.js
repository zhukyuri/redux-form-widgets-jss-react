// @flow

import React, { PureComponent } from 'react';
import cn from 'classnames';
import ListItem from '../ListItem';
import styles, { type Styles } from './List.jss';
import withStyles from '../../utils/withStyles';
import { isActive } from '../../utils/utils';

type Props = {
  actionKey: string,
  classes: Styles,
  data: Array<*>,
  activeItems: { [id: string]: any },
  checkedItems: { [id: string]: boolean },
  textField: string,
  nameFieldDisable: string,
  cbClickItem: any,
  cbCheckItemBox: any,
  positionPane?: string,
  checking?: boolean,
  selecting?: boolean,
};

type State = {}

class List extends PureComponent<Props, State> {
  static defaultProps = {
    positionPane: 'left',
  };

  constructor(props) {
    super(props);

    this.handleClickItem = this.handleClickItem.bind(this);
    this.handleCheckBoxItem = this.handleCheckBoxItem.bind(this);
  }

  handleClickItem(e: SyntheticEvent): void {
    const { cbClickItem, actionKey } = this.props;
    const dataset = e.currentTarget.dataset;
    if (!dataset) return;

    const params = Object.keys(dataset).reduce((acc, key) => ({
      ...acc,
      [key]: dataset[key],
    }), {});

    if (cbClickItem) cbClickItem(actionKey, params, e);
  }

  handleCheckBoxItem(e: SyntheticEvent): void {
    const { cbCheckItemBox, actionKey } = this.props;
    const dataset = e.currentTarget.dataset;
    if (!dataset) return;

    e.stopPropagation();

    const params = Object.keys(dataset).reduce((acc, key) => ({
      ...acc,
      [key]: dataset[key],
    }), {});

    if (cbCheckItemBox) cbCheckItemBox(actionKey, params, e);
  }

  render() {
    const {
      classes, data, textField, nameFieldCheck, valueField,
      selecting, checking, activeItems, checkedItems,
      nameFieldDisable, pathTranslate, positionPane,
    } = this.props;

    return (
      <ul
        className={cn({
          [classes.listLeft]: !positionPane || positionPane === 'left',
          [classes.listRight]: positionPane === 'right',
        })}
      >
        <div className={classes.scrollBlock}>
          {data.map((i, ind) => (
            <ListItem
              key={!valueField ? `${textField}-${ind}` : i[valueField]}
              valueField={valueField}
              textField={textField}
              nameFieldCheck={nameFieldCheck}
              nameFieldDisable={nameFieldDisable}
              onClickItem={this.handleClickItem}
              onCheckItemBox={this.handleCheckBoxItem}
              item={i}
              activeItem={isActive(activeItems, i[valueField], valueField)}
              checkItem={checkedItems[i[valueField]]}
              index={ind}
              checking={checking}
              selecting={selecting}
            />
          ))}
        </div>
      </ul>
    );
  }
}

export default withStyles(styles)(List);
