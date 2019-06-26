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
      padding: '10px 22px 5px 5px',
      cursor: 'default',
      whiteSpace: 'nowrap',
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
    },
  };
};

export default styles;
