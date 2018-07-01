// @flow
import type {Action} from '../actions/types';

export type State = {
  modalType: ?string,
  modalProps: {}
};

const initialState: State = {
  modalType: null,
  modalProps: {}
};

const modal = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        modalType: action.modalType,
        modalProps: action.modalProps
      };
    case 'HIDE_MODAL':
      return {
        modalType: null,
        modalProps: {}
      };
    default:
      return state;
  }
};

export default modal;
