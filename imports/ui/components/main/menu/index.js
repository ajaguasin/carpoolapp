import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
    Meteor.logout();
  };

  resetStatus = myUserInfo => {
    Meteor.call("usersInfo.resetStatus", myUserInfo);
  };

  render() {
    const { anchorEl } = this.state;
    const { classes, myUserInfo } = this.props;

    return (
      <div className={classes.menuContainer}>
        <Button
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <FontAwesomeIcon className={classes.icon} icon="bars" />
        </Button>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>
            <Link onClick={() => this.resetStatus(myUserInfo)} to="/select">
              Switch Roles
            </Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose()}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(SimpleMenu);
