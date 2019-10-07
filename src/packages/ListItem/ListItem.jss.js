// @flow
import checkIcon from '../../images/check/check.svg';
import uncheckIcon from '../../images/check/empty.svg';
import disableIcon from '../../images/check/disable.svg';

const styles = (theme) => {
  const w = theme.formWidget.listItem;

  return {
    option: {
      display: 'flex',
      justifyContent: 'space-between',
      color: w.colorOptionCheck,
      padding: w.padding,
      cursor: 'default',
      whiteSpace: 'nowrap',
      fontSize: w.fontSize,
      fontWeight: w.fontWeight,
    },
    optionTitle: {
      flex: 1,
      font: w.font,
      overflow: 'hidden',
      alignSelf: 'auto',
      boxSizing: 'content-box',
      whiteSpace: 'nowrap',
      paddingLeft: 5,
      textOverflow: 'ellipsis',
    },
    hover: {
      '&:hover': {
        color: w.colorHover,
        backgroundColor: w.backgroundHover,
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
      backgroundColor: w.backgroundActive,
      '&:hover': {
        color: w.colorHoverActive,
        backgroundColor: w.backgroundActiveHover,
      },
    },
  };
};

export type Styles = { [$Keys<$Call<typeof styles>>]: string };
export default styles;
