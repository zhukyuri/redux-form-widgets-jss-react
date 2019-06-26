const styles = (theme) => {
  const w = theme.formWidget;

  return {
    inputDefault: {
      width: '100%',
      outline: 'none',
      border: 'none',
      boxSizing: 'border-box',
      font: `normal ${w.input.fontSize}px Roboto-Condensed`,
    },
  };
};

export default styles;
