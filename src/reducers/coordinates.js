const initialState = {
  //helsinki rautatieasema
  coordinates: [60.170337, 24.941295],
  name: 'Helsinki rautatieasema'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CORDINATOR':
      return {
        ...state,
        coordinates: [...action.payload.geometry.coordinates].reverse(),
        name: action.payload.properties.name
      };

    default:
      return state;
  }
};
