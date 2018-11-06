import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import { Link } from "react-router-dom";
import AccountsUIWrapper from "../../components/accountsWrapper/index";

class SelectButton extends React.Component {
  constructor(props) {
    super(props);
  }

  driverToggle = myUserInfo => {
    Meteor.call("usersInfo.driverToggle", myUserInfo);
  };

  passengerToggle = myUserInfo => {
    Meteor.call("usersInfo.passengerToggle", myUserInfo);
  };

  render() {
    const { classes, myUserInfo } = this.props;
    console.log("Expected undefined", myUserInfo);
    myUserInfo && console.log(myUserInfo);
    return (
      <Grid className={classes.buttons}>
        <h2>Are you a:</h2>
        <div>
          <Link to="/main">
            <Button
              onClick={() => this.driverToggle(myUserInfo)}
              variant="contained"
              className={classes.driver}
            >
              Driver
            </Button>
          </Link>

          <p>You drive a passenger going in the same direction</p>
        </div>
        <div>
          <Link to="/main">
            <Button
              onClick={() => this.passengerToggle(myUserInfo)}
              variant="contained"
              className={classes.passenger}
            >
              Passenger
            </Button>
          </Link>

          <p>You carpool with a driver going in the same direction</p>
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(SelectButton);
