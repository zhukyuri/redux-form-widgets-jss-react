const cDidable = '#aaa';
const cPrimary = '#1769aa';
const cWhite = '#fff';
const cAccent = '#ff9100';
const cHoverAccent = '#ca6a3a';

const styles = {
  button: {
    flex: '0 1 auto',
    height: '35px',
    padding: '0 30px',
    // margin: '0 15px',
    fontWeight: 'bold',
    borderRadius: '18px',
    outline: 'none',
    cursor: 'pointer',
  },
  disableButton: {
    extend: 'button',
    color: cDidable,
    border: `1px solid ${cDidable}`,
    cursor: 'default',
  },
  primaryButton: {
    extend: 'button',
    color: cPrimary,
    border: `1px solid ${cPrimary}`,
    '&:hover': {
      color: cWhite,
      backgroundColor: cPrimary,
    },
  },
  accentButton: {
    extend: 'button',
    backgroundColor: cAccent,
    color: cWhite,
    border: 'none',
    '&:hover': {
      backgroundColor: cHoverAccent,
    },
  },
};

export default styles;
