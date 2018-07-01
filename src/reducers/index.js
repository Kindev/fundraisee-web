// @flow
import {combineReducers} from 'redux';
import auth from './auth';
import register from './register';
import modal from './modal';

const rootReducer = combineReducers({
  auth,
  register,
  modal
});

export default rootReducer;
