// @flow
import type {Action, ThunkAction} from './types';
import type {loginParam} from '../api/user';
import {loginApi, logoutApi} from '../api';
import {apiErrorHandler} from '../utils/error';

export const login = (param: loginParam): ThunkAction => dispatch => {
  dispatch(loginRequest());

  loginApi(param)
    .then(response => {
      dispatch(loginSuccess(response.data));
    })
    .catch(error => {
      const errorMessage = apiErrorHandler(error);
      dispatch(loginFailure(errorMessage));
    });
};

export const loginRequest = (): Action => {
  return {
    type: 'LOGIN_REQUEST'
  };
};

export type loginResponse = {
  token: string,
  name: string
};

export const loginSuccess = (data: loginResponse): Action => {
  return {
    type: 'LOGIN_SUCCESS',
    token: data.token,
    name: data.name
  };
};

export const loginFailure = (error: string): Action => {
  return {
    type: 'LOGIN_FAILURE',
    error
  };
};

export const logout = (): ThunkAction => dispatch => {
  logoutApi();
  dispatch({
    type: 'LOGOUT'
  });
};
