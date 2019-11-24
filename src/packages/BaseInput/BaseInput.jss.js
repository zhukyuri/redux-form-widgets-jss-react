const styles = (theme) => {
  const w = theme.formWidget;

  return {
    inputDefault: {
      width: '100%',
      outline: 'none',
      border: 'none',
      boxSizing: 'border-box',
      font: w.input.font,
      color: w.input.color,
    },
  };
};

export default styles;
