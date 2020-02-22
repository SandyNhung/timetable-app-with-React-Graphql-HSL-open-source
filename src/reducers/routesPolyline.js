export default (state = null, action) => {
  switch (action.type) {
    case 'GET_POLYLINE':
      return action.payload.legs;

    case 'RESET_POLYLINE':
      return action.payload;

    default:
      return state;
  }
};
