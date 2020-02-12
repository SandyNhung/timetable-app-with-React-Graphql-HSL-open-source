import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

export const middlewares = [thunk];

export const createStoreWithMiddleWare = applyMiddleware(...middlewares)(
  createStore
);

export const store = createStoreWithMiddleWare(reducers);
