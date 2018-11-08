import React, { Component } from "react";
import ProfileCard from "../../profileCard/index";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

class NotificationCard extends Component {
  render() {
    const {
      classes,
      allUserInfo,
      myUserInfo,
      loading,
      ridesLoading,
      rides
    } = this.props;
    //aj this is just boolean values that i used
    //to test and style the notif card
    //you can all delete it and replace with the right data
    const driver = myUserInfo[0].driver;
    const status = myUserInfo[0].partnerStatus.partnerId;
    const passenger = myUserInfo[0].passenger;
    const sample = myUserInfo[0].partnerStatus.partnerMatched;
    console.log("sampleee", sample);

    // status = null;

    return driver ? (
      status ? ( //INITIAL STATE
        <div className={classes.profileCard}>
          <Typography className={classes.text}>
            Choose a destination to show Passengers
          </Typography>
        </div>
      ) : !sample ? ( //PENDING STATE
        <div className={classes.profileCard}>
          <ProfileCard />
          <Typography className={classes.pending}>
            {/* <div className={classes.pendingText}>CONFIRMATION PENDING</div> */}
          </Typography>
        </div> //MATCHED STATE
      ) : (
        //GET PASSENGER PROFILECARD
        sample && (
          <div className={classes.profileCard}>
            <ProfileCard />
            <Typography className={classes.pending}>
              {/* <div className={classes.pendingText}>MATCH COMPLETE</div> */}
            </Typography>
          </div>
        )
      )
    ) : !sample ? ( //PASSENGER INITIAL STATE
      <div className={classes.profileCard}>
        <Typography className={classes.text}>
          Choose a destination to show Drivers
        </Typography>
      </div>
    ) : status ? ( //PASSENGER PENDING STATE
      // ADD ONCLICK ON THE BUTTONS
      //IF ACCEPT RUN MATCHED STATE
      //IF CANCEL RUN INITIAL STATE
      <div className={classes.profileCard}>
        <ProfileCard />
        <div className={classes.confirmationButton}>
          <Button
            style={{ backgroundColor: "#31455A" }}
            onClick={() => alert("fire matched state")}
          >
            ACCEPT
          </Button>
          <Button
            style={{ backgroundColor: "#31455A" }}
            onClick={() => alert("fire initial state")}
          >
            CANCEL
          </Button>
        </div>
      </div> //PASSENGER MATCHED STATE
    ) : (
      //GET THE DRIVERS PROFILECARD
      sample && (
        <div className={classes.profileCard}>
          <ProfileCard />
          <Typography className={classes.pending}>
            {/* <div className={classes.pendingText}>MATCH COMPLETE</div> */}
          </Typography>
        </div>
      )
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

// return driver
//   ? status
//     ? setInitial()
//     : !status
//       ? setPending()
//       : setMatched()
//   : passenger
//     ? setInitial()
//     : !status
//       ? setPending()
//       : setMatched();
//   }
