// @flow
import axios from 'axios';
import {
  USER_LOGIN_URL,
  USER_LOGOUT_URL,
  USER_REGISTER_URL
} from '../api/constants';
import {getConfig} from '../utils/config';

export type loginParam = {
  username: string,
  password: string
};

export const loginApi = (param: loginParam): Promise<any> => {
  return axios.post(USER_LOGIN_URL, param, getConfig());
};

export const logoutApi = (): Promise<any> => {
  return axios.post(USER_LOGOUT_URL, null, getConfig());
};

export type registerParam = {
  username: string,
  name: string,
  password: string,
  email: string
};

export const registerApi = (param: registerParam) => {
  return axios.post(USER_REGISTER_URL, param, getConfig());
};
