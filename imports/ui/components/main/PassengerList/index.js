import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Meteor } from "meteor/meteor";

class PassengerList extends Component {
  constructor() {
    super();
    this.state = {
      partnerId: null
    };
  }
  passengerArray = (allUserInfo, myUserInfo) => {
    const passengers = allUserInfo
      .filter(record => {
        return record.passenger;
      })
      .filter(passenger => {
        return (
          passenger.destination.lat === myUserInfo[0].destination.lat &&
          passenger.destination.long === myUserInfo[0].destination.long
        );
      });

    return passengers;
  };

  updateToPending = passengerId => {
    Meteor.call("rides.updateToPending", passengerId);
  };
  updateToMatched = () => {};
  updateToInitialFromMatched = () => {};
  updateToInitialFromPending = () => {};

  render() {
    const { classes, allUserInfo, myUserInfo, loading } = this.props;

    return (
      <div>
        <button onClick={() => this.updateToPending(passengerId)}>
          To pending
        </button>
        <button onClick={() => this.updateToMatched()}>To Matched</button>
        <button onClick={() => this.updateToInitialFromMatched()}>
          To Initial From Matched
        </button>
        <button onClick={() => this.updateToInitialFromPending()}>
          To Initial From Pending
        </button>
      </div>

      // <div className={classes.list}>
      //   {!loading &&
      //     this.passengerArray(allUserInfo, myUserInfo).map((record, index) => {
      //       return (
      //         <ProfileCard
      //           className={classes.card}
      //           key={index}
      //           email={record.email}
      //         />
      //       );
      //     })}
      // </div>
    );
  }
}

export default withStyles(styles)(PassengerList);
