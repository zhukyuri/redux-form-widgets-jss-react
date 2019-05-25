// @flow
const paddingList = 20;

const styles = {
  list: {
    minWidth: '180px',
    position: 'absolute',
    top: paddingList,
    left: paddingList,
    right: paddingList,
    bottom: paddingList,
    listStyle: 'none',
    // padding: '20px',
    margin: '0px',
    backgroundColor: '#fff',
    // boxShadow: '0 0 10px rgba(0, 0, 0, 0.35)',
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

export type Styles = { [$Keys<$Call<typeof styles>>]: string };

export default styles;
