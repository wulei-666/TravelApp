import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import find from '@/views/find/store';

const reducer = combineReducers({
  find
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;