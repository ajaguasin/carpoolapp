import React from "react";
import ProfileCard from "../../profilecard/index";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.footerWrapper}>
        <div className={classes.footerConfirmation}>
          <span>You're all set!</span>
          <span role="img" aria-label="stars">
            ✨
          </span>
        </div>
        <p>Your ride details:</p>
        <ProfileCard />
        <button className={classes.button}>Cancel Ride</button>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
