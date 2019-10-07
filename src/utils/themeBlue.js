/* eslint-disable */

const grey_1 = '#fff';
const grey_2 = '#eef';
const grey_3 = '#ddf';
// const grey_4 = '#ccc';
const grey_5 = '#bbb';
// const grey_6 = '#aaa';
// const grey_7 = '#99f';
const grey_8 = '#888';
// const grey_9 = '#777';

// const dark_11 = '#000';
// const dark_12 = '#111';
// const dark_13 = '#222';
const dark_14 = '#333';
const dark_15 = '#44f';
const dark_16 = '#55f';

const colorActiveAccent = 'rgba(35,201,255,0.62)';
const colorActiveAccentHover = 'rgba(35,201,255,0.78)';
const colorOptionCheck = '#5c7f7c';

const defaultTheme = {
  formWidget: {
    backgroundColor: grey_1,
    borderColor: grey_5,
    borderRadius: 3,
    wWith: 300,
    wMarginTop: 8,
    wMarginBottom: 8,
    wMarginLeft: 10,
    wMarginRight: 10,
    input: {
      height: 36,
      paddingTop: 8,
      paddingRight: 10,
      paddingBottom: 8,
      paddingLeft: 10,
      font: '400 13px',
      color: '#4D6978'
    },
    label: {
      color: grey_8,
      marginBottom: 5,
      font: '700 12px Roboto, sans-serif',
    },
    list: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5,
      font: 'normal 14px Roboto, sans-serif',
    },
    listItem: {
      colorHover: dark_15,
      colorHoverActive: grey_1,
      backgroundHover: grey_2,
      backgroundActive: colorActiveAccent,
      backgroundActiveHover: colorActiveAccentHover,
      colorOptionCheck: colorOptionCheck,
      padding: [8, 22, 8, 5],
      font: '400 14px Roboto, sans-serif',
    }
  },
};

export default defaultTheme;
