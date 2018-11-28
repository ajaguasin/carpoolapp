import React, { Component } from "react";
import ProfileCard from "../../ProfileCard/index";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

class NotificationCard extends Component {
  constructor() {
    super();
  }

  updateToMatch = () => {
    Meteor.call("rides.updateToMatch");
  };

  updateToInitialFromPending = () => {
    Meteor.call("rides.updateToCancel");
    Meteor.call("rides.unhookPassenger");
    Meteor.call("usersInfo.resetStatus");
  };

  updateToDone = () => {
    Meteor.call("rides.updateToDone");
  };

  updateToCancel = () => {
    Meteor.call("rides.updateToCancel");
  };

  driversInfo = (allUserInfo, actualRide) => {
    let result = allUserInfo.filter(user => {
      return user.id === actualRide[0].driverId;
    });

    return result[0];
  };
  passengersInfo = (allUserInfo, actualRide) => {
    let result = allUserInfo.filter(user => {
      return user.id === actualRide[0].passengerId;
    });

    return result[0];
  };

  render() {
    window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
    const {
      classes,
      allUserInfo,
      myUserInfo,
      ridesLoading,
      rides
    } = this.props;

    const actualRide = rides.filter(ride => {
      const final =
        ride.driverId === Meteor.userId() ||
        ride.passengerId === Meteor.userId();
      return final;
    });

    const driver = myUserInfo[0].driver;
    return driver ? (
      !ridesLoading && actualRide[0].rideStates === "initial" ? (
        <div className={classes.profileCard}>
          <Typography className={classes.text}>
            Choose a destination to show Passengers
          </Typography>
        </div>
      ) : !ridesLoading && actualRide[0].rideStates === "pending" ? (
        <div className={classes.profileCard}>
          <ProfileCard user={this.passengersInfo(allUserInfo, actualRide)} />
          <Typography className={classes.pending}>
            <span className={classes.pendingText}>CONFIRMATION PENDING</span>
          </Typography>
        </div>
      ) : !ridesLoading && actualRide[0].rideStates === "matched" ? (
        <div className={classes.profileCard}>
          <ProfileCard user={this.passengersInfo(allUserInfo, actualRide)} />
          <Typography className={classes.pending}>
            <span className={classes.pendingText}>MATCH COMPLETE</span>
          </Typography>
        </div>
      ) : !ridesLoading && actualRide[0].rideStates === "done" ? (
        <div className={classes.profileCard}>
          <Typography className={classes.pending}>
            <span className={classes.pendingText}>
              Arrived on your Destination
            </span>
          </Typography>
        </div>
      ) : (
        !ridesLoading &&
        actualRide[0].rideStates === "cancel" && (
          <div className={classes.profileCard}>
            <Typography className={classes.pending}>
              <span className={classes.pendingText}>
                Your Passenger Cancelled the trip
              </span>
            </Typography>
          </div>
        )
      )
    ) : !ridesLoading && !actualRide[0] ? (
      <div className={classes.profileCard}>
        <Typography className={classes.text}>
          Choose a destination to show Drivers
        </Typography>
      </div>
    ) : !ridesLoading && actualRide[0].rideStates === "pending" ? (
      <div className={classes.profileCard}>
        <ProfileCard user={this.driversInfo(allUserInfo, actualRide)} />
        <div className={classes.confirmationButton}>
          <Button
            style={{ backgroundColor: "#31455A" }}
            onClick={() => {
              this.updateToMatch();
            }}
          >
            ACCEPT
          </Button>
          <Link to="/select">
            <Button
              style={{ backgroundColor: "#31455A" }}
              onClick={() => {
                this.updateToInitialFromPending();
              }}
            >
              CANCEL
            </Button>
          </Link>
        </div>
      </div>
    ) : !ridesLoading && actualRide[0].rideStates === "matched" ? (
      <div className={classes.profileCard}>
        <ProfileCard user={this.driversInfo(allUserInfo, actualRide)} />
        <Typography className={classes.pending}>
          <span className={classes.pendingText}>MATCH COMPLETE</span>
        </Typography>
        <span className={classes.confirmationButton}>
          <Button
            style={{ backgroundColor: "#31455A" }}
            onClick={() => {
              this.updateToCancel();
            }}
          >
            CANCEL TRIP
          </Button>
          <Button
            style={{ backgroundColor: "#31455A" }}
            onClick={() => {
              this.updateToDone();
            }}
          >
            END TRIP
          </Button>
        </span>
      </div>
    ) : !ridesLoading && actualRide[0].rideStates === "done" ? (
      <div className={classes.profileCard}>
        <Typography className={classes.pending}>
          <span className={classes.pendingText}>
            Thanks for using JoinRide!
          </span>
        </Typography>
      </div>
    ) : (
      !ridesLoading &&
      actualRide[0].rideStates === "cancel" && (
        <div className={classes.profileCard}>
          <Typography className={classes.pending}>
            <span className={classes.pendingText}>
              You Cancelled your JoinRide
            </span>
          </Typography>
        </div>
      )
    );
  }
}

export default withStyles(styles)(NotificationCard);
