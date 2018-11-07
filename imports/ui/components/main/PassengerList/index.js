import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

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

  render() {
    const { classes, allUserInfo, myUserInfo, loading } = this.props;

    return (
      <div>Testing</div>

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
