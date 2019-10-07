import iconClearRed from '../../images/button/clear-red.svg';
import iconThreeDots from '../../images/button/three-dots.svg';
import iconComboBox from '../../images/button/drop-down.svg';
import iconCalendar from '../../images/button/calendar.svg';
import iconMap from '../../images/button/map_placeholder.svg';
import iconMapRefresh from '../../images/button/map_refresh.svg';
import iconTwoPlus from '../../images/button/two-plus.svg';
import iconAllSelect from '../../images/button/all-select.svg';

const styles = (theme) => {
  const w = theme.formWidget;

  return {
    widgetWrap: {
      margin: `${w.wMarginTop}px ${w.wMarginRight}px ${w.wMarginBottom}px ${w.wMarginLeft}px`,
      width: w.wWith,
      display: 'block',
      position: 'relative',
    },
    wrapDefault: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'stretch',
      alignItems: 'stretch',
      border: `solid 1px ${w.borderColor}`,
      borderRadius: w.borderRadius,
      width: '100%',
      height: w.input.height,
      overflow: 'hidden',
    },
    wrapTextArea: {
      display: 'block',
      width: '100%',
      height: 'none',
      overflow: 'hidden',
      border: `solid 1px ${w.borderColor}`,
      borderRadius: w.borderRadius,
    },
    wrapInlineList: {
      display: 'block',
      position: 'relative',
      border: `solid 1px ${w.borderColor}`,
      borderRadius: w.borderRadius,
      width: '100%',
      height: 150,
      overflow: 'hidden',
    },
    itemInput: {
      flex: 1,
      alignSelf: 'auto',
      height: '100%',
      paddingTop: w.input.paddingTop,
      paddingLeft: w.input.paddingLeft,
      boxSizing: 'content-box',
    },
    itemBlock: {
      flex: 1,
      alignSelf: 'auto',
      paddingRight: w.input.paddingLeft,
      paddingLeft: w.input.paddingLeft,
      boxSizing: 'content-box',
      font: w.input.font,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      lineHeight: '35px',
      verticalAlign: 'middle',
    },
    itemIcons: {
      flex: 'none',
      alignSelf: 'auto',
      borderLeft: `solid 1px ${w.borderColor}`,
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
    twoPlus: {
      extend: 'itemIcons',
      background: `url(${iconTwoPlus})  no-repeat`,
      backgroundPosition: 'center',
    },
    allSelect: {
      extend: 'itemIcons',
      background: `url(${iconAllSelect})  no-repeat`,
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
    maps: {
      extend: 'itemIcons',
      background: `url(${iconMap})  no-repeat`,
      backgroundPosition: 'center',
    },
    mapRefresh: {
      extend: 'itemIcons',
      background: `url(${iconMapRefresh})  no-repeat`,
      backgroundPosition: 'center',
    },

    labelInfo: {
      display: 'block',
      position: 'relative',
      color: w.label.color,
      font: w.label.font,
      marginBottom: w.label.marginBottom,
    },
    redDot: {
      color: 'red',
      font: w.label.font,
    },

    errorInfo: {
      display: 'block',
      position: 'relative',
      color: 'red',
    },

    redBorder: {
      borderColor: 'red',
    },

    popupWrap: {
      position: 'fixed',
      minHeight: 200,
      minWidth: 200,
      top: 50,
      left: 0,
      backgroundColor: '#fff',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.35)',
      overflow: 'hidden',
    },

    datepickerWrap: {
      position: 'fixed',
      top: 50,
      left: 0,
      backgroundColor: '#fff',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.35)',
    },
  };
};

export default styles;
