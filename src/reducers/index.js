// @flow
import {combineReducers} from 'redux';
import auth from './auth';
import register from './register';
import modal from './modal';

const reducers = {
  auth,
  register,
  modal
};

// generate the flow types for our state from our reducers
type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;
export type State = $ObjMap<typeof reducers, $ExtractFunctionReturn>;

export default combineReducers(reducers);
