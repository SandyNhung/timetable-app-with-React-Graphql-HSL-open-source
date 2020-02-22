const initialState = {
  type: 'DEFAULT',
  route: {
    message: 'Please add the route'
  },
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ROUTES':
      return { ...state, type: 'ROUTES', route: action.payload };

    case 'FETCH_ROUTES_ERROR':
      return { ...state, type: 'ERROR', route: action.payload };

    case 'FETCH_ROUTES_EMPTY':
      return { ...state, type: 'EMPTY', route: action.payload };

    case 'LOADING_ROUTES':
      return { ...state, type: 'LOADING', route: action.payload };
    default:
      return state;
  }
};
