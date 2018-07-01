// @flow
import {connect} from 'react-redux';
import AppBar from '../../components/AppBar';
import {showModal, logout} from '../../actions';
import type {Dispatch} from '../../actions/types';
import type {State} from '../../reducers';

const mapStateToProps = (state: State) => ({
  isAuthenticated: state.auth.isAuthenticated,
  name: state.auth.name
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleLogout: () => {
    dispatch(logout());
  },
  showRegister: () => {
    dispatch(showModal('REGISTER', {}));
  },
  showLogin: () => {
    dispatch(showModal('LOGIN', {}));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBar);
