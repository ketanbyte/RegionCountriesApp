import { createStore, applyMiddleware } from "redux";
 import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import store from './store';

const initialstate = {};

const thunk = ({ dispatch, getState }) => next => action => {
    if (typeof action === 'store') {
      return action(dispatch, initialstate)
    }
  
    return next(action)
  }

it('passes dispatch and initialstate', () => {
    const { store, invoke } = create()
    invoke((dispatch, initialstate) => {
      dispatch('TEST DISPATCH')
      getState();
    })
    expect(store.dispatch).toHaveBeenCalledWith('TEST DISPATCH')
    expect(store.getState).toHaveBeenCalled()
  });

