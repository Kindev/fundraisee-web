// @flow
import * as React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import RedeemIcon from '@material-ui/icons/Redeem';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: 20
  },
  flex: {
    flex: 1
  },
  icon: {
    marginRight: 20
  },
  button: {
    marginLeft: 10,
    marginRight: 10
  }
};

type Props = {
  classes: Object,
  isAuthenticated: boolean,
  name: ?string,
  handleLogout: () => void,
  showLogin: () => void,
  showRegister: () => void
};

type State = {
  anchorEl: ?Object
};

class MenuAppBar extends React.Component<Props, State> {
  state = {
    anchorEl: null
  };

  handleMenu = event => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };

  render() {
    const {
      classes,
      isAuthenticated,
      name,
      handleLogout,
      showLogin,
      showRegister
    } = this.props;
    const {anchorEl} = this.state;

    const guestMenu = (
      <div>
        <Button color="inherit" onClick={showLogin}>
          Login
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={showRegister}
          className={classes.button}>
          Sign Up
        </Button>
      </div>
    );
    const userMenu = (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          color="inherit"
          onClick={this.handleMenu}>
          {name || 'Endilie'}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}>
          <MenuItem onClick={handleLogout}>
            <ExitToAppIcon />
            <ListItemText inset primary="Logout" />
          </MenuItem>
        </Menu>
      </div>
    );
    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <RedeemIcon className={classes.icon} />
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}>
              Fundraisee
            </Typography>
            {isAuthenticated ? userMenu : guestMenu}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(MenuAppBar);
