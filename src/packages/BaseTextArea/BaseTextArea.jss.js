const styles = (theme) => {
  const w = theme.formWidget;

  return {
    inputDefault: {
      width: '100%',
      resize: 'vertical',
      height: '100%',
      minHeight: 36,
      outline: 'none',
      border: 'none',
      borderRadius: 8,
      boxSizing: 'border-box',
      font: w.input.font,
    },
  };
};

export default styles;
