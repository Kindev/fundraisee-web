// @flow
import type {Action} from '../actions/types';

export type State = {
  isLoading: boolean,
  isAuthenticated: boolean,
  token: ?string,
  error: ?string
};

const initialState: State = {
  isLoading: false,
  isAuthenticated: false,
  token: null,
  error: null
};

const auth = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
        token: null,
        error: null
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        token: action.token,
        error: null
      };
    case 'LOGIN_FAILURE':
      return {
        ...initialState,
        error: action.error
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

export default auth;
