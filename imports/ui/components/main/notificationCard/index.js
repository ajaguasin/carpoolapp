import React, { Component } from "react";
import ProfileCard from "../../profileCard/index";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

class NotificationCard extends Component {
  render() {
    const { classes, allUserInfo, myUserInfo, loading } = this.props;
    const driver = myUserInfo[0].driver;
    const status = myUserInfo[0].partnerStatus.partnerId;
    const passenger = myUserInfo[0].passenger;

    // status = null;

    return driver ? (
      status ? (
        <div className={classes.profileCard}>
          <p>Choose destination to show Passenger</p>
        </div>
      ) : !status ? (
        <div>
          <p>second condition</p>
        </div>
      ) : (
        <div>
          <p>Third condition</p>
        </div>
      )
    ) : (
      <div>
        <p>Passenger</p>
      </div>
    );
  }
}

export default withStyles(styles)(NotificationCard);

{
  /* <div className={classes.profileCard}>
  <ProfileCard />
  <p>this is the notification card</p>
  <button>Button</button>
  <button>Button </button>
</div>; */
}
