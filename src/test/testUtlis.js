import { createStore, applyMiddleware } from 'redux';
import combineReducers from '../Reducer/RootReducer';
export * from 'enzyme';

export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(combineReducers, initialState);
}