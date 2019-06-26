
const styles = (theme) => {
  const w = theme.formWidget.list;

  return {
    list: {
      minWidth: '180px',
      position: 'absolute',
      top: w.top,
      left: w.left,
      right: w.right,
      bottom: w.bottom,
      listStyle: 'none',
      margin: '0px',
      backgroundColor: '#fff',
      zIndex: 100,

      overflow: 'auto',
    },
    listLeft: {
      extend: 'list',
      // right: '0',
    },
    listRight: {
      extend: 'list',
      // left: '0',
    },
    scrollBlock: {
      display: 'block',
      position: 'absolute',
      left: 0,
      width: '100%',
    },
  };
};

export default styles;
