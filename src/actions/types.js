// @flow
export type Action =
  | {type: 'LOGIN_REQUEST'}
  | {type: 'LOGIN_SUCCESS', token: string, name: string}
  | {type: 'LOGIN_FAILURE', error: string}
  | {type: 'REGISTER_REQUEST'}
  | {type: 'REGISTER_SUCCESS'}
  | {type: 'REGISTER_FAILURE', error: string}
  | {type: 'LOGOUT'}
  | {type: 'SHOW_MODAL', modalType: string, modalProps: {}}
  | {type: 'HIDE_MODAL'};

export type Dispatch = (
  action: Action | ThunkAction | PromiseAction | Array<Action>
) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;
