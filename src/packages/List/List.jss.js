// @flow

const styles = {
  list: {
    minWidth: '180px',
    position: 'absolute',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    listStyle: 'none',
    padding: '20px',
    margin: '0px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.35)',
    zIndex: 100,
  },
  listLeft: {
    extend: 'list',
    right: '0',
  },
  listRight: {
    extend: 'list',
    left: '0',
  },
};

export type Styles = { [$Keys<$Call<typeof styles>>]: string };

export default styles;
