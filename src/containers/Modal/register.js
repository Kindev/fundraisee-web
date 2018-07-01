// @flow
import {connect} from 'react-redux';
import RegisterModal from '../../components/RegisterModal';
import {hideModal, showModal, register} from '../../actions';
import type {State} from '../../reducers';
import type {Dispatch} from '../../actions/types';
import type {RegisterParam} from '../../api/user';

const mapStateToProps = (state: State) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.register.error,
  isLoading: state.register.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleRegister: (param: RegisterParam) => {
    dispatch(register(param));
  },
  handleClose: () => {
    dispatch(hideModal());
  },
  showLogin: () => {
    dispatch(showModal('LOGIN', {}));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterModal);
