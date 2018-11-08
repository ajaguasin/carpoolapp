import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Meteor } from "meteor/meteor";
import CircularIndeterminate from "../../loadingSpinner/index";
import ProfileCard from "../../profileCard";
import Button from "@material-ui/core/Button";

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

  updateToPending = event => {
    let passengerId = event.target.name;
    Meteor.call("rides.updateToPending", passengerId);
  };
  updateToMatched = () => {};
  updateToInitialFromMatched = () => {};
  updateToInitialFromPending = () => {};

  render() {
    const { classes, allUserInfo, myUserInfo, loading, myRideS } = this.props;

    return (
      // <div>
      //   <button onClick={() => this.updateToPending(passengerId)}>
      //     To pending
      //   </button>
      //   <button onClick={() => this.updateToMatched()}>To Matched</button>
      //   <button onClick={() => this.updateToInitialFromMatched()}>
      //     To Initial From Matched
      //   </button>
      //   <button onClick={() => this.updateToInitialFromPending()}>
      //     To Initial From Pending
      //   </button>
      // </div>

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
      /* Initial state of passenger list when driver is selected */
      // <div>
      //   <p>
      //     Please select a destination. Passengers going to the same destination
      //     will be listed in this panel.
      //   </p>
      // </div>

      /*Initial state of passenger list when passenger is selected. */
      // <div>
      //   <p>
      //     Please select a destination. Drivers going to the same destination
      //     will be listed in this panel.
      //   </p>
      // </div>

      /*When passenger picks a destination import loadingSpinner component while drivers are loading*/
      // <div>
      //   <CircularIndeterminate />
      // </div>

      /* When driver picks a destination show passenger cards also going in the same direction */
      <div className={classes.list}>
        {!loading &&
          this.passengerArray(allUserInfo, myUserInfo).map((record, index) => {
            return (
              <React.Fragment key={index}>
                {console.log(record.id)}
                <ProfileCard
                  className={classes.card}
                  key={index}
                  email={record.email}
                />
                <Button
                  variant="contained"
                  className={classes.button}
                  name={record.id}
                  onClick={event => {
                    this.updateToPending(event);
                  }}
                >
                  Accept
                </Button>
              </React.Fragment>
            );
          })}
      </div>
    );
  }
}

export default withStyles(styles)(PassengerList);
