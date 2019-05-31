import iconClearRed from '../../images/button/clear-red.svg';
import iconThreeDots from '../../images/button/three-dots.svg';
import iconComboBox from '../../images/button/drop-down.svg';
import iconCalendar from '../../images/button/calendar.svg';

const labelColor = '#888';
const borderColor = '#ddd';

const styles = {
  labelWrap: {
    margin: '8px 10px',
    width: 300,
    display: 'block',
    position: 'relative',
    // height: 36,
  },
  wrapDefault: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'stretch',
    alignItems: 'stretch',
    border: `solid 1px ${borderColor}`,
    borderRadius: 8,
    width: '100%',
    height: 36,
    overflow: 'hidden',
  },
  wrapInlineList: {
    display: 'block',
    position: 'relative',
    border: `solid 1px ${borderColor}`,
    borderRadius: 8,
    width: '100%',
    height: 150,
    overflow: 'hidden',
  },
  itemInput: {
    flex: 1,
    alignSelf: 'auto',
    height: '100%',
    padding: '0px 5px',
    boxSizing: 'content-box',
  },
  itemBlock: {
    flex: 1,
    alignSelf: 'auto',
    padding: '8px 5px',
    boxSizing: 'content-box',
    font: 'normal 18px Roboto-Condensed',
  },
  itemIcons: {
    flex: 'none',
    alignSelf: 'auto',
    borderLeft: `solid 1px ${borderColor}`,
    height: '100%',
    width: 36,
    cursor: 'pointer',
  },
  clearRed: {
    extend: 'itemIcons',
    background: `url(${iconClearRed})  no-repeat`,
    backgroundPosition: 'center',
  },
  threeDots: {
    extend: 'itemIcons',
    background: `url(${iconThreeDots})  no-repeat`,
    backgroundPosition: 'center',
  },
  comboBox: {
    extend: 'itemIcons',
    background: `url(${iconComboBox})  no-repeat`,
    backgroundPosition: 'center',
  },
  calendar: {
    extend: 'itemIcons',
    background: `url(${iconCalendar})  no-repeat`,
    backgroundPosition: 'center',
  },

  labelInfo: {
    display: 'block',
    position: 'relative',
    color: labelColor,
  },

  errorInfo: {
    display: 'block',
    position: 'relative',
    color: 'red',
  },

  redBorder: {
    borderColor: 'red',
  },

  labelDefault: {
    font: '14px Roboto',
    color: labelColor,
  },

  iconWrap: {
    flex: 'none',
    width: 35,
    height: 35,
    border: `solid 1px ${borderColor}`,
  },


  inputDefault: {
    width: 200,
    height: 35,
    border: `solid 1px ${borderColor}`,
    padding: '0 15px',
    outline: 'none',
    borderRadius: 5,
  },

  popupWrap: {
    position: 'fixed',
    minHeight: 200,
    minWidth: 200,
    top: 50,
    left: 0,
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.35)',
  },

  datepickerWrap: {
    position: 'fixed',
    top: 50,
    left: 0,
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.35)',
  },
};

export default styles;
