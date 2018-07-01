// @flow
import type {Action} from './types';

export const showModal = (modalType: string, modalProps: {}): Action => {
  return {
    type: 'SHOW_MODAL',
    modalType,
    modalProps
  };
};

export const hideModal = (): Action => {
  return {
    type: 'HIDE_MODAL'
  };
};
