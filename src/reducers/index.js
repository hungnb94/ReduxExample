import {combineReducers} from 'redux';
import counterReducers from './CounterReducers';

export default combineReducers({
  counter: counterReducers,
});
