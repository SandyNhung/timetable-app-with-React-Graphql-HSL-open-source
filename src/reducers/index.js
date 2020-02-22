import { combineReducers } from 'redux';
import routes from './routes';
import coordinates from './coordinates';
import routesPolyline from './routesPolyline';

export default combineReducers({
  routes,
  coordinates,
  routesPolyline
});
