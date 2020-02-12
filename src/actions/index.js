import axios from 'axios';

export const fetchRoutes = (location) => async (dispatch) => {
  console.log(location);
  let payload;
  let type;
  try {
    const res = await axios({
      url: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
      method: 'post',
      data: {
        query: `
        {
          plan(
            from: {lat: ${location.from[1]}, lon:  ${location.from[0]}}
            to: {lat: ${location.to[1]}, lon:  ${location.to[0]}}
            numItineraries: 3
          ) {
            itineraries {
              legs {
                startTime
                endTime
                mode
                duration
                realTime
                distance
                transitLeg
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
      message: 'Something wrong! Please contact admin...'
    };
    type = 'FETCH_ROUTES_ERROR';
  }
  console.log(type);
  console.log(payload);
  dispatch({
    type: type,
    payload: payload
  });
};
