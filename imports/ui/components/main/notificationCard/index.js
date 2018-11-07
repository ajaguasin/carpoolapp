import React, { Component } from "react";
import ProfileCard from "../../profileCard/index";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

class NotificationCard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.profileCard}>
        <ProfileCard />
        <p>this is the notification card</p>
        <button>Button</button>
        <button>Button </button>
      </div>
    );
  }
}

export default withStyles(styles)(NotificationCard);
