// @flow

import checkIcon from '../../images/check/check.svg';
import uncheckIcon from '../../images/check/empty.svg';
import disableIcon from '../../images/check/disable.svg';

const cWhite = '#444';
const cPrimary = '#eee';
const cActive = 'rgba(255,140,0,0.62)';

const styles = {
  option: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#58717f',
    padding: '5px 5px',
    cursor: 'default',
    whiteSpace: 'nowrap',
  },
  hover: {
    '&:hover': {
      color: cWhite,
      backgroundColor: cPrimary,
    },
  },
  cursor: {
    extend: 'hover',
    cursor: 'pointer',
  },
  checkboxOption: {
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    margin: '0px 00px 0px 10px',
    width: 16,
    height: 16,
  },
  checkbox: {
    background: `url(${checkIcon}) no-repeat`,
    extend: 'checkboxOption',
  },
  unCheckbox: {
    background: `url(${uncheckIcon}) no-repeat`,
    extend: 'checkboxOption',
  },
  disable: {
    background: `url(${disableIcon}) no-repeat`,
    extend: 'checkboxOption',
  },
  activeColor: {
    backgroundColor: cActive,
  },
};

export type Styles = { [$Keys<$Call<typeof styles>>]: string };

export default styles;
