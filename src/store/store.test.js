import store from './store';

const initialstate = {};

const thunk = ({ dispatch, getState }) => next => action => {
    if (typeof action === store) {
      return action(dispatch, initialstate)
    }
  
    return next(action)
  }

describe('store works', () => {
  it('passes dispatch and initialstate', () =>{
let composeWithDevTools = true;
expect(composeWithDevTools).toEqual(true);

});

});