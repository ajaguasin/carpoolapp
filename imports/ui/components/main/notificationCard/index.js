import React, { Component } from "react";
import ProfileCard from "../../profileCard/index";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { UsersInfo } from "../../../../api/usersInfo/usersInfo";

class NotificationCard extends Component {
  constructor() {
    super();
  }

  updateToMatch = () => {
    Meteor.call("rides.updateToMatch");
  };

  updateToInitialFromPending = () => {
    Meteor.call("rides.setInitialFromPending");
  };

  render() {
    const {
      classes,
      allUserInfo,
      myUserInfo,
      loading,
      ridesLoading,
      rides,
      myRide
    } = this.props;

    //for the driver's profie card

    // const driversProfile = allUserInfo.filter(user => {
    //   const result = user.id === actualRide[0].driverId;
    //   return result;
    // });
    // console.log(allUserInfo);
    // console.log(driversProfile);
    // console.log(rides[0].driverId);
    // console.log(rides);

    const actualRide = rides.filter(ride => {
      const final =
        ride.driverId === Meteor.userId() ||
        ride.passengerId === Meteor.userId();
      return final;
    });
    // console.log(rides);
    //  !ridesLoading && console.log(actualRide[0].rideStates);
    console.log(actualRide[0]);

    const driver = myUserInfo[0].driver;
    return driver ? (
      !ridesLoading && actualRide[0].rideStates === "initial" ? (
        <div
          className={
            classes.profileCard //INITIAL STATE
          }
        >
          <Typography className={classes.text}>
            Choose a destination to show Passengers
          </Typography>
        </div>
      ) : !ridesLoading && actualRide[0].rideStates === "pending" ? (
        <div
          className={
            classes.profileCard //PENDING STATE
          }
        >
          <ProfileCard />
          <Typography className={classes.pending}>
            <div className={classes.pendingText}>CONFIRMATION PENDING</div>
          </Typography>
        </div>
      ) : (
        !ridesLoading &&
        actualRide[0].rideStates === "matched" && (
          <div
            className={
              classes.profileCard //GET PASSENGER PROFILECARD //MATCHED STATE
            }
          >
            <ProfileCard />
            <Typography className={classes.pending}>
              <div className={classes.pendingText}>MATCH COMPLETE</div>
            </Typography>
          </div>
        )
      )
    ) : !ridesLoading && !actualRide[0] ? (
      <div
        className={
          classes.profileCard //PASSENGER INITIAL STATE
        }
      >
        <Typography className={classes.text}>
          Choose a destination to show Drivers
        </Typography>
      </div>
    ) : !ridesLoading && actualRide[0].rideStates === "pending" ? (
      <div
        className={
          classes.profileCard //IF CANCEL RUN INITIAL STATE //IF ACCEPT RUN MATCHED STATE // ADD ONCLICK ON THE BUTTONS //PASSENGER PENDING STATE
        }
      >
        <ProfileCard />
        <div className={classes.confirmationButton}>
          <Button
            style={{ backgroundColor: "#31455A" }}
            onClick={() => {
              this.updateToMatch();
            }}
          >
            ACCEPT
          </Button>
          <Button
            style={{ backgroundColor: "#31455A" }}
            onClick={() => {
              this.updateToInitialFromPending();
            }}
          >
            CANCEL
          </Button>
        </div>
      </div>
    ) : (
      !ridesLoading &&
      actualRide[0].rideStates === "matched" && (
        <div
          className={
            classes.profileCard //GET THE DRIVERS PROFILECARD //PASSENGER MATCHED STATE
          }
        >
          <ProfileCard />
          <Typography className={classes.pending}>
            <div className={classes.pendingText}>MATCH COMPLETE</div>
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
