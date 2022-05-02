// create store here
import {legacy_createStore as createStore} from 'redux';
import { reducer } from './reducer';
//import thunk from 'redux-thunk'

const initState={
 count:0,
  products:{
    isLoading:false,
    isError:false,
    data:[]
  }
}

export const store = createStore(reducer,initState);

// do not remove this code, its for testing purpose
if (window.Cypress) {
  window.store = store;
}
