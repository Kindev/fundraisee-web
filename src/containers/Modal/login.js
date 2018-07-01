// @flow
import {connect} from 'react-redux';
import LoginModal from '../../components/LoginModal';
import {hideModal, showModal, login} from '../../actions';
import type {State} from '../../reducers';
import type {Dispatch} from '../../actions/types';
import type {LoginParam} from '../../api/user';

const mapStateToProps = (state: State) => ({
  isLoading: state.auth.isLoading,
  error: state.auth.error,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleLogin: (param: LoginParam) => {
    dispatch(login(param));
  },
  handleClose: () => {
    dispatch(hideModal());
  },
  showRegister: () => {
    dispatch(showModal('REGISTER', {}));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);
