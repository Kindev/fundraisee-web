// @flow
import type {Action} from '../actions/types';
export type State = {
  isLoading: boolean,
  error: ?string
};
const initialState: State = {
  isLoading: false,
  error: null
};

const register = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'REGISTER_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case 'REGISTER_SUCCESS':
      return {
        isLoading: false,
        error: null
      };
    case 'REGISTER_FAILURE':
      return {
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default register;
