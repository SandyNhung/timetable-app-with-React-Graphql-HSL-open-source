import axios from 'axios';

export const fetchRoutes = (location) => async (dispatch) => {
  //dispatch loading to true begining of fetch
  dispatch({
    type: 'LOADING_ROUTES',
    payload: true
  });
  let payload;
  let type;
  try {
    const res = await axios({
      url: 'https://api.digitransit.fi/routing/v1/routers/finland/index/graphql',
      method: 'post',
      data: {
        query: `
        {
          plan(
            from: {lat: ${location.from[1]}, lon:  ${location.from[0]}}
            to: {lat: ${location.to[1]}, lon:  ${location.to[0]}}
            date: "${location.date}"
            time: "${location.time}"
            numItineraries: 3
          ) {
            itineraries {
              legs {
                mode
                startTime
                endTime
                realTime
                distance
                from {
                  lat
                  lon
                  name
                  stop {
                    code
                    name
                  }
                }
                to {
                  lat
                  lon
                  name
                  stop {
                    code
                    name
                  }
                }
              }
            }
          }
        }
        `
      }
    });

    if (res.data.data.plan.itineraries.length === 0) {
      payload = {
        message: 'No itineraries was found. Please select another route!'
      };
      type = 'FETCH_ROUTES_EMPTY';
    } else {
      payload = res.data.data;
      type = 'FETCH_ROUTES';
    }
  } catch (e) {
    payload = {
      message: 'Something wrong!'
    };
    type = 'FETCH_ROUTES_ERROR';
  }
  dispatch({
    type: type,
    payload: payload
  });
};

export const getCordinator = (data) => (dispatch) => {
  dispatch({
    type: 'GET_CORDINATOR',
    payload: data
  });
};

export const getPolyline = (data) => (dispatch) => {
  dispatch({
    type: 'GET_POLYLINE',
    payload: data
  });
};
