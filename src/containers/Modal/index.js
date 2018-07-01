// @flow
import * as React from 'react';
import {connect} from 'react-redux';
import RegisterModal from './register';
import LoginModal from './login';
import type {State} from '../../reducers';

type Props = {
  modalType: ?string,
  modalProps: {}
};

const ModalContainer = (props: Props) => {
  switch (props.modalType) {
    case 'REGISTER':
      return <RegisterModal />;
    case 'LOGIN':
      return <LoginModal />;
    default:
      return null;
  }
};

const mapStateToProps = (state: State) => ({
  modalType: state.modal.modalType,
  modalProps: state.modal.modalProps
});

export default connect(mapStateToProps)(ModalContainer);
