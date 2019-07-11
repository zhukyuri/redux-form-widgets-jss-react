/* eslint-disable */

const grey_1 = '#fff';
const grey_2 = '#eef';
const grey_3 = '#ddf';
// const grey_4 = '#ccc';
const grey_5 = '#bbf';
// const grey_6 = '#aaa';
// const grey_7 = '#99f';
// const grey_8 = '#888';
// const grey_9 = '#777';

// const dark_11 = '#000';
// const dark_12 = '#111';
// const dark_13 = '#222';
// const dark_14 = '#333';
const dark_15 = '#44f';
const dark_16 = '#55f';

const colorActiveAccent = 'rgba(35,201,255,0.62)';
const colorOptionCheck = '#5c7f7c';

const defaultTheme = {
  formWidget: {
    backgroundColor: grey_1,
    borderColor: grey_5,
    borderRadius: 8,
    wWith: 300,
    wMarginTop: 8,
    wMarginBottom: 8,
    wMarginLeft: 10,
    wMarginRight: 10,
    input: {
      height: 36,
      fontSize: 18,
      paddingTop: 8,
      paddingRight: 10,
      paddingBottom: 8,
      paddingLeft: 10,
    },
    label: {
      color: dark_16,
      fontSize: 15,
      marginBottom: 1,
    },
    list: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5,
    },
    listItem: {
      colorHover: dark_15,
      backgroundHover: grey_2,
      backgroundActive: colorActiveAccent,
      colorOptionCheck: colorOptionCheck,
    }
  },
};

export default defaultTheme;
