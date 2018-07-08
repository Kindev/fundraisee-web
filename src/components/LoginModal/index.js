// @flow
import * as React from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Account from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import Button from '../Button';

import type {LoginParam} from '../../api/user';

const styles = theme => ({
  input: {
    width: 170,
    margin: theme.spacing.unit
  },
  divider: {
    margin: theme.spacing.unit,
    width: 230
  },
  dialogPaper: {
    minHeight: 350,
    paddingTop: 3 * theme.spacing.unit,
    overflowX: 'hidden'
  },
  '@media (min-width: 900)': {
    dialogPaper: {
      width: 900
    }
  }
});

type Props = {
  classes: Object,
  isAuthenticated: boolean,
  isLoading: boolean,
  error: ?string,
  handleLogin: Object => void,
  showRegister: () => void,
  handleClose: () => void
};

type State = {
  username: string,
  password: string
};

class LoginModal extends React.Component<Props, State> {
  state = {
    username: '',
    password: ''
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
    const loginParam: LoginParam = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.handleLogin(loginParam);
  };

  render() {
    const {
      isAuthenticated,
      isLoading,
      error,
      showRegister,
      handleClose,
      classes
    } = this.props;
    return isAuthenticated ? null : (
      <Dialog
        open
        classes={{paper: classes.dialogPaper}}
        fullWidth
        onClose={handleClose}>
        <Grid container direction="column" alignItems="center" spacing={8}>
          <Grid item>
            <Typography color="inherit" align="center" variant="display1">
              Welcome back.
            </Typography>
          </Grid>
          <Grid item>
            {error && (
              <Typography color="error" align="center">
                {error || 'An error has occured'}
              </Typography>
            )}
          </Grid>
          <Grid item>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
                <Account />
              </Grid>
              <Grid item>
                <TextField
                  required
                  margin="dense"
                  label="Username"
                  placeholder="Username"
                  value={this.state.username}
                  className={classes.input}
                  onChange={this.handleChange('username')}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
                <Lock />
              </Grid>
              <Grid item>
                <TextField
                  required
                  type="password"
                  label="Password"
                  placeholder="Password"
                  value={this.state.password}
                  className={classes.input}
                  onChange={this.handleChange('password')}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              isLoading={isLoading}
              disabled={isLoading}
              onClick={this.handleSubmit}
              label="Login"
            />
          </Grid>
          <Grid item>
            <Divider className={classes.divider} />
          </Grid>
          <Grid item>
            <Typography variant="caption">
              No account ?
              <Button
                size="small"
                color="primary"
                disabled={isLoading}
                onClick={showRegister}
                label="Register"
              />
            </Typography>
          </Grid>
        </Grid>
      </Dialog>
    );
  }
}

export default withStyles(styles)(LoginModal);
