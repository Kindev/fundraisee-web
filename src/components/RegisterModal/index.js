// @flow
import * as React from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '../Button';

import type {RegisterParam} from '../../api/user';

const styles = {
  margin: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    width: 200
  }
};

type Props = {
  classes: Object,
  isAuthenticated: boolean,
  isLoading: boolean,
  error: ?string,
  handleRegister: Object => void,
  showLogin: () => void,
  handleClose: () => void
};

type State = {
  username: string,
  name: string,
  password: string,
  email: string
};

class RegisterModal extends React.Component<Props, State> {
  state = {
    username: '',
    name: '',
    password: '',
    email: ''
  };

  componentWillMount() {
    if (this.props.isAuthenticated) {
      this.props.handleClose();
    }
  }

  handleChange = (name: string) => (
    event: SyntheticInputEvent<EventTarget>
  ) => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = (e: SyntheticEvent<HTMLButtonElement>) => {
    let registerParam: RegisterParam = {
      username: this.state.username,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    this.props.handleRegister(registerParam);
  };

  render() {
    const {
      isAuthenticated,
      isLoading,
      error,
      showLogin,
      handleClose,
      classes
    } = this.props;
    return isAuthenticated ? null : (
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Register</DialogTitle>
        <DialogContent>
          {error && (
            <Typography color="error">
              {error || 'An error has occured'}
            </Typography>
          )}
          <TextField
            required
            margin="dense"
            label="Username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange('username')}
            className={classes.margin}
          />
          <br />
          <TextField
            required
            label="Name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange('name')}
            className={classes.margin}
          />
          <br />
          <TextField
            required
            label="Email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange('email')}
            className={classes.margin}
          />
          <br />
          <TextField
            required
            type="password"
            label="Password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange('password')}
            className={classes.margin}
          />
          <br />
          <br />
          <DialogActions>
            <Button
              disabled={isLoading}
              onClick={showLogin}
              label={'Login here'}
            />
            <Button
              variant="contained"
              isLoading={isLoading}
              disabled={isLoading}
              onClick={this.handleSubmit}
              label={'Register'}
            />
          </DialogActions>
        </DialogContent>
      </Dialog>
    );
  }
}

export default withStyles(styles)(RegisterModal);
