// @flow
import type {Action, ThunkAction} from './types';
import {registerApi} from '../api';
import type {RegisterParam} from '../api/user';
import {apiErrorHandler} from '../utils/error';

export const register = (param: RegisterParam): ThunkAction => dispatch => {
  dispatch(registerRequest());

  registerApi(param)
    .then(response => {
      dispatch(registerSuccess());
    })
    .catch(error => {
      const errorMessage = apiErrorHandler(error);
      dispatch(registerFailure(errorMessage));
    });
};

export const registerRequest = (): Action => {
  return {
    type: 'REGISTER_REQUEST'
  };
};

export const registerSuccess = (): Action => {
  return {
    type: 'REGISTER_SUCCESS'
  };
};

export const registerFailure = (error: string): Action => {
  return {
    type: 'REGISTER_FAILURE',
    error
  };
};
