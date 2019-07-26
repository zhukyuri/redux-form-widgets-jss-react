const styles = {
  modal: {
    backgroundColor: '#eee',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.95)',
    width: '100%',
    position: 'absolute',
    minHeight: 200,
    minWidth: 200,
    zIndex: 15000,
  },
  bottom: {
    extend: 'modal',
    top: 68,
  },
  top: {
    extend: 'modal',
    bottom: 80,
  },
};

export default styles;
