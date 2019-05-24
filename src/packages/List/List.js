// @flow

import React, { PureComponent } from 'react';
import cn from 'classnames';
import ListItem from '../ListItem';
import { type Styles } from './List.jss';

type Props = {
  actionKey: string,
  classes: Styles,
  data: Array<*>,
  activeItems: { [id: string]: any },
  textField: string,
  nameFieldCheck: string,
  nameFieldDisable: string,
  pathTranslate: string,
  cbClickItem: any,
  positionPane?: string,
  checked?: boolean,
};

type State = {}

class List extends PureComponent<Props, State> {
  static defaultProps = {
    positionPane: 'left',
  };

  constructor(props) {
    super(props);

    this.handleClickItem = this.handleClickItem.bind(this);
  }

  handleClickItem(e) {
    const { cbClickItem, actionKey } = this.props;
    const dataset = e.currentTarget.dataset;
    if (!dataset) return;

    const params = Object.keys(dataset).reduce((acc, key) => ({
      ...acc,
      [key]: dataset[key],
    }), {});

    if (cbClickItem) cbClickItem(actionKey, params, e);
  }

  render() {
    const {
      classes, data, textField, nameFieldCheck, valueField, checked, activeItems,
      nameFieldDisable, pathTranslate, positionPane,
    } = this.props;

    return (
      <ul
        className={cn({
          [classes.listLeft]: !positionPane || positionPane === 'left',
          [classes.listRight]: positionPane === 'right',
        })}
      >
        {data.map((i, ind) => (
          <ListItem
            key={!valueField ? `${textField}-${ind}` : i[valueField]}
            valueField={valueField}
            textField={textField}
            nameFieldCheck={nameFieldCheck}
            nameFieldDisable={nameFieldDisable}
            pathTranslate={pathTranslate}
            onClickItem={this.handleClickItem}
            item={i}
            activeItems={activeItems}
            index={ind}
            checked={checked}
          />
        ))}
      </ul>
    );
  }
}

export default List;
